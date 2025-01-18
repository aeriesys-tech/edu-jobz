"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("states", {
      state_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "countries",
          key: "country_id",
        },
      },
      state: {
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable("states");
  },
};
