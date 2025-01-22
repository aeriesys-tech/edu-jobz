const { State } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addState = async (req, res) => {
  try {
    const { state, country_id } = req.body;

    // Check if the state already exists
    const existingState = await State.findOne({
      where: { state },
    });
    if (existingState) {
      return sendResponse(req, res, 400, false, "State already exists", null, {
        state: "State already exists",
      });
    }

    // Create the new state
    const newState = await State.create({ state, country_id });

    // Invalidate cache by deleting the cached states key
    await redisClient.del("states");
    sendResponse(req, res, 200, true, "State created successfully", newState);
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateState = async (req, res) => {
  try {
    const { state_id, state, country_id } = req.body;

    // Check if state_id and state are provided
    if (!state_id || !state || !country_id) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "State ID, state and Country Id are required",
        null,
        {
          state: "state are required",
          country_id: "Country ID are required",
        }
      );
    }

    // Check if the state exists
    const existingState = await State.findOne({
      where: { state_id },
    });
    if (!existingState) {
      return sendResponse(req, res, 404, false, "State not found", null, {
        state: "State not found",
      });
    }

    // Update the state
    existingState.state = state;
    await existingState.save();
    // Invalidate cache by deleting the cached states key
    await redisClient.del("states");

    sendResponse(
      req,
      res,
      200,
      true,
      "State updated successfully",
      existingState
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteState = async (req, res) => {
  try {
    const { state_id } = req.body;

    // Fetch the state including soft-deleted records
    const state = await State.findOne({
      where: { state_id },
      paranoid: false, // Allow fetching of soft-deleted states
    });

    if (!state) {
      return sendResponse(req, res, 404, false, "State not found");
    }

    // If the state is marked as deleted, restore it
    if (state.deletedAt) {
      await state.restore();
      // Invalidate cache by deleting the cached states key
      await redisClient.del("states");
      return sendResponse(
        req,
        res,
        200,
        true,
        "State restored successfully",
        state
      );
    } else {
      // Soft delete the state
      await state.destroy();
      // Invalidate cache by deleting the cached states key
      await redisClient.del("states");
      return sendResponse(
        req,
        res,
        200,
        true,
        "State deleted successfully",
        state
      );
    }
  } catch (error) {
    console.error("Error in deleteState function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get
const getStates = async (req, res) => {
  try {
   
    const cachedStates = await redisClient.get("states");

    if (cachedStates) {
      return sendResponse(
        req,
        res,
        200,
        true,
        "States fetched successfully",
        JSON.parse(cachedStates)
      );
    }

    const states = await State.findAll({
      where: {
        deleted_at: null, // Explicitly ensure we only fetch active states
      },
      order: [["state_id", "ASC"]],
    });
    // Cache the states
    await redisClient.setEx("states", 3600, JSON.stringify(states));
    sendResponse(req, res, 200, true, "States fetched successfully", states);
  } catch (error) {
    console.error("Error in getStates function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateStates = async (req, res) => {
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
        [Op.or]: [{ state: { [Op.iLike]: `%${search}%` } }],
      }),
    };

    // Fetch states with pagination and searching
    const states = await State.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: states.rows,
      totalPages: Math.ceil(states.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: states.count,
    };
    sendResponse(
      req,
      res,
      200,
      true,
      "States fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateStates function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
  addState,
  updateState,
  deleteState,
  getStates,
  paginateStates,
};
