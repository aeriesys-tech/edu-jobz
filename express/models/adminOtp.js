module.exports = (sequelize, DataTypes) => {
  const AdminOtp = sequelize.define(
    "AdminOtp",
    {
      admin_otp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "admins",
          key: "admin_id",
        },
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
      modelName: "AdminOtp",
      tableName: "admin_otps",
      underscored: true, // This will create columns like `created_at` and `updated_at`
      timestamps: false,
    }
  );

  AdminOtp.associate = (models) => {
    AdminOtp.belongsTo(models.Admin, {
      foreignKey: "admin_id",
    });
  };

  return AdminOtp;
};
