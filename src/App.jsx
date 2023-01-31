import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then(({ data }) => {
        setMeals(data);
      });
  }, [console.log('fetch')]);

  let mealsArray = meals.meals;

  console.table(mealsArray);

  return (
    <div className='App'>
      <header className='header'>
        <h1>MEAL DB</h1>
      </header>
      <div>
        {mealsArray.map((meal) => {
          return (
            <div>
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
