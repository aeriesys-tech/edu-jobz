"use strict";
const { Model } = require("sequelize");
const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  const CandidatePersonalInformation = sequelize.define(
    "CandidatePersonalInformation",
    {
      candidate_personal_information_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      candidate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "candidates",
          key: "candidate_id",
        },
      },
      gender: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      d_o_b: {
        type: DataTypes.DATE,
        allowNull: true,
        get() {
          const rawDate = this.getDataValue('d_o_b');
          return rawDate ? moment(rawDate).format('DD-MM-YYYY') : null;
        },
      },

      employer_type: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      designation_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        index: true,
        references: {
          model: "designations",
          key: "designation_id",
        },
      },
      experience: {
        type: DataTypes.STRING(20),
        allowNull: true,
        index: true,
      },
      salary_expectation: {
        type: DataTypes.STRING(20),
        allowNull: true,
        index: true,
      },
      notice_period: {
        type: DataTypes.STRING(20),
        allowNull: true,
        index: true,
      },
      hear_about_us: {
        type: DataTypes.STRING(20),
        allowNull: true,
        index: true,
      },
      subject_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "subjects",
          key: "subject_id",
        },
      },
      join_time: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      type_of_institute_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "type_of_institutes",
          key: "type_of_institute_id",
        },
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      state_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "states",
          key: "state_id",
        },
      },
      city_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "cities",
          key: "city_id",
        },
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "countries",
          key: "country_id",
        },
      },
      pincode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        index: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
        index: true,
      },
    },
    {
      modelName: "CandidatePersonalInformation",
      tableName: "candidate_personal_informations",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  CandidatePersonalInformation.associate = (models) => {
    CandidatePersonalInformation.belongsTo(models.Candidate, {
      foreignKey: "candidate_id",
    });
  };
  return CandidatePersonalInformation;
};
