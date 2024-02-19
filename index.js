const apiKey = "5d58bb48d4a4836044be226e8211433a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "rainy-day.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img1.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "fog.png"
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})



