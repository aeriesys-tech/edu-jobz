const { body } = require("express-validator");
const { Validate } = require("../middleware/validationMiddleware");

// Validation for adding a new subject
const addSubjectValidation = (req, res, next) => {
  return Validate([
    body("subject")
      .isString()
      .withMessage("Subject  must be a string")
      .trim()
      .notEmpty()
      .withMessage("Subject is required"),
  ])(req, res, next);
};

// Validation for updating a subject
const updateSubjectValidation = (req, res, next) => {
  return Validate([
    body("subject_id")
      .isInt()
      .withMessage("Subject ID must be an integer")
      .notEmpty()
      .withMessage("Subject ID is required"),

    body("subject")
      .notEmpty()
      .withMessage("Subject name is required")
      .isString()
      .withMessage("Subject name must be a string")
      .trim(),
  ])(req, res, next);
};

// Validation for deleting a subject
const deleteSubjectValidation = (req, res, next) => {
  return Validate([
    body("subject_id")
      .isInt()
      .withMessage("Subject ID must be an integer")
      .notEmpty()
      .withMessage("Subject ID is required"),
  ])(req, res, next);
};

// Validation for getting all subjects
const getSubjectsValidation = (req, res, next) => {
  return Validate([])(req, res, next); // No specific validation needed
};

// Validation for paginating subjects
const paginateSubjectsValidation = (req, res, next) => {
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
  addSubjectValidation,
  updateSubjectValidation,
  deleteSubjectValidation,
  getSubjectsValidation,
  paginateSubjectsValidation,
};
