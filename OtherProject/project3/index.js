const inputBox = document.querySelector('.inputbox');
const searchBtn = document.getElementById('searchBtn');
const temperature = document.querySelector('.temperature')
const despcription = document.querySelector('.discription');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind-speed');


async function checkweather(city){
    let APIkey = "5a46365d280eb235020e6bb782b1324a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
    let weather_data = await fetch(`${url}`).then(response => 
        response.json()
    )
    console.log(weather_data)
    
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
  despcription.innerHTML = `${weather_data.weather[0].description}`
  humidity.innerHTML = `${weather_data.main.humidity}%`
  wind.innerHTML = `${weather_data.wind.speed} km/H`
}

searchBtn.addEventListener('click',() => {
    checkweather(inputBox.value);

})

