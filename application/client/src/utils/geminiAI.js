import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyCFfpdz5bAURoNrU66et1UT-c4KSfBiEQc');

export async function getHealthBenefits(dishName) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `Provide a brief summary of the health benefits of ${dishName}. 
  List 3-5 key benefits in bullet points.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error fetching health benefits:", error);
    return "Unable to fetch health benefits at this time.";
  }
}