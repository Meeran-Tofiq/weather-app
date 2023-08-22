const key = '0dad858d403c4228a32123248231908';

const getWeatherUrl = function (city) {
    return `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`;
};

const getWeatherInfo = async function (city) {
    try {
        const response = await fetch(getWeatherUrl(city));
        const forecast = await response.json();
        return forecast;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export { getWeatherInfo };
