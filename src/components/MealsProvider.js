import React, { useState, createContext } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans' },
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes' },
]

export const MealsContext = createContext();

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const tickMeal = (id) => {
    const updatedMeals = meals.map((meal) => {
      if (meal.id === id) {
        return { ...meal, ticked: !meal.ticked };
      }
      return meal;
    });

    setMeals(updatedMeals);
  };

  return <MealsContext.Provider value={{ meals, tickMeal }}>{children}</MealsContext.Provider>;
};

export default MealsProvider;
