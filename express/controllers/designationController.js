const { Designation } = require("../models");
const { sendResponse } = require("../services/admin/responseService");
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
      return sendResponse(res, 400, false, "Designation already exists", null, {
        designation: "Designation already exists",
      });
    }

    // Create the new designation
    const newDesignation = await Designation.create({ designation });

    // Invalidate cache by deleting the cached designations key
    await redisClient.del("designations");
    sendResponse(
      res,
      200,
      true,
      "Designation created successfully",
      newDesignation
    );
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// Update
const updateDesignation = async (req, res) => {
  try {
    const { designation_id, designation } = req.body;

    // Check if designation_id and designation are provided
    if (!designation_id || !designation) {
      return sendResponse(
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
      return sendResponse(res, 404, false, "Designation not found", null, {
        designation: "Designation not found",
      });
    }

    // Update the designation
    existingDesignation.designation = designation;
    await existingDesignation.save();
    // Invalidate cache by deleting the cached designations key
    await redisClient.del("designations");

    sendResponse(
      res,
      200,
      true,
      "Designation updated successfully",
      existingDesignation
    );
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// Delete
const deleteDesignation = async (req, res) => {
  try {
    const { designation_id } = req.body;

    // Fetch the designation including soft-deleted records
    const designation = await Designation.findOne({
      where: { designation_id },
      paranoid: false, // Allow fetching of soft-deleted designations
    });

    if (!designation) {
      return sendResponse(res, 404, false, "Designation not found");
    }

    // If the designation is marked as deleted, restore it
    if (designation.deletedAt) {
      await designation.restore();
      // Invalidate cache by deleting the cached designations key
      await redisClient.del("designations");
      return sendResponse(
        res,
        200,
        true,
        "Designation restored successfully",
        designation
      );
    } else {
      // Soft delete the designation
      await designation.destroy();
      // Invalidate cache by deleting the cached designations key
      await redisClient.del("designations");
      return sendResponse(
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
    // Check if designations are cached
    const cachedDesignations = await redisClient.get("designations");
    if (cachedDesignations) {
      return sendResponse(
        res,
        200,
        true,
        "Designations fetched successfully",
        JSON.parse(cachedDesignations)
      );
    }

    const designations = await Designation.findAll({
      where: {
        deletedAt: null, // Explicitly ensure we only fetch active designations
      },
      order: [["designation_id", "ASC"]],
    });
    // Cache the designations
    await redisClient.setEx("designations", 3600, JSON.stringify(designations));
    sendResponse(
      res,
      200,
      true,
      "Designations fetched successfully",
      designations
    );
  } catch (error) {
    console.error("Error in getDesignations function:", error);
    sendResponse(res, 500, false, error.message);
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

    // Fetch designations with pagination and searching
    const designations = await Designation.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: designations.rows,
      totalPages: Math.ceil(designations.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: designations.count,
    };
    sendResponse(
      res,
      200,
      true,
      "Designations fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateDesignations function:", error);
    sendResponse(res, 500, false, error.message);
  }
};

module.exports = {
  addDesignation,
  updateDesignation,
  deleteDesignation,
  getDesignations,
  paginateDesignations,
};
