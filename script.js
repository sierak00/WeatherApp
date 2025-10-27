const apiKey = "a8fc6fce73ed010098bb1132da13e4cc"; 

document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  // Fetch data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => alert(error.message));
}

function displayWeather(data) {
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");

  cityName.textContent = `${data.name}, ${data.sys.country}`;
  temperature.textContent = `🌡️ Temperature: ${data.main.temp.toFixed(1)}°C`;
  description.textContent = `🌥️ ${data.weather[0].description}`;
  humidity.textContent = `💧 Humidity: ${data.main.humidity}%`;
  wind.textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;
}
