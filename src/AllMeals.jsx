import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllMeals() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');

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

  const handleSearch = (e) => {
    const label = e.target.value;
    setSearch(label);
  };

  return (
    <div>
      <div>
        <input
          type='search'
          placeholder='Search a meal'
          onChange={handleSearch}
        />
      </div>
      {mealsArray
        ? mealsArray
            .filter((meal) => {
              return meal.strMeal.toLowerCase().includes(search);
            })
            .map((meal, index) => {
              return (
                <div key={index}>
                  <NavLink to={meal.idMeal}>
                    <p>{meal.strMeal}</p>
                  </NavLink>
                  <img
                    src={meal.strMealThumb}
                    alt=''
                    className='meal-picture'
                  />
                </div>
              );
            })
        : 'Chargement...'}
    </div>
  );
}
