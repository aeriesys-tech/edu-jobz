const { CandidatePlan } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addCandidatePlan = async (req, res) => {
  try {
    const { candidate_subscription_feature_id,feature_value } = req.body;

    // Check if the Candidate Subscription Feature already exists
    const existingCandidatePlan = await CandidatePlan.findOne({
      where: { candidate_subscription_feature_id, feature_value },
    });
    if (existingCandidatePlan) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Candidate Plan already exists",
        null,
        {
          feature_value: "Feature Value already exists",
        }
      );
    }

    // Create the new Candidate Subscription Feature
    const newCandidatePlan = await CandidatePlan.create({ candidate_subscription_feature_id,feature_value});

    // Invalidate cache by deleting the cached Candidate Subscription Features key
    await redisClient.del("candidate_plans");
    sendResponse(
      req,
      res,
      200,
      true,
      "Candidate Plan created successfully",
      newCandidatePlan
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateCandidatePlan = async (req, res) => {
  try {
    const { candidate_plan_id, candidate_subscription_feature_id, feature_value } = req.body;

    // Check if Candidate Subscription Feature_id and Candidate Subscription Feature are provided
    if (!candidate_plan_id||!feature_value||!candidate_subscription_feature_id) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Feature Name is required",
        null,
        {
            candidate_plan_id:"Candidate Plan ID is required", 
            candidate_subscription_feature_id:"Candidate Subscription Feature ID is required", 
          feature_value: "Feature Value is required",
        }
      );
    }

    // Check if the Candidate Subscription Feature exists
    const existingCandidatePlan = await CandidatePlan.findOne({
      where: { candidate_plan_id },
    });
    if (!existingCandidatePlan) {
      return sendResponse(req, res, 404, false, "Candidate Plan is found", null, {
        candidate_subscription_feature_id: "Feature name not found",
        feature_value:"Feature value not found"
      });
    }

    // Update the Candidate Subscription Feature
    existingCandidatePlan.candidate_subscription_feature_id = candidate_subscription_feature_id;
    existingCandidatePlan.feature_value = feature_value;
    await existingCandidatePlan.save();
    // Invalidate cache by deleting the cached Candidate Subscription Features key
    await redisClient.del("candidatePlan");

    sendResponse(
      req,
      res,
      200,
      true,
      "Candidate Plan updated successfully",
      existingCandidatePlan
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteCandidatePlan = async (req, res) => {
  try {
    const { candidate_plan_id } = req.body;

    // Fetch the Candidate Subscription Feature including soft-deleted records
    const candidatePlan = await CandidatePlan.findOne({
      where: { candidate_plan_id },
      paranoid: false, // Allow fetching of soft-deleted Candidate Subscription Features
    });

    if (!candidatePlan) {
      return sendResponse(req, res, 404, false, "Candidate Plan not found");
    }

    // If the Candidate Subscription Feature is marked as deleted, restore it
    if (candidatePlan.deleted_at) {
      await candidatePlan.restore();
      // Invalidate cache by deleting the cached Candidate Subscription Features key
      await redisClient.del("candidate_plan");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Candidate Plan restored successfully",
        candidatePlan
      );
    } else {
      // Soft delete the Candidate Subscription Feature
      await candidatePlan.destroy();
      // Invalidate cache by deleting the cached Candidate Subscription Features key
      await redisClient.del("candidate_plan");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Candidate Plan deleted successfully",
        candidatePlan
      );
    }
  } catch (error) {
    console.error("Error in deleteCandidatePlan function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get
const getCandidatePlans = async (req, res) => {
  try {
    const cachedCandidateSubscriptionFeatures = await redisClient.get("candidates_subscription_features");

    if (cachedCandidateSubscriptionFeatures) {
      return sendResponse(
        req,
        res,
        200,
        true,
        " fetched successfully",
        JSON.parse(cachedCandidateSubscriptionFeatures)
      );
    }

    const candidatePlans = await CandidatePlan.findAll({
      where: {
        deletedAt: null, // Explicitly ensure we only fetch active Candidate Subscription Features
      },
      order: [["candidate_subscription_feature_id", "ASC"]],
    });
    // Cache the Candidate Subscription Features
    await redisClient.setEx("candidateSubscriptionFeatures", 3600, JSON.stringify(candidatePlans));
    sendResponse(
      req,
      res,
      200,
      true,
      "Candidate Plans fetched successfully",
      candidatePlans
    );
  } catch (error) {
    console.error("Error in getCandidatePlans function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateCandidatePlans = async (req, res) => {
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

    // Fetch Candidate Subscription Features with pagination and searching
    const candidatePlans = await CandidatePlan.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: candidatePlans.rows,
      totalPages: Math.ceil(candidatePlans.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: candidatePlans.count,
    };
    sendResponse(
      req,
      res,
      200,
      true,
      "Candidate Plans fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateCandidatePlans function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
addCandidatePlan,
updateCandidatePlan,
deleteCandidatePlan,
getCandidatePlans,
paginateCandidatePlans,
};
