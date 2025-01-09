const { Candidate, CandidateToken, CandidateOtp } = require("../../models");
const { sendResponse } = require("../../services/responseService");
const { Op, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// Registration
const registration = async (req, res) => {
  try {
    const { name, mobile_no, email, password } = req.body;

    // Check if email or mobile_no already exists
    const existingCandidate = await Candidate.findOne({
      where: {
        [Op.or]: [{ email }, { mobile_no }],
      },
    });

    if (existingCandidate) {
      const errors = {};
      if (existingCandidate.email === email) {
        errors.email = "Candidate with the same email already exists";
      }
      if (existingCandidate.mobile_no === mobile_no) {
        errors.mobile_no =
          "Candidate with the same mobile number already exists";
      }
      return sendResponse(res, 400, false, "Validation Error", null, errors);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new Candidate
    const newCandidate = await Candidate.create({
      name,
      mobile_no,
      email,
      password: hashedPassword,
    });

    const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
    const expireAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

    await CandidateOtp.create({
      candidate_id: newCandidate.candidate_id,
      verification_type: "Email",
      otp: otp,
      send_to: newCandidate.email,
      created_at: new Date(),
      expire_at: expireAt,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Email Verification",
      text: `Hello,

We received a request for Email verification for your account. Please use the One-Time Password (OTP) provided below to complete the process.

OTP: ${otp}

This OTP is valid for the next 15 minutes. If you did not request a password reset, please ignore this email.

Thank you,
Aeriesys Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return sendResponse(res, 500, false, error.message);
      }
      sendResponse(res, 200, true, "Email verification email sent");
    });

    return sendResponse(
      res,
      201,
      true,
      "Candidate created successfully",
      newCandidate
    );
  } catch (error) {
    console.error("Error in Registration function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Login function
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const candidate = await Candidate.findOne({
      where: { email: email },
    });

    // Validate password
    const validPassword = await bcrypt.compare(password, candidate.password);
    if (!validPassword) {
      return sendResponse(res, 400, false, "Password is incorrect", null, {
        password: "Invalid password",
      });
    }

    // Clear existing tokens for the user
    await CandidateToken.destroy({
      where: { candidate_id: candidate.candidate_id },
    });

    // Generate JWT token
    const token = jwt.sign(
      { candidate_id: candidate.candidate_id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRY,
      }
    );

    // Calculate token expiration time
    const expireAt = new Date();
    expireAt.setHours(expireAt.getHours() + parseInt(process.env.TOKEN_EXPIRY));

    // Save token to the UserToken table
    await CandidateToken.create({
      candidate_id: candidate.candidate_id,
      token: token,
      expire_at: expireAt,
    });

    if (!candidate) {
      return sendResponse(res, 400, false, "Email not found", null, {
        email: "Invalid email or email not found",
      });
    }

    // Construct the user response without password
    const candidateWithoutPassword = {
      candidate_id: candidate.candidate_id,
      name: candidate.name,
      email: candidate.email,
      mobile_no: candidate.mobile_no,
      created_at: candidate.created_at,
    };

    // Send the response with token and user data
    return sendResponse(res, 200, true, "Login successful", {
      token,
      candidate: candidateWithoutPassword,
    });
  } catch (error) {
    console.error("Error in login function:", error);
    return sendResponse(res, 500, false, null, null, error.message);
  }
};



// updatePassword
const updatePassword = async (req, res) => {
  const candidateId = req.candidate.candidate_id; // Extract user ID from the authenticated user object
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
    const candidate = await Candidate.findByPk(candidateId);

    if (!candidate) {
      return sendResponse(res, 404, false, "Candidate not found");
    }

    // Check if the old password is valid
    const validPassword = await bcrypt.compare(oldPassword, candidate.password);
    if (!validPassword) {
      return sendResponse(res, 400, false, "Invalid old password");
    }

    // Check if the new password is the same as the old password
    const isSamePassword = await bcrypt.compare(
      newPassword,
      candidate.password
    );
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
    await Candidate.update(
      { password: hashedPassword },
      { where: { candidate_id: candidateId } } // Ensure you are using the correct user_id field
    );

    sendResponse(res, 200, true, "Password updated successfully");
  } catch (error) {
    console.error("Error in updatePassword function:", error.message);
    sendResponse(res, 500, false, error.message);
  }
};

//Update Profile
const updateProfile = async (req, res) => {
  const candidateId = req.candidate.candidate_id; // Extract user ID from the authenticated user object
  const { name, email, mobile_no } = req.body;
  const avatar = req.file ? req.file.filename : null; // Get the uploaded file name if present

  try {
    // Check if the username, mobile number, or personal email already exists and belongs to a different user
    const existingCandidate = await Candidate.findOne({
      where: {
        [Op.or]: [{ email }, { mobile_no }],
        candidate_id: { [Op.ne]: candidateId }, // Exclude the current user from the check
      },
    });

    if (existingCandidate) {
      const errors = {};
      if (existingCandidate.email === email) {
        errors.email = "Candidate with the same email already exists";
      }
      if (existingUser.mobile_no === mobile_no) {
        errors.mobile_no =
          "Candidate with the same mobile number already exists";
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

    await Candidate.update(updateData, {
      where: { candidate_id: candidateId },
    });

    // Retrieve updated user details, explicitly excluding the password and timestamp fields
    const candidate = await Candidate.findByPk(candidateId, {
      attributes: {
        exclude: ["password", "created_at", "updated_at", "deleted_at"],
      },
    });

    sendResponse(res, 200, true, "Profile updated successfully", candidate);
  } catch (error) {
    console.error("Error in updateProfile function:", error.message); // Log the error message
    sendResponse(res, 500, false, error.message);
  }
};

// Update Password function
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// Forgot Password function
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const candidate = await Candidate.findOne({ where: { email } });
    if (!candidate) {
      return sendResponse(res, 404, false, "Candidate not found", null, {
        email: "Candidate not found",
      });
    }

    const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
    const expireAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

    await CandidateToken.create({
      candidate_id: candidate.candidate_id,
      token: otp,
      expire_at: expireAt,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Resetting Your Password",
      text: `Hello,

We received a request to reset the password for your account. Please use the One-Time Password (OTP) provided below to complete the process.

OTP: ${otp}

This OTP is valid for the next 15 minutes. If you did not request a password reset, please ignore this email.

Thank you,
Aeriesys Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return sendResponse(res, 500, false, error.message);
      }
      sendResponse(res, 200, true, "Reset password email sent");
    });
  } catch (error) {
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
    const candidate = await Candidate.findOne({ where: { email } });
    if (!candidate) {
      return sendResponse(res, 404, false, "Candidate not found", null, {
        email: "Candidate not found",
      });
    }

    const candidateToken = await CandidateToken.findOne({
      where: {
        candidate_id: candidate.candidate_id,
        token: otp,
        expire_at: { [Sequelize.Op.gt]: new Date() }, // Ensure OTP is not expired
      },
    });

    if (!candidateToken) {
      return sendResponse(res, 400, false, "Invalid OTP", null, {
        otp: "Invalid or expired OTP",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Candidate.update({ password: hashedPassword }, { where: { email } });

    // Optionally, delete the used token
    await CandidateToken.destroy({
      where: { candidate_id: candidate.candidate_id, token: otp },
    });

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
    await CandidateToken.destroy({
      where: {
        token: token,
        candidate_id: decoded.candidate_id,
      },
    });

    sendResponse(res, 200, true, "Logged out successfully");
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

module.exports = {
  registration,
  forgotPassword,
  updatePassword,
  resetPassword,
  updateProfile,
  verifyEmail,
  login,
  logout,
};
