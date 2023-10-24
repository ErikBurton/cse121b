// Import from the 'fetchWeather' function from 'weatherModule.js' module
import { fetchWeather } from "./weatherModule"; 

// Add event listener to execute code when DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const getWeatherButton = document.getElementById("getWeatherButton"); // Get the "Get Weather" button
    const zipCodeInput = document.getElementById("zipCodeInput"); // Get the input field for ZIP code
    const cityName = document.getElementById("cityName"); // Get the element to display the city name
    const temperature = document.getElementById("temperature"); // Get the element to display the temperature
    const description = document.getElementById("description"); // Get the element to display the weather description

})