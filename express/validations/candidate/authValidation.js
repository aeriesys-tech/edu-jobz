const { check, validationResult } = require("express-validator");
const { body } = require("express-validator");
const { Validate } = require("../../middleware/validationMiddleware");

const registrationValidation = (req, res, next) => {
  return Validate([
    body("name")
      .isString()
      .withMessage("Name must be a string")
      .trim()
      .notEmpty()
      .withMessage("Name is required"),

    body("mobile_no")
      .isMobilePhone()
      .withMessage("Invalid mobile number format")
      .notEmpty()
      .withMessage("Mobile number is required"),

    body("email")
      .isEmail()
      .withMessage("Invalid email format")
      .notEmpty()
      .withMessage("Email is required"),

    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .notEmpty()
      .withMessage("Password is required"),

    body("mobile_no")
      .isMobilePhone()
      .withMessage("Invalid is_mobile_no_verified format")
      .notEmpty()
      .withMessage("is_mobile_no_verified is required"),

    body("avatar").optional().isString().withMessage("Avatar must be a string"),
  ])(req, res, next);
};
// Validation for login
const loginValidation = (req, res, next) => {
  return Validate([
    // check("email").isEmail().withMessage("Enter a valid email address"),
    check("email").notEmpty().withMessage("Enter a valid email"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ])(req, res, next);
};

// Validation for update
const updateProfileValidation = (req, res, next) => {
  return Validate([
    body("candidate_id")
      .isInt()
      .withMessage("Candidate ID must be an integer")
      .notEmpty()
      .withMessage("Candidate ID is required"),
  ])(req, res, next);
};

const updatePasswordValidation = (req, res, next) => {
  return Validate([
    check("oldPassword")
      .isLength({ min: 6 })
      .withMessage("Old password must be at least 6 characters long"),
    check("newPassword")
      .isLength({ min: 6 })
      .withMessage("New password must be at least 6 characters long"),
    check("confirmPassword")
      .isLength({ min: 6 })
      .withMessage("Confirm password must be at least 6 characters long"),
  ])(req, res, next);
};

const forgotPasswordValidation = (req, res, next) => {
  return Validate([
    check("email").isEmail().withMessage("Enter a valid email address"),
  ])(req, res, next);
};

const verifyEmailValidation = (req, res, next) => {
  return Validate([
    check("email").isEmail().withMessage("Enter a valid email address"),
    check("otp")
      .isLength({ min: 6, max: 6 })
      .withMessage("OTP must be a 6-digit number"),
  ])(req, res, next);
};

const verifyMobileValidation = (req, res, next) => {
  return Validate([
    check("email").isEmail().withMessage("Enter a valid email address"),
    check("otp")
      .isLength({ min: 6, max: 6 })
      .withMessage("OTP must be a 6-digit number"),
  ])(req, res, next);
};

const resetPasswordValidation = (req, res, next) => {
  return Validate([
    check("email").isEmail().withMessage("Enter a valid email address"),
    check("otp")
      .isLength({ min: 6, max: 6 })
      .withMessage("OTP must be a 6-digit number"),
    check("newPassword")
      .isLength({ min: 6 })
      .withMessage("New password must be at least 6 characters long"),
    check("confirmPassword")
      .isLength({ min: 6 })
      .withMessage("Confirm password must be at least 6 characters long"),
  ])(req, res, next);
};
module.exports = {
  registrationValidation,
  loginValidation,
  updateProfileValidation,
  updatePasswordValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  verifyEmailValidation,
  verifyMobileValidation,
};
