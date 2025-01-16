const express = require("express");
const router = express.Router();
const designationController = require("../controllers/designationController");
const authMiddleware = require("../middleware/candidate/authMiddleware");

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
  authMiddleware,
  addDesignationValidation,
  designationController.addDesignation
);

router.post(
  "/updateDesignation",
  authMiddleware,
  updateDesignationValidation,
  designationController.updateDesignation
);

router.post(
  "/deleteDesignation",
  authMiddleware,
  deleteDesignationValidation,
  designationController.deleteDesignation
);

router.post(
  "/getDesignations",
  authMiddleware,
  getDesignationsValidation,
  designationController.getDesignations
);

router.post(
  "/paginateDesignations",
  authMiddleware,
  paginateDesignationsValidation,
  designationController.paginateDesignations
);

module.exports = router;
