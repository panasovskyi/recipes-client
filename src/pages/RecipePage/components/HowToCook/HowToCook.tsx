import './HowToCook.scss';

type Props = {
  steps: string[];
}

export const HowToCook: React.FC<Props> = ({ steps }) => {
  return (
    <div className='howToCook'>
      <h4 className='howToCook__title'>Як готувати:</h4>
      <ol className='howToCook__list'>
        {steps.map(step => (
          <li key={step} className='howToCook__item'>{step}</li>
        ))}
      </ol>
    </div>
  )
}
