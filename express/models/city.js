module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "City",
    {
      city_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        index: true,
        references: {
          model: "states",
          key: "state_id",
        },
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        index: true,
      },

      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        index: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
        index: true,
      },
    },
    {
      modelName: "city",
      tableName: "cities",
      timestamps: false,
      underscored: true, // This will create columns like `created_at` and `updated_at`
    }
  );

  City.associate = (models) => {
    City.belongsTo(models.State, {
      foreignKey: "state_id",
    });
  };

  return City;
};
