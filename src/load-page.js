import { showForecast } from './weather-display';
import { setupSearchBar, weatherData } from './weather-input';
import { setupUnitButtons } from './weather-unit';
import skyPhoto from './img/quino-al-picture.jpg';

const loadPage = function () {
    console.log(skyPhoto);
    const wrapper = document.createElement('main');
    wrapper.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("${skyPhoto}")`;
    wrapper.style.backgroundSize = '100vw';

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

    // Footer for credits
    const footer = createFooter();

    wrapper.append(nav, current, cardsContainer);
    document.body.append(wrapper);
    document.body.append(footer);
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

    searchBtn.innerHTML = '<span class="fa-solid fa-search"></span>';

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

    placeTime.classList.add('place-time');
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

const createFooter = function () {
    const footer = document.createElement('footer');

    const apiCredits = document.createElement('span');
    const creatorCredits = document.createElement('span');
    const imgCredits = document.createElement('span');

    apiCredits.innerHTML =
        'Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>';
    creatorCredits.innerHTML =
        'Made by <a href="https://github.com/Meeran-Tofiq">Meeran Tofiq <i class="fa-brands fa-github"></a>';
    imgCredits.innerHTML =
        'Background image by <a href="https://unsplash.com/@quinoal">Quino Al</a>';

    footer.append(apiCredits, creatorCredits, imgCredits);

    return footer;
};

export { loadPage };
