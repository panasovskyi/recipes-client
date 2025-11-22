import { useContext } from 'react'
import { RecipeContext } from '../../store/RecipeContext'
import { RecipeList } from '../../components/RecipeList/RecipeList';
import { Loader } from '../../components/Loader';
import { Notification } from '../../components/Notification/Notification';
import './BreakfastSavoryPage.scss';

export const BreakfastSavoryPage = () => {
  const { recipes, isLoader, errorMessage } = useContext(RecipeContext);
  const sweetBreakfasts = recipes.filter(recipe => recipe.subcategory === 'Солоні сніданки');

    return (
      <div className='breakfastSavoryPage'>
        <div className="container">
          <h2 className='breakfastSavoryPage__title'>Солоні сніданки</h2>
          {isLoader && (<Loader />)}
          {!isLoader && errorMessage && (
            <Notification type="error" />
          )}
          {!isLoader && !errorMessage && sweetBreakfasts.length === 0 && (
            <Notification type="empty" />
          )}
          {!isLoader && !errorMessage && sweetBreakfasts.length > 0 && (
            <RecipeList recipes={sweetBreakfasts} endpoint="/breakfasts/savory" />
          )}
        </div>
      </div>
    )
}
