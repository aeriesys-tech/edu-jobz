module.exports = (sequelize, DataTypes) => {
  const CandidateToken = sequelize.define(
    "CandidateToken",
    {
      candidate_token_id: {
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
      modelName: "CandidateToken",
      tableName: "candidate_tokens",
      timestamps: false,
      underscored: true, // This will create columns like `created_at` and `updated_at`
    }
  );

  CandidateToken.associate = (models) => {
    CandidateToken.belongsTo(models.Candidate, {
      foreignKey: "candidate_id",
    });
  };
  return CandidateToken;
};
