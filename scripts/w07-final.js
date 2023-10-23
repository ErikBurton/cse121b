// Module for fetching weather data

export async function fetchWeather(zipCode) 
{
    const API_KEY = "ba8471e44eecd63a6b38dd887c2cfe54";
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${zipCode}&cnt=5&units=metric&appid=${API_KEY}`;

try 
{
    // Attempt to fetch weather data from the specified API URL
    const response = await fetch(API_URL);

    // Check if the response is not okay (if status code 404 for "City not found")
    if (!response.ok)
    {
        // If the response is not ok, then throw an error message
        throw "ZIP Code not found!";
    }

    // Parse the response as JSON
    const data = await response.json();

    // Extract the city name from the JSON data
    const city = data.city.name;

    // Map the list of forecast items to an array of objects with date and weather
    const forecast = data.list.map((item) => ({
        date: item.dt_txt,
        weather: item.weather[0].description,
    }));

    // Return an object containing the city name and forecast data
    return { city, forecast };
    }   catch (error) {
    throw error;
    }
}