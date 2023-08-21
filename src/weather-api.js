const key = '0dad858d403c4228a32123248231908';

const getWeatherUrl = function (city) {
    return `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`;
};

const getWeatherInfo = async function (city) {
    fetch(getWeatherUrl(city))
        .then((response) => {
            return response.json();
        })
        .then((forecast) => {
            console.log(forecast);
            return forecast;
        })
        .catch((reason) => {
            console.error(reason);
        });
};

export { getWeatherInfo };
