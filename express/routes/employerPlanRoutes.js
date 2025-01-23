const express = require("express");
const router = express.Router();
const employerPlanController = require("../controllers/employerPlanController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addEmployerPlanValidation,
  updateEmployerPlanValidation,
  deleteEmployerPlanValidation,
  getEmployerPlansValidation,
  paginateEmployerPlansValidation,
} = require("../validations/employerPlanvalidations");

// Routes for designations
router.post(
  "/addEmployerPlan",
  checkAdminToken,
  addEmployerPlanValidation,
  employerPlanController.addEmployerPlan
);

router.post(
  "/updateEmployerPlan",
  checkAdminToken,
  updateEmployerPlanValidation,
  employerPlanController.updateEmployerPlan
);

router.post(
  "/deleteEmployerPlan",
  checkAdminToken,
  deleteEmployerPlanValidation,
  employerPlanController.deleteEmployerPlan
);

router.post(
  "/getEmployerPlans",
  checkAllTokens,
  getEmployerPlansValidation,
  employerPlanController.getEmployerPlans
);

router.post(
  "/paginateEmployerPlans",
  checkAllTokens,
  checkAdminToken,
  paginateEmployerPlansValidation,
  employerPlanController.paginateEmployerPlans
);

module.exports = router;
