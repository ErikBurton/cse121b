// weatherModule.js
export const fetchWeather = async (zipCode) => {
    const apiKey = "ba8471e44eecd63a6b38dd887c2cfe54";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`);

    if (!response.ok) {
        throw new Error("ZIP Code not found");
    }

    const data = await response.json();
    const city = data.name;
    const temperature = Math.round(data.main.temp);
    const weatherDescription = data.weather[0].description;

    return { city, temperature, weatherDescription };
};
