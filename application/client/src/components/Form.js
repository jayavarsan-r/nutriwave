import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyCFfpdz5bAURoNrU66et1UT-c4KSfBiEQc');

const Form = () => {
  const [name, setName] = useState("");
  const [mealType, setMealType] = useState("Breakfast");
  const [calories, setCalories] = useState("");
  const { userName, addMeal } = useContext(GlobalContext);

  useEffect(() => {
    if (name) {
      fetchCalories(name);
    }
  }, [name]);

  const fetchCalories = async (foodName) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
      const prompt = `What is the approximate calorie count for ${foodName}? Please respond with only a number.`;
      const result = await model.generateContent(prompt);
      const calorieCount = parseInt(result.response.text(), 10);
      if (!isNaN(calorieCount)) {
        setCalories(calorieCount);
      }
    } catch (error) {
      console.error("Error fetching calories:", error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newMeal = {
      name: name,
      calories: +calories,
      mealType: mealType,
      byUser: userName,
    };
    if (!newMeal.name) {
      alert("Please enter the meal!!!!");
    } else if (newMeal.calories <= 0) {
      alert("Please enter valid calorie amount for the meal!!!!");
    }
    addMeal(newMeal);
    setName("");
    setCalories(0);
    setMealType("Breakfast");
  };

  return (
    <>
      <h1 className="font-bold pb-4 text-xl">Add Meal</h1>
      
      <form id="form" onSubmit={submitForm}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Add food to track"
              autoComplete="off"
              className="form-input"
            ></input>
          </div>
          <select
            value={mealType}
            onChange={(e) => {
              setMealType(e.target.value);
            }}
            className="form-input"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <div className="input-group">
            <input
              type="number"
              value={calories}
              onChange={(e) => {
                setCalories(e.target.value);
              }}
              placeholder="Calories (in KCal) "
              autoComplete="off"
              className="form-input"
            ></input>
          </div>
          {userName !== "" ? (
            <div className="submit-btn">
              <button type="submit" className="border py-2 w-full">
                Track Meal
              </button>
            </div>
          ) : (
            <p className="py-2 txt-gray bg-red-400">
              Login to start tracking meals !
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;