import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, useParams, NavLink } from 'react-router-dom';
import './App.css';
import Meal from './Meal';

function App() {
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
    <div className='App'>
      <header className='header'>
        <h1>MEAL DB</h1>
      </header>
      <Routes>
        <Route
          path=''
          element={
            mealsArray
              ? mealsArray.map((meal, index) => {
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
              : 'Chargement...'
          }
        />
        <Route path=':idMeal' element={<Meal />} />
      </Routes>
    </div>
  );
}

export default App;
