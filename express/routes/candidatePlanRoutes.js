const express = require("express");
const router = express.Router();
const candidatePlanController = require("../controllers/candidatePlanController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addCandidatePlanValidation,
  updateCandidatePlanValidation,
  deleteCandidatePlanValidation,
  getCandidatePlansValidation,
  paginateCandidatePlansValidation,
} = require("../validations/candidatePlanValidation");

// Routes for designations
router.post(
  "/addCandidatePlan",
  checkAdminToken,
  addCandidatePlanValidation,
  candidatePlanController.addCandidatePlan
);

router.post(
  "/updateCandidatePlan",
  checkAdminToken,
  updateCandidatePlanValidation,
  candidatePlanController.updateCandidatePlan
);

router.post(
  "/deleteCandidatePlan",
  checkAdminToken,
  deleteCandidatePlanValidation,
  candidatePlanController.deleteCandidatePlan
);

router.post(
  "/getCandidatePlans",
  checkAllTokens,
  getCandidatePlansValidation,
  candidatePlanController.getCandidatePlans
);

router.post(
  "/paginateCandidatePlans",
  checkAllTokens,
  checkAdminToken,
  paginateCandidatePlansValidation,
  candidatePlanController.paginateCandidatePlans
);

module.exports = router;
