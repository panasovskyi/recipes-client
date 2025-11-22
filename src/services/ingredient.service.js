import { Ingredient } from '../models/index.js';

const createIngredient = async (ingredientData) => {
  await Ingredient.create({ ...ingredientData });
};

const getAllIngredients = async () => {
  const ingredients = await Ingredient.findAll();

  return ingredients;
};

export const ingredientService = {
  createIngredient,
  getAllIngredients,
};