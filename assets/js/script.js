var getPrev = JSON.parse(localStorage.getItem('prev-search'));
var searchButton = document.getElementById('search');
var cityInput = document.getElementById('city');

const apiKey = '83f8c108561a5fbccfe85952fcc76d3a';

searchButton.addEventListener('click', getWeather);


getPrev.forEach(element => {
  createChildNode(element);
});

function createChildNode (cityName){
  var prevSearch = document.createElement('li');
  prevSearch.innerHTML = cityName;
  document.getElementById('prev-search').appendChild(prevSearch);
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
    var cityMain = document.getElementById('main-city');
    console.log(cityMain);
    cityMain.innerHTML = city;
    var tempMain = document.getElementById('main-temp');
    tempMain.innerHTML = "Temperature: " + data.list[0].main.temp;
  })
  .catch(error => console.error(error));
}