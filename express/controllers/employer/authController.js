const { Employer, EmployerToken, EmployerOtp,EmployerInformation } = require("../../models");
// const { sendRes } = require("../../services/employer/responseService");
const{sendResponse}= require("../../services/tokenResponseService")
const { sendOtp } = require("../../services/messageService");
const { Op, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const passport = require("passport");

// Registration
const register = async (req, res) => {
  try {
    const {
      name,
      mobile_no,
      email,
      password,
    } = req.body;

    // Check if email or mobile_no already exists
    const existingEmployer = await Employer.findOne({
      where: {
        [Op.or]: [{ email }, { mobile_no }],
      },
    });

    if (existingEmployer) {
      const errors = {};
      if (existingEmployer.email === email) {
        errors.email = "Employer with the same email already exists";
      }
      if (existingEmployer.mobile_no === mobile_no) {
        errors.mobile_no =
          "Employer with the same mobile number already exists";
      }
      return sendResponse(res, 400, false, "Validation Error", null, errors);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new Candidate
    const newEmployer = await Employer.create({
      name,
      mobile_no,
      email,
      password: hashedPassword,
    });

    const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
    const expireAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

    await EmployerOtp.create({
      employer_id: newEmployer.employer_id,
      verification_type: "Email",
      otp: otp,
      send_to: newEmployer.email,
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
    const mobile_otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
    const mobile_expireAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

    await EmployerOtp.create({
      employer_id: newEmployer.employer_id,
      verification_type: "Mobile",
      otp: mobile_otp,
      send_to: newEmployer.mobile_no,
      created_at: new Date(),
      expire_at: mobile_expireAt,
    });

    await verify_email(mailOptions);

    // await userotp.sendOtp(newCandidate.mobile_no, mobile_otp);

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     return sendResponse(res, 500, false, error.message);
    //   }
    //   sendResponse(res, 200, true, "Email verification email sent");
    // });

    await send_mobile_otp(newEmployer.mobile_no, mobile_otp);

    return sendResponse(
      res,
      201,
      true,
      "Employer created successfully",
      newEmployer
    );
  } catch (error) {
    console.error("Error in Registration function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Login function
const login = async (req, res) => {
  const { email, password } = req.body;
  req.token_type = {
    type: "employer",
  };
  try {
    const employer = await Employer.findOne({
      where: { email: email },
    });

    if (!employer) {
      return sendResponse(req,res, 400, false, "Email is incorrect", null, {
        email: "Invalid Email",
        password: "Invalid Password",
      });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, employer.password);
    if (!validPassword) {
      return sendResponse(req,res, 400, false, "Password is incorrect", null, {
        email: "Invalid Email",
        password: "Invalid password",
      });
    }

    // Clear existing tokens for the user
    await EmployerToken.destroy({
      where: { employer_id: employer.employer_id },
    });

    // Generate JWT token
    const token = jwt.sign(
      { employer_id: employer.employer_id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRY,
      }
    );

    // Calculate token expiration time
    const expireAt = new Date();
    expireAt.setHours(expireAt.getHours() + parseInt(process.env.TOKEN_EXPIRY));

    // Save token to the UserToken table
    await EmployerToken.create({
      employer_id: employer.employer_id,
      token: token,
      expire_at: expireAt,
    });

    if (!employer) {
      return sendResponse(req,res, 400, false, "Email not found", null, {
        email: "Invalid email or email not found",
      });
    }

    // Construct the user response without password
    const employerWithoutPassword = {
      employer_id: employer.employer_id,
      name: employer.name,
      email: employer.email,
      mobile_no: employer.mobile_no,
      whatsapp_no: employer.whatsapp_no,
      gender: employer.gender,
      d_o_b: employer.d_o_b,
      type_of_institute_id: employer.type_of_institute_id,
      institution_name: employer.institution_name,
      address: employer.address,
      state_id: employer.state_id,
      city_id: employer.city_id,
      country_id: employer.country_id,
      pincode: employer.pincode,
      created_at: employer.created_at,
    };
    // req.token_type = {
    //   type: "employer",
    // };

    // Send the response with token and user data
    return sendResponse(req,res, 200, true, "Login successful", {
      token,
      employer: employerWithoutPassword,
    });
  } catch (error) {
    req.token_type = {
      type: "employer",
    };
    console.error("Error in login function:", error);
    
    return sendResponse(req,res, 500, false, null, null, error.message);
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
  const employerId = req.employer_id; // Extract user ID from the authenticated user object
  const { oldPassword, newPassword, confirmPassword } = req.body;

  // Validate the new password and confirm password
  if (newPassword !== confirmPassword) {
    return sendResponse(req,
      res,
      400,
      false,
      "New password and confirm password do not match"
    );
  }

  try {
    // Find the user by ID
    const employer = await Employer.findByPk(employerId);

    if (!employer) {
      return sendResponse(req,res, 404, false, "Employer not found");
    }

    // Check if the old password is valid
    const validPassword = await bcrypt.compare(oldPassword, employer.password);
    if (!validPassword) {
      return sendResponse(req,res, 400, false, "Invalid old password");
    }

    // Check if the new password is the same as the old password
    const isSamePassword = await bcrypt.compare(newPassword, employer.password);
    if (isSamePassword) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "New password cannot be the same as the old password"
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    await Employer.update(
      { password: hashedPassword },
      { where: { employer_id: employerId } } // Ensure you are using the correct user_id field
    );
    sendResponse(req,res, 200, true, "Password updated successfully");
  } catch (error) {
    console.error("Error in updatePassword function:", error.message);
    req.token_type = {
      type: "candidate",
    };
    sendResponse(req,res, 500, false, error.message);
  }
};

//Update Profile
// const updateProfile = async (req, res) => {
//   const employerId = req.employer.employer_id; // Extract user ID from the authenticated user object
//   const {
//    employer_id,
//     whatsapp_no,
//     gender,
//     d_o_b,
//     type_of_institute,

//     institution_name,
//     address,
//     state,
//     city,
//     country,
//     pincode,
//   } = req.body;
//   const avatar = req.file ? req.file.filename : null; // Get the uploaded file name if present

//   try {
//     // Check if the username, mobile number, or personal email already exists and belongs to a different user
//     const existingEmployer = await Employer.findOne({
//       where: {
//         [Op.or]: [{ email }, { mobile_no }],
//         employer_id: { [Op.ne]: employerId }, // Exclude the current user from the check
//       },
//     });

//     if (existingEmployer) {
//       const errors = {};
//       if (existingEmployer.email === email) {
//         errors.email = "Employer with the same email already exists";
//       }
//       if (existingEmployer.mobile_no === mobile_no) {
//         errors.mobile_no =
//           "Employer with the same mobile number already exists";
//       }
//       return sendResponse(res, 400, false, "Validation Error", null, errors);
//     }

//     // Update user details in the database
//     const updateData = {
//       employer_id,
//       email,
//       mobile_no,
//       whatsapp_no,
//       gender,
//       d_o_b,
//       type_of_institute,
//       institution_name,
//       address,
//       state,
//       city,
//       country,
//       pincode,
//     };
//     if (avatar) {
//       updateData.avatar = avatar; // Add avatar to the update data if a file was uploaded
//     }

//     await Employer.update(updateData, {
//       where: { employer_id: employerId },
//     });

//     // Retrieve updated user details, explicitly excluding the password and timestamp fields
//     const employer = await Employer.findByPk(employerId, {
//       attributes: {
//         exclude: ["password", "created_at", "updated_at", "deleted_at"],
//       },
//     });

//     sendResponse(res, 200, true, "Profile updated successfully", employer);
//   } catch (error) {
//     console.error("Error in updateProfile function:", error.message); // Log the error message
//     sendResponse(res, 500, false, error.message);
//   }
// };

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
  req.token_type = {
    type: "employer",
  };
  try {
    const employer = await Employer.findOne({ where: { email } });
    if (!employer) {
      return sendResponse(req,res, 404, false, "Employer not found", null, {
        email: "Employer not found",
      });
    }

    const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP
    const expireAt = new Date(Date.now() + 15 * 60 * 1000); // OTP valid for 15 minutes

    await EmployerToken.create({
      employer_id: employer.employer_id,
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
        return sendResponse(req,res, 500, false, error.message);
      }
      sendResponse(req,res, 200, true, "Reset password email sent");
    });
  } catch (error) {
    sendResponse(req,res, 500, false, error.message);
  }
};

// Reset Password function
const resetPassword = async (req, res) => {
  const { email, otp, newPassword, confirmPassword } = req.body;
  req.token_type = {
    type: "employer",
  };

  if (newPassword !== confirmPassword) {
    return sendResponse(req,res, 400, false, "Passwords do not match", null, {
      confirmPassword: "Passwords do not match",
    });
  }

  try {
    const employer = await Employer.findOne({ where: { email } });
    if (!employer) {
      return sendResponse(req,res, 404, false, "Employer not found", null, {
        email: "Employer not found",
      });
    }

    const employerToken = await EmployerToken.findOne({
      where: {
        employer_id: employer.employer_id,
        token: otp,
        expire_at: { [Sequelize.Op.gt]: new Date() }, // Ensure OTP is not expired
      },
    });

    if (!employerToken) {
      return sendResponse(req,res, 400, false, "Invalid OTP", null, {
        otp: "Invalid or expired OTP",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await Employer.update({ password: hashedPassword }, { where: { email } });

    // Optionally, delete the used token
    await EmployerToken.destroy({
      where: { employer_id: employer.employer_id, token: otp },
    });

    sendResponse(req,res, 200, true, "Password reset successfully");
  } catch (error) {
    sendResponse(req,res, 500, false, error.message);
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
    const employer = await Employer.findOne({ where: { email } });
    if (!employer) {
      return sendResponse(res, 404, false, "Email not found", null, {
        email: "Email not found",
      });
    }

    const employerOtp = await EmployerOtp.findOne({
      where: {
        employer_id: employer.employer_id,
        verification_type: "Email",
        otp: otp,
        expire_at: { [Sequelize.Op.gt]: new Date() }, // Ensure OTP is not expired
      },
    });

    if (!employerOtp) {
      return sendResponse(res, 400, false, "Invalid OTP", null, {
        otp: "Invalid or expired OTP",
      });
    }

    await Employer.update({ is_email_verified: "true" }, { where: { email } });

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
    const employer = await Employer.findOne({ where: { mobile_no } });
    if (!employer) {
      return sendResponse(res, 404, false, "Mobile not found", null, {
        email: "Mobile no not found",
      });
    }

    const employerOtp = await EmployerOtp.findOne({
      where: {
        employer_id: employer.employer_id,
        verfiication_type: "Moble",
        otp: otp,
        expire_at: { [Sequelize.Op.gt]: new Date() }, // Ensure OTP is not expired
      },
    });

    if (!employerOtp) {
      return sendResponse(res, 400, false, "Invalid OTP", null, {
        otp: "Invalid or expired OTP",
      });
    }

    await Employer.update(
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
    await EmployerToken.destroy({
      where: {
        token: token,
        employer_id: decoded.employer_id,
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

//Update Profile
const updateProfile = async (req, res) => {
  const employerId = req.employer_id; // Extract user ID from the authenticated user object
  req.token_type = {
    type: "employer",
  };
  const {
    name,
    email,
    mobile_no,
    whatsapp_no,
    gender,
    d_o_b,
    type_of_institute_id,
    institution_name,
    address,
    state_id,
    city_id,
    country_id,
    pincode,
  } = req.body;
  // const avatar = req.file ? req.file.filename : null; // Get the uploaded file name if present

  try {
    // Check if the username, mobile number, or personal email already exists and belongs to a different user
    const existingEmployer = await EmployerInformation.findOne({
      where: {
        employer_id: { [Op.ne]: employerId }, // Exclude the current user from the check
      },
    });

    // Update user details in the database
    const data = {
    name,
    email,
    mobile_no,
    whatsapp_no,
    gender,
    d_o_b,
    type_of_institute_id,
    institution_name,
    address,
    state_id,
    city_id,
    country_id,
    pincode,
    };
    if (existingEmployer) {
      await Employer.update(data, {
        where: { employer_id: employerId },
      });
      await EmployerInformation.update(data, {
        where: { employer_id: employerId },
      });
    } else {
      await EmployerInformation.create(data);
    }

    // Retrieve updated user details, explicitly excluding the password and timestamp fields
    // const employerInfo = await EmployerInformation.findOne({
    //   where: { employer_id: employerId },
    //   attributes: {
    //     exclude: ["password", "created_at", "updated_at", "deleted_at"],
    //   },
    // });
    sendResponse(req,res, 200, true, "Profile updated successfully");
  } catch (error) {
    console.error("Error in updateProfile function:", error.message); // Log the error message
    sendResponse(req,res, 500, false, error.message);
  }
};

const showEmployer = async(req,res)=>{
  const employerId = req.employer_id; // Extract user ID from the authenticated user object
  req.token_type = {
    type: "employer",
  };
  try {
    // Check if the username, mobile number, or personal email already exists and belongs to a different user
    const existingEmployer = await Employer.findOne({
      where: {
        employer_id: employerId, // Exclude the current user from the check
      },
      include: [
        {
          model: EmployerInformation
        },
      ],
    });
    if (existingEmployer) {
      sendResponse(req,res, 200, true, "show employer successfully",existingEmployer); 
    } 
    
  } catch (error) {
    console.error("Error in show Employer function:", error.message); // Log the error message
    sendResponse(req,res, 500, false, error.message);
  }
}

module.exports = {
  register,
  forgotPassword,
  updatePassword,
  resetPassword,
  updateProfile,
  verifyEmail,
  verifyMobile,
  login,
  logout,
  showEmployer
  // google_login,
};
