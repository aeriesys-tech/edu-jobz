const express = require("express");
const router = express.Router();
const authController = require("../../controllers/employer/authController");
// const authMiddleware = require("../../middleware/employer/authMiddleware");
const {checkEmployerToken} = require("../../middleware/verifyAuthMiddlware");
const {
  registrationValidation,
  loginValidation,
  updateProfileValidation,
  updatePasswordValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  verifyEmailValidation,
  verifyMobileValidation,
} = require("../../validations/employer/authValidation");
const upload = require("../../middleware/multerMiddleware");

// Registration
router.post("/register",registrationValidation, authController.register);

// login
router.post("/login",loginValidation, authController.login);

router.post(
  "/updateProfile",
  upload.single("avatar"), // Add multer middleware for handling file uploads
  checkEmployerToken,
  updateProfileValidation,
  authController.updateProfile
);

router.post(
  "/updatePassword",
  checkEmployerToken,
  updatePasswordValidation,
  
  authController.updatePassword
);

router.post(
  "/forgotPassword",
  forgotPasswordValidation,
  authController.forgotPassword
);

router.post("/verifyEmail",checkEmployerToken, verifyEmailValidation, authController.verifyEmail);
// router.post("/me", authMiddleware, authController.me);
router.post(
  "/verifyMobile",
  checkEmployerToken,
  verifyMobileValidation,
  authController.verifyMobile
);

router.post(
  "/resetPassword",
  resetPasswordValidation,
  authController.resetPassword
);
router.post(
  "/showEmployer",
  checkEmployerToken,
  authController.showEmployer
);
router.post("/logout", authController.logout);

module.exports = router;
