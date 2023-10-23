// Module for fetching weather data

export async function fetchWeather(zipCode) 
{
    const API_KEY = "ba8471e44eecd63a6b38dd887c2cfe54";
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&units=metric&appid=${API_KEY}`;

}