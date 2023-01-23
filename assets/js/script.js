
// var city = 'Sydney';
var searchButton = document.getElementById('search');


const apiKey = '83f8c108561a5fbccfe85952fcc76d3a';

searchButton.addEventListener('click', getWeather);

function getWeather (){
  var city = document.getElementById('city').value;
  console.log(city);
  const weatherForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=6`;
  fetch(weatherForecast)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var cityMain = document.getElementById('main-city');
    console.log(cityMain);
    cityMain.innerHTML = city;
    var tempMain = document.getElementById('main-temp');
    tempMain.innerHTML = "Temperature: " + data.list[0].main.temp;
  })
  .catch(error => console.error(error));
}


