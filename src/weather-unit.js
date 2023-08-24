import { showForecast } from './weather-display';

const setupUnitButtons = function (cel, fah) {
    toggleWhichButtonActive(cel, fah);
};

const toggleWhichButtonActive = function (...btns) {
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.classList.add('active');
            btns.forEach((other) => {
                if (other !== btn) other.classList.remove('active');
            });
            showForecast();
        });
    });
};

export { setupUnitButtons };
