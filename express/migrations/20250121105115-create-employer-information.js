"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employer_informations", {
      employer_information_id: {
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
      whatsapp_no: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        allowNull: true,
        index: true,
      },
      d_o_b: {
        type: Sequelize.DATE,
        allowNull: false,
        index: true,
      },
      type_of_institute_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "type_of_institutes",
          key: "type_of_institute_id",
        },
      },
      institution_name: {
        type: Sequelize.STRING,
        allowNull: false,
        index: true,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
        index: true,
      },
      state_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "states",
          key: "state_id",
        },
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "cities",
          key: "city_id",
        },
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "countries",
          key: "country_id",
        },
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
    await queryInterface.dropTable("employer_informations");
  },
};