import { ingredientService } from "../services/ingredient.service.js";
import { recipeService } from "../services/recipe.service.js";

const create = async (req, res) => {
  try {
    const {
      ingredients,
      name,
      category,
      subcategory,
      calories,
      proteins,
      fats,
      carbs,
      steps,
    } = req.body;

    if (!name || !ingredients || !Array.isArray(ingredients)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const isRecipe = await recipeService.findRecipeByName(name);
    if (isRecipe) {
      return res.status(400).json({ message: "Recipe already exists" });
    }

    const recipe = await recipeService.createRecipe({
      name,
      category,
      subcategory,
      calories,
      proteins,
      fats,
      carbs,
      steps,
    });

    await Promise.all(
      ingredients.map((ing) =>
        ingredientService.createIngredient({
          recipeId: recipe.id,
          name: ing.name,
          quantity: ing.quantity,
          alternative: ing.alternative,
        })
      )
    );

    res.status(201).json(recipe);
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const [recipes, ingredients] = await Promise.all([
      recipeService.getAllRecipes(),
      ingredientService.getAllIngredients(),
    ]);

    const fullRecipes = recipes.map((r) => {
      const ingr = ingredients.filter((i) => i.recipeId === r.id);

      return {
        ...r.dataValues,
        ingredients: ingr,
      };
    });

    res.status(200).json(fullRecipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const recipeController = {
  create,
  getAll,
};
