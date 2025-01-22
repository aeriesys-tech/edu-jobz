"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const EmployerInformation = sequelize.define(
    "EmployerInformation",
    {
      employer_information_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "employers",
          key: "employer_id",
        },
      },
      whatsapp_no: {
        type: DataTypes.STRING,
        allowNull: true,
        index: true,
      },
      is_email_verified: {
        type: DataTypes.BOOLEAN(false),
        allowNull: true,
        index: true,
        unique: true,
        defaultValue: false,
      },
      is_mobile_no_verified: {
        type: DataTypes.BOOLEAN(false),
        allowNull: true,
        index: true,
        defaultValue: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
        index: true,
      },
      d_o_b: {
        type: DataTypes.DATE,
        allowNull: false,
        index: true,
      },
      type_of_institute_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "type_of_institutes",
          key: "type_of_institute_id",
        },
      },
      institution_name: {
        type: DataTypes.STRING,
        allowNull: false,
        index: true,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
        index: true,
      },
      state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "states",
          key: "state_id",
        },
      },
      city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "cities",
          key: "city_id",
        },
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "countries",
          key: "country_id",
        },
      },
      pincode: {
        type: DataTypes.STRING,
        allowNull: false,
        index: true,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "avatar.png",
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
      modelName: "EmployerInformation",
      tableName: "employer_informations",
      paranoid: true, // Enables soft deletes
      underscored: true,
    }
  );
  EmployerInformation.associate = (models) => {
    EmployerInformation.belongsTo(models.Employer, {
      foreignKey: "employer_id",
    });
    EmployerInformation.belongsTo(models.State, {
      foreignKey: "state_id",
    });
    EmployerInformation.belongsTo(models.City, {
      foreignKey: "city_id",
    });
    EmployerInformation.belongsTo(models.Country, {
      foreignKey: "country_id",
    });
    EmployerInformation.belongsTo(models.TypeOfInstitute, {
      foreignKey: "type_of_institute_id",
    });
  };
  return EmployerInformation;
};