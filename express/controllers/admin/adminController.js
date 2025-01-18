const { Admin } = require("../../models");
const { sendResponse } = require("../../services/admin/responseService");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const redisClient = require("../../config/redisConfig");

// ADD Admin
const addAdmin = async (req, res) => {
  try {
    const { name, email, password, mobile_no, avatar } = req.body;

    // Check if email, personal email, or mobile_no already exists
    const existingAdmin = await Admin.findOne({
      where: {
        [Op.or]: [{ email }, { mobile_no }],
      },
    });

    if (existingAdmin) {
      const errors = {};
      if (existingAdmin.email === email) {
        errors.email = "Admin with the same email already exists";
      }
      if (existingAdmin.mobile_no === mobile_no) {
        errors.mobile_no = "Admin with the same mobile number already exists";
      }
      return sendResponse(res, 400, false, "Validation Error", null, errors);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new admin
    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      mobile_no,
      avatar,
    });
    await redisClient.del("admins");

    return sendResponse(res, 201, true, "Admin created successfully", newAdmin);
  } catch (error) {
    console.error("Error in addAdmin function:", error);
    return sendResponse(res, 500, false, error.message);
  }
};

// Update Admin
const updateAdmin = async (req, res) => {
  try {
    const { admin_id, name, email, mobile_no, avatar } = req.body;
    // Check if the email, personal email, adminname, or mobile number already exists in the database and belongs to a different admin
    const existingAdmin = await Admin.findOne({
      where: {
        [Op.or]: [{ email }, { mobile_no }],
        admin_id: { [Op.ne]: admin_id }, // Exclude the current admin from the check
      },
    });

    if (existingAdmin) {
      const errors = {};
      if (existingAdmin.email === email) {
        errors.email = "Admin with the same email already exists";
      }
      if (existingAdmin.mobile_no === mobile_no) {
        errors.mobile_no = "Admin with the same mobile number already exists";
      }
      return sendResponse(res, 400, false, "Validation Error", null, errors);
    }

    // Check if admin exists in the database
    const admin = await Admin.findOne({ where: { admin_id } });
    if (!admin) {
      const errors = { admin: "Admin not found" };
      return sendResponse(res, 404, false, "Admin not found", null, errors);
    }

    // Perform the update
    Object.assign(admin, {
      name,
      email,
      mobile_no,
      address,
      avatar,
    });
    await admin.save();

    // Fetch the updated admin to return (exclude password)
    const updatedAdmin = await Admin.findOne({
      where: { admin_id },
      attributes: { exclude: ["password"] },
    });

    if (!updatedAdmin) {
      const errors = { admin: "Admin not found after update" };
      return sendResponse(res, 404, false, "Admin not found", null, errors);
    }
    await redisClient.del("admins");
    return sendResponse(
      res,
      200,
      true,
      "Admin updated successfully",
      updatedAdmin
    );
  } catch (error) {
    console.error("Error in updateAdmin function:", error.message); // Log the error message
    return sendResponse(res, 500, false, error.message);
  }
};

// Delete Admin
const deleteAdmin = async (req, res) => {
  try {
    const { admin_id } = req.body;

    // Fetch the admin including soft-deleted records
    const admin = await Admin.findByIdAndDelete({
      where: { admin_id },
      paranoid: false, // Allow fetching of soft-deleted admins
    });

    if (!admin) {
      return sendResponse(res, 404, false, "Admin not found");
    }

    // If the admin is marked as deleted, restore it
    if (admin.deletedAt) {
      await admin.restore();
      await redisClient.del("admins");
      return sendResponse(res, 200, true, "Admin restored successfully", admin);
    } else {
      // Soft delete the admin
      await admin.destroy();
      await redisClient.del("admins");
      return sendResponse(res, 200, true, "Admin deleted successfully", admin);
    }
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// Get Admins
const getAdmins = async (req, res) => {
  try {
    const cacheAdmins = await redisClient.get("admins");
    if (cacheAdmins) {
      return sendResponse(
        res,
        200,
        true,
        "Admins fetched successfully",
        JSON.parse(cacheAdmins)
      );
    }
    const admins = await Admin.findAll({
      where: { deletedAt: null }, // Fetch only active admins
    });
    await redisClient.setEx("admins", 3600, JSON.stringify(admins));
    sendResponse(res, 200, true, "Admins fetched successfully", admins);
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// Paginate Admins
const paginateAdmins = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = "created_at",
      order = "asc",
      search = "",
      status,
    } = req.query;

    const offset = (page - 1) * limit;
    const sort = [[sortBy, order.toUpperCase()]];

    // Search and filter based on status
    const where = {
      ...(status && {
        deletedAt: status === "active" ? null : { [Op.ne]: null },
      }), // Only fetch active/inactive admins
      ...(search && {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { adminname: { [Op.like]: `%${search}%` } },
          { email: { [Op.like]: `%${search}%` } },
          { mobile_no: { [Op.like]: `%${search}%` } },
          { adminname: { [Op.like]: `%${search}%` } },
          { personal_email: { [Op.like]: `%${search}%` } },
        ],
      }),
    };

    // Fetch admins with pagination, sorting, search, and include associated data
    const admins = await Admin.findAndCountAll({
      where,
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
      order: sort,
      attributes: { exclude: ["password"] },
      include: [
        { model: Role, attributes: ["role_id", "role"] },
        { model: Designation, attributes: ["designation_id", "designation"] },
      ],
      paranoid: false, // Include soft-deleted records if needed
    });

    // Build and send the response
    const responseData = {
      data: admins.rows,
      totalPages: Math.ceil(admins.count / limit),
      currentPage: parseInt(page, 10),
      totalItems: admins.count,
    };

    return sendResponse(
      res,
      200,
      true,
      "Admins retrieved successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in paginateAdmins function:", error.message);
    return sendResponse(res, 500, false, error.message);
  }
};

module.exports = {
  addAdmin,
  updateAdmin,
  deleteAdmin,
  getAdmins,
  paginateAdmins,
};
