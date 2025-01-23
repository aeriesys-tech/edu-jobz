"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const CandidatePlan = sequelize.define(
    "CandidatePlan",
    {
      candidate_plan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      candidate_subscription_feature_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "candidate_subscription_features",
          key: "candidate_subscription_feature_id",
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
      modelName: "CandidatePlan",
      tableName: "candidate_plans",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  CandidatePlan.associate = (models) => {
    CandidatePlan.belongsTo(models.CandidateSubscriptionFeature, {
      foreignKey: "candidate_subscription_feature_id",
    });
  };
  return CandidatePlan;
};
