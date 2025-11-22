import { Navigation } from '../Navigation/Navigation';
import './MobileMenu.scss';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
  isMenuOpen?: boolean;
};

export const MobileMenu: React.FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className='mobileMenu'>
      <Navigation modificator="mobile" setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </div>
  )
}
