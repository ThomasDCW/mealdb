import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Meal() {
  let { idMeal } = useParams();

  // console.log(idMeal);

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

  console.table(mealDetailArray);

  return (
    <div>
      <p>{mealDetailArray?.idMeal}</p>
    </div>
  );
}
