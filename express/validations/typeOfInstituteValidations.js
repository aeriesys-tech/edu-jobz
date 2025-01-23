const { body } = require("express-validator");
const { Validate } = require("../middleware/validationMiddleware");

// Validation for adding a new type_of_institute
const addTypeOfInstituteValidation = (req, res, next) => {
  return Validate([
    body("type_of_institute")
      .isString()
      .withMessage("TypeOfInstitute name must be a string")
      .trim()
      .notEmpty()
      .withMessage("TypeOfInstitute name is required"),
  ])(req, res, next);
};

// Validation for updating a type_of_institute
const updateTypeOfInstituteValidation = (req, res, next) => {
  return Validate([
    body("type_of_institute_id")
      .isInt()
      .withMessage("TypeOfInstitute ID must be an integer")
      .notEmpty()
      .withMessage("TypeOfInstitute ID is required"),

    body("type_of_institute")
      .notEmpty()
      .withMessage("TypeOfInstitute name is required")
      .isString()
      .withMessage("TypeOfInstitute name must be a string")
      .trim(),
  ])(req, res, next);
};

// Validation for deleting a type_of_institute
const deleteTypeOfInstituteValidation = (req, res, next) => {
  return Validate([
    body("type_of_institute_id")
      .isInt()
      .withMessage("TypeOfInstitute ID must be an integer")
      .notEmpty()
      .withMessage("TypeOfInstitute ID is required"),
  ])(req, res, next);
};

// Validation for getting all type_of_institutes
const getTypeOfInstitutesValidation = (req, res, next) => {
  return Validate([])(req, res, next); // No specific validation needed
};

// Validation for paginating type_of_institutes
const paginateTypeOfInstitutesValidation = (req, res, next) => {
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
  addTypeOfInstituteValidation,
  updateTypeOfInstituteValidation,
  deleteTypeOfInstituteValidation,
  getTypeOfInstitutesValidation,
  paginateTypeOfInstitutesValidation,
};
