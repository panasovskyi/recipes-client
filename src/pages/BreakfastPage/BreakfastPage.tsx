import { Link } from "react-router-dom";
import "./BreakfastPage.scss";

export const BreakfastPage = () => {
  return (
    <div className="breakfastPage">
      <div className="container">
        <h2 className="breakfastPage__title">Сніданки</h2>
        <div className="breakfastPage__links">
          <Link to="/breakfasts/sweet" className="breakfastPage__link">
            Солодкі сніданки
          </Link>
          <Link to="/breakfasts/savory" className="breakfastPage__link">
            Солоні сніданки
          </Link>
          <Link to="/breakfasts/savory" className="breakfastPage__link">
            Всі
          </Link>
        </div>
      </div>
    </div>
  );
};
