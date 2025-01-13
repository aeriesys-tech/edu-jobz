"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employer_otps", {
      employer_otp_id: {
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
      verification_type: {
        type: Sequelize.STRING(20),
        allowNull: false,
        index: true,
      },
      send_to: {
        type: Sequelize.STRING(20),
        allowNull: false,
        index: true,
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
    await queryInterface.dropTable("employer_otps");
  },
};
