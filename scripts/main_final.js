// main_final.js
// Import the 'fetchWeather' function from the 'weatherModule.js' module
import { fetchWeather } from './weatherModule.js';

// Add an event listener to execute code when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
     // Get references to various elements on the page
    const getWeatherButton = document.getElementById("getWeatherButton");
    const zipCodeInput = document.getElementById("zipCodeInput");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
        // Adds a click event listener to the "Get Weather" button
    getWeatherButton.addEventListener("click", async () => {
        // Get the ZIP code entered by the user from the input field
        const zipCode = zipCodeInput.value;

        try {
             // Attempt to fetch weather data for the provided ZIP code
            const data = await fetchWeather(zipCode);
            // Display the fetched weather data on the page
            cityName.textContent = `City: ${data.city}`;
            temperature.textContent = `Temperature: ${data.temperature}°F`;
            description.textContent = `Description: ${data.weatherDescription}`;
        } catch (error) {
            // If an error occurs during the weather data retrieval, display an error message
            cityName.textContent = ""; // Clear the city name
            temperature.textContent = `Error: ${error.message}`; // Display the error message
            description.textContent = ""; // Clear the weather description
        }
    });
});