import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        );
        setMeals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  let mealsArray = meals.meals;

  return (
    <div>
      {mealsArray
        ? mealsArray.map((meal, index) => {
            return (
              <div key={index}>
                <NavLink to={meal.idMeal}>
                  <p>{meal.strMeal}</p>
                </NavLink>
                <img src={meal.strMealThumb} alt='' className='meal-picture' />
              </div>
            );
          })
        : 'Chargement...'}
    </div>
  );
}
