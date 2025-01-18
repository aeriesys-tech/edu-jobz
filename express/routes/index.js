const express = require("express");
const router = express.Router();

const candidatesAuthRoutes = require("./candidate/authRoutes");
const employersAuthRoutes = require("./employer/authRoute");
const countryRoutes = require("./countryRoutes");
const adminsAuthRoutes = require("./admin/authRoutes");
const adminRoutes = require("./admin/adminRoutes");
const designationRoutes = require("./designationRoutes");
const stateRoutes = require("./stateRoutes");
// const priorityRoutes = require("./priorityRoutes");

router.use("/candidate", candidatesAuthRoutes);
router.use("/employer", employersAuthRoutes);
router.use("/countries", countryRoutes);
router.use("/admin", adminsAuthRoutes);
router.use("/admin", adminRoutes);
router.use("/states", stateRoutes);
router.use("/designations", designationRoutes);

// router.use("/priorities", priorityRoutes);

module.exports = router;
