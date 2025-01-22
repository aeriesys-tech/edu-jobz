const { City } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addCity = async (req, res) => {
  try {
    const { state_id, city } = req.body;

    // Check if the state already exists
    const existingCity = await City.findOne({
      where: { state_id, city },
    });
    if (existingCity) {
      return sendResponse(req, res, 400, false, "City already exists", null, {
        city: "City already exists",
      });
    }

    // Create the new city
    const newCity = await City.create({ state_id, city });

    // Invalidate cache by deleting the cached states key
    await redisClient.del("cities");
    sendResponse(req, res, 200, true, "City created successfully", newCity);
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateCity = async (req, res) => {
  try {
    const { state_id, city_id, city } = req.body;

    // Check if state_id and state are provided
    if (!state_id || !city || !city_id) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "State ID, City ID and City are required",
        null,
        {
          city: "city are required",
          state_id: "State ID are required",
        }
      );
    }

    // Check if the city exists
    const existingCity = await City.findOne({
      where: { city_id },
    });
    if (!existingCity) {
      return sendResponse(req, res, 404, false, "City not found", null, {
        city: "City not found",
      });
    }

    // Update the city
    existingCity.city = city;
    await existingCity.save();
    // Invalidate cache by deleting the cached states key
    await redisClient.del("cities");

    sendResponse(
      req,
      res,
      200,
      true,
      "City updated successfully",
      existingCity
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteCity = async (req, res) => {
  try {
    const { city_id } = req.body;

    // Fetch the state including soft-deleted records
    const city = await City.findOne({
      where: { city_id },
      paranoid: false, // Allow fetching of soft-deleted states
    });

    if (!city) {
      return sendResponse(req, res, 404, false, "City not found");
    }

    // If the City is marked as deleted, restore it
    if (city.deletedAt) {
      await city.restore();
      // Invalidate cache by deleting the cached states key
      await redisClient.del("cities");
      return sendResponse(
        req,
        res,
        200,
        true,
        "City restored successfully",
        city
      );
    } else {
      // Soft delete the state
      await city.destroy();
      // Invalidate cache by deleting the cached states key
      await redisClient.del("cites");
      return sendResponse(
        req,
        res,
        200,
        true,
        "City deleted successfully",
        city
      );
    }
  } catch (error) {
    console.error("Error in deleteCity function:", error);
    return sendResponse(req,res, 500, false, error.message);
  }
};

// Get
const getCities = async (req, res) => {
  try {
    const { state_id } = req.body;
    const cachedCities = await redisClient.get("cities");

    if (cachedCities) {
      return sendResponse(
        req,
        res,
        200,
        true,
        "Cities fetched successfully",
        JSON.parse(cachedCities)
      );
    }

    const cities = await City.findAll({
      where: {
        state_id,
        deleted_at: null, // Explicitly ensure we only fetch active states
      },
      order: [["city_id", "ASC"]],
    });
    // Cache the cities
    await redisClient.setEx("cities", 3600, JSON.stringify(cities));
    sendResponse(req, res, 200, true, "Cities fetched successfully", cities);
  } catch (error) {
    console.error("Error in getCities function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateCities = async (req, res) => {
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

    // Fetch cities with pagination and searching
    const cities = await City.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: cities.rows,
      totalPages: Math.ceil(cities.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: cities.count,
    };
    sendResponse(
      req,
      res,
      200,
      true,
      "Cities fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateStates function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
  addCity,
  updateCity,
  deleteCity,
  getCities,
  paginateCities,
};
