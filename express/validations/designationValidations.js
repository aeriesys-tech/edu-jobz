const { body } = require("express-validator");
const { Validate } = require("../middleware/validationMiddleware");

// Validation for adding a new designation
const addDesignationValidation = (req, res, next) => {
  return Validate([
    body("designation")
      .isString()
      .withMessage("Designation name must be a string")
      .trim()
      .notEmpty()
      .withMessage("Designation name is required"),
  ])(req, res, next);
};

// Validation for updating a designation
const updateDesignationValidation = (req, res, next) => {
  return Validate([
    body("designation_id")
      .isInt()
      .withMessage("Designation ID must be an integer")
      .notEmpty()
      .withMessage("Designation ID is required"),

    body("designation")
      .notEmpty()
      .withMessage("Designation name is required")
      .isString()
      .withMessage("Designation name must be a string")
      .trim(),
  ])(req, res, next);
};

// Validation for deleting a designation
const deleteDesignationValidation = (req, res, next) => {
  return Validate([
    body("designation_id")
      .isInt()
      .withMessage("Designation ID must be an integer")
      .notEmpty()
      .withMessage("Designation ID is required"),
  ])(req, res, next);
};

// Validation for getting all designations
const getDesignationsValidation = (req, res, next) => {
  return Validate([])(req, res, next); // No specific validation needed
};

// Validation for paginating designations
const paginateDesignationsValidation = (req, res, next) => {
  return Validate([
    body("page")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Page number must be a positive integer"),
    body("limit")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Limit must be a positive integer"),
    body("sortBy")
      .optional()
      .isString()
      .withMessage("SortBy field must be a string"),
    body("order")
      .optional()
      .isIn(["asc", "desc"])
      .withMessage("Order must be either 'asc' or 'desc'"),
    body("search")
      .optional()
      .isString()
      .withMessage("Search query must be a string"),
  ])(req, res, next);
};

module.exports = {
  addDesignationValidation,
  updateDesignationValidation,
  deleteDesignationValidation,
  getDesignationsValidation,
  paginateDesignationsValidation,
};
