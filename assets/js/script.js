var APIKey = "11e835335ab747fc1ec7eac03b124031"

var inputCity = $("#input-city");
var searchBtn = $("#search-btn");
var pastSearches = $("#past-searches");
var savedCities = [];

var currentWeather = $("#current-weather");
var cityName = $("#city-name");
var temp = $("#temp");
var wind = $("#wind");
var humidity = $("#humidity");
var uvIndex = $("#uv-index");

var fiveDays = $("#five-days");

var oneDay = $("#one-day");
var oneTemp = $("#one-day-temp");
var oneWind = $("#one-day-wind");
var oneHumidity = $("#one-day-humidity");

var twoDay = $("#two-day");
var twoTemp = $("#two-day-temp");
var twoWind = $("#two-day-wind");
var twoHumidity = $("#two-day-humidity");

var threeDay = $("#three-day");
var threeTemp = $("#three-day-temp");
var threeWind = $("#three-day-wind");
var threeHumidity = $("#three-day-humidity");

var fourDay = $("#four-day");
var fourTemp = $("#four-day-temp");
var fourWind = $("#four-day-wind");
var fourHumidity = $("#four-day-humidity");

var fiveDay = $("#five-day");
var fiveTemp = $("#five-day-temp");
var fiveWind = $("#five-day-wind");
var fiveHumidity = $("#five-day-humidity");

function weatherInfo() {
    var searchedCity = inputCity.val().replace(/\s+/g, "+")
    var locationURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchedCity + "&limit=1&appid=11e835335ab747fc1ec7eac03b124031"
    console.log(locationURL)

    fetch(locationURL)
        .then(function (response) {
            if (response.status === 404) {
                console.log(response.status);
            } else {
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data);
            var rightNow = moment().format("(M/D/YYYY)")
            cityName.text(data[0].name + " " + rightNow)
            var requestLat = data[0].lat
            var requestLon = data[0].lon
            console.log(requestLat)
            console.log(requestLon)
            var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + requestLat + "&lon=" + requestLon + "&exclude=minutely,hourly&units=imperial&appid=11e835335ab747fc1ec7eac03b124031"
            console.log(weatherURL)
            fetch(weatherURL)
                .then(function (response) {
                    if (response.status === 404) {
                        console.log(response.status);
                    } else {
                        return response.json();
                    }
                })
                .then(function (data) {
                    console.log(data);

                    temp.text(data.current.temp + "°F")
                    wind.text(data.current.wind_speed + " MPH")
                    humidity.text(data.current.humidity + " %")
                    uvIndex.text(data.current.uvi)

                })
        })
}



searchBtn.on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    weatherInfo();

})

