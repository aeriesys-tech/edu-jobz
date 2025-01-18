const { body } = require("express-validator");
const { Validate } = require("../middleware/validationMiddleware");

// Validation for adding a new state
const addStateValidation = (req, res, next) => {
  return Validate([
    body("state")
      .isString()
      .withMessage("State name must be a string")
      .trim()
      .notEmpty()
      .withMessage("State name is required"),
    body("country_id")
      .isInt()
      .withMessage("Country ID must be a number")
      .trim()
      .notEmpty()
      .withMessage("Country ID is required"),
  ])(req, res, next);
};

// Validation for updating a state
const updateStateValidation = (req, res, next) => {
  return Validate([
    body("state_id")
      .isInt()
      .withMessage("State ID must be an integer")
      .notEmpty()
      .withMessage("State ID is required"),
    body("country_id")
      .isInt()
      .withMessage("State ID must be an integer")
      .notEmpty()
      .withMessage("State ID is required"),
    body("state")
      .notEmpty()
      .withMessage("State name is required")
      .isString()
      .withMessage("State name must be a string")
      .trim(),
  ])(req, res, next);
};

// Validation for deleting a state
const deleteStateValidation = (req, res, next) => {
  return Validate([
    body("state_id")
      .isInt()
      .withMessage("State ID must be an integer")
      .notEmpty()
      .withMessage("State ID is required"),
  ])(req, res, next);
};

// Validation for getting all states
const getStatesValidation = (req, res, next) => {
  return Validate([])(req, res, next); // No specific validation needed
};

// Validation for paginating states
const paginateStatesValidation = (req, res, next) => {
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
  addStateValidation,
  updateStateValidation,
  deleteStateValidation,
  getStatesValidation,
  paginateStatesValidation,
};
