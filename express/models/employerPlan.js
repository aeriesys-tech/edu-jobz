"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const EmployerPlan = sequelize.define(
    "EmployerPlan",
    {
      employer_plan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employer_subscription_feature_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "employer_subscription_features",
          key: "employer_subscription_feature_id",
        },
      },
      feature_value: {
        type: DataTypes.STRING(),
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
      modelName: "EmployerPlan",
      tableName: "employer_plans",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  EmployerPlan.associate = (models) => {
    EmployerPlan.belongsTo(models.EmployerSubscriptionFeature, {
      foreignKey: "employer_subscription_feature_id",
    });
  };
  return EmployerPlan;
};
