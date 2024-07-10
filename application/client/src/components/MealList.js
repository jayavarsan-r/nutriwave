import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { motion } from "framer-motion";
import "boxicons";
import { getHealthBenefits } from "../utils/geminiAI";

const MealCard = ({ meal, onDelete, onShowDetails }) => (
  <motion.div
    className="meal-card bg-white shadow-lg rounded-lg p-6 flex flex-col gap-3 hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <h3 className="text-xl font-semibold text-gray-800">{meal.name}</h3>
    <p className="text-gray-600 text-sm flex items-center gap-2">
      <box-icon name="fire" color="#f97316" />
      <span>{meal.calories} Calories</span>
    </p>
    <div className="flex flex-row gap-3 justify-end mt-2">
      <button
        type="button"
        className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          onShowDetails(meal);
        }}
      >
        Details
      </button>
      <button
        type="button"
        className="btn btn-danger bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          onDelete(meal._id);
        }}
      >
        Delete
      </button>
    </div>
  </motion.div>
);

const MealList = () => {
  const { mealData, getMeal, userName, deleteMeal } = useContext(GlobalContext);
  const [activeMealType, setActiveMealType] = useState("Breakfast");
  const [caloriesByType, setCaloriesByType] = useState({
    Breakfast: 0,
    Lunch: 0,
    Dinner: 0
  });
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [healthBenefits, setHealthBenefits] = useState("");
  const [showHealthBenefits, setShowHealthBenefits] = useState(false);
  const [isLoadingBenefits, setIsLoadingBenefits] = useState(false);

  useEffect(() => {
    if (userName !== "") {
      getMeal(userName);
    }
    const calculateCaloriesByType = () => {
      const calories = {
        Breakfast: 0,
        Lunch: 0,
        Dinner: 0
      };
      if (Array.isArray(mealData)) {
        mealData.forEach(meal => {
          if (meal && meal.mealType && meal.calories) {
            calories[meal.mealType] += meal.calories;
          }
        });
      }
      setCaloriesByType(calories);
    };
    calculateCaloriesByType();
    console.log("MealData:", mealData); // Log mealData for debugging
  }, [mealData, userName, getMeal]);

  const handleMealTypeClick = (type) => {
    setActiveMealType(type);
  };

  const handleShowDetails = async (meal) => {
    console.log("Showing details for:", meal);
    if (!meal) {
      console.error("Attempted to show details for undefined meal");
      return;
    }
    setSelectedMeal(meal);
    setShowHealthBenefits(false);
    setIsLoadingBenefits(true);
    try {
      const benefits = await getHealthBenefits(meal.name);
      setHealthBenefits(benefits);
    } catch (error) {
      console.error("Error fetching health benefits:", error);
      setHealthBenefits("Failed to fetch health benefits.");
    } finally {
      setIsLoadingBenefits(false);
    }
  };

  const handleCloseDetails = () => {
    setSelectedMeal(null);
    setShowHealthBenefits(false);
  };

  const toggleHealthBenefits = () => {
    setShowHealthBenefits(!showHealthBenefits);
  };

  const filteredMeals = Array.isArray(mealData) 
    ? mealData.filter((meal) => meal && meal.mealType === activeMealType)
    : [];

  const dailyCalorieGoal = 2000 / 3; // Dividing total calorie goal by 3

  return (
    <div className="meal-list-container flex flex-col gap-6 p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Your Meals</h2>
      <div className="meal-type-tabs flex flex-row gap-4 mb-6 justify-center">
        {["Breakfast", "Lunch", "Dinner"].map((type) => (
          <button
            key={type}
            className={`btn ${
              activeMealType === type
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 hover:bg-blue-100"
            } px-6 py-3 rounded-full font-semibold transition-colors duration-300`}
            onClick={() => handleMealTypeClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="progress-container mb-8 max-w-xl mx-auto w-full">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">{activeMealType} Calorie Intake</span>
          <span className="text-sm font-medium text-gray-600">
            {caloriesByType[activeMealType]}Cal
          </span>
        </div>
        <div className="progress-bar bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="progress-bar-fill bg-green-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min((caloriesByType[activeMealType] / dailyCalorieGoal) * 100, 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className="meal-cards flex flex-col gap-6">
        {filteredMeals.map((meal) => (
          <MealCard 
            key={meal._id}
            meal={meal}
            onDelete={deleteMeal}
            onShowDetails={handleShowDetails}
          />
        ))}
      </div>
      
      {selectedMeal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedMeal.name}</h3>
            <p className="text-gray-600 mb-2">Calories: {selectedMeal.calories}</p>
            <p className="text-gray-600 mb-4">Type: {selectedMeal.mealType}</p>
            {selectedMeal.ingredients && selectedMeal.ingredients.length > 0 && (
              <>
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {selectedMeal.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="mb-4">
              <button
                className="btn btn-secondary bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300 w-full"
                onClick={toggleHealthBenefits}
                disabled={isLoadingBenefits}
              >
                {isLoadingBenefits ? "Loading..." : (showHealthBenefits ? "Hide Health Benefits" : "Show Health Benefits")}
              </button>
              {showHealthBenefits && (
                <div className="mt-4 bg-gray-100 p-4 rounded-md">
                  <h5 className="font-semibold mb-2">Health Benefits:</h5>
                  <p className="text-sm">{healthBenefits}</p>
                </div>
              )}
            </div>
            <button
              className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300 w-full"
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealList;