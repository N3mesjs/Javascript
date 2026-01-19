const APIKey = "331bde5410589e85ec33b19aecc9047d";

const wheatherForm = document.querySelector(".wheatherForm");
const cityInput = document.querySelector(".cityInput");



wheatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = cityInput.value.toLowerCase();
    fetchWeather(city);
});

async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
    const data = await response.json();
    console.log(data);
}