module.exports = (sequelize, DataTypes) => {
  const EmployerLog = sequelize.define(
    "EmployerLog",
    {
      employer_log_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        index: true,
        references: {
          model: "employers",
          key: "employer_id",
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
      modelName: "EmployerLog",
      tableName: "employer_logs",
      timestamps: false,
      underscored: true, // This will create columns like `created_at` and `updated_at`
    }
  );

  EmployerLog.associate = (models) => {
    EmployerLog.belongsTo(models.Employer, {
      foreignKey: "employer_id",
    });
  };

  return EmployerLog;
};
