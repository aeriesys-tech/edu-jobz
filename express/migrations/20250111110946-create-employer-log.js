"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employer_logs", {
      employer_log_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "employers",
          key: "employer_id",
        },
      },
      api_name: {
        type: Sequelize.STRING(250),
        allowNull: false,
        index: true,
      },
      api_request: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      api_response: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        index: true,
      },
      ip_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
        index: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("employer_logs");
  },
};
