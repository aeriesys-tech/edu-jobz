const { body } = require("express-validator");
const { Validate } = require("../middleware/validationMiddleware");

// Validation for adding a new state
const addCityValidation = (req, res, next) => {
  return Validate([
    body("city")
      .isString()
      .withMessage("City name must be a string")
      .trim()
      .notEmpty()
      .withMessage("City name is required"),
    body("state_id")
      .isInt()
      .withMessage("State ID must be a number")
      .trim()
      .notEmpty()
      .withMessage("State ID is required"),
  ])(req, res, next);
};

// Validation for updating a state
const updateCityValidation = (req, res, next) => {
  return Validate([
    body("city_id")
      .isInt()
      .withMessage("City ID must be an integer")
      .notEmpty()
      .withMessage("City ID is required"),
    body("state_id")
      .isInt()
      .withMessage("State ID must be an integer")
      .notEmpty()
      .withMessage("State ID is required"),
    body("city")
      .notEmpty()
      .withMessage("City is required")
      .isString()
      .withMessage("City must be a string")
      .trim(),
  ])(req, res, next);
};

// Validation for deleting a state
const deleteCityValidation = (req, res, next) => {
  return Validate([
    body("city_id")
      .isInt()
      .withMessage("City ID must be an integer")
      .notEmpty()
      .withMessage("City ID is required"),
  ])(req, res, next);
};

// Validation for getting all states
const getCitiesValidation = (req, res, next) => {
  return Validate([
    body("state_id")
      .isInt()
      .withMessage("State ID must be an integer")
      .notEmpty()
      .withMessage("State ID is required"),
  ])(req, res, next); // No specific validation needed
};

// Validation for paginating states
const paginateCitiesValidation = (req, res, next) => {
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
  addCityValidation,
  updateCityValidation,
  deleteCityValidation,
  getCitiesValidation,
  paginateCitiesValidation,
};
