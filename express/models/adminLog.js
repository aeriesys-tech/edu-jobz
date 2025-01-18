module.exports = (sequelize, DataTypes) => {
  const AdminLog = sequelize.define(
    "AdminLog",
    {
      admin_log_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      admin_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        index: true,
        references: {
          model: "admins",
          key: "admin_id",
        },
      },
      api_name: {
        type: DataTypes.STRING(250),
        allowNull: false,
        index: true,
      },
      api_request: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      api_response: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
      },
      ip_address: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        index: true,
      },
    },
    {
      modelName: "AdminLog",
      tableName: "admin_logs",
      timestamps: false,
      underscored: true, // This will create columns like `created_at` and `updated_at`
    }
  );

  AdminLog.associate = (models) => {
    AdminLog.belongsTo(models.Admin, {
      foreignKey: "admin_id",
    });
  };

  return AdminLog;
};
