module.exports = (sequelize, DataTypes) => {
  const CandidateLog = sequelize.define(
    "CandidateLog",
    {
      candidate_log_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      candidate_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        index: true,
        references: {
          model: "candidates",
          key: "candidate_id",
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
      modelName: "CandidateLog",
      tableName: "candidate_logs",
      timestamps: false,
      underscored: true, // This will create columns like `created_at` and `updated_at`
    }
  );

  CandidateLog.associate = (models) => {
    CandidateLog.belongsTo(models.Candidate, {
      foreignKey: "candidate_id",
    });
  };

  return CandidateLog;
};
