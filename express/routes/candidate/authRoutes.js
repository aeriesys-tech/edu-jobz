const express = require("express");
const router = express.Router();
const authController = require("../../controllers/candidate/authController");
const authMiddleware = require("../../middleware/candidate/authMiddleware");
const {
  registrationValidation,
  loginValidation,
  updateProfileValidation,
  updatePasswordValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  verifyEmailValidation,
  verifyMobileValidation,
} = require("../../validations/candidate/authValidation");
const upload = require("../../middleware/multerMiddleware");

// Registration
router.post("/register", registrationValidation, authController.register);

// login
router.post("/login", loginValidation, authController.login);

router.post(
  "/updateCandidatePersonalInformation",
  upload.single("avatar"), // Add multer middleware for handling file uploads
  updateProfileValidation,
  authMiddleware,
  authController.updateCandidatePersonalInformation
);

router.post(
  "/updatePassword",
  updatePasswordValidation,
  authMiddleware,
  authController.updatePassword
);

router.post(
  "/forgotPassword",
  forgotPasswordValidation,
  authController.forgotPassword
);

router.post("/verifyEmail", verifyEmailValidation, authController.verifyEmail);
// router.post("/me", authMiddleware, authController.me);
router.post(
  "/verifyMobile",
  verifyMobileValidation,
  authController.verifyMobile
);

router.post(
  "/resetPassword",
  resetPasswordValidation,
  authController.resetPassword
);
router.post("/logout", authMiddleware, authController.logout);

module.exports = router;
