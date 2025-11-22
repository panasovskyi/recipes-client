import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Ingredient = sequelize.define(
  "Ingredient",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    alternative: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "ingredients",
  }
);
