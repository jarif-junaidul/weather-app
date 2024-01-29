const input = document.querySelector('.input');
const submit = document.querySelector('.submit');
const placeName = document.querySelector('.placeName');
const dateTime = document.querySelector('.dateTime');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const icon = document.querySelector('.icon');

const api = '4e38368030597ba3a3a761ddaa46781f';

async function getCityWeather(city) {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const response = await fetch(url);
    const data = await response.json();

    placeName.innerHTML = `${data.name}, ${data.sys.country}`;

    dateTime.innerHTML = new Date(data.dt * 1000).toLocaleString();

    temp.innerHTML =  Math.floor(data.main.temp - 273.15) + '°C';

    const capitalizedDescription = capitalizeFirstLetter(data.weather[0].description);
    description.innerHTML = capitalizedDescription;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.querySelector('.icon').style.backgroundImage = `url(${iconUrl})`;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

submit.onclick = function () {
     getCityWeather(input.value);
}

