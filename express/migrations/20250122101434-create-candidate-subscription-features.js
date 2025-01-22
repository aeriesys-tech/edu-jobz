"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("candidate_subscription_features", {
      candidate_subscription_feature_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      feature_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        index: true,
        unique: true,
      },
      description: {
        type: Sequelize.TEXT(250),
        allowNull: true,
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