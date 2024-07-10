import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import { FaUtensils, FaAppleAlt, FaWeight } from 'react-icons/fa';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyCFfpdz5bAURoNrU66et1UT-c4KSfBiEQc');

const DietPlanGenerator = () => {
  const [dietPlan, setDietPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cuisine, setCuisine] = useState('American');

  const cuisines = ['American', 'Italian', 'Chinese', 'Indian', 'Mexican', 'french'];

  const generateDietPlan = async () => {
    setIsLoading(true);
    setDietPlan(null);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Generate a daily diet plan with 3 meals and 2 snacks. For each item, include the name, calories, and macros (protein, carbs, fat). The cuisine should be ${cuisine}. Present the information in a structured format.`;
      const result = await model.generateContent(prompt);
      const planText = await result.response.text();
      const parsedPlan = parseDietPlan(planText);
      setDietPlan(parsedPlan);
    } catch (error) {
      console.error("Error generating diet plan:", error);
    }
    setIsLoading(false);
  };

  const parseDietPlan = (text) => {
    const meals = text.split('\n\n');
    return meals.map(meal => {
      const lines = meal.split('\n');
      const name = lines[0].replace(/\*/g, ''); // Remove asterisks
      const details = lines.slice(1).filter(line => line.includes(':'));
      return { name, details };
    });
  };

  return (
    <div className=" generator_bg  flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray rounded-3xl  overflow-hidden border-[1px] border-gray-300"
          >
            <div className="p-8">
              <h2 className="text-5xl font-extrabold mb-6 txt-ltgreen text-center">
                NutriWave
                <span className="block text-2xl font-semibold mt-2 text-gray-600">Your Personal Diet Planner</span>
              </h2>
              
              <div className="flex justify-center space-x-8 mb-8">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="txt-ltgreen"><FaUtensils size={30} /></motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="txt-ltgreen"><FaAppleAlt size={30} /></motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="txt-ltgreen"><FaWeight size={30} /></motion.div>
              </div>

              <div className="flex justify-center items-center mb-8 space-x-4">
                <label htmlFor="cuisine" className="text-maroon-900 font-semibold text-lg">Select Cuisine:</label>
                <select 
                  id="cuisine" 
                  value={cuisine} 
                  onChange={(e) => setCuisine(e.target.value)}
                  className=" selct_tag text-maroon-900 font-semibold py-2 px-5 rounded-lg transition duration-300"
                >
                  {cuisines.map((cuisineOption, index) => (
                    <option key={index} value={cuisineOption}>{cuisineOption}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center mb-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={generateDietPlan}
                  className="bg-ltgreen text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 flex items-center text-xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {isLoading ? 'Crafting Your Plan...' : 'Generate Your Diet Plan'}
                </motion.button>
              </div>

              <AnimatePresence>
                {dietPlan && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 overflow-hidden"
                  >
                    {dietPlan.map((meal, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-inner border border-maroon-700"
                      >
                        <h3 className="text-2xl font-semibold mb-3 text-maroon-900">{meal.name.replace(/\*/g, '')}</h3>
                        {meal.details.length > 0 && (
                          <table className="min-w-full bg-gray-50 rounded-lg shadow-md">
                            <thead>
                              <tr>
                                <th className="py-2 px-4 bg-gray-200">Detail</th>
                                <th className="py-2 px-4 bg-gray-200">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              {meal.details.map((detail, detailIndex) => {
                                const [label, value] = detail.split(': ');
                                return (
                                  <tr key={detailIndex}>
                                    <td className="py-2 px-4 border-b">{label}</td>
                                    <td className="py-2 px-4 border-b">{value}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DietPlanGenerator;
