"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employer_plans", {
      employer_plan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employer_subscription_feature_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "employer_subscription_features",
          key: "employer_subscription_feature_id",
        },
      },
      feature_value: {
        type: Sequelize.STRING(),
        allowNull: false,
        index: true,
      },
      created_at: {
        allowNull: true,
        index: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      deleted_at: {
        allowNull: true,
        index: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("candidate_subscription_features");
  },
};