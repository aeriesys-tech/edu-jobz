const { Designation } = require("../models");
const { sendResponse } = require("../services/candidate/responseService");
const { Op } = require("sequelize");

//Add
const addDesignation = async (req, res) => {
  try {
    const { designation, description } = req.body;

    // Check if the designation already exists
    const existingDesignation = await Designation.findOne({ where: { role } });
    if (existingDesignation) {
      return sendResponse(res, 400, false, "Designation already exists", null, {
        designation: "Designation already exists",
      });
    }

    // Create the new role
    const newDesignation = await Designation.create({
      designation,
      description,
    });

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

//update
const updateDesignation = async (req, res) => {
  try {
    const { designation_id, designation, description } = req.body;

    // Check if the role_id and role are provided
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

    // Check if the role exists
    const existingDesignation = await Designation.findOne({
      where: { designation_id: designation_id },
    });
    if (!existingDesignation) {
      return sendResponse(res, 404, false, "Designation not found", null, {
        role: "Designation not found",
      });
    }

    // Update the role
    existingDesignation.designation = designation;
    existingDesignation.description = description;
    await existingDesignation.save();

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

//Delete
const deleteDesignation = async (req, res) => {
  try {
    const { designation_id } = req.body;

    // Fetch the designation including soft-deleted records
    const designation = await Designation.findOne({
      where: { designation_id },
      paranoid: false, // Allow fetching of soft-deleted roles
    });

    if (!designation) {
      return sendResponse(res, 404, false, "Designation not found");
    }

    // If the role is marked as deleted, restore it
    if (designation.deletedAt) {
      // Note: Use 'deletedAt' directly instead of 'deleted_at'
      await designation.restore(); // Restore the record
      return sendResponse(
        res,
        200,
        true,
        "Designation restored successfully",
        designation
      );
    } else {
      // Soft delete the role
      await designation.destroy(); // Soft delete the record
      return sendResponse(
        res,
        200,
        true,
        "Designation deleted successfully",
        role
      );
    }
  } catch (error) {
    console.error("Error in deleteRole function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get Roles Controller with Redis Caching
const getDesignations = async (req, res) => {
  try {
    // Fetch roles from the database
    const designations = await Designation.findAll({
      where: { deletedAt: null }, // Explicitly ensure we only fetch active roles
      order: [["designation_id", "ASC"]],
    });

    sendResponse(
      res,
      200,
      true,
      "Designations fetched successfully",
      designations
    );
  } catch (error) {
    console.error("Error in getRoles function:", error);
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
        [Op.or]: [
          { designation: { [Op.iLike]: `%${search}%` } },
          // Add other fields to search by if necessary
        ],
      }),
    };

    // Fetch roles with pagination and searching
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
      "Designation fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateRoles function:", error);
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
