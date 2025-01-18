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
          model: "states",
          key: "state_id",
        },
      },
      state: {
        type: Sequelize.STRING(100),
        allowNull: false,
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
    await queryInterface.dropTable("states");
  },
};
