const express = require("express");
const router = express.Router();

const candidatesAuthRoutes = require("./candidate/authRoutes");
<<<<<<< HEAD
const employersAuthRoutes = require("./employer/authRoute");
const countryRoutes = require("./countryRoutes");
const adminsAuthRoutes = require("./admin/authRoutes");
const adminRoutes = require("./admin/adminRoutes");
const designationRoutes = require("./designationRoutes");
=======
const employeesAuthRoutes = require("./employee/authRoute");
// const roleRoutes = require("./roleRoutes");
// const designationRoutes = require("./designationRoutes");
>>>>>>> 8fdea84 (employee auth)
// const userRoutes = require("./userRoutes");
// const priorityRoutes = require("./priorityRoutes");

router.use("/candidate", candidatesAuthRoutes);
<<<<<<< HEAD
router.use("/employer", employersAuthRoutes);
router.use("/countries", countryRoutes);
router.use("/admin", adminsAuthRoutes);
router.use("/admin", adminRoutes);
=======
router.use("/employee", employeesAuthRoutes);
>>>>>>> 8fdea84 (employee auth)
// router.use("/roles", roleRoutes);
router.use("/designations", designationRoutes);

// router.use("/priorities", priorityRoutes);

module.exports = router;
