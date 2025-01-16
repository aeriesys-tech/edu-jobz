"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admin_tokens", {
      admin_token_id: {
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
      token: {
        type: Sequelize.STRING(250),
        allowNull: true,
        index: true,
      },
      expire_at: {
        type: Sequelize.DATE,
        allowNull: false,
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
    await queryInterface.dropTable("admin_tokens");
  },
};
