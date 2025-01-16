"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "admins",
      [
        {
          admin_id: 1,
          name: "Bharatesh Shanawad",
          mobile_no: "9482834174",
          email: "bharatesh@aeriesystech.com",
          password:
            "$2b$10$h60pU1G2qox5B6tfL6gwh.edsj3PCTfCYZvQ0zLlV5BzFFAc.OhHW",
          avatar: "avatar.png",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
