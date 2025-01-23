const express = require("express");
const router = express.Router();

const candidatesAuthRoutes = require("./candidate/authRoutes");
const employersAuthRoutes = require("./employer/authRoute");
const countryRoutes = require("./countryRoutes");
const adminsAuthRoutes = require("./admin/authRoutes");
const adminRoutes = require("./admin/adminRoutes");
const designationRoutes = require("./designationRoutes");
const stateRoutes = require("./stateRoutes");
const cityRoutes = require("./cityRoutes");
const subjectRoutes = require("./subjectRoutes");
const typeOfInstituteRoutes = require("./typeOfInstituteRoutes");
const employerSubscriptionFeatureRoutes = require("./employerSubscriptionFeatureRoutes")
const candidateSubscriptionFeatureRoutes = require("./candidateSubscriptionFeatureRoutes")
const employerPlanRoutes = require("./employerPlanRoutes")
const candidatePlanRoutes = require("./candidatePlanRoutes")

router.use("/candidate", candidatesAuthRoutes);
router.use("/employer", employersAuthRoutes);
router.use("/countries", countryRoutes);
router.use("/admin", adminsAuthRoutes);
router.use("/admin", adminRoutes);
router.use("/states", stateRoutes);
router.use("/designations", designationRoutes);
router.use("/cities", cityRoutes);
router.use("/subjects", subjectRoutes);
router.use("/types_of_institutes", typeOfInstituteRoutes);
router.use("/employer_subscription_features", employerSubscriptionFeatureRoutes);
router.use("/candidate_subscription_features", candidateSubscriptionFeatureRoutes);
router.use("/employer_plans", employerPlanRoutes);
router.use("/candidate_plans", candidatePlanRoutes);
// router.use("/priorities", priorityRoutes);

module.exports = router;
