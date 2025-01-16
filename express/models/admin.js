"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      admin_id: {
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
      modelName: "Admin",
      tableName: "admins",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  return Admin;
};
