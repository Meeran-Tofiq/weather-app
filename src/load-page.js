const loadPage = function () {
    const wrapper = document.createElement('main');

    // navigation at the top of the page
    const nav = createTopNav();

    wrapper.append(nav);
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

export { loadPage };
