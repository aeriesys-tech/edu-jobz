const { body } = require("express-validator");
const { Validate } = require("../middleware/validationMiddleware");

// Validation for adding a new country
const addCountryValidation = (req, res, next) => {
  return Validate([
    body("country")
      .isString()
      .withMessage("Country name must be a string")
      .trim()
      .notEmpty()
      .withMessage("Country name is required"),
  ])(req, res, next);
};

// Validation for updating a country
const updateCountryValidation = (req, res, next) => {
  return Validate([
    body("country_id")
      .isInt()
      .withMessage("Country ID must be an integer")
      .notEmpty()
      .withMessage("Country ID is required"),

    body("country")
      .notEmpty()
      .withMessage("Country name is required")
      .isString()
      .withMessage("Country name must be a string")
      .trim(),
  ])(req, res, next);
};

// Validation for deleting a country
const deleteCountryValidation = (req, res, next) => {
  return Validate([
    body("country_id")
      .isInt()
      .withMessage("Country ID must be an integer")
      .notEmpty()
      .withMessage("Country ID is required"),
  ])(req, res, next);
};

// Validation for getting all countrys
const getCountriesValidation = (req, res, next) => {
  return Validate([])(req, res, next); // No specific validation needed
};

// Validation for paginating countrys
const paginateCountrysValidation = (req, res, next) => {
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
  addCountryValidation,
  updateCountryValidation,
  deleteCountryValidation,
  getCountriesValidation,
  paginateCountrysValidation,
};
