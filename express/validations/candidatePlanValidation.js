const { body } = require("express-validator");
const { Validate } = require("../middleware/validationMiddleware");

// Validation for adding a new designation
const addCandidatePlanValidation = (req, res, next) => {
  return Validate([
    body("candidate_subscription_feature_id")
      .isInt()
      .withMessage("Candidate Subscription Feature must be a integer")
      .trim()
      .notEmpty()
      .withMessage("Feature name is required"),
    body("feature_value")
      .isString()
      .withMessage("Feature name must be a string")
      .trim()
      .notEmpty()
      .withMessage("Feature name is required"),
  ])(req, res, next);
};

// Validation for updating a designation
const updateCandidatePlanValidation = (req, res, next) => {
  return Validate([
    body("candidate_plan_id")
      .isInt()
      .withMessage("Candidate plan ID must be an integer")
      .notEmpty()
      .withMessage("Candidate Plan ID is required"),
    body("candidate_subscription_feature_id")
      .isInt()
      .withMessage("Candidate Subscription Feature ID must be an integer")
      .notEmpty()
      .withMessage("Candidate Subscription Feature ID is required"),

    body("feature_value")
      .notEmpty()
      .withMessage("Feature value is required")
      .isString()
      .withMessage("Feature value must be a string")
      .trim(),
  ])(req, res, next);
};

// Validation for deleting a designation
const deleteCandidatePlanValidation = (req, res, next) => {
  return Validate([
    body("candidate_plan_id")
      .isInt()
      .withMessage("Candidate Plan ID must be an integer")
      .notEmpty()
      .withMessage("Candidate Plan ID is required"),
  ])(req, res, next);
};

// Validation for getting all designations
const getCandidatePlansValidation = (req, res, next) => {
  return Validate([])(req, res, next); // No specific validation needed
};

// Validation for paginating designations
const paginateCandidatePlansValidation = (req, res, next) => {
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
  addCandidatePlanValidation,
  updateCandidatePlanValidation,
  deleteCandidatePlanValidation,
  getCandidatePlansValidation,
  paginateCandidatePlansValidation,
};
