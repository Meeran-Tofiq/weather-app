const loadPage = function () {
    const wrapper = document.createElement('main');

    // navigation at the top of the page
    const nav = createTopNav();

    // forecast of location for three days
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards');

    const card1 = createWeatherCard('day-1');
    const card2 = createWeatherCard('day-2');
    const card3 = createWeatherCard('day-3');

    cardsContainer.append(card1, card2, card3);

    wrapper.append(nav, cardsContainer);
    document.body.append(wrapper);
};

const createSearchBar = function () {
    const form = document.createElement('form');
    const search = document.createElement('input');
    const searchBtn = document.createElement('button');

    search.setAttribute('type', 'search');
    searchBtn.setAttribute('type', 'button');

    form.append(search, searchBtn);

    return form;
};

const createTemperatureButton = function (celsius = true) {
    const button = document.createElement('button');
    const buttonClass = celsius ? 'temp-c' : 'temp-f';

    button.classList.add(buttonClass);
    if (celsius) button.classList.add('active');

    return button;
};

const toggleWhichButtonActive = function (newActive, ...btns) {
    newActive.addEventListener('click', () => {
        newActive.classList.add('active');
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });
};

const createTopNav = function () {
    const topNav = document.createElement('nav');

    const searchForm = createSearchBar();
    const celBtn = createTemperatureButton(true);
    const fahBtn = createTemperatureButton(false);

    toggleWhichButtonActive(celBtn, fahBtn);
    toggleWhichButtonActive(fahBtn, celBtn);

    topNav.append(searchForm, celBtn, fahBtn);

    return topNav;
};

const createWeatherCard = function (idName) {
    const card = document.createElement('div');
    card.setAttribute('id', idName);

    const weekDay = document.createElement('h2');
    const maxTemp = document.createElement('h1');
    const minTemp = document.createElement('h3');
    const weatherIcon = document.createElement('i');

    card.append(weekDay, maxTemp, minTemp, weatherIcon);
    return card;
};

export { loadPage };
