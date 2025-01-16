const { Admin, AdminToken, AdminOtp } = require("../../models");
const { sendResponse } = require("../../services/admin/responseService");

const { Op, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
// const auth = require("../../services/authService");
const passport = require("passport");
const { sendEmail } = require("../../services/emailService");
const fs = require("fs");
const path = require("path");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({
      where: { email: email },
    });

    if (!admin) {
      return sendResponse(res, 400, false, "Email is incorrect", null, {
        email: "Invalid Email",
        password: "Invalid Password",
      });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return sendResponse(res, 400, false, "Password is incorrect", null, {
        email: "Invalid Email",
        password: "Invalid password",
      });
    }

    // Clear existing tokens for the user
    await AdminToken.destroy({
      where: { admin_id: admin.admin_id },
    });

    // Generate JWT token
    const token = jwt.sign(
      { admin_id: admin.admin_id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRY,
      }
    );

    // Calculate token expiration time
    const expireAt = new Date();
    expireAt.setHours(expireAt.getHours() + parseInt(process.env.TOKEN_EXPIRY));

    // Save token to the UserToken table
    await AdminToken.create({
      admin_id: admin.admin_id,
      token: token,
      expire_at: expireAt,
    });

    if (!admin) {
      return sendResponse(res, 400, false, "Email not found", null, {
        email: "Invalid email or email not found",
      });
    }

    const adminWithoutPassword = await Admin.findOne({
      where: {
        admin_id: admin.admin_id,
      },
      attributes: {
        exclude: ["password"],
      },
    });

    // Send the response with token and user data
    return sendResponse(res, 200, true, "Login successful", {
      token,
      admin: adminWithoutPassword,
    });
  } catch (error) {
    console.error("Error in login function:", error);
    return sendResponse(res, 500, false, null, null, error.message);
  }
};

// Forgot Password function
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return sendResponse(res, 404, false, "Admin not found", null, {
        email: "Admin not found",
      });
    }

    const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
    const expireAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

    await AdminOtp.create({
      admin_id: admin.admin_id,
      otp: otp,
      expire_at: expireAt,
    });

    // Read the HTML template
    const templatePath = path.join(
      __dirname,
      "../../templates/forgotPassword.html"
    );
    let htmlContent = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders with dynamic values
    htmlContent = htmlContent.replace("{{otp}}", otp);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Resetting Your Password",
      html: htmlContent, // Use the HTML content as email body
    };
    // Send email
    await sendEmail(mailOptions);

    return sendResponse(res, 201, true, "Reset password email sent");
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// updatePassword
const updatePassword = async (req, res) => {
  const adminId = req.admin.admin_id; // Extract user ID from the authenticated user object
  const { oldPassword, newPassword, confirmPassword } = req.body;

  // Validate the new password and confirm password
  if (newPassword !== confirmPassword) {
    return sendResponse(
      res,
      400,
      false,
      "New password and confirm password do not match"
    );
  }

  try {
    // Find the user by ID
    const admin = await Admin.findByPk(adminId);

    if (!admin) {
      return sendResponse(res, 404, false, "Admin not found");
    }

    // Check if the old password is valid
    const validPassword = await bcrypt.compare(oldPassword, admin.password);
    if (!validPassword) {
      return sendResponse(res, 400, false, "Invalid old password");
    }

    // Check if the new password is the same as the old password
    const isSamePassword = await bcrypt.compare(newPassword, admin.password);
    if (isSamePassword) {
      return sendResponse(
        res,
        400,
        false,
        "New password cannot be the same as the old password"
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    await Admin.update(
      { password: hashedPassword },
      { where: { admin_id: adminId } } // Ensure you are using the correct user_id field
    );

    sendResponse(res, 200, true, "Password updated successfully");
  } catch (error) {
    console.error("Error in updatePassword function:", error.message);
    sendResponse(res, 500, false, error.message);
  }
};

//Update Profile
const updateProfile = async (req, res) => {
  const adminId = req.admin.admin_id; // Extract user ID from the authenticated user object
  const { name, mobile_no, email } = req.body;
  const avatar = req.file ? req.file.filename : null; // Get the uploaded file name if present

  try {
    // Check if the username, mobile number, or personal email already exists and belongs to a different user
    const existingAdmin = await Admin.findOne({
      where: {
        [Op.or]: [{ email }, { mobile_no }],
        admin_id: { [Op.ne]: adminId }, // Exclude the current user from the check
      },
    });

    if (existingAdmin) {
      const errors = {};
      if (existingAdmin.email === email) {
        errors.email = "Admin with the same email already exists";
      }
      if (existingUser.mobile_no === mobile_no) {
        errors.mobile_no = "Admin with the same mobile number already exists";
      }
      return sendResponse(res, 400, false, "Validation Error", null, errors);
    }

    // Update user details in the database
    const updateData = {
      name,
      email,
      mobile_no,
    };
    if (avatar) {
      updateData.avatar = avatar; // Add avatar to the update data if a file was uploaded
    }

    await Admin.update(updateData, {
      where: { admin_id: adminId },
    });

    // Retrieve updated user details, explicitly excluding the password and timestamp fields
    const admin = await Admin.findByPk(adminId, {
      attributes: {
        exclude: ["password", "created_at", "updated_at", "deleted_at"],
      },
    });

    sendResponse(res, 200, true, "Profile updated successfully", admin);
  } catch (error) {
    console.error("Error in updateProfile function:", error.message); // Log the error message
    sendResponse(res, 500, false, error.message);
  }
};

// Reset Password function
const resetPassword = async (req, res) => {
  const { email, otp, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    return sendResponse(res, 400, false, "Passwords do not match", null, {
      confirmPassword: "Passwords do not match",
    });
  }

  try {
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return sendResponse(res, 404, false, "Admin not found", null, {
        email: "Admin not found",
      });
    }

    const adminOtp = await AdminOtp.findOne({
      where: {
        admin_id: admin.admin_id,
        token: otp,
        expire_at: { [Sequelize.Op.gt]: new Date() }, // Ensure OTP is not expired
      },
    });

    if (!adminOtp) {
      return sendResponse(res, 400, false, "Invalid OTP", null, {
        otp: "Invalid or expired OTP",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Admin.update({ password: hashedPassword }, { where: { email } });

    // Optionally, delete the used token
    // await AdminToken.destroy({
    //   where: { admin_id: admin.admin_id, token: otp },
    // });

    sendResponse(res, 200, true, "Password reset successfully");
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

//logout function
const logout = async (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return sendResponse(res, 401, false, "Access denied. No token provided.");
  }

  try {
    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Delete the token from the UserToken table
    await AdminToken.destroy({
      where: {
        token: token,
        admin_id: decoded.admin_id,
      },
    });

    sendResponse(res, 200, true, "Logged out successfully");
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

async function send_mobile_otp(mobile_no, otp) {
  let user_otp = sendOtp(mobile_no, otp);
  if (user_otp) {
    console.log("success");
  }
}

async function verify_email(mailOptions) {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return sendResponse(res, 500, false, error.message);
    }
    sendResponse(res, 200, true, "Email verification email sent");
  });
}

module.exports = {
  forgotPassword,
  updatePassword,
  resetPassword,
  updateProfile,
  login,
  logout,
  // google_login,
};
