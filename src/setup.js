import { Recipe, Ingredient } from "./models/index.js";

(async () => {
  try {
    await Recipe.sync({ alter: true });
    await Ingredient.sync({ alter: true });

    console.log("All tables synced successfully!");
  } catch (err) {
    console.error("Error syncing tables:", err);
  }
})();
