import { useContext, useState } from "react";
import { RecipeContext } from "../../store/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { IngredientsTable } from "./components/IngredientsTable/IngredientsTable";
import { HowToCook } from "./components/HowToCook/HowToCook";
import './RecipePage.scss';
import { Nutritions } from './components/Nutritions';

type N = {
  "Калорії": number;
  "Білки": number;
  "Жири": number;
  "Вуглеводи": number;
}

type Entry = [string, number];

export const RecipePage = () => {
  const [quantity, setQuantity] = useState(1);
  const { recipes } = useContext(RecipeContext);
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const id = recipeId ? +recipeId : 0;

  const recipe = recipes.find((r) => r.id === id);
  const steps = recipe?.steps.split(". ");

  const NUTRITIONS = {
    "Калорії": Number(recipe?.calories) ?? 0,
    "Білки": Number(recipe?.proteins) ?? 0,
    "Жири": Number(recipe?.fats) ?? 0,
    "Вуглеводи": Number(recipe?.carbs) ?? 0,
  };

  const nutritions: Entry[] = Object.entries(NUTRITIONS);

  return (
    <div className="recipePage">
      <div className="container">
        <button className="recipePage__buttonBack" onClick={() => navigate(-1)}>{"< "}Назад</button>
        <h3 className="recipePage__title">{recipe?.name}</h3>
        {recipe && steps && (
          <>
            <Nutritions nutritions={nutritions} quantity={quantity} setQuantity={setQuantity} />
            <IngredientsTable ingredients={recipe?.ingredients} quantity={quantity} />
            <HowToCook steps={steps} />
          </>
        )}
      </div>
    </div>
  );
};
