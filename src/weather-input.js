import { getWeatherInfo } from './weather-api';

const showForecast = async function (city = 'As Sulaymaniyah') {
    const allInfo = await getWeatherInfo(city);

    console.log(allInfo);
    fillCurrent(allInfo);
    fillThreeDayForecast(allInfo.forecast);
};

const fillCurrent = function (info) {
    const currentCont = document.querySelector('#current-weather');
    const basicCont = currentCont.querySelector('.current-basic');
    const complexCont = currentCont.querySelector('.current-complex');
    const city = info.location;
    const current = info.current;

    currentCont.querySelector(
        '.location'
    ).textContent = `${city.name}, ${city.country}`;

    currentCont.querySelector('.time').textContent = `${
        city.localtime.split(' ')[1]
    }`;

    basicCont.querySelector('.temp').textContent = current.temp_c;
    basicCont.querySelector('.weather-desc').textContent =
        current.condition.text;
    basicCont.querySelector('.feels-like').textContent = current.feelslike_c;
};

const fillThreeDayForecast = function (info) {};

export { showForecast };
