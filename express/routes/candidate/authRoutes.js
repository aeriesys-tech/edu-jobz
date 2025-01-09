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
} = require("../../validations/candidate/authValidation");
const upload = require("../../middleware/candidate/multerMiddleware");

// Registration
router.post(
  "/registration",
  registrationValidation,
  authController.registration
);

// login
router.post("/login", loginValidation, authController.login);

router.post(
  "/updateProfile",
  upload.single("avatar"), // Add multer middleware for handling file uploads
  updateProfileValidation,
  authMiddleware,
  authController.updateProfile
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
  "/resetPassword",
  resetPasswordValidation,
  authController.resetPassword
);
router.post("/logout", authMiddleware, authController.logout);

module.exports = router;
