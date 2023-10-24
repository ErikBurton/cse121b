// Module for fetching weather data

export const fetchWeather = async (zipCode) => {
    // Defines API key for the OpenWeatherMap API
    const apiKey = "ba8471e44eecd63a6b38dd887c2cfe54";
    // Use the fetch function to make an asychonous call to the OpenWeatherMap API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`);

    // Check if the response from the API is not succussful (zip code not found)
    if (!response.ok) {
        throw new Error("Zip Code not found");
    }

    // Parse the JSON data received from the API call
    const data = await response.json();

    // Extract weather data from the API call
    const city = data.name; 
    const temerature = Math.round(data.main.temp);
    const weatherDescription = data.weather[0].description;

    // Return an object with the extracted weather information
    return { city, temerature, weatherDescription};
};