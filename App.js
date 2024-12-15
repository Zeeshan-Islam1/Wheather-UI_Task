

var weather = document.getElementById("weather");
var city = document.getElementById("city");

function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=392fc470c1ac8b42b2f40951a9a96cc4&units=metric`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);


      console.log(data.weather[0].main);
  

      const weatherCondition = data.weather[0].main.toLowerCase();
      console.log(weatherCondition);
      const weatherImages = {
        clear: "images/sun.png",
        clouds: "images/clouds.png",
        rain: "images/rain.png",
        snow: "images/snow.png",
        thunderstorm: "images/bolt.png",
        drizzle: "images/drizzle.png",
        haze: "images/fog.png",
        default: "images/default_weather.png",
      };

      const weatherImage = weatherImages[weatherCondition] || weatherImages.default;


      weather.innerHTML = `
    <h1 class="temp">${Math.round(data.main.temp)}°C</h1>
    <h2>${data.name}</h2>
    <img src="${weatherImage}" alt="${data.weather[0].main}" class="weather-icon">
    <h3>${data.weather[0].main}</h3>
    <h3>${data.wind.speed} km/h</h3>
    <h3>Humidity: ${data.main.humidity}%</h3>
    `;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function checkEnter(event) {
  if (event.key === "Enter") {
    getWeather();
  }
}