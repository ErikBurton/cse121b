// weatherModule.js
// Export function named 'fetchWeather' as part of the module (ES Modules)
export const fetchWeather = async (zipCode) => {
    // Define an apiKey for the OpenWeatherMap API
    const apiKey = "ba8471e44eecd63a6b38dd887c2cfe54";
    // Uses 'fetch' data function to make an asynchronous call to the API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`);

    // Check if response from the API is not successful (Conditional Branching)
    if (!response.ok) {
        throw new Error("ZIP Code not found");
    }

    // Parse JSON received from the API call
    const data = await response.json();

    // Get data from the API response
    const city = data.name;
    const temperature = Math.round(data.main.temp);
    const weatherDescription = data.weather[0].description; // (Array)

    // Return object containing the data
    return { city, temperature, weatherDescription };
};
