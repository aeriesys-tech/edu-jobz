const { CandidateSubscriptionFeature } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addCandidateSubscriptionFeature = async (req, res) => {
  try {
    const { feature_name,description } = req.body;

    // Check if the Candidate Subscription Feature already exists
    const existingCandidateSubscriptionFeature = await CandidateSubscriptionFeature.findOne({
      where: { feature_name },
    });
    if (existingCandidateSubscriptionFeature) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Candidate Subscription Feature already exists",
        null,
        {
          feature_name: "Feature Name already exists",
        }
      );
    }

    // Create the new Candidate Subscription Feature
    const newCandidateSubscriptionFeature = await CandidateSubscriptionFeature.create({ feature_name, description});

    // Invalidate cache by deleting the cached Candidate Subscription Features key
    await redisClient.del("candidate_subscription_features");
    sendResponse(
      req,
      res,
      200,
      true,
      "Candidate Subscription Feature created successfully",
      newCandidateSubscriptionFeature
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateCandidateSubscriptionFeature  = async (req, res) => {
  try {
    const { candidate_subscription_feature_id, feature_name,description } = req.body;

    // Check if Candidate Subscription Feature_id and Candidate Subscription Feature are provided
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

    // Check if the Candidate Subscription Feature exists
    const existingCandidateSubscriptionFeature = await CandidateSubscriptionFeature.findOne({
      where: { candidate_subscription_feature_id },
    });
    if (!existingCandidateSubscriptionFeature) {
      return sendResponse(req, res, 404, false, "Candidate Subscription Feature not found", null, {
        feature_name: "Feature name not found",
      });
    }

    // Update the Candidate Subscription Feature
    existingCandidateSubscriptionFeature.feature_name = feature_name;
    await existingCandidateSubscriptionFeature.save();
    // Invalidate cache by deleting the cached Candidate Subscription Features key
    await redisClient.del("candidateSubscriptionFeature");

    sendResponse(
      req,
      res,
      200,
      true,
      "Candidate Subscription Feature updated successfully",
      existingCandidateSubscriptionFeature
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteCandidateSubscriptionFeature = async (req, res) => {
  try {
    const { candidate_subscription_feature_id } = req.body;

    // Fetch the Candidate Subscription Feature including soft-deleted records
    const candidateSubscriptionFeature = await CandidateSubscriptionFeature.findOne({
      where: { candidate_subscription_feature_id },
      paranoid: false, // Allow fetching of soft-deleted Candidate Subscription Features
    });

    if (!candidateSubscriptionFeature) {
      return sendResponse(req, res, 404, false, "Candidate Subscription Feature not found");
    }

    // If the Candidate Subscription Feature is marked as deleted, restore it
    if (candidateSubscriptionFeature.deleted_at) {
      await candidateSubscriptionFeature.restore();
      // Invalidate cache by deleting the cached Candidate Subscription Features key
      await redisClient.del("candidate_subscription_features");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Candidate Subscription Feature restored successfully",
        candidateSubscriptionFeature
      );
    } else {
      // Soft delete the Candidate Subscription Feature
      await candidateSubscriptionFeature.destroy();
      // Invalidate cache by deleting the cached Candidate Subscription Features key
      await redisClient.del("candidate_subscription_feature");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Candidate Subscription Feature deleted successfully",
        candidateSubscriptionFeature
      );
    }
  } catch (error) {
    console.error("Error in deleteCandidateSubscriptionFeature function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get
const getCandidateSubscriptionFeatures = async (req, res) => {
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

    const candidateSubscriptionFeatures = await CandidateSubscriptionFeature.findAll({
      where: {
        deletedAt: null, // Explicitly ensure we only fetch active Candidate Subscription Features
      },
      order: [["candidate_subscription_feature_id", "ASC"]],
    });
    // Cache the Candidate Subscription Features
    await redisClient.setEx("candidateSubscriptionFeatures", 3600, JSON.stringify(candidateSubscriptionFeatures));
    sendResponse(
      req,
      res,
      200,
      true,
      "Candidate Subscription Features fetched successfully",
      candidateSubscriptionFeatures
    );
  } catch (error) {
    console.error("Error in getCandidateSubscriptionFeatures function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateCandidateSubscriptionFeatures = async (req, res) => {
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
    const candidateSubscriptionFeatures = await CandidateSubscriptionFeature.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: candidateSubscriptionFeatures.rows,
      totalPages: Math.ceil(candidateSubscriptionFeatures.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: candidateSubscriptionFeatures.count,
    };
    sendResponse(
      req,
      res,
      200,
      true,
      "Candidate Subscription Features fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateCandidateSubscriptionFeatures function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
addCandidateSubscriptionFeature,
updateCandidateSubscriptionFeature,
deleteCandidateSubscriptionFeature,
getCandidateSubscriptionFeatures,
paginateCandidateSubscriptionFeatures,
};
