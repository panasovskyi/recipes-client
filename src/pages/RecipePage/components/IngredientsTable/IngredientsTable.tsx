import { Ingredient } from "../../../../types/ingredient";
import './IngredientsTable.scss';

type Props = {
  ingredients: Ingredient[];

  quantity: number;
};

export const IngredientsTable: React.FC<Props> = ({ ingredients, quantity }) => {
  return (
    <table className="ingredientsTable">
      <thead className="ingredientsTable__head">
        <tr>
          <th>Інгредієнт</th>
          <th>Кількість</th>
          <th>Альтернатива</th>
        </tr>
      </thead>
      <tbody className="ingredientsTable__body">
        {ingredients.map((ing) => {
          const ingQuantity = ing.quantity.split(' ').map(el => {
            if (!isNaN(Number(el))) {
              return (Number(el) * quantity).toFixed(1).replace(/\.0$/, "");
            }

            if (el.includes('/')) {
              const [numerator, denominator] = el.split('/').map(Number);
              if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
                const result = (numerator / denominator) * quantity;
                return result.toFixed(2).replace(/\.?0+$/, '');
              }
            }

            return el;
          }).join(' ');

          const ingAlternative = ing.alternative.split(' ').map(el => {
            if (!isNaN(Number(el))) {
              return (Number(el) * quantity).toFixed(1).replace(/\.0$/, "");
            }

            if (el.includes('/')) {
              const [numerator, denominator] = el.split('/').map(Number);
              if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
                const result = (numerator / denominator) * quantity;
                return result.toFixed(2).replace(/\.?0+$/, '');
              }
            }

            return el;
          }).join(' ');


          return (
            <tr key={ing.id} className="ingredientsTable__row">
              <td className="ingredientsTable__data">{ing.name}</td>
              <td className="ingredientsTable__data">{ingQuantity}</td>
              <td className="ingredientsTable__data">{ingAlternative}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};
