import { weatherData } from './weather-input';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const showForecast = function (info = weatherData) {
    let cel = document.querySelector('.temp-c').classList.contains('active');
    fillCurrent(info, cel);
    fillThreeDayForecast(info.forecast.forecastday, cel);
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
    const currentWindSpeed = celsius ? current.wind_kph : current.wind_mph;
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
    ).textContent = `Feels like: ${currentFeelsLike} ${tempUnit}`;

    //complex info
    complexCont.querySelector(
        '.wind-speed'
    ).textContent = `wind: ${currentWindSpeed} ${speedUnit}`;
    complexCont.querySelector(
        '.humidity'
    ).textContent = `humidity: ${current.humidity}%`;
    complexCont.querySelector('.uv-index').textContent = `UV: ${current.uv}`;
};

const fillThreeDayForecast = function (info, celsius) {
    const cards = Array.from(document.querySelector('.cards').children);

    cards.forEach((card, i) => {
        const weekdayNum = new Date(info[i].date).getDay();
        const weekday = weekdays[weekdayNum];

        const maxTemp = celsius ? info[i].day.maxtemp_c : info[i].day.maxtemp_f;
        const minTemp = celsius ? info[i].day.mintemp_c : info[i].day.mintemp_f;

        card.querySelector('.week-day').textContent = weekday;
        card.querySelector('.max-temp').textContent = maxTemp;
        card.querySelector('.min-temp').textContent = minTemp;
    });
};

export { showForecast };
