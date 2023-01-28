// Global Variables
var getPrev = JSON.parse(localStorage.getItem('prev-search'));
var searchButton = document.getElementById('search');
var cityInput = document.getElementById('city');

const apiKey = '83f8c108561a5fbccfe85952fcc76d3a';

searchButton.addEventListener('click', getWeather);


getPrev.forEach(element => {
  createChildNode(element);
});

// Previous Search
function createChildNode (cityName){
  var prevSearch = document.createElement('li');
  prevSearch.innerHTML = cityName;
  document.getElementById('prev-search').appendChild(prevSearch);
}

// Display Date
function date (){
  var today = new Date();
        var dayOne = new Date(today.getTime() + (24 * 60 * 60 * 1000));
        document.getElementById("date-1").innerHTML = dayOne.toDateString();

        var dayTwo = new Date(dayOne.getTime() + (24 * 60 * 60 * 1000));
        document.getElementById("date-2").innerHTML = dayTwo.toDateString();

        var dayThree = new Date(dayTwo.getTime() + (24 * 60 * 60 * 1000));
        document.getElementById("date-3").innerHTML = dayThree.toDateString();

        var dayFour = new Date(dayThree.getTime() + (24 * 60 * 60 * 1000));
        document.getElementById("date-4").innerHTML = dayFour.toDateString();

        var dayFive = new Date(dayFour.getTime() + (24 * 60 * 60 * 1000));
        document.getElementById("date-5").innerHTML = dayFive.toDateString();
}

function getWeather (){
  var city = document.getElementById('city').value;

  // Save to Local Storage
  getPrev.push(city);
  localStorage.setItem('prev-search', JSON.stringify(getPrev));
  
  // Update Previous Searches Node in HTML Dom
  createChildNode(city);
  console.log(city);

  // Fetch API
  const weatherForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=6`;
  fetch(weatherForecast)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Main Searched City
    var cityMain = document.getElementById('main-city');
    console.log(cityMain);
    cityMain.innerHTML = city;
    var tempMain = document.getElementById('main-temp');
    tempMain.innerHTML = "Temperature: " + data.list[0].main.temp + "°C";
    var windMain = document.getElementById('main-wind');
    windMain.innerHTML = "Wind: " + data.list[0].wind.speed + "km/h";
    var humidMain = document.getElementById('main-humid');
    humidMain.innerHTML = "Humid: " + data.list[0].main.humidity + "%";

    // Forecast Day One
    var tempDayOne = document.getElementById('temp-1');
    tempDayOne.innerHTML = "Temp: " + data.list[1].main.temp + "°C";
    var windDayOne = document.getElementById('wind-1');
    windDayOne.innerHTML = "Wind: " + data.list[1].wind.speed + "km/h";
    var humidDayOne = document.getElementById('humid-1');
    humidDayOne.innerHTML = "Humid: " + data.list[1].main.humidity + "%";

    // Forecast Day Two
    var tempDayTwo = document.getElementById('temp-2');
    tempDayTwo.innerHTML = "Temp: " + data.list[2].main.temp + "°C";
    var windDayTwo = document.getElementById('wind-2');
    windDayTwo.innerHTML = "Wind: " + data.list[2].wind.speed + "km/h";
    var humidDayTwo = document.getElementById('humid-2');
    humidDayTwo.innerHTML = "Humid: " + data.list[2].main.humidity + "%";

    // Forecast Day Three
    var tempDayThree = document.getElementById('temp-3');
    tempDayThree.innerHTML = "Temp: " + data.list[3].main.temp + "°C";
    var windDayThree = document.getElementById('wind-3');
    windDayThree.innerHTML = "Wind: " + data.list[3].wind.speed + "km/h";
    var humidDayThree = document.getElementById('humid-3');
    humidDayThree.innerHTML = "Humid: " + data.list[3].main.humidity + "%";

    // Forecast Day Four
    var tempDayFour = document.getElementById('temp-4');
    tempDayFour.innerHTML = "Temp: " + data.list[3].main.temp + "°C";
    var windDayFour = document.getElementById('wind-4');
    windDayFour.innerHTML = "Wind: " + data.list[3].wind.speed + "km/h";
    var humidDayFour = document.getElementById('humid-4');
    humidDayFour.innerHTML = "Humid: " + data.list[3].main.humidity + "%";

    // Forecast Day Five
    var tempDayFive = document.getElementById('temp-5');
    tempDayFive.innerHTML = "Temp: " + data.list[4].main.temp + "°C";
    var windDayFive = document.getElementById('wind-5');
    windDayFive.innerHTML = "Wind: " + data.list[4].wind.speed + "km/h";
    var humidDayFive = document.getElementById('humid-5');
    humidDayFive.innerHTML = "Humid: " + data.list[4].main.humidity + "%";

    
  })
  .catch(error => console.error(error));
}

date();