const mockWeatherData = {
  Paris: {
    temp: 23,
    description: "Partly cloudy",
  },
  London: {
    temp: 18,
    description: "Light rain",
  },
  Madrid: {
    temp: 30,
    description: "Sunny",
  },
  Manchester: {
    temp: 15,
    description: "Windy",
  },
  Default: {
    temp: 25,
    description: "Clear sky",
  },
};

document.getElementById("getWeather").addEventListener("click", () => {
  const cityInput = document
    .getElementById("city")
    .value.trim()
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9 ]+$/g, "");
  const resultDiv = document.getElementById("result");

  if (!cityInput) {
    resultDiv.innerText = "Please enter a city name.";
    return;
  }

  const city = capitalize(cityInput);
  const data = mockWeatherData[city] || mockWeatherData.Default;

  resultDiv.innerHTML = `
    <h3>Weather in ${city}</h3>
    <p> Temperature: ${data.temp}°C</p>
    <p> Description: ${data.description}</p>
  `;
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
