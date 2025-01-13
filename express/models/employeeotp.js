module.exports = (sequelize, DataTypes) => {
  const EmployeeOtp = sequelize.define(
    "EmployeeOtp",
    {
      employee_otp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "candidates",
          key: "candidate_id",
        },
      },
      verification_type: {
        type: DataTypes.STRING(20),
        allowNull: false,
        index: true,
      },
      send_to: {
        type: DataTypes.STRING(20),
        allowNull: false,
        index: true,
      },
      otp: {
        type: DataTypes.STRING(250),
        allowNull: false,
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
      modelName: "EmployeeOtp",
      tableName: "employee_otps",
      underscored: true, // This will create columns like `created_at` and `updated_at`
      timestamps: false,
    }
  );

  EmployeeOtp.associate = (models) => {
    EmployeeOtp.belongsTo(models.Employee, {
      foreignKey: "employee_id",
    });
  };

  return EmployeeOtp;
};
