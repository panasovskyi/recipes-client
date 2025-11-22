import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Recipe = sequelize.define(
  "Recipe",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subcategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    steps: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    calories: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    proteins: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    fats: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    carbs: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "recipes",
  }
);
