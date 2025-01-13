module.exports = (sequelize, DataTypes) => {
  const EmployerOtp = sequelize.define(
    "EmployerOtp",
    {
      employer_otp_id: {
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
      modelName: "EmployerOtp",
      tableName: "employer_otps",
      underscored: true, // This will create columns like `created_at` and `updated_at`
      timestamps: false,
    }
  );

  EmployerOtp.associate = (models) => {
    EmployerOtp.belongsTo(models.Employer, {
      foreignKey: "employer_id",
    });
  };

  return EmployerOtp;
};
