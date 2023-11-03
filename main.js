/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./src/all.min.js":
/*!************************!*\
  !*** ./src/all.min.js ***!
  \************************/
/***/ (() => {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page */ \"./src/load-page.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _all_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all.min */ \"./src/all.min.js\");\n/* harmony import */ var _all_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_all_min__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_load_page__WEBPACK_IMPORTED_MODULE_0__]);\n_load_page__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n(0,_load_page__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _weather_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-display */ \"./src/weather-display.js\");\n/* harmony import */ var _weather_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-input */ \"./src/weather-input.js\");\n/* harmony import */ var _weather_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-unit */ \"./src/weather-unit.js\");\n/* harmony import */ var _img_quino_al_picture_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/quino-al-picture.jpg */ \"./src/img/quino-al-picture.jpg\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_weather_display__WEBPACK_IMPORTED_MODULE_0__, _weather_input__WEBPACK_IMPORTED_MODULE_1__, _weather_unit__WEBPACK_IMPORTED_MODULE_2__]);\n([_weather_display__WEBPACK_IMPORTED_MODULE_0__, _weather_input__WEBPACK_IMPORTED_MODULE_1__, _weather_unit__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst loadPage = function () {\n    console.log(_img_quino_al_picture_jpg__WEBPACK_IMPORTED_MODULE_3__);\n    const wrapper = document.createElement('main');\n    wrapper.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(\"${_img_quino_al_picture_jpg__WEBPACK_IMPORTED_MODULE_3__}\")`;\n    wrapper.style.backgroundSize = '100vw';\n\n    // navigation at the top of the page\n    const nav = createTopNav();\n\n    // current weather container\n    const current = createCurrentWeatherContainer();\n\n    // forecast of location for three days\n    const cardsContainer = document.createElement('div');\n    cardsContainer.classList.add('cards');\n\n    const card1 = createWeatherCard('day-1');\n    const card2 = createWeatherCard('day-2');\n    const card3 = createWeatherCard('day-3');\n\n    cardsContainer.append(card1, card2, card3);\n\n    // Footer for credits\n    const footer = createFooter();\n\n    wrapper.append(nav, current, cardsContainer);\n    document.body.append(wrapper);\n    document.body.append(footer);\n    (0,_weather_display__WEBPACK_IMPORTED_MODULE_0__.showForecast)(_weather_input__WEBPACK_IMPORTED_MODULE_1__.weatherData);\n};\n\nconst createSearchBar = function () {\n    const form = document.createElement('form');\n    const search = document.createElement('input');\n    const searchBtn = document.createElement('button');\n\n    search.setAttribute('type', 'search');\n    search.setAttribute('id', 'search');\n    search.setAttribute('placeholder', 'Search by city name...');\n    searchBtn.setAttribute('type', 'button');\n\n    searchBtn.innerHTML = '<span class=\"fa-solid fa-search\"></span>';\n\n    form.append(search, searchBtn);\n    (0,_weather_input__WEBPACK_IMPORTED_MODULE_1__.setupSearchBar)(search, searchBtn);\n\n    return form;\n};\n\nconst createTemperatureButton = function (celsius = true) {\n    const button = document.createElement('button');\n    button.innerText = celsius ? 'Celsius' : 'Fahrenheit';\n    const buttonClass = celsius ? 'temp-c' : 'temp-f';\n\n    button.classList.add(buttonClass);\n    if (celsius) button.classList.add('active');\n\n    return button;\n};\n\nconst createTopNav = function () {\n    const topNav = document.createElement('nav');\n\n    const searchForm = createSearchBar();\n    const celBtn = createTemperatureButton(true);\n    const fahBtn = createTemperatureButton(false);\n\n    (0,_weather_unit__WEBPACK_IMPORTED_MODULE_2__.setupUnitButtons)(celBtn, fahBtn);\n\n    topNav.append(searchForm, celBtn, fahBtn);\n\n    return topNav;\n};\n\nconst createCurrentWeatherContainer = function () {\n    const container = document.createElement('div');\n\n    // locationa and time\n    const placeTime = document.createElement('div');\n    const location = document.createElement('h1');\n    const time = document.createElement('span');\n\n    location.classList.add('location');\n    time.classList.add('time');\n\n    placeTime.classList.add('place-time');\n    placeTime.append(location, time);\n\n    // basic info\n    const currentBasic = document.createElement('div');\n    const temp = document.createElement('h1');\n    const basicText = document.createElement('div');\n    const weatherDesc = document.createElement('span');\n    const feelsLike = document.createElement('span');\n\n    currentBasic.classList.add('current-basic');\n    temp.classList.add('temp');\n    weatherDesc.classList.add('weather-desc');\n    feelsLike.classList.add('feels-like');\n\n    basicText.append(weatherDesc, feelsLike);\n    currentBasic.append(temp, basicText);\n\n    // less basic info\n    const currentComplex = document.createElement('div');\n    const windSpeed = document.createElement('span');\n    const humidity = document.createElement('span');\n    const uvIndex = document.createElement('span');\n\n    currentComplex.classList.add('current-complex');\n    windSpeed.classList.add('wind-speed');\n    humidity.classList.add('humidity');\n    uvIndex.classList.add('uv-index');\n\n    currentComplex.append(windSpeed, humidity, uvIndex);\n\n    // append everything\n    container.append(placeTime, currentBasic, currentComplex);\n    container.setAttribute('id', 'current-weather');\n    return container;\n};\n\nconst createWeatherCard = function (idName) {\n    const card = document.createElement('div');\n    card.setAttribute('id', idName);\n\n    const weekDay = document.createElement('span');\n    const maxTemp = document.createElement('span');\n    const minTemp = document.createElement('span');\n    const weatherIcon = document.createElement('span');\n\n    weekDay.classList.add('week-day');\n    maxTemp.classList.add('max-temp');\n    minTemp.classList.add('min-temp');\n\n    card.append(weekDay, maxTemp, minTemp, weatherIcon);\n    return card;\n};\n\nconst createFooter = function () {\n    const footer = document.createElement('footer');\n\n    const apiCredits = document.createElement('span');\n    const creatorCredits = document.createElement('span');\n    const imgCredits = document.createElement('span');\n\n    apiCredits.innerHTML =\n        'Powered by <a href=\"https://www.weatherapi.com/\" title=\"Free Weather API\">WeatherAPI.com</a>';\n    creatorCredits.innerHTML =\n        'Made by <a href=\"https://github.com/Meeran-Tofiq\">Meeran Tofiq <i class=\"fa-brands fa-github\"></a>';\n    imgCredits.innerHTML =\n        'Background image by <a href=\"https://unsplash.com/@quinoal\">Quino Al</a>';\n\n    footer.append(apiCredits, creatorCredits, imgCredits);\n\n    return footer;\n};\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://weather-app/./src/load-page.js?");

/***/ }),

