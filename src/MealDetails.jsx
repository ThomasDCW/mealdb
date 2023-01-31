import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MealDetails() {
  let { idMeal } = useParams();

  const [mealDetail, setMealDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        setMealDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  let mealDetailArray = mealDetail.meals;

  return (
    <div>
      {mealDetailArray
        ? mealDetailArray.map((meal) => {
            return (
              <div key={meal.idMeal}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt='' className='meal-picture' />
                <div>
                  <p>
                    {meal.strArea}, {meal.strCategory}
                  </p>
                </div>
                <p>{meal.strInstructions}</p>
                <ul>
                  <li className={!meal.strIngredient1 ? 'ingredient-none' : ''}>
                    {meal.strIngredient1} | {meal.strMeasure1}
                  </li>
                  <li className={!meal.strIngredient2 ? 'ingredient-none' : ''}>
                    {meal.strIngredient2} | {meal.strMeasure2}
                  </li>
                  <li className={!meal.strIngredient3 ? 'ingredient-none' : ''}>
                    {meal.strIngredient3} | {meal.strMeasure3}
                  </li>
                  <li className={!meal.strIngredient4 ? 'ingredient-none' : ''}>
                    {meal.strIngredient4} | {meal.strMeasure4}
                  </li>
                  <li className={!meal.strIngredient5 ? 'ingredient-none' : ''}>
                    {meal.strIngredient5} | {meal.strMeasure5}
                  </li>
                  <li className={!meal.strIngredient6 ? 'ingredient-none' : ''}>
                    {meal.strIngredient6} | {meal.strMeasure6}
                  </li>
                  <li className={!meal.strIngredient7 ? 'ingredient-none' : ''}>
                    {meal.strIngredient7} | {meal.strMeasure7}
                  </li>
                  <li className={!meal.strIngredient8 ? 'ingredient-none' : ''}>
                    {meal.strIngredient8} | {meal.strMeasure8}
                  </li>
                  <li className={!meal.strIngredient9 ? 'ingredient-none' : ''}>
                    {meal.strIngredient9} | {meal.strMeasure9}
                  </li>
                  <li
                    className={!meal.strIngredient10 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient10} | {meal.strMeasure10}
                  </li>
                  <li
                    className={!meal.strIngredient11 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient11} | {meal.strMeasure11}
                  </li>
                  <li
                    className={!meal.strIngredient12 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient12} | {meal.strMeasure12}
                  </li>
                  <li
                    className={!meal.strIngredient13 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient13} | {meal.strMeasure13}
                  </li>
                  <li
                    className={!meal.strIngredient14 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient14} | {meal.strMeasure14}
                  </li>
                  <li
                    className={!meal.strIngredient15 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient15} | {meal.strMeasure15}
                  </li>
                  <li
                    className={!meal.strIngredient16 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient16} | {meal.strMeasure16}
                  </li>
                  <li
                    className={!meal.strIngredient17 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient17} | {meal.strMeasure17}
                  </li>
                  <li
                    className={!meal.strIngredient18 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient18} | {meal.strMeasure18}
                  </li>
                  <li
                    className={!meal.strIngredient19 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient19}, | {meal.strMeasure19}
                  </li>
                  <li
                    className={!meal.strIngredient20 ? 'ingredient-none' : ''}
                  >
                    {meal.strIngredient20} | {meal.strMeasure20}
                  </li>
                </ul>
              </div>
            );
          })
        : 'Chargement ...'}
    </div>
  );
}
