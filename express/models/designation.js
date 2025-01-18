"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Designation = sequelize.define(
    "Designation",
    {
      designation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      designation: {
        type: DataTypes.STRING(100),
        allowNull: false,
        index: true,
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
      modelName: "Designation",
      tableName: "designations",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  return Designation;
};
