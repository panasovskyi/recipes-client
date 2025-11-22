import { useContext } from 'react'
import { RecipeContext } from '../../store/RecipeContext'
import { RecipeList } from '../../components/RecipeList/RecipeList';
import { Loader } from '../../components/Loader';
import { Notification } from '../../components/Notification/Notification';
import './BreakfastSweetPage.scss';

export const BreakfastSweetPage = () => {
  const { recipes, isLoader, errorMessage } = useContext(RecipeContext);
  const sweetBreakfasts = recipes.filter(recipe => recipe.subcategory === 'Солодкі сніданки');

  return (
    <div className='breakfastSweetPage'>
      <div className="container">
        <h2 className='breakfastSweetPage__title'>Солодкі сніданки</h2>
        {isLoader && (<Loader />)}
        {!isLoader && errorMessage && (
          <Notification type="error" />
        )}
        {!isLoader && !errorMessage && sweetBreakfasts.length === 0 && (
          <Notification type="empty" />
        )}
        {!isLoader && !errorMessage && sweetBreakfasts.length > 0 && (
          <RecipeList recipes={sweetBreakfasts} endpoint="/breakfasts/sweet" />
        )}
      </div>
    </div>
  )
}
