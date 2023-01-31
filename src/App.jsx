import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

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
      <div>
        {mealsArray?.map((meal, index) => {
          return (
            <div key={index}>
              <p>{meal.strMeal}</p>
              <img src={meal.strMealThumb} alt='' className='meal-picture' />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
