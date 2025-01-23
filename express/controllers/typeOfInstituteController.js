const { TypeOfInstitute } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addTypeOfInstitute = async (req, res) => {
  try {
    const { type_of_institute } = req.body;

    // Check if the type_of_institute already exists
    const existingTypeOfInstitute = await TypeOfInstitute.findOne({
      where: { type_of_institute },
    });
    if (existingTypeOfInstitute) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Type Of Institute already exists",
        null,
        {
          type_of_institute: "Type Of Institute already exists",
        }
      );
    }

    // Create the new type_of_institute
    const newTypeOfInstitute = await TypeOfInstitute.create({
      type_of_institute,
    });

    // Invalidate cache by deleting the cached type_of_institutes key
    await redisClient.del("type_of_institutes");
    sendResponse(
      req,
      res,
      200,
      true,
      "Type Of Institute created successfully",
      newTypeOfInstitute
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateTypeOfInstitute = async (req, res) => {
  try {
    const { type_of_institute_id, type_of_institute } = req.body;

    // Check if type_of_institute_id and type_of_institute are provided
    if (!type_of_institute_id || !type_of_institute) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Type Of Institute ID and type_of_institute are required",
        null,
        {
          type_of_institute:
            "Type Of Institute ID and type_of_institute are required",
        }
      );
    }

    // Check if the type_of_institute exists
    const existingTypeOfInstitute = await TypeOfInstitute.findOne({
      where: { type_of_institute_id },
    });
    if (!existingTypeOfInstitute) {
      return sendResponse(
        req,
        res,
        404,
        false,
        "Type Of Institute not found",
        null,
        {
          type_of_institute: "Type Of Institute not found",
        }
      );
    }

    // Update the type_of_institute
    existingTypeOfInstitute.type_of_institute = type_of_institute;
    await existingTypeOfInstitute.save();
    // Invalidate cache by deleting the cached type_of_institutes key
    await redisClient.del("type_of_institutes");

    sendResponse(
      req,
      res,
      200,
      true,
      "Type Of Institute updated successfully",
      existingTypeOfInstitute
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteTypeOfInstitute = async (req, res) => {
  try {
    const { type_of_institute_id } = req.body;

    // Fetch the type_of_institute including soft-deleted records
    const type_of_institute = await TypeOfInstitute.findOne({
      where: { type_of_institute_id },
      paranoid: false, // Allow fetching of soft-deleted type_of_institutes
    });

    if (!type_of_institute) {
      return sendResponse(req, res, 404, false, "Type Of Institute not found");
    }

    // If the type_of_institute is marked as deleted, restore it
    if (type_of_institute.deletedAt) {
      await type_of_institute.restore();
      // Invalidate cache by deleting the cached type_of_institutes key
      await redisClient.del("type_of_institutes");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Type Of Institute restored successfully",
        type_of_institute
      );
    } else {
      // Soft delete the type_of_institute
      await type_of_institute.destroy();
      // Invalidate cache by deleting the cached type_of_institutes key
      await redisClient.del("type_of_institutes");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Type Of Institute deleted successfully",
        type_of_institute
      );
    }
  } catch (error) {
    console.error("Error in delete Type Of Institute function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get
const getTypeOfInstitutes = async (req, res) => {
  try {
    const cachedTypeOfInstitutes = await redisClient.get("type_of_institutes");

    if (cachedTypeOfInstitutes) {
      return sendResponse(
        req,
        res,
        200,
        true,
        "Type Of Institutes fetched successfully",
        JSON.parse(cachedTypeOfInstitutes)
      );
    }

    const type_of_institutes = await TypeOfInstitute.findAll({
      where: {
        deletedAt: null, // Explicitly ensure we only fetch active type_of_institutes
      },
      order: [["type_of_institute_id", "ASC"]],
    });
    // Cache the type_of_institutes
    await redisClient.setEx(
      "type_of_institutes",
      3600,
      JSON.stringify(type_of_institutes)
    );
    sendResponse(
      req,
      res,
      200,
      true,
      "Type Of Institutes fetched successfully",
      type_of_institutes
    );
  } catch (error) {
    console.error("Error in get Type Of Institutes function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateTypeOfInstitutes = async (req, res) => {
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
        [Op.or]: [{ type_of_institute: { [Op.iLike]: `%${search}%` } }],
      }),
    };

    // Fetch type_of_institutes with pagination and searching
    const type_of_institutes = await TypeOfInstitute.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: type_of_institutes.rows,
      totalPages: Math.ceil(type_of_institutes.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: type_of_institutes.count,
    };
    sendResponse(
      req,
      res,
      200,
      true,
      "Type Of Institutes fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginate Type Of Institutes function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
  addTypeOfInstitute,
  updateTypeOfInstitute,
  deleteTypeOfInstitute,
  getTypeOfInstitutes,
  paginateTypeOfInstitutes,
};
