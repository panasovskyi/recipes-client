import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { recipeService } from "../services/recipe.service.js";
import { ingredientService } from '../services/ingredient.service.js';
import { sequelize } from '../db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonPath = path.join(__dirname, "savoryBr.json");
const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const recipes = data.map((d) => ({
  ...d,
  steps: Array.isArray(d.steps) ? d.steps.join(" ") : d.steps,
  calories: d.nutritionalValue[0],
  proteins: d.nutritionalValue[1],
  fats: d.nutritionalValue[2],
  carbs: d.nutritionalValue[3],
}));

async function importRecipes() {
  try {
    await sequelize.authenticate();

    for (const recipe of recipes) {
      const newRecipe = await recipeService.createRecipe({
        name: recipe.name,
        category: recipe.category,
        subcategory: recipe.subcategory,
        calories: recipe.calories,
        proteins: recipe.proteins,
        fats: recipe.fats,
        carbs: recipe.carbs,
        steps: recipe.steps,
      });

      if (recipe.ingredients && recipe.ingredients.length) {
        for (const ing of recipe.ingredients) {
          await ingredientService.createIngredient({
            name: ing.name,
            quantity: ing.amount,
            alternative: ing.alternative,
            recipeId: newRecipe.id,
          });
        }
      }
    }

    process.exit();
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

importRecipes();
