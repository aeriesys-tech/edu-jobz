module.exports = (sequelize, DataTypes) => {
  const AdminToken = sequelize.define(
    "AdminToken",
    {
      admin_token_id: {
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
      modelName: "AdminToken",
      tableName: "admin_tokens",
      timestamps: false,
      underscored: true, // This will create columns like `created_at` and `updated_at`
    }
  );

  AdminToken.associate = (models) => {
    AdminToken.belongsTo(models.Admin, {
      foreignKey: "admin_id",
    });
  };
  return AdminToken;
};
