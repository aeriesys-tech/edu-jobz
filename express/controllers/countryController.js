const { Country } = require("../models");
const { sendResponse } = require("../services/responseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

//Add
const addCountry = async (req, res) => {
  try {
    const { Country } = req.body;

    // Check if the Country already exists
    const existingCountry = await Country.findOne({ where: { Country } });
    if (existingCountry) {
      return sendResponse(res, 400, false, "Country already exists", null, {
        Country: "Country already exists",
      });
    }

    // Create the new Country
    const newCountry = await Country.create({ Country });

    // Invalidate cache by deleting the cached Countries key
    await redisClient.del("Countries");

    sendResponse(res, 200, true, "Country created successfully", newCountry);
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

//update
const updateCountry = async (req, res) => {
  try {
    const { Country_id, Country } = req.body;

    // Check if the Country exists
    const existingCountry = await Country.findOne({
      where: { Country_id: Country_id },
    });
    if (!existingCountry) {
      return sendResponse(res, 404, false, "Country not found", null, {
        Country: "Country not found",
      });
    }

    // Update the Country
    existingCountry.Country = Country;
    await existingCountry.save();

    // Invalidate cache by deleting the cached Countries key
    await redisClient.del("Countries");

    sendResponse(
      res,
      200,
      true,
      "Country updated successfully",
      existingCountry
    );
    // Check if the Country_id and Country are provided
    if (!Country_id || !Country) {
      return sendResponse(
        res,
        400,
        false,
        "Country ID and Country are required",
        null,
        {
          Country: "Country ID and Country are required",
        }
      );
    }
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

const getCountries = async (req, res) => {
  try {
    // Define a Redis key for Countries
    const redisKey = "Countries";

    // Check if data exists in Redis cache
    const cachedCountries = await redisClient.get(redisKey);

    if (cachedCountries) {
      // If Countries are found in Redis, parse and return the cached data
      const Countries = JSON.parse(cachedCountries);
      return sendResponse(
        res,
        200,
        true,
        "Countries fetched successfully from cache",
        Countries
      );
    }

    // Fetch Countries from the database
    const Countries = await Country.findAll({
      where: { deletedAt: null }, // Explicitly ensure we only fetch active Countries
      order: [["Country_id", "ASC"]],
    });

    // Store Countries in Redis for future requests, with a TTL of 1 hour (3600 seconds)
    await redisClient.setEx(redisKey, 3600, JSON.stringify(Countries));

    sendResponse(res, 200, true, "Countries fetched successfully", Countries);
  } catch (error) {
    console.error("Error in getCountries function:", error);
    sendResponse(res, 500, false, error.message);
  }
};

//Delete
const deleteCountry = async (req, res) => {
  try {
    const { Country_id } = req.body;

    // Fetch the Country including soft-deleted records
    const Country = await Country.findOne({
      where: { Country_id },
      paranoid: false, // Allow fetching of soft-deleted Countries
    });

    if (!Country) {
      return sendResponse(res, 404, false, "Country not found");
    }

    // If the Country is marked as deleted, restore it
    if (Country.deletedAt) {
      // Note: Use 'deletedAt' directly instead of 'deleted_at'
      await Country.restore(); // Restore the record
      // Invalidate cache by deleting the cached Countries key
      await redisClient.del("Countries");
      return sendResponse(
        res,
        200,
        true,
        "Country restored successfully",
        Country
      );
    } else {
      // Soft delete the Country
      await Country.destroy(); // Soft delete the record
      // Invalidate cache by deleting the cached Countries key
      await redisClient.del("Countries");
      return sendResponse(
        res,
        200,
        true,
        "Country deleted successfully",
        Country
      );
    }
  } catch (error) {
    console.error("Error in deleteCountry function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

module.exports = {
  addCountry,
  updateCountry,
  getCountries,
  deleteCountry,
};
