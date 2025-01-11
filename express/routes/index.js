const express = require("express");
const router = express.Router();

const candidatesAuthRoutes = require("./candidate/authRoutes");
const employeesAuthRoutes = require("./employee/authRoute");
// const roleRoutes = require("./roleRoutes");
// const designationRoutes = require("./designationRoutes");
// const userRoutes = require("./userRoutes");
// const priorityRoutes = require("./priorityRoutes");

router.use("/candidate", candidatesAuthRoutes);
router.use("/employee", employeesAuthRoutes);
// router.use("/roles", roleRoutes);
// router.use("/designations", designationRoutes);
// router.use("/users", userRoutes);
// router.use("/priorities", priorityRoutes);

module.exports = router;
