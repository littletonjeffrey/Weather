// WHEN I view current weather conditions for that city
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
let weather = {
    "apiKey": "0d205d676089b89aaf4fd5a075b4c7d6",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" + this.apiKey
            
            ).then((response) => response.json())
            // .then((data) => console.log(data));
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector("#city").innerText = name;
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector("#temp").innerText = temp + "°F";
        document.querySelector("#humidity").innerText = "Humidity" + humidity + "%";
        document.querySelector("#wind").innerText = "Wind" + speed + "mi/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button")
addEventListener("click", function () {
    weather.search();

});



// https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=0d205d676089b89aaf4fd5a075b4c7d6
var apiKey2 = '0d205d676089b89aaf4fd5a075b4c7d6'
// var userSearch = document.getElementById('userInput').value;
// var weatherAPIUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
// var geoAPIurl=`http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=5&appid=${apiKey}`
// // var testUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`
// // Value from search form
// var lat;
// var lon;

// // document.getElementById("#searchTerm").value
// function getLatLon(){

// fetch(geoAPIurl)
// .then(function(response){
// return response.json();
// }).then(function(data){
//     console.log(data);
//     console.log("lat",data[0].lat)
//     console.log("lon",data[0].lon)
//     lat = data[0].lat
//     lon = data[0].lon
//     currentForecast();
// })
// };

// function currentForecast(){
// fetch(weatherAPIUrl)
// .then(function(response){
// return response.json();
// }).then(function(data){
//     console.log(data);
//     // APPEND TO PAGE   
// })
// };