module.exports = (sequelize, DataTypes) => {
  const EmployeeToken = sequelize.define(
    "EmployeeToken",
    {
      employee_token_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "employees",
          key: "employee_id",
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
      modelName: "EmployeeToken",
      tableName: "employee_tokens",
      timestamps: false,
      underscored: true, // This will create columns like `created_at` and `updated_at`
    }
  );

  EmployeeToken.associate = (models) => {
    EmployeeToken.belongsTo(models.Employee, {
      foreignKey: "employee_id",
    });
  };
  return EmployeeToken;
};
