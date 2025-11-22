import { Recipe } from "../models/index.js";

const createRecipe = async (recipeData) => {
  const newRecipe = await Recipe.create({ ...recipeData });

  return newRecipe;
};

const findRecipeByName = async (name) => {
  const newRecipe = await Recipe.findOne({ where: { name } });

  return newRecipe;
};

const getAllRecipes = async () => {
  const recipes = await Recipe.findAll();

  return recipes;
}

export const recipeService = {
  createRecipe,
  findRecipeByName,
  getAllRecipes,
};
