const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const input = $('#weather-input');

function changeWeatherUI(weather) {
  const city = $('.name .city');
  const country = $('.name .country');
  const time = $('.time');
  const temperature = $('.temperature .value');
  const shortDesc = $('.short_desc');

  const visibility = $('.visibility span');
  const wind = $('.wind span');
  const cloud = $('.cloud span');

  city.innerHTML = weather.name;
  country.innerHTML = weather.sys.country;
  time.innerHTML = new Date().toLocaleString();
  shortDesc.innerHTML = weather.weather[0].main;

  const temp = Math.round(weather.main.temp);
  temperature.innerHTML = temp;

  temp >= 18 ? (document.body.className = 'hot') : (document.body.className = 'cold');

  visibility.innerHTML = weather.visibility + ' (m)';
  wind.innerHTML = weather.wind.speed + ' (m/s)';
  cloud.innerHTML = weather.clouds.all + ' (%)';
}

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    getWeather(e.target.value);
  }
});

async function getWeather(input) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

  const res = await fetch(url);
  const weather = await res.json();

  changeWeatherUI(weather);
}

getWeather('Ho Chi Minh');