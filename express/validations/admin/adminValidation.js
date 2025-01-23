const { body } = require("express-validator");
const { Validate } = require("../../middleware/validationMiddleware");

// Validation for adding a new admin
const addAdminValidation = (req, res, next) => {
  return Validate([
    body("name")
      .isString()
      .withMessage("Name must be a string")
      .trim()
      .notEmpty()
      .withMessage("Name is required"),

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
      .withMessage("Invalid mobile number format")
      .notEmpty()
      .withMessage("Mobile number is required"),

    body("avatar").optional().isString().withMessage("Avatar must be a string"),
  ])(req, res, next);
};

// Validation for updating a admin
const updateAdminValidation = (req, res, next) => {
  return Validate([
    body("admin_id")
      .isInt()
      .withMessage("Admin ID must be an integer")
      .notEmpty()
      .withMessage("Admin ID is required"),

    body("name")
      .optional()
      .isString()
      .withMessage("Name must be a string")
      .trim(),

    body("email").optional().isEmail().withMessage("Invalid email format"),

    body("password")
      .optional()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),

    body("mobile_no")
      .optional()
      .isMobilePhone()
      .withMessage("Invalid mobile number format"),

    body("avatar").optional().isString().withMessage("Avatar must be a string"),
  ])(req, res, next);
};

// Validation for deleting a admin
const deleteAdminValidation = (req, res, next) => {
  return Validate([
    body("admin_id")
      .isInt()
      .withMessage("Admin ID must be an integer")
      .notEmpty()
      .withMessage("Admin ID is required"),
  ])(req, res, next);
};

// Validation for getting a list of admins
const getAdminsValidation = (req, res, next) => {
  return Validate([])(req, res, next); // No specific validation needed
};

// Validation for paginating admins
const paginateAdminsValidation = (req, res, next) => {
  return Validate([
    body("page")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Page number must be a positive integer"),

    body("limit")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Limit must be a positive integer"),
  ])(req, res, next);
};

module.exports = {
  addAdminValidation,
  updateAdminValidation,
  deleteAdminValidation,
  getAdminsValidation,
  paginateAdminsValidation,
};
