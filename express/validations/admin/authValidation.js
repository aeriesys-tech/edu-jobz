const { check, validationResult } = require("express-validator");
const { body } = require("express-validator");
const { Validate } = require("../../middleware/validationMiddleware");

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
    check("name")
      .optional()
      .isString()
      .withMessage("Name must be a string")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Name cannot be empty"),

    check("mobile_no")
      .isString()
      .withMessage("Mobile number must be a string")
      .trim()
      .isMobilePhone("en-IN")
      .withMessage("Enter a valid mobile number")
      .isLength({ min: 10, max: 10 })
      .withMessage("Mobile number must be exactly 10 digits long")
      .notEmpty()
      .withMessage("Mobile number is required"),

    check("avatar")
      .optional()
      .isString()
      .withMessage("Avatar must be a string"),
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
  loginValidation,
  updateProfileValidation,
  updatePasswordValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
};
