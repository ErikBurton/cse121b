// Module for fetching weather data

export const fetchWeather = async (zipCode) => {
    // Defines API key for the OpenWeatherMap API
    const apiKey = "ba85e0032c17385b67083ca7b2d239f8";
    // Use the fetch function to make an asynchronous call to the OpenWeatherMap API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`);

    // Check if the response from the API is not succussful (zip code not found)
    if (!response.ok) {
        throw new Error("Zip Code not found");
    }

    // Parse the JSON data received from the API call
    const data = await response.json();

    // Extract weather data from the API call
    const city = data.name; 
    const temperature = (data.main.temp);
    const weatherDescription = data.weather[0].description;

    // Return an object with the extracted weather information
    return { city, temperature, weatherDescription };
};