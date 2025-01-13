module.exports = (sequelize, DataTypes) => {
  const EmployerToken = sequelize.define(
    "EmployerToken",
    {
      employer_token_id: {
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
      token: {
        type: DataTypes.STRING(250),
        allowNull: false,
        index: true,
      },
      expire_at: {
        type: DataTypes.DATE,
        allowNull: true,
        index: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        index: true,
      },
    },
    {
      modelName: "EmployerToken",
      tableName: "employer_tokens",
      timestamps: false,
      underscored: true, // This will create columns like `created_at` and `updated_at`
    }
  );

  EmployerToken.associate = (models) => {
    EmployerToken.belongsTo(models.Employer, {
      foreignKey: "employer_id",
    });
  };
  return EmployerToken;
};
