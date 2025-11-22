import { Link } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import "./Navigation.scss";

const CATS = {
  сніданки: ["солодкі сніданки", "солоні сніданки", "усі сніданки"],
  обіди: ["мясо", "риба", "фастфуд", "салати", "пісні страви", "супи", "усі обіди"],
  перекуси: ["солодкі перекуси", "солоні перекуси", "напої", "усі перекуси"],
};

const CATEGORIES = Object.entries(CATS);

type Props = {
  modificator: string;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
  isMenuOpen?: boolean;
};

export const Navigation: React.FC<Props> = ({ modificator, setIsMenuOpen, isMenuOpen }) => {
  const [isOpen, setIsOpen] = useState<string[]>([]);

  const handleDropdown = (type: string) => {
    setIsOpen((prev) => {
      if (prev.includes(type)) {
        return prev.filter((el) => el !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const createLink = (type: string) => {
    switch (type) {
      case "сніданки":
        return "/breakfasts";

      case "солодкі сніданки":
        return "/breakfasts/sweet";

      case "солоні сніданки":
        return "/breakfasts/savory";

      case "усі сніданки":
        return "/breakfasts/all";

      case "обіди":
        return "/dinners";

      case "усі обіди":
        return "/dinners/all";

      case "мясо":
        return "/dinners/meat";

      case "риба":
        return "/dinners/fish";

      case "супи":
        return "/dinners/soups";

      case "салати":
        return "/dinners/salads";

      case "пісні страви":
        return "/dinners/lean";

      case "фастфуд":
        return "/dinners/fastfood";

      case "перекуси":
        return "/snacks";

      case "усі перекуси":
        return "/snacks/all";

      case "солодкі перекуси":
        return "/snacks/sweet";

      case "солоні перекуси":
        return "/snacks/savory";

      case "напої":
        return "/snacks/drinks";

      default:
        return "*";
    }
  };

  console.log(isMenuOpen)

  return (
    <nav className={`navigation navigation--${modificator}`}>
      <ul className={`navigation__list navigation__list--${modificator}`}>
        {CATEGORIES.map(([cat, sub]) => (
          <li
            key={cat}
            className={`navigation__item navigation__item--${modificator}`}
            onClick={() => handleDropdown(cat)}
          >
            {cat}
            {isOpen.includes(cat) && (
              <ul className={`dropdown dropdown--${modificator}`}>
                {sub.slice(0, -1).map((s) => (
                  <li key={s} className="dropdown__item" onClick={() => setIsMenuOpen?.(!isMenuOpen)}>
                    <Link
                      to={createLink(s)}
                      className={`dropdown__link dropdown__link--${modificator}`}
                    >
                      {s}
                    </Link>
                  </li>
                ))}
                <li className="dropdown__item" onClick={() => setIsMenuOpen?.(!isMenuOpen)}>
                  <Link
                    to={createLink(sub[sub.length - 1])}
                    className={`dropdown__link dropdown__link--${modificator}`}
                  >
                    усі
                  </Link>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