/***/ "./src/weather-api.js":
/*!****************************!*\
  !*** ./src/weather-api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherInfo: () => (/* binding */ getWeatherInfo)\n/* harmony export */ });\nconst key = '0dad858d403c4228a32123248231908';\n\nconst getWeatherUrl = function (city) {\n    return `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`;\n};\n\nconst getWeatherInfo = async function (city) {\n    try {\n        const response = await fetch(getWeatherUrl(city));\n        const forecast = await response.json();\n        return forecast;\n    } catch (error) {\n        console.log(error);\n        return [];\n    }\n};\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather-api.js?");

/***/ }),

/***/ "./src/weather-display.js":
/*!********************************!*\
  !*** ./src/weather-display.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showForecast: () => (/* binding */ showForecast)\n/* harmony export */ });\n/* harmony import */ var _weather_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-input */ \"./src/weather-input.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_weather_input__WEBPACK_IMPORTED_MODULE_0__]);\n_weather_input__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n\nconst showForecast = function (info = _weather_input__WEBPACK_IMPORTED_MODULE_0__.weatherData) {\n    let cel = document.querySelector('.temp-c').classList.contains('active');\n    fillCurrent(info, cel);\n    fillThreeDayForecast(info.forecast.forecastday, cel);\n};\n\nconst fillCurrent = function (info, celsius) {\n    const currentCont = document.querySelector('#current-weather');\n    const basicCont = currentCont.querySelector('.current-basic');\n    const complexCont = currentCont.querySelector('.current-complex');\n    const city = info.location;\n    const current = info.current;\n\n    const currentTemp = celsius ? current.temp_c : current.temp_f;\n    const tempUnit = celsius ? 'C' : 'F';\n    const currentFeelsLike = celsius\n        ? current.feelslike_c\n        : current.feelslike_f;\n    const currentWindSpeed = celsius ? current.wind_kph : current.wind_mph;\n    const speedUnit = celsius ? 'kph' : 'mph';\n\n    // location and time\n    currentCont.querySelector(\n        '.location'\n    ).textContent = `${city.name}, ${city.country}`;\n\n    currentCont.querySelector('.time').textContent = `${\n        city.localtime.split(' ')[1]\n    }`;\n\n    // basic info\n    basicCont.querySelector('.temp').textContent = `${currentTemp} ${tempUnit}`;\n    basicCont.querySelector('.weather-desc').textContent =\n        current.condition.text;\n    basicCont.querySelector(\n        '.feels-like'\n    ).textContent = `Feels like: ${currentFeelsLike} ${tempUnit}`;\n\n    //complex info\n    complexCont.querySelector(\n        '.wind-speed'\n    ).textContent = `wind: ${currentWindSpeed} ${speedUnit}`;\n    complexCont.querySelector(\n        '.humidity'\n    ).textContent = `humidity: ${current.humidity}%`;\n    complexCont.querySelector('.uv-index').textContent = `UV: ${current.uv}`;\n};\n\nconst fillThreeDayForecast = function (info, celsius) {\n    const cards = Array.from(document.querySelector('.cards').children);\n\n    cards.forEach((card, i) => {\n        const weekdayNum = new Date(info[i].date).getDay();\n        const weekday = weekdays[weekdayNum];\n\n        const maxTemp = celsius ? info[i].day.maxtemp_c : info[i].day.maxtemp_f;\n        const minTemp = celsius ? info[i].day.mintemp_c : info[i].day.mintemp_f;\n\n        card.querySelector('.week-day').textContent = weekday;\n        card.querySelector('.max-temp').textContent = maxTemp;\n        card.querySelector('.min-temp').textContent = minTemp;\n    });\n};\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://weather-app/./src/weather-display.js?");

