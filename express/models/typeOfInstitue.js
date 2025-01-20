"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const TypeOfInstitute = sequelize.define(
    "TypeOfInstitute",
    {
      type_of_institute_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type_of_institute: {
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
      modelName: "TypeOfInstitute",
      tableName: "type_of_institutes",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  return TypeOfInstitute;
};
