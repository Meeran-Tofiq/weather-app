import { getWeatherInfo } from './weather-api';
import { showForecast } from './weather-display';

let weatherData = await getWeatherInfo('As Sulaymaniyah');

const setupSearchBar = function (search, btn) {
    btn.addEventListener('click', async () => {
        let city = search.value || 'As Sulaymaniyah';
        weatherData = await getWeatherInfo(city);
        showForecast(weatherData);
    });
};

export { weatherData, setupSearchBar };
