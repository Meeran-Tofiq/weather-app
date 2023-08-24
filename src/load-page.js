import { showForecast } from './weather-display';
import { setupSearchBar, weatherData } from './weather-input';
import { setupUnitButtons } from './weather-unit';

const loadPage = function () {
    const wrapper = document.createElement('main');

    // navigation at the top of the page
    const nav = createTopNav();

    // current weather container
    const current = createCurrentWeatherContainer();

    // forecast of location for three days
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards');

    const card1 = createWeatherCard('day-1');
    const card2 = createWeatherCard('day-2');
    const card3 = createWeatherCard('day-3');

    cardsContainer.append(card1, card2, card3);

    wrapper.append(nav, current, cardsContainer);
    document.body.append(wrapper);
    showForecast(weatherData);
};

const createSearchBar = function () {
    const form = document.createElement('form');
    const search = document.createElement('input');
    const searchBtn = document.createElement('button');

    search.setAttribute('type', 'search');
    search.setAttribute('id', 'search');
    search.setAttribute('placeholder', 'Search by city name...');
    searchBtn.setAttribute('type', 'button');

    form.append(search, searchBtn);
    setupSearchBar(search, searchBtn);

    return form;
};

const createTemperatureButton = function (celsius = true) {
    const button = document.createElement('button');
    button.innerText = celsius ? 'Celsius' : 'Fahrenheit';
    const buttonClass = celsius ? 'temp-c' : 'temp-f';

    button.classList.add(buttonClass);
    if (celsius) button.classList.add('active');

    return button;
};

const createTopNav = function () {
    const topNav = document.createElement('nav');

    const searchForm = createSearchBar();
    const celBtn = createTemperatureButton(true);
    const fahBtn = createTemperatureButton(false);

    setupUnitButtons(celBtn, fahBtn);

    topNav.append(searchForm, celBtn, fahBtn);

    return topNav;
};

const createCurrentWeatherContainer = function () {
    const container = document.createElement('div');

    // locationa and time
    const placeTime = document.createElement('div');
    const location = document.createElement('h1');
    const time = document.createElement('span');

    location.classList.add('location');
    time.classList.add('time');

    placeTime.append(location, time);

    // basic info
    const currentBasic = document.createElement('div');
    const temp = document.createElement('h1');
    const basicText = document.createElement('div');
    const weatherDesc = document.createElement('span');
    const feelsLike = document.createElement('span');

    currentBasic.classList.add('current-basic');
    temp.classList.add('temp');
    weatherDesc.classList.add('weather-desc');
    feelsLike.classList.add('feels-like');

    basicText.append(weatherDesc, feelsLike);
    currentBasic.append(temp, basicText);

    // less basic info
    const currentComplex = document.createElement('div');
    const windSpeed = document.createElement('span');
    const humidity = document.createElement('span');
    const uvIndex = document.createElement('span');

    currentComplex.classList.add('current-complex');
    windSpeed.classList.add('wind-speed');
    humidity.classList.add('humidity');
    uvIndex.classList.add('uv-index');

    currentComplex.append(windSpeed, humidity, uvIndex);

    // append everything
    container.append(placeTime, currentBasic, currentComplex);
    container.setAttribute('id', 'current-weather');
    return container;
};

const createWeatherCard = function (idName) {
    const card = document.createElement('div');
    card.setAttribute('id', idName);

    const weekDay = document.createElement('span');
    const maxTemp = document.createElement('span');
    const minTemp = document.createElement('span');
    const weatherIcon = document.createElement('span');

    weekDay.classList.add('week-day');
    maxTemp.classList.add('max-temp');
    minTemp.classList.add('min-temp');

    card.append(weekDay, maxTemp, minTemp, weatherIcon);
    return card;
};

export { loadPage };
