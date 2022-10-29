const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificulty: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
          isEven(value) {
            if (value < 1 || value > 5) {
              throw new Error("La dificultad debe ser entre 1 y 5");
            }
          },
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 24,
          isEven(value) {
            if (value < 1 || value > 24) {
              throw new Error("La duración debe ser de 1 a 24");
            }
          },
        },
      },
      season: {
        type: DataTypes.ENUM("summer", "fall", "winter", "spring"),
        allowNull: true,
      },
      create: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
