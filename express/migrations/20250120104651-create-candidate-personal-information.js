"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("candidate_personal_informations", {
      candidate_personal_information_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      candidate_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "candidates",
          key: "candidate_id",
        },
      },
      employer_type: {
        type: Sequelize.STRING(100),
        allowNull: true,
        index: true,
      },
      designation_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "designations",
          key: "designation_id",
        },
      },
      experience: {
        type: Sequelize.STRING(20),
        allowNull: true,
        index: true,
      },
      salary_expectation: {
        type: Sequelize.STRING(20),
        allowNull: true,
        index: true,
      },
      notice_period: {
        type: Sequelize.STRING(20),
        allowNull: true,
        index: true,
      },
      hear_about_us: {
        type: Sequelize.STRING(20),
        allowNull: true,
        index: true,
      },
      subject_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "subjects",
          key: "subject_id",
        },
      },
      type_of_institute_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "type_of_institutes",
          key: "type_of_institute_id",
        },
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: true,
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
        type: Sequelize.INTEGER,
        allowNull: true,
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
    await queryInterface.dropTable("candidate_personal_informations");
  },
};
