
let apikey = "d4f98c6cd2fe5af9f77011c475b455d4 "
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    let response = await fetch ( apiUrl + city +`&appid=${apikey}`)
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + 'km/h';
    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";

    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";

    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/Drizzle.png";

    }else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";

    } else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
        
    }else if (data.weather[0].main == "296"){
        weatherIcon.src = "images/296.png";
    }

}
searchbtn.addEventListener("click", function (){
    checkweather(searchBox.value);
})


checkweather("London")


