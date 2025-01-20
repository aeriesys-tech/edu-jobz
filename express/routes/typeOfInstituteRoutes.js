const express = require("express");
const router = express.Router();
const typeOfInstituteController = require("../controllers/typeOfInstituteController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addTypeOfInstituteValidation,
  updateTypeOfInstituteValidation,
  deleteTypeOfInstituteValidation,
  getTypeOfInstitutesValidation,
  paginateTypeOfInstitutesValidation,
} = require("../validations/typeOfInstituteValidations");

// Routes for typeOfInstitutes
router.post(
  "/addTypeOfInstitute",
  checkAdminToken,
  addTypeOfInstituteValidation,
  typeOfInstituteController.addTypeOfInstitute
);

router.post(
  "/updateTypeOfInstitute",
  checkAdminToken,
  updateTypeOfInstituteValidation,
  typeOfInstituteController.updateTypeOfInstitute
);

router.post(
  "/deleteTypeOfInstitute",
  checkAdminToken,
  deleteTypeOfInstituteValidation,
  typeOfInstituteController.deleteTypeOfInstitute
);

router.post(
  "/getTypeOfInstitutes",
  checkAllTokens,
  getTypeOfInstitutesValidation,
  typeOfInstituteController.getTypeOfInstitutes
);

router.post(
  "/paginateTypeOfInstitutes",
  checkAllTokens,
  checkAdminToken,
  paginateTypeOfInstitutesValidation,
  typeOfInstituteController.paginateTypeOfInstitutes
);

module.exports = router;
