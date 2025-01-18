module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    "State",
    {
      state_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        index: true,
        references: {
          model: "countries",
          key: "country_id",
        },
      },
      state: {
        type: DataTypes.STRING(100),
        allowNull: false,
        index: true,
      },

      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        index: true,
      },
    },
    {
      modelName: "state",
      tableName: "states",
      timestamps: false,
      underscored: true, // This will create columns like `created_at` and `updated_at`
    }
  );

  State.associate = (models) => {
    State.belongsTo(models.Country, {
      foreignKey: "country_id",
    });
  };

  return State;
};
