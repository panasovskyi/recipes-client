import { Ingredient } from "./ingredient.model.js";
import { Recipe } from "./recipe.model.js";

Recipe.hasMany(Ingredient, { foreignKey: "recipeId" });
Ingredient.belongsTo(Recipe, { foreignKey: "recipeId" });

export { Ingredient, Recipe };
