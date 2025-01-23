const { Subject } = require("../models");
// const { sendResponse } = require("../services/admin/responseService");
const { sendResponse } = require("../services/tokenResponseService");
const { Op } = require("sequelize");
const redisClient = require("../config/redisConfig");

// Add
const addSubject = async (req, res) => {
  try {
    const { subject } = req.body;

    // Check if the subject already exists
    const existingSubject = await Subject.findOne({
      where: { subject },
    });
    if (existingSubject) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Subject already exists",
        null,
        {
          subject: "Subject already exists",
        }
      );
    }

    // Create the new subject
    const newSubject = await Subject.create({ subject });

    // Invalidate cache by deleting the cached subjects key
    await redisClient.del("subjects");
    sendResponse(
      req,
      res,
      200,
      true,
      "Subject created successfully",
      newSubject
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Update
const updateSubject = async (req, res) => {
  try {
    const { subject_id, subject } = req.body;

    // Check if subject_id and subject are provided
    if (!subject_id || !subject) {
      return sendResponse(
        req,
        res,
        400,
        false,
        "Subject ID and subject are required",
        null,
        {
          subject: "Subject ID and subject are required",
        }
      );
    }

    // Check if the subject exists
    const existingSubject = await Subject.findOne({
      where: { subject_id },
    });
    if (!existingSubject) {
      return sendResponse(req, res, 404, false, "Subject not found", null, {
        subject: "Subject not found",
      });
    }

    // Update the subject
    existingSubject.subject = subject;
    await existingSubject.save();
    // Invalidate cache by deleting the cached subjects key
    await redisClient.del("subjects");

    sendResponse(
      req,
      res,
      200,
      true,
      "Subject updated successfully",
      existingSubject
    );
  } catch (error) {
    sendResponse(req, res, 500, false, error.message);
  }
};

// Delete
const deleteSubject = async (req, res) => {
  try {
    const { subject_id } = req.body;

    // Fetch the subject including soft-deleted records
    const subject = await Subject.findOne({
      where: { subject_id },
      paranoid: false, // Allow fetching of soft-deleted subjects
    });

    if (!subject) {
      return sendResponse(req, res, 404, false, "Subject not found");
    }

    // If the subject is marked as deleted, restore it
    if (subject.deletedAt) {
      await subject.restore();
      // Invalidate cache by deleting the cached subjects key
      await redisClient.del("subjects");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Subject restored successfully",
        subject
      );
    } else {
      // Soft delete the subject
      await subject.destroy();
      // Invalidate cache by deleting the cached subjects key
      await redisClient.del("subjects");
      return sendResponse(
        req,
        res,
        200,
        true,
        "Subject deleted successfully",
        subject
      );
    }
  } catch (error) {
    console.error("Error in deleteSubject function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Get
const getSubjects = async (req, res) => {
  try {
    const cachedSubjects = await redisClient.get("subjects");

    if (cachedSubjects) {
      return sendResponse(
        req,
        res,
        200,
        true,
        "Subjects fetched successfully",
        JSON.parse(cachedSubjects)
      );
    }

    const subjects = await Subject.findAll({
      where: {
        deletedAt: null, // Explicitly ensure we only fetch active subjects
      },
      order: [["subject_id", "ASC"]],
    });
    // Cache the subjects
    await redisClient.setEx("subjects", 3600, JSON.stringify(subjects));
    sendResponse(
      req,
      res,
      200,
      true,
      "Subjects fetched successfully",
      subjects
    );
  } catch (error) {
    console.error("Error in getSubjects function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

// Paginate
const paginateSubjects = async (req, res) => {
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
        [Op.or]: [{ subject: { [Op.iLike]: `%${search}%` } }],
      }),
    };

    // Fetch subjects with pagination and searching
    const subjects = await Subject.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
    });
    const responseData = {
      data: subjects.rows,
      totalPages: Math.ceil(subjects.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: subjects.count,
    };
    sendResponse(
      req,
      res,
      200,
      true,
      "Subjects fetched successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateSubjects function:", error);
    sendResponse(req, res, 500, false, error.message);
  }
};

module.exports = {
  addSubject,
  updateSubject,
  deleteSubject,
  getSubjects,
  paginateSubjects,
};
