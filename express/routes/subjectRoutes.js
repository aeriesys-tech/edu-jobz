const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subjectController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addSubjectValidation,
  updateSubjectValidation,
  deleteSubjectValidation,
  getSubjectsValidation,
  paginateSubjectsValidation,
} = require("../validations/subjectValidations");

// Routes for subjects
router.post(
  "/addSubject",
  checkAdminToken,
  addSubjectValidation,
  subjectController.addSubject
);

router.post(
  "/updateSubject",
  checkAdminToken,
  updateSubjectValidation,
  subjectController.updateSubject
);

router.post(
  "/deleteSubject",
  checkAdminToken,
  deleteSubjectValidation,
  subjectController.deleteSubject
);

router.post(
  "/getSubjects",
  checkAllTokens,
  getSubjectsValidation,
  subjectController.getSubjects
);

router.post(
  "/paginateSubjects",
  checkAllTokens,
  checkAdminToken,
  paginateSubjectsValidation,
  subjectController.paginateSubjects
);

module.exports = router;
