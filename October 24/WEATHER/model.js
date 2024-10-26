import { API_KEY } from "./secret.js";

const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${secret.API_KEY}&q=${city}`
    );

    if (!response.ok) {
      throw new Error("City not found or API error");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
getWeatherData();

export const model = {
  getWeatherData,
};
