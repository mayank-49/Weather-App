const inputVal = document.querySelector(".input-box");
const search = document.querySelector(".btn");
const weatherImg = document.querySelector("#weather-img");
const temp = document.querySelector(".temperature");
const descp = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const speed = document.getElementById("wind-speed");
var weatherBox = document.querySelector(".weather-box")
var main = document.querySelector(".main");


async function getWeather(city){
    const api_key = config.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const data = await fetch(`${url}`).then(response => response.json());

    if(data.cod === `404`){
        weatherImg.src = "./img/404.png";
        temp.innerHTML = "0°C";
        descp.innerHTML = "Location Not Found"
        humidity.innerHTML = "0%";
        speed.innerHTML = "0Km/h";
    }

    console.log(data);

    temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    descp.innerHTML = `${data.weather[0].description}`;

    humidity.innerHTML = `${data.main.humidity}%`;
    speed.innerHTML = `${data.wind.speed}Km/H`;

    

    switch(data.weather[0].main){
        case 'Clouds':
            weatherImg.src = "./img/cloud.png";
        break
        case 'Clear':
            weatherImg.src = "./img/clear.png";
        break
        case 'Rain':
            weatherImg.src = "./img/rain.png";
        break
        case 'Mist':
            weatherImg.src = "./img/mist.png";
        break
        case 'Snow':
            weatherImg.src = "./img/snow.png";
        break
    }
}
function checkWeather(key){
    if(key === "Enter"){
        getWeather(inputVal.value);
        animate();   
    }
}

search.addEventListener('click',() => {
    search.classList.add("clicked");
    getWeather(inputVal.value);
    animate();
})


document.addEventListener('keydown', (e) => {
    var key = e.key;
    checkWeather(key);
})


function animate(){
    search.classList.add("clicked");
    humidity.classList.add("animate");
    setTimeout(()=>{
        humidity.classList.remove("animate");
    },2000);


    weatherBox.classList.add("animate");
    setTimeout(()=>{
        weatherBox.classList.remove("animate");
    },2000);

    speed.classList.add("animate");
    setTimeout(()=>{
        speed.classList.remove("animate");
    },2000);

    weatherImg.classList.add("animate");
    setTimeout(()=>{
        weatherImg.classList.remove("animate");
    },2000);
}



