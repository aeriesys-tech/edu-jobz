"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const CandidateSubscriptionFeature = sequelize.define(
    "CandidateSubscriptionFeature",
    {
      candidate_subscription_feature_id: {
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
      modelName: "CandidateSubscriptionFeature",
      tableName: "candidate_subscription_features",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  return CandidateSubscriptionFeature;
};
