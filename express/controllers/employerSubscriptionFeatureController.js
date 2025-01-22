const { EmployerSubscriptionFeature } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addEmployerSubscriptionFeature = async (req, res) => {
  try {
    const { feature_name,description } = req.body;

    // Check if the Employer Subscription Feature already exists
    const existingEmployerSubscriptionFeature = await EmployerSubscriptionFeature.findOne({
      where: { feature_name },
    });
    if (existingEmployerSubscriptionFeature) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Employer Subscription Feature already exists",
        null,
        {
          feature_name: "Feature Name already exists",
        }
      );
    }

    // Create the new Employer Subscription Feature
    const newEmployerSubscriptionFeature = await EmployerSubscriptionFeature.create({ feature_name, description});

    // Invalidate cache by deleting the cached Employer Subscription Features key
    await redisClient.del("employer_subscription_features");
    sendResponse(
      req,
      res,
      200,
      true,
      "Employer Subscription Feature created successfully",
      newEmployerSubscriptionFeature
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateEmployerSubscriptionFeature  = async (req, res) => {
  try {
    const { employer_subscription_feature_id, feature_name,description } = req.body;

    // Check if Employer Subscription Feature_id and Employer Subscription Feature are provided
    if (!feature_name) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Feature Name is required",
        null,
        {
          feature_name: "Feature name is required",
        }
      );
    }

    // Check if the Employer Subscription Feature exists
    const existingEmployerSubscriptionFeature = await EmployerSubscriptionFeature.findOne({
      where: { employer_subscription_feature_id },
    });
    if (!existingEmployerSubscriptionFeature) {
      return sendResponse(req, res, 404, false, "Employer Subscription Feature not found", null, {
        feature_name: "Feature name not found",
      });
    }

    // Update the Employer Subscription Feature
    existingEmployerSubscriptionFeature.feature_name = feature_name;
    await existingEmployerSubscriptionFeature.save();
    // Invalidate cache by deleting the cached Employer Subscription Features key
    await redisClient.del("employerSubscriptionFeature");

    sendResponse(
      req,
      res,
      200,
      true,
      "Employer Subscription Feature updated successfully",
      existingEmployerSubscriptionFeature
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteEmployerSubscriptionFeature = async (req, res) => {
  try {
    const { employer_subscription_feature_id } = req.body;

    // Fetch the Employer Subscription Feature including soft-deleted records
    const employerSubscriptionFeature = await EmployerSubscriptionFeature.findOne({
      where: { employer_subscription_feature_id },
      paranoid: false, // Allow fetching of soft-deleted Employer Subscription Features
    });

    if (!employerSubscriptionFeature) {
      return sendResponse(req, res, 404, false, "Employer Subscription Feature not found");
    }

    // If the Employer Subscription Feature is marked as deleted, restore it
    if (employerSubscriptionFeature.deleted_at) {
      await employerSubscriptionFeature.restore();
      // Invalidate cache by deleting the cached Employer Subscription Features key
      await redisClient.del("employer_subscription_features");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Employer Subscription Feature restored successfully",
        employerSubscriptionFeature
      );
    } else {
      // Soft delete the Employer Subscription Feature
      await employerSubscriptionFeature.destroy();
      // Invalidate cache by deleting the cached Employer Subscription Features key
      await redisClient.del("employer_subscription_feature");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Employer Subscription Feature deleted successfully",
        employerSubscriptionFeature
      );
    }
  } catch (error) {
    console.error("Error in deleteEmployerSubscriptionFeature function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get
const getEmployerSubscriptionFeatures = async (req, res) => {
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

    const employerSubscriptionFeatures = await EmployerSubscriptionFeature.findAll({
      where: {
        deletedAt: null, // Explicitly ensure we only fetch active Employer Subscription Features
      },
      order: [["employer_subscription_feature_id", "ASC"]],
    });
    // Cache the Employer Subscription Features
    await redisClient.setEx("employerSubscriptionFeatures", 3600, JSON.stringify(employerSubscriptionFeatures));
    sendResponse(
      req,
      res,
      200,
      true,
      "Employer Subscription Features fetched successfully",
      employerSubscriptionFeatures
    );
  } catch (error) {
    console.error("Error in getEmployerSubscriptionFeatures function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateEmployerSubscriptionFeatures = async (req, res) => {
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
    const employerSubscriptionFeatures = await EmployerSubscriptionFeature.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: employerSubscriptionFeatures.rows,
      totalPages: Math.ceil(employerSubscriptionFeatures.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: employerSubscriptionFeatures.count,
    };
    sendResponse(
      req,
      res,
      200,
      true,
      "Employer Subscription Features fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateEmployerSubscriptionFeatures function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
addEmployerSubscriptionFeature,
updateEmployerSubscriptionFeature,
deleteEmployerSubscriptionFeature,
getEmployerSubscriptionFeatures,
paginateEmployerSubscriptionFeatures,
};
