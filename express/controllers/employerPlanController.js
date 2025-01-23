const { EmployerPlan } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addEmployerPlan = async (req, res) => {
  try {
    const { employer_subscription_feature_id,feature_value } = req.body;

    // Check if the Employer Subscription Feature already exists
    const existingEmployerPlan = await EmployerPlan.findOne({
      where: { employer_subscription_feature_id, feature_value },
    });
    if (existingEmployerPlan) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Employer Plan already exists",
        null,
        {
          feature_value: "Feature Value already exists",
        }
      );
    }

    // Create the new Employer Subscription Feature
    const newEmployerPlan = await EmployerPlan.create({ employer_subscription_feature_id,feature_value});

    // Invalidate cache by deleting the cached Employer Subscription Features key
    await redisClient.del("employer_plans");
    sendResponse(
      req,
      res,
      200,
      true,
      "Employer Plan created successfully",
      newEmployerPlan
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateEmployerPlan = async (req, res) => {
  try {
    const { employer_plan_id, employer_subscription_feature_id, feature_value } = req.body;

    // Check if Employer Subscription Feature_id and Employer Subscription Feature are provided
    if (!employer_plan_id||!feature_value||!employer_subscription_feature_id) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Feature Name is required",
        null,
        {
            employer_plan_id:"Employer Plan ID is required", 
            employer_subscription_feature_id:"Employer Subscription Feature ID is required", 
          feature_value: "Feature Value is required",
        }
      );
    }

    // Check if the Employer Subscription Feature exists
    const existingEmployerPlan = await EmployerPlan.findOne({
      where: { employer_plan_id },
    });
    if (!existingEmployerPlan) {
      return sendResponse(req, res, 404, false, "Employer Plan is found", null, {
        employer_subscription_feature_id: "Feature name not found",
        feature_value:"Feature value not found"
      });
    }

    // Update the Employer Subscription Feature
    existingEmployerPlan.employer_subscription_feature_id = employer_subscription_feature_id;
    existingEmployerPlan.feature_value = feature_value;
    await existingEmployerPlan.save();
    // Invalidate cache by deleting the cached Employer Subscription Features key
    await redisClient.del("employerPlan");

    sendResponse(
      req,
      res,
      200,
      true,
      "Employer Plan updated successfully",
      existingEmployerPlan
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteEmployerPlan = async (req, res) => {
  try {
    const { employer_plan_id } = req.body;

    // Fetch the Employer Subscription Feature including soft-deleted records
    const employerPlan = await EmployerPlan.findOne({
      where: { employer_plan_id },
      paranoid: false, // Allow fetching of soft-deleted Employer Subscription Features
    });

    if (!employerPlan) {
      return sendResponse(req, res, 404, false, "Employer Plan not found");
    }

    // If the Employer Subscription Feature is marked as deleted, restore it
    if (employerPlan.deleted_at) {
      await employerPlan.restore();
      // Invalidate cache by deleting the cached Employer Subscription Features key
      await redisClient.del("employer_plan");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Employer Plan restored successfully",
        employerPlan
      );
    } else {
      // Soft delete the Employer Subscription Feature
      await employerPlan.destroy();
      // Invalidate cache by deleting the cached Employer Subscription Features key
      await redisClient.del("employer_plan");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Employer Plan deleted successfully",
        employerPlan
      );
    }
  } catch (error) {
    console.error("Error in deleteEmployerPlan function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get
const getEmployerPlans = async (req, res) => {
  try {
    const cachedEmployerSubscriptionFeatures = await redisClient.get("employers_subscription_features");

    if (cachedEmployerSubscriptionFeatures) {
      return sendResponse(
        req,
        res,
        200,
        true,
        " fetched successfully",
        JSON.parse(cachedEmployerSubscriptionFeatures)
      );
    }

    const employerPlans = await EmployerPlan.findAll({
      where: {
        deletedAt: null, // Explicitly ensure we only fetch active Employer Subscription Features
      },
      order: [["employer_subscription_feature_id", "ASC"]],
    });
    // Cache the Employer Subscription Features
    await redisClient.setEx("employerSubscriptionFeatures", 3600, JSON.stringify(employerPlans));
    sendResponse(
      req,
      res,
      200,
      true,
      "Employer Plans fetched successfully",
      employerPlans
    );
  } catch (error) {
    console.error("Error in getEmployerPlans function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateEmployerPlans = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = "created_at",
      order = "asc",
      search = "",
    } = req.query;

    const offset = (page - 1) * limit;

    // Build the sort object dynamically
    const sort = [[sortBy, order.toUpperCase()]];

    // Implement search filter
    const where = {
      ...(search && {
        [Op.or]: [{ feature_name: { [Op.iLike]: `%${search}%` } }],
      }),
    };

    // Fetch Employer Subscription Features with pagination and searching
    const employerPlans = await EmployerPlan.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: employerPlans.rows,
      totalPages: Math.ceil(employerPlans.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: employerPlans.count,
    };
    sendResponse(
      req,
      res,
      200,
      true,
      "Employer Plans fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateEmployerPlans function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
addEmployerPlan,
updateEmployerPlan,
deleteEmployerPlan,
getEmployerPlans,
paginateEmployerPlans,
};
