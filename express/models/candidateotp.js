module.exports = (sequelize, DataTypes) => {
  const CandidateOtp = sequelize.define(
    "CandidateOtp",
    {
      candidate_otp_id: {
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
      modelName: "CandidateOtp",
      tableName: "candidate_otps",
      underscored: true, // This will create columns like `created_at` and `updated_at`
      timestamps: false,
    }
  );

  CandidateOtp.associate = (models) => {
    CandidateOtp.belongsTo(models.Candidate, {
      foreignKey: "candidate_id",
    });
  };

  return CandidateOtp;
};
