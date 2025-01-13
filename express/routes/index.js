const express = require("express");
const router = express.Router();

const candidatesAuthRoutes = require("./candidate/authRoutes");
const employersAuthRoutes = require("./employer/authRoute");
// const roleRoutes = require("./roleRoutes");
// const designationRoutes = require("./designationRoutes");
// const userRoutes = require("./userRoutes");
// const priorityRoutes = require("./priorityRoutes");

router.use("/candidate", candidatesAuthRoutes);
router.use("/employer", employersAuthRoutes);
// router.use("/roles", roleRoutes);
// router.use("/designations", designationRoutes);
// router.use("/users", userRoutes);
// router.use("/priorities", priorityRoutes);

module.exports = router;
