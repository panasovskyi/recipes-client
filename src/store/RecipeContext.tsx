import { createContext, useEffect, useState } from "react";
import { Recipe } from "../types/recipe";
import { recipeService } from "../api/request";

type ContextType = {
  recipes: Recipe[];
  isLoader: boolean;
  errorMessage: string;
};

export const RecipeContext = createContext<ContextType>({
  recipes: [],
  isLoader: false,
  errorMessage: '',
});

type Props = {
  children: React.ReactNode;
};

export const RecipeProvider: React.FC<Props> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoader, setIsLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoader(true);

    recipeService
      .getAll()
      .then(setRecipes)
      .catch(() => setErrorMessage("Unable to load recipes from server"))
      .finally(() => setIsLoader(false));
  }, []);

  const value = {
    recipes,
    isLoader,
errorMessage,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
