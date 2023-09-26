const apiKey = "dfed9e280cbd640a4464e5e7b61956cc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(City) {
    const response = await fetch(apiUrl + City + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        let data = await response.json();


        // console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " " + "% AQI";
        document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";
    
    
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".peace").style.display ="none";
        document.querySelector(".error").style.display = "none";
    }

}

searchButton.addEventListener("click", function () {
    checkWeather(searchBox.value);
});

// searchBox.addEventListener('keydown', e => {
//     if (e.key === 'Enter') {
//         checkWeather(searchBox.value);
//     }
// });

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
}
searchBox.addEventListener('keydown', handleEnterKey);

