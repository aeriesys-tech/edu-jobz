"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        index: true,
      },
      email: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true,
        index: true,
      },
      password: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      mobile_no: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        index: true,
      },
      whatsapp_no: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true,
        index: true,
      },
      is_email_verified: {
        type: DataTypes.BOOLEAN(false),
        allowNull: true,
        index: true,
        defaultValue: false,
      },
      is_mobile_no_verified: {
        type: DataTypes.BOOLEAN(false),
        allowNull: true,
        index: true,
        defaultValue: false,
      },
      gender: {
        type: DataTypes.STRING(20),
        allowNull: true,
        index: true,
      },
      d_o_b: {
        type: DataTypes.DATE,
        allowNull: false,
        index: true,
      },
      type_of_institute: {
        type: DataTypes.STRING(20),
        allowNull: true,
        index: true,
      },
      institution_name: {
        type: DataTypes.STRING(500),
        allowNull: false,
        index: true,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
        index: true,
      },
      state: {
        type: DataTypes.STRING(100),
        allowNull: true,
        index: true,
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: true,
        index: true,
      },
      country: {
        type: DataTypes.STRING(100),
        allowNull: true,
        index: true,
      },
      pincode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        index: true,
      },

      avatar: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "avatar.png",
      },

      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        index: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
        index: true,
      },
    },
    {
      modelName: "Employee",
      tableName: "Employees",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  return Employee;
};
