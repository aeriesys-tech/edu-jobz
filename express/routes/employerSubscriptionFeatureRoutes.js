const express = require("express");
const router = express.Router();
const employerSubscriptionFeatureController = require("../controllers/employerSubscriptionFeatureController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addEmployerSubscriptionFeatureValidation,
  updateEmployerSubscriptionFeatureValidation,
  deleteEmployerSubscriptionFeatureValidation,
  getEmployerSubscriptionFeaturesValidation,
  paginateEmployerSubscriptionFeaturesValidation,
} = require("../validations/employerSubscriptionFeatureValidations");

// Routes for designations
router.post(
  "/addEmployerSubscriptionFeature",
  checkAdminToken,
  addEmployerSubscriptionFeatureValidation,
  employerSubscriptionFeatureController.addEmployerSubscriptionFeature
);

router.post(
  "/updateEmployerSubscriptionFeature",
  checkAdminToken,
  updateEmployerSubscriptionFeatureValidation,
  employerSubscriptionFeatureController.updateEmployerSubscriptionFeature
);

router.post(
  "/deleteEmployerSubscriptionFeature",
  checkAdminToken,
  deleteEmployerSubscriptionFeatureValidation,
  employerSubscriptionFeatureController.deleteEmployerSubscriptionFeature
);

router.post(
  "/getEmployerSubscriptionFeatures",
  checkAllTokens,
  getEmployerSubscriptionFeaturesValidation,
  employerSubscriptionFeatureController.getEmployerSubscriptionFeatures
);

router.post(
  "/paginateEmployerSubscriptionFeatures",
  checkAllTokens,
  checkAdminToken,
  paginateEmployerSubscriptionFeaturesValidation,
  employerSubscriptionFeatureController.paginateEmployerSubscriptionFeatures
);

module.exports = router;
