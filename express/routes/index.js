const express = require("express");
const router = express.Router();

const authRoutes = require("./candidate/authRoutes");
// const roleRoutes = require("./roleRoutes");
// const designationRoutes = require("./designationRoutes");
// const userRoutes = require("./userRoutes");
// const priorityRoutes = require("./priorityRoutes");

router.use("/candidate", authRoutes);
// router.use("/roles", roleRoutes);
// router.use("/designations", designationRoutes);
// router.use("/users", userRoutes);
// router.use("/priorities", priorityRoutes);

module.exports = router;
