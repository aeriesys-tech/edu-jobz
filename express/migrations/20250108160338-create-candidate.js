"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("candidates", {
      candidate_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        index: true,
      },
      email: {
        type: Sequelize.STRING(120),
        allowNull: false,
        unique: true,
        index: true,
      },
      password: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      mobile_no: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
        index: true,
      },
      is_email_verified: {
        type: Sequelize.BOOLEAN(false),
        allowNull: true,
        index: true,
      },
      is_mobile_no_verified: {
        type: Sequelize.BOOLEAN(false),
        allowNull: true,
        index: true,
      },
      avatar: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable("candidates");
  },
};