/***/ }),

/***/ "./src/weather-input.js":
/*!******************************!*\
  !*** ./src/weather-input.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupSearchBar: () => (/* binding */ setupSearchBar),\n/* harmony export */   weatherData: () => (/* binding */ weatherData)\n/* harmony export */ });\n/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api */ \"./src/weather-api.js\");\n/* harmony import */ var _weather_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-display */ \"./src/weather-display.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_weather_display__WEBPACK_IMPORTED_MODULE_1__]);\n_weather_display__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nlet weatherData = await (0,_weather_api__WEBPACK_IMPORTED_MODULE_0__.getWeatherInfo)('As Sulaymaniyah');\n\nconst setupSearchBar = function (search, btn) {\n    btn.addEventListener('click', async () => {\n        let city = search.value || 'As Sulaymaniyah';\n        weatherData = await (0,_weather_api__WEBPACK_IMPORTED_MODULE_0__.getWeatherInfo)(city);\n        (0,_weather_display__WEBPACK_IMPORTED_MODULE_1__.showForecast)(weatherData);\n    });\n};\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://weather-app/./src/weather-input.js?");

/***/ }),

/***/ "./src/weather-unit.js":
/*!*****************************!*\
  !*** ./src/weather-unit.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupUnitButtons: () => (/* binding */ setupUnitButtons)\n/* harmony export */ });\n/* harmony import */ var _weather_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-display */ \"./src/weather-display.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_weather_display__WEBPACK_IMPORTED_MODULE_0__]);\n_weather_display__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst setupUnitButtons = function (cel, fah) {\n    toggleWhichButtonActive(cel, fah);\n};\n\nconst toggleWhichButtonActive = function (...btns) {\n    btns.forEach((btn) => {\n        btn.addEventListener('click', () => {\n            btn.classList.add('active');\n            btns.forEach((other) => {\n                if (other !== btn) other.classList.remove('active');\n            });\n            (0,_weather_display__WEBPACK_IMPORTED_MODULE_0__.showForecast)();\n        });\n    });\n};\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://weather-app/./src/weather-unit.js?");

/***/ }),

/***/ "./src/img/quino-al-picture.jpg":
/*!**************************************!*\
  !*** ./src/img/quino-al-picture.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8f4351e5b6b48c7a88a7.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/img/quino-al-picture.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);