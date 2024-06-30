const weatherContainer = document.querySelector("#weather span:first-child");
const areaContainer = document.querySelector("#weather span:last-child");

const API_KEY = "92339f08b2db014e7f854333c2fe941a";

function onGeoOk (position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then(response => response.json()
        .then(data => {
            weatherContainer.innerHTML = data.weather[0].main;
            areaContainer.innerHTML = data.name;
            }));
}

function onGeoError() {
    alert("Can't find you. No whether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);