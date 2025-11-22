import { Dispatch, SetStateAction } from 'react';
import './Nutritions.scss';

type Props = {
  nutritions: [string, number][];
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

export const Nutritions: React.FC<Props> = ({ nutritions, quantity, setQuantity }) => {
  const handleDecrement = () => {
    setQuantity(currentValue => currentValue <= 0.5 ? currentValue : currentValue - 0.5)
  }

  const handleIncrement = () => {
    setQuantity(currentValue => currentValue >= 10 ? currentValue : currentValue + 0.5)
  }

  return (
    <div className='nutritions'>
      <p className='nutritions__description'>{'КБЖВ оригінального рецепта (без замін) на '}
        <button className='nutritions__button' onClick={handleDecrement}>-</button>
        <span className='nutritions__count'>{quantity}</span>
        <button className='nutritions__button' onClick={handleIncrement}>+</button>
        {' порцію:'}</p>
      <ul className='nutritions__list'>
        {nutritions.map(([label, value]) => (
          <li key={label} className='nutritions__item'><strong>{label}: </strong>{value * quantity}</li>
        ))}
      </ul>
    </div>
  )
}