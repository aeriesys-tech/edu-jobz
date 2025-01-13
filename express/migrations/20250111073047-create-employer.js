"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employers", {
      employer_id: {
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
      whatsapp_no: {
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
      gender: {
        type: Sequelize.STRING(20),
        allowNull: true,
        index: true,
      },
      d_o_b: {
        type: Sequelize.DATE,
        allowNull: false,
        index: true,
      },
      type_of_institute: {
        type: Sequelize.STRING(20),
        allowNull: true,
        index: true,
      },
      institution_name: {
        type: Sequelize.STRING(500),
        allowNull: false,
        index: true,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
        index: true,
      },
      state: {
        type: Sequelize.STRING(100),
        allowNull: true,
        index: true,
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: true,
        index: true,
      },
      country: {
        type: Sequelize.STRING(100),
        allowNull: true,
        index: true,
      },
      pincode: {
        type: Sequelize.STRING(10),
        allowNull: false,
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
    await queryInterface.dropTable("employers");
  },
};
