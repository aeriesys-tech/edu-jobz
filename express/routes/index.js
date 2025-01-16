const express = require("express");
const router = express.Router();

const candidatesAuthRoutes = require("./candidate/authRoutes");
const employersAuthRoutes = require("./employer/authRoute");
const designationRoutes = require("./designationRoutes");
const adminsAuthRoutes = require("./admin/authRoutes");
const adminRoutes = require("./admin/adminRoutes");
// const designationRoutes = require("./designationRoutes");
// const userRoutes = require("./userRoutes");
// const priorityRoutes = require("./priorityRoutes");

router.use("/candidate", candidatesAuthRoutes);
router.use("/employer", employersAuthRoutes);
router.use("/designations", designationRoutes);
router.use("/admin", adminsAuthRoutes);
router.use("/admin", adminRoutes);
// router.use("/roles", roleRoutes);
// router.use("/designations", designationRoutes);

// router.use("/priorities", priorityRoutes);

module.exports = router;
