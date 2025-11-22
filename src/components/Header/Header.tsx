import cn from 'classnames';
import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { Link } from "react-router-dom";
import './Header.scss';

const OPEN_MENU = 'img/icons/menu.svg';
const CLOSE_MENU = 'img/icons/close-active.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className={cn('header__container', { 'header__container--mobile': isMobile })}>
          <Link to="/">
            <img src="img/header/header-logo-white.webp" alt="logo" className="header__logo" width={160} />
          </Link>
          {isMobile ? (
            <button
              className="header__menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >

              <img src={isMenuOpen ? CLOSE_MENU : OPEN_MENU} alt={isMenuOpen ? 'close menu icon' : 'open menu icon'} />
            </button>
          ) : (
            <Navigation modificator="desktop" />
          )}
          {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />}
        </div>
      </div>
    </header>
  );
};
