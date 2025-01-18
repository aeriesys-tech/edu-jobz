const { Country } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addCountry = async (req, res) => {
  try {
    const { country } = req.body;

    // Check if the country already exists
    const existingCountry = await Country.findOne({
      where: { country },
    });
    if (existingCountry) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Country already exists",
        null,
        {
          country: "Country already exists",
        }
      );
    }

    // Create the new country
    const newCountry = await Country.create({ country });

    // Invalidate cache by deleting the cached countries key
    await redisClient.del("countries");
    sendResponse(
      req,
      res,
      200,
      true,
      "Country created successfully",
      newCountry
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateCountry = async (req, res) => {
  try {
    const { country_id, country } = req.body;

    // Check if country_id and country are provided
    if (!country_id || !country) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Country ID and country are required",
        null,
        {
          country: "Country ID and country are required",
        }
      );
    }

    // Check if the country exists
    const existingCountry = await Country.findOne({
      where: { country_id },
    });
    if (!existingCountry) {
      return sendResponse(req, res, 404, false, "Country not found", null, {
        country: "Country not found",
      });
    }

    // Update the country
    existingCountry.country = country;
    await existingCountry.save();
    // Invalidate cache by deleting the cached countries key
    await redisClient.del("countries");

    sendResponse(
      req,
      res,
      200,
      true,
      "Country updated successfully",
      existingCountry
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteCountry = async (req, res) => {
  try {
    const { country_id } = req.body;

    // Fetch the country including soft-deleted records
    const country = await Country.findOne({
      where: { country_id },
      paranoid: false, // Allow fetching of soft-deleted countries
    });

    if (!country) {
      return sendResponse(req, res, 404, false, "Country not found");
    }

    // If the country is marked as deleted, restore it
    if (country.deletedAt) {
      await country.restore();
      // Invalidate cache by deleting the cached countries key
      await redisClient.del("countries");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Country restored successfully",
        country
      );
    } else {
      // Soft delete the country
      await country.destroy();
      // Invalidate cache by deleting the cached countries key
      await redisClient.del("countries");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Country deleted successfully",
        country
      );
    }
  } catch (error) {
    console.error("Error in deleteCountry function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get
const getCountries = async (req, res) => {
  try {
    const cachedCountries = await redisClient.get("countries");

    if (cachedCountries) {
      return sendResponse(
        req,
        res,
        200,
        true,
        "Countries fetched successfully",
        JSON.parse(cachedCountries)
      );
    }

    const countries = await Country.findAll({
      where: {
        deletedAt: null, // Explicitly ensure we only fetch active countries
      },
      order: [["country_id", "ASC"]],
    });
    // Cache the countries
    await redisClient.setEx("countries", 3600, JSON.stringify(countries));
    sendResponse(
      req,
      res,
      200,
      true,
      "Countries fetched successfully",
      countries
    );
  } catch (error) {
    console.error("Error in getCountries function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateCountries = async (req, res) => {
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
        [Op.or]: [{ country: { [Op.iLike]: `%${search}%` } }],
      }),
    };

    // Fetch countries with pagination and searching
    const countries = await Country.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: countries.rows,
      totalPages: Math.ceil(countries.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: countries.count,
    };
    sendResponse(
      req,
      res,
      200,
      true,
      "Countries fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateCountries function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
  addCountry,
  updateCountry,
  deleteCountry,
  getCountries,
  paginateCountries,
};
