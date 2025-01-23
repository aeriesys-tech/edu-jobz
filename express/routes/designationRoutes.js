const express = require("express");
const router = express.Router();
const designationController = require("../controllers/designationController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addDesignationValidation,
  updateDesignationValidation,
  deleteDesignationValidation,
  getDesignationsValidation,
  paginateDesignationsValidation,
} = require("../validations/designationValidations");

// Routes for designations
router.post(
  "/addDesignation",
  checkAdminToken,
  addDesignationValidation,
  designationController.addDesignation
);

router.post(
  "/updateDesignation",
  checkAdminToken,
  updateDesignationValidation,
  designationController.updateDesignation
);

router.post(
  "/deleteDesignation",
  checkAdminToken,
  deleteDesignationValidation,
  designationController.deleteDesignation
);

router.post(
  "/getDesignations",
  checkAllTokens,
  getDesignationsValidation,
  designationController.getDesignations
);

router.post(
  "/paginateDesignations",
  checkAllTokens,
  checkAdminToken,
  paginateDesignationsValidation,
  designationController.paginateDesignations
);

module.exports = router;
