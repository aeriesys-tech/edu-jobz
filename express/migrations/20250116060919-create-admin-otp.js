"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admin_otps", {
      admin_otp_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "admins",
          key: "admin_id",
        },
      },
      otp: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      expire_at: {
        type: Sequelize.DATE,
        allowNull: true,
        index: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        index: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("admin_otps");
  },
};
