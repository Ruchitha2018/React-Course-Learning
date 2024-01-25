import { useEffect, useState } from "react"
import MealItem from "./MealItem";

const Meals = () => {

    const [mealsData, setMealsData] = useState([])

    const fetchMealsData = async() => {
        const res = await fetch('http://localhost:3000/meals');
        if(!res.ok) {

        }
        const data = await res.json();
        setMealsData(data);
        console.log(data);
    }

    useEffect(() => {
      fetchMealsData();
    },[])
    return (
        <ul id="meals">
         {mealsData.map((meal) => (
            <MealItem meal={meal} key={meal.id}/>
         ))}
        </ul>
    )
}

export default Meals;