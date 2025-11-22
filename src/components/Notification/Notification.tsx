import './Notification.scss';

type Props = {
  type: string;
}

export const Notification: React.FC<Props> = ({ type }) => {
  return (
    <p className={`notification notification--${type}`}>
      {type === 'empty' && ('There are no recipes')}
      {type === 'error' && ('Unable to load recipes from server')}
      {type === 'details' && ('Unable to load recipe details')}
    </p>
  )
}