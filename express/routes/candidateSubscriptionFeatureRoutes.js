const express = require("express");
const router = express.Router();
const candidateSubscriptionFeatureController = require("../controllers/candidateSubscriptionFeatureController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addCandidateSubscriptionFeatureValidation,
  updateCandidateSubscriptionFeatureValidation,
  deleteCandidateSubscriptionFeatureValidation,
  getCandidateSubscriptionFeaturesValidation,
  paginateCandidateSubscriptionFeaturesValidation,
} = require("../validations/candidateSubscriptionFeatureValidation");

// Routes for designations
router.post(
  "/addCandidateSubscriptionFeature",
  checkAdminToken,
  addCandidateSubscriptionFeatureValidation,
  candidateSubscriptionFeatureController.addCandidateSubscriptionFeature
);

router.post(
  "/updateCandidateSubscriptionFeature",
  checkAdminToken,
  updateCandidateSubscriptionFeatureValidation,
  candidateSubscriptionFeatureController.updateCandidateSubscriptionFeature
);

router.post(
  "/deleteCandidateSubscriptionFeature",
  checkAdminToken,
  deleteCandidateSubscriptionFeatureValidation,
  candidateSubscriptionFeatureController.deleteCandidateSubscriptionFeature
);

router.post(
  "/getCandidateSubscriptionFeatures",
  checkAllTokens,
  getCandidateSubscriptionFeaturesValidation,
  candidateSubscriptionFeatureController.getCandidateSubscriptionFeatures
);

router.post(
  "/paginateCandidateSubscriptionFeatures",
  checkAllTokens,
  checkAdminToken,
  paginateCandidateSubscriptionFeaturesValidation,
  candidateSubscriptionFeatureController.paginateCandidateSubscriptionFeatures
);

module.exports = router;
