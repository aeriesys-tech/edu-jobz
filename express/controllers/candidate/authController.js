const {
  Candidate,
  CandidateToken,
  CandidateOtp,
  CandidatePersonalInformation,
} = require("../../models");
const { sendResponse } = require("../../services/candidate/responseService");
const { sendOtp } = require("../../services/messageService");
const { Op, Sequelize, where } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
// const auth = require("../../services/authService");
const passport = require("passport");
const { sendEmail } = require("../../services/emailService");
const fs = require("fs");
const path = require("path");

// Registration
const register = async (req, res) => {
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

    // Read the HTML template
    const templatePath = path.join(
      __dirname,
      "../../templates/verifyEmail.html"
    );
    let htmlContent = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders with dynamic values
    htmlContent = htmlContent.replace("{{otp}}", otp);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Email Verification",
      html: htmlContent, // Use the HTML content as email body
    };

    const mobile_otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
    const mobile_expireAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

    await CandidateOtp.create({
      candidate_id: newCandidate.candidate_id,
      verification_type: "Mobile",
      otp: mobile_otp,
      send_to: newCandidate.mobile_no,
      created_at: new Date(),
      expire_at: mobile_expireAt,
    });

    // Send email
    await sendEmail(mailOptions);

    // Call a function to send mobile OTP (assume it's implemented elsewhere)
    await send_mobile_otp(newCandidate.mobile_no, mobile_otp);

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

    await CandidateOtp.create({
      candidate_id: candidate.candidate_id,
      otp: otp,
      verification_type: "null",
      send_to: candidate.candidate_id,
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
// Login function
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const candidate = await Candidate.findOne({
      where: { email: email },
    });

    if (!candidate) {
      return sendResponse(res, 400, false, "Email is incorrect", null, {
        email: "Invalid Email",
        password: "Invalid Password",
      });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, candidate.password);
    if (!validPassword) {
      return sendResponse(res, 400, false, "Password is incorrect", null, {
        email: "Invalid Email",
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

    const candidateWithoutPassword = await Candidate.findOne({
      where: {
        candidate_id: candidate.candidate_id,
      },
      attributes: {
        exclude: ["password"],
      },
    });

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

// const google_login = (req, res) => {
//   app.get(
//     "/auth/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
//   );

//   // Google Callback
//   app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", { failureRedirect: "/" }),
//     (req, res) => {
//       res.redirect("/profile");
//     }
//   );
// };

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
// const updateCandidate = async (req, res) => {
//   const candidateId = req.candidate.candidate_id; // Extract user ID from the authenticated user object
//   const {
//     candidate_id,
//     employer_type,
//     designation_id,
//     experience,
//     salary_expectation,
//     notice_period,
//     hear_about_us,
//     subject_id,
//     type_of_institute_id,
//     address,
//     state_id,
//     city_id,
//     country_id,
//     pincode,
//   } = req.body;
//   // const avatar = req.file ? req.file.filename : null; // Get the uploaded file name if present

//   try {
//     // Check if the username, mobile number, or personal email already exists and belongs to a different user
//     const existingCandidate = await CandidatePersonalInformation.findOne({
//       where: {
//         candidate_id: { [Op.ne]: candidateId }, // Exclude the current user from the check
//       },
//     });

//     // Update user details in the database
//     const data = {
//       candidate_id,
//       designation_id,
//       employer_type,
//       experience,
//       salary_expectation,
//       notice_period,
//       hear_about_us,
//       subject_id,
//       type_of_institute_id,
//       address,
//       state_id,
//       city_id,
//       country_id,
//       pincode,
//     };
//     if (existingCandidate) {
//       await CandidatePersonalInformation.update(data, {
//         where: { candidate_id: candidateId },
//       });
//     } else {
//       await CandidatePersonalInformation.create(data);
//     }

//     // Retrieve updated user details, explicitly excluding the password and timestamp fields
//     const candidateInfo = await CandidatePersonalInformation.findOne({
//       where: { candidate_id: candidateId },
//       attributes: {
//         exclude: ["password", "created_at", "updated_at", "deleted_at"],
//       },
//     });
//     console.log("candidateLogssssssssssssss", candidateInfo);
//     sendResponse(res, 200, true, "Profile updated successfully", candidateInfo);
//   } catch (error) {
//     console.error("Error in updateProfile function:", error.message); // Log the error message
//     sendResponse(res, 500, false, error.message);
//   }
// };

//Update Profile
const updateCandidate = async (req, res) => {
  const candidateId = req.candidate.candidate_id; // Extract user ID from the authenticated user object
  const {
    name,
    email,
    mobile_no,
    gender,
    d_o_b,
    join_time,
    employer_type,
    designation_id,
    experience,
    salary_expectation,
    notice_period,
    hear_about_us,
    subject_id,
    type_of_institute_id,
    address,
    state_id,
    city_id,
    country_id,
    pincode,
  } = req.body;
  // const avatar = req.file ? req.file.filename : null; // Get the uploaded file name if present

  try {
    // Check if the username, mobile number, or personal email already exists and belongs to a different user
    const existingCandidate = await CandidatePersonalInformation.findOne({
      where: {
        candidate_id: candidateId }, // Exclude the current user from the check
    });

    // Update user details in the database
    const data = {
    candidate_id:candidateId,
    name,
    email,
    mobile_no,
    gender,
    d_o_b,
    employer_type,
    designation_id,
    experience,
    salary_expectation,
    notice_period,
    hear_about_us,
    subject_id,
    join_time,
    type_of_institute_id,
    address,
    state_id,
    city_id,
    country_id,
    pincode,
    };
    if (existingCandidate) {
      await Candidate.update(data, {
        where: { candidate_id: candidateId },
      });
      await CandidatePersonalInformation.update(data, {
        where: { candidate_id: candidateId },
      });
    } else {
      await CandidatePersonalInformation.create(data);
    }
    sendResponse(res, 200, true, "Profile updated successfully");
  } catch (error) {
    console.error("Error in updateProfile function:", error.message); // Log the error message
    sendResponse(res,500, false, error.message);
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

    const candidateOtp = await CandidateOtp.findOne({
      where: {
        candidate_id: candidate.candidate_id,
        otp: otp,
        expire_at: { [Sequelize.Op.gt]: new Date() }, // Ensure OTP is not expired
      },
    });

    if (!candidateOtp) {
      return sendResponse(res, 400, false, "Invalid OTP", null, {
        otp: "Invalid or expired OTP",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Candidate.update({ password: hashedPassword }, { where: { email } });

    // // Optionally, delete the used token
    // await CandidateToken.destroy({
    //   where: { candidate_id: candidate.candidate_id, token: otp },
    // });

    sendResponse(res, 200, true, "Password reset successfully");
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// verify Email function
const verifyEmail = async (req, res) => {
  const { email, otp } = req.body;

  // if (newPassword !== confirmPassword) {
  //   return sendResponse(res, 400, false, "Passwords do not match", null, {
  //     confirmPassword: "Passwords do not match",
  //   });
  // }

  try {
    const candidate = await Candidate.findOne({ where: { email } });
    if (!candidate) {
      return sendResponse(res, 404, false, "Email not found", null, {
        email: "Email not found",
      });
    }

    const candidateOtp = await CandidateOtp.findOne({
      where: {
        candidate_id: candidate.candidate_id,
        verification_type: "Email",
        otp: otp,
        expire_at: { [Sequelize.Op.gt]: new Date() }, // Ensure OTP is not expired
      },
    });

    if (!candidateOtp) {
      return sendResponse(res, 400, false, "Invalid OTP", null, {
        otp: "Invalid or expired OTP",
      });
    }

    await Candidate.update({ is_email_verified: "true" }, { where: { email } });

    sendResponse(res, 200, true, "Email is verified successfully");
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// verify Email function
const verifyMobile = async (req, res) => {
  const { mobile_no, otp } = req.body;

  // if (newPassword !== confirmPassword) {
  //   return sendResponse(res, 400, false, "Passwords do not match", null, {
  //     confirmPassword: "Passwords do not match",
  //   });
  // }

  try {
    const candidate = await Candidate.findOne({ where: { mobile_no } });
    if (!candidate) {
      return sendResponse(res, 404, false, "Mobile not found", null, {
        email: "Mobile no not found",
      });
    }

    const candidateOtp = await CandidateOtp.findOne({
      where: {
        candidate_id: candidate.candidate_id,
        verfiication_type: "Moble",
        otp: otp,
        expire_at: { [Sequelize.Op.gt]: new Date() }, // Ensure OTP is not expired
      },
    });

    if (!candidateOtp) {
      return sendResponse(res, 400, false, "Invalid OTP", null, {
        otp: "Invalid or expired OTP",
      });
    }

    await Candidate.update(
      { is_mobile_no_verified: "true" },
      { where: { mobile_no } }
    );

    sendResponse(res, 200, true, "Mobile No is verified successfully");
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

const showCandidate = async(req,res)=>{
  const candidateId = req.candidate.candidate_id; // Extract user ID from the authenticated user object
  req.token_type = {
    type: "candidate",
  };
  try {
    // Check if the username, mobile number, or personal email already exists and belongs to a different user
    const existingCandidate = await Candidate.findOne({
      where: {
        candidate_id: candidateId, // Exclude the current user from the check
      },
      include: [
        {
          model: CandidatePersonalInformation
        },
      ],
      
    });
    if (existingCandidate) {
      // sendResponse(req,res, 200, true, "show Candidate successfully",existingCandidate); 
      sendResponse(res, 200, true, "show Candidate successfully",existingCandidate);
    } 
    
  } catch (error) {
    console.error("Error in show Candidate function:", error.message); // Log the error message
    sendResponse(res, 500, false, error.message);
  }
}

module.exports = {
  register,
  forgotPassword,
  updatePassword,
  resetPassword,
  updateCandidate,
  verifyEmail,
  verifyMobile,
  login,
  logout,
  showCandidate,
  // google_login,
};
