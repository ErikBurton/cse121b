// Import from the 'fetchWeather' function from 'weatherModule.js' module
import { fetchWeather } from './weather-module.js';

// Add event listener to execute code when DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const getWeatherButton = document.getElementById("getWeatherButton"); // Get the "Get Weather" button
    const zipCodeInput = document.getElementById("zipCodeInput"); // Get the input field for ZIP code
    const cityName = document.getElementById("cityName"); // Get the element to display the city name
    const temperature = document.getElementById("temperature"); // Get the element to display the temperature
    const description = document.getElementById("description"); // Get the element to display the weather description

    // Add a click event listener to the "Get Weather" button
    getWeatherButton.addEventListener("click", async () => {
        const zipCode = zipCodeInput.value;

        try {
            // Attempt to fetch weather for the zip provieded by the user
            const data = await fetchWeather(zipCode);

            // Display the extracted data on the page
            cityName.textContent = `City: ${data.city}`;
            temperature.textContent = `Temperature: ${Math.round(data.temperature)}°F`;
            description.textContent = `Description: ${data.weatherDescription}`
        } catch (error) {
            // If an error occurs fetching the data, show an error message
            cityName.textContent = ""; // Clear the city name
            temperature.textContent = `Error: ${error.message}`; // Display error message
            description.textContent = ""; // Clear the weather description        
        }
    });   
});