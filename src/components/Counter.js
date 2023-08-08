import React from "react";
import { MealsContext } from "./MealsProvider";

const Counter = () => {
  const { meals } = useContext(MealsContext);
  const remainingMeals = meals.filter((meal) => !meal.ticked);

  return (
    <div>
      <h3>Meals Remaining: {remainingMeals.length}</h3>
    </div>
  );
};

export default Counter;
