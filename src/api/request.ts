import axios from "axios";
import { Recipe } from '../types/recipe';

const API_URL = "https://recipes-2gdy.onrender.com";

const create = async (newRecipe: Recipe) => {
  const res = await axios.post(
    `${API_URL}/recipes/create`,
    newRecipe
  );

  return res.data;
};

const getAll = async () => {
  const res = await axios.get(API_URL + "/recipes");

  return res.data;
}

export const recipeService = {
  create,
  getAll,
};
