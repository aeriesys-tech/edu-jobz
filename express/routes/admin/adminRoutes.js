const express = require("express");
const router = express.Router();

const {
  addAdminValidation,
  updateAdminValidation,
  deleteAdminValidation,
  paginateAdminsValidation,
} = require("../../validations/admin/adminValidation");
const adminController = require("../../controllers/admin/adminController");
const authMiddleware = require("../../middleware/admin/authMiddleware");

router.post(
  "/addAdmin",
  authMiddleware,
  addAdminValidation,
  adminController.addAdmin
);
router.post(
  "/updateAdmin",
  authMiddleware,
  updateAdminValidation,
  adminController.updateAdmin
);
router.post(
  "/deleteAdmin",
  authMiddleware,
  deleteAdminValidation,
  adminController.deleteAdmin
);

router.post("/getAdmins", authMiddleware, adminController.getAdmins);
router.post(
  "/paginateAdmins",
  authMiddleware,
  paginateAdminsValidation,
  adminController.paginateAdmins
);

module.exports = router;
