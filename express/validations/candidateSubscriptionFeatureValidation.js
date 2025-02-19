const { body } = require("express-validator");
const { Validate } = require("../middleware/validationMiddleware");

// Validation for adding a new designation
const addCandidateSubscriptionFeatureValidation = (req, res, next) => {
  return Validate([
    body("feature_name")
      .isString()
      .withMessage("Feature name must be a string")
      .trim()
      .notEmpty()
      .withMessage("Feature name is required"),
  ])(req, res, next);
};

// Validation for updating a designation
const updateCandidateSubscriptionFeatureValidation = (req, res, next) => {
  return Validate([
    body("candidate_subscription_feature_id")
      .isInt()
      .withMessage("Candidate Subscription Feature ID must be an integer")
      .notEmpty()
      .withMessage("Candidate Subscription Feature ID is required"),

    body("feature_name")
      .notEmpty()
      .withMessage("Feature name is required")
      .isString()
      .withMessage("Feature name must be a string")
      .trim(),
  ])(req, res, next);
};

// Validation for deleting a designation
const deleteCandidateSubscriptionFeatureValidation = (req, res, next) => {
  return Validate([
    body("candidate_subscription_feature_id")
      .isInt()
      .withMessage("Candidate Subscription Feature ID must be an integer")
      .notEmpty()
      .withMessage("Candidate Subscription Feature ID is required"),
  ])(req, res, next);
};

// Validation for getting all designations
const getCandidateSubscriptionFeaturesValidation = (req, res, next) => {
  return Validate([])(req, res, next); // No specific validation needed
};

// Validation for paginating designations
const paginateCandidateSubscriptionFeaturesValidation = (req, res, next) => {
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
  addCandidateSubscriptionFeatureValidation,
  updateCandidateSubscriptionFeatureValidation,
  deleteCandidateSubscriptionFeatureValidation,
  getCandidateSubscriptionFeaturesValidation,
  paginateCandidateSubscriptionFeaturesValidation,
};
