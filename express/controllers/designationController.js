const { Designation } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addDesignation = async (req, res) => {
  try {
    const { designation } = req.body;

    // Check if the designation already exists
    const existingDesignation = await Designation.findOne({
      where: { designation },
    });
    if (existingDesignation) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Designation already exists",
        null,
        {
          designation: "Designation already exists",
        }
      );
    }

    // Create the new designation
    const newDesignation = await Designation.create({ designation });

    // Invalidate cache by deleting the cached countries key
    await redisClient.del("countries");
    sendResponse(
      req,
      res,
      200,
      true,
      "Designation created successfully",
      newDesignation
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateDesignation = async (req, res) => {
  try {
    const { designation_id, designation } = req.body;

    // Check if designation_id and designation are provided
    if (!designation_id || !designation) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Designation ID and designation are required",
        null,
        {
          designation: "Designation ID and designation are required",
        }
      );
    }

    // Check if the designation exists
    const existingDesignation = await Designation.findOne({
      where: { designation_id },
    });
    if (!existingDesignation) {
      return sendResponse(req, res, 404, false, "Designation not found", null, {
        designation: "Designation not found",
      });
    }

    // Update the designation
    existingDesignation.designation = designation;
    await existingDesignation.save();
    // Invalidate cache by deleting the cached countries key
    await redisClient.del("countries");

    sendResponse(
      req,
      res,
      200,
      true,
      "Designation updated successfully",
      existingDesignation
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteDesignation = async (req, res) => {
  try {
    const { designation_id } = req.body;

    // Fetch the designation including soft-deleted records
    const designation = await Designation.findOne({
      where: { designation_id },
      paranoid: false, // Allow fetching of soft-deleted countries
    });

    if (!designation) {
      return sendResponse(req, res, 404, false, "Designation not found");
    }

    // If the designation is marked as deleted, restore it
    if (designation.deletedAt) {
      await designation.restore();
      // Invalidate cache by deleting the cached countries key
      await redisClient.del("countries");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Designation restored successfully",
        designation
      );
    } else {
      // Soft delete the designation
      await designation.destroy();
      // Invalidate cache by deleting the cached countries key
      await redisClient.del("countries");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Designation deleted successfully",
        designation
      );
    }
  } catch (error) {
    console.error("Error in deleteDesignation function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get
const getDesignations = async (req, res) => {
  try {
    const cachedDesignations = await redisClient.get("countries");

    if (cachedDesignations) {
      return sendResponse(
        req,
        res,
        200,
        true,
        "Designations fetched successfully",
        JSON.parse(cachedDesignations)
      );
    }

    const countries = await Designation.findAll({
      where: {
        deletedAt: null, // Explicitly ensure we only fetch active countries
      },
      order: [["designation_id", "ASC"]],
    });
    // Cache the countries
    await redisClient.setEx("countries", 3600, JSON.stringify(countries));
    sendResponse(
      req,
      res,
      200,
      true,
      "Designations fetched successfully",
      countries
    );
  } catch (error) {
    console.error("Error in getDesignations function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateDesignations = async (req, res) => {
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
        [Op.or]: [{ designation: { [Op.iLike]: `%${search}%` } }],
      }),
    };

    // Fetch countries with pagination and searching
    const countries = await Designation.findAndCountAll({
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
      "Designations fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateDesignations function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
  addDesignation,
  updateDesignation,
  deleteDesignation,
  getDesignations,
  paginateDesignations,
};
