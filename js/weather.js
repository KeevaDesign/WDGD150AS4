require("dotenv").config();
const apiKey = process.env.API_KEY;
const baseURL = "https://api.openweathermap.org/data/2.5/weather?";

const cityName = "Toronto";
const countryCode = "CA";

var today = new Date().toDateString(); // get today's Date

function getWeatherData() {
  const url = `${baseURL}q=${cityName},${countryCode}&appid=${apiKey}&units=metric`;

  $.ajax({
    url: url,
    type: "GET",
    success: function (data) {
      displayWeatherData(data);
    },
  });
}

function displayWeatherData(data) {
  var iconcode = data.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

  const displayData = `
        <h4>${today}</h4>
        <h1>${cityName}, ${countryCode}</h1>
        <img src='${iconurl}'>
        <h3> ${data.main.temp} °C</h3>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;

  $("#weatherResult").html(displayData);
}

$(document).ready(function () {
  getWeatherData();
});
