import { getWeatherInfo } from './weather-api';

const showForecast = async function (city = 'As Sulaymaniyah') {
    const allInfo = await getWeatherInfo(city);

    const cel = document.querySelector('.temp-c').classList.contains('.active');
    console.log(allInfo);
    fillCurrent(allInfo, cel);
    fillThreeDayForecast(allInfo.forecast, cel);
};

const fillCurrent = function (info, celsius) {
    const currentCont = document.querySelector('#current-weather');
    const basicCont = currentCont.querySelector('.current-basic');
    const complexCont = currentCont.querySelector('.current-complex');
    const city = info.location;
    const current = info.current;

    const currentTemp = celsius ? current.temp_c : current.temp_f;
    const tempUnit = celsius ? 'C' : 'F';
    const currentFeelsLike = celsius
        ? current.feelslike_c
        : current.feelslike_f;
    const currentWindSpeed = celsius ? current.wind_kph : current.mph;
    const speedUnit = celsius ? 'kph' : 'mph';

    // location and time
    currentCont.querySelector(
        '.location'
    ).textContent = `${city.name}, ${city.country}`;

    currentCont.querySelector('.time').textContent = `${
        city.localtime.split(' ')[1]
    }`;

    // basic info
    basicCont.querySelector('.temp').textContent = `${currentTemp} ${tempUnit}`;
    basicCont.querySelector('.weather-desc').textContent =
        current.condition.text;
    basicCont.querySelector(
        '.feels-like'
    ).textContent = `${currentFeelsLike} ${tempUnit}`;

    //complex info
    complexCont.querySelector(
        '.wind-speed'
    ).textContent = `${currentWindSpeed} ${speedUnit}`;
    complexCont.querySelector('.humidity').textContent = `${current.humidity}%`;
    complexCont.querySelector('.uv-index').textContent = `${current.uv}`;
};

const fillThreeDayForecast = function (info) {};

export { showForecast };
