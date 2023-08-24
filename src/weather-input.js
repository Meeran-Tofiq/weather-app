import { getWeatherInfo } from './weather-api';

let weatherData;

const setupSearchBar = function () {
    const form = document.querySelector('nav').querySelector('form');
    const search = form.querySelector('#search');
    const btn = form.querySelector('button');

    btn.addEventListener('click', () => {
        let city = search.value || 'As Sulaymaniyah';
        weatherData = getWeatherInfo(city);
    });
};

export { weatherData };
