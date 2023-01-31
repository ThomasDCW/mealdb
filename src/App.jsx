import { Routes, Route, NavLink } from 'react-router-dom';
import AllMeals from './AllMeals';
import MealDetails from './MealDetails';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1>MEAL DB</h1>
      </header>
      <Routes>
        <Route path='/' element={<AllMeals />} />
        <Route path=':idMeal' element={<MealDetails />} />
      </Routes>
    </div>
  );
}
