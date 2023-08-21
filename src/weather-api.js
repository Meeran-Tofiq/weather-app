const key = "0dad858d403c4228a32123248231908";

const getWeatherUrl = function(city) {
    return `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`;
}

const getWeatherInfo = function(city) {
    fetch(getWeatherUrl(city))
        .then((val) => {
            console.log(val);
        })
        .catch(reason => {
            console.error(reason);
        })
}

export { getWeatherInfo }