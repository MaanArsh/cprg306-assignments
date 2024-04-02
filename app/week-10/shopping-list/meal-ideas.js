"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

const fetchMealDetails = async (mealId) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = async (index, mealId) => {
    setActiveItem(index === activeItem ? null : index);
    if (index !== activeItem) {
      const details = await fetchMealDetails(mealId);
      setSelectedMeal(details);
    }
  };

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
    setSelectedMeal(null);
    setActiveItem(null);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      {!ingredient ? (
        <p>Select an item to see meal ideas</p>
      ) : meals.length > 0 ? (
        <p>Here are some meal ideas using {ingredient.trim()}: </p>
      ) : (
        <p>No meals found for {ingredient}</p>
      )}

      <ul>
        {meals.map((meal, index) => (
          <li
            key={meal.idMeal}
            className={`p-2 m-1 bg-slate-900 max-w-sm cursor-pointer w-full ${activeItem === index ? "hover:bg-orange-800" : "hover:bg-sky-700"}`}
            onClick={() => toggleMenu(index, meal.idMeal)}
          >
            {meal.strMeal}
            {selectedMeal && meal.idMeal === selectedMeal.idMeal && (
              <div className="text-xs text-gray-300 ml-2">
                <p>Ingredients needed:</p>
                <ul>
                  {Object.keys(selectedMeal).map((key) => {
                    if (key.startsWith("strIngredient") && selectedMeal[key]) {
                      const measureKey = `strMeasure${key.slice(13)}`;
                      return (
                        <li key={key}>
                          {selectedMeal[key] && selectedMeal[measureKey] && (
                            <p>
                              {`${selectedMeal[key]} (${selectedMeal[measureKey]})`}
                            </p>
                          )}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
