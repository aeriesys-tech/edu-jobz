"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const EmployerSubscriptionFeature = sequelize.define(
    "EmployerSubscriptionFeature",
    {
      employer_subscription_feature_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      feature_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        index: true,
        unique:true
      },
      description:{
        type: DataTypes.TEXT(250),
        allowNull: true,
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
      modelName: "EmployerSubscriptionFeature",
      tableName: "employer_subscription_features",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  return EmployerSubscriptionFeature;
};
