
// let weatherAPIUrl = https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=0d205d676089b89aaf4fd5a075b4c7d6
// https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

var apiKey2 = '0d205d676089b89aaf4fd5a075b4c7d6'
var userSearch = `cozumel`

function getLatLon(userSearch){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=`
    + userSearch
    + `&limit=5&appid=`
    + apiKey2
    ).then((response) => response.json())
    console.log(response.json());
     .then(function(data){
     if (!data[0]) {
         console.log ("Location not found")
     }else{
     console.log("lat",data[1].lat)
     console.log("lon",data[1].lon)
     latVar = data[0].lat
     lonVar = data[0].lon
     currentForecast();
}
})
};

 currentForecast() = {
     fetchWeather: function() {
         fetch(
             "https:api.openweathermap.org/data/2.5/forecast?" 
             + "lat=" + latVar +"&lon=" + lonVar
             + "&units=imperial&appid=" + apiKey2
            
             ).then((response) => response.json())
              .then((data) => console.log(data));
             .then((data) => this.displayWeather(data));
     },
     displayWeather: function(data) {
         const { name } = data;
         const { icon, description } = data.current.weather[0];
         const { temp, humidity} = data.current.main;
         const { speed } = data.current.wind;
         console.log(name,icon,description,temp,humidity,speed)
         document.querySelector("#city").innerText = name;
         document.querySelector("#icon").src = "https:openweathermap.org/img/wn/" + icon +"@2x.png";
         document.querySelector("#temp").innerText = temp + "°F";
         document.querySelector("#humidity").innerText = "Humidity" + humidity + "%";
         document.querySelector("#wind").innerText = "Wind" + speed + "mi/h";
     },
     search: function () {
         this.fetchWeather(document.querySelector(".search").value)
         e.preventDefault();
        
     }
 };

document.getElementById("clickMe").addEventListener("click", function (event){
    event.preventDefault();
    getLatLon(event.target.userSearch);}
    );
    
// if (el.addEventListener)
//     el.addEventListener("click", getLatLon(), false);
// else if (el.attachEvent)
//     el.attachEvent('onclick', getLatLon);
//     event.preventDefault()


// // https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=0d205d676089b89aaf4fd5a075b4c7d6

// // var weatherAPIUrl = `https://api.openweathermap.org/`
// // data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}
// // // var testUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`
// // // Value from search form
// // var lat;
// // var lon;

// // // document.getElementById("#searchTerm").value


// // function currentForecast(){
// // fetch(weatherAPIUrl)
// // .then(function(response){
// // return response.json();
// // }).then(function(data){
// //     console.log(data);
// //     // APPEND TO PAGE   
// // })
// // };