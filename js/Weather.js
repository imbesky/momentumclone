const APIkey = `a8387ea99147dc428760089e8d61286f`;
const NowWeather = document.querySelector("#weather span:first-child");
const NowLocation = document.querySelector("#weather span:nth-child(2)");
const NowTemperature = document.querySelector("#weather span:nth-child(3)");

function GeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}8&lon=${lon}&appid=${APIkey}&units=metric&lang=kr`
    fetch(url)
        .then((reponse) => reponse.json())
        .then((data) => {
        const weater = 
        NowWeather.innerText = `지금 날씨는 ${data.weather[0].description},`;
        NowLocation.innerText = `위치는 ${data.name},`;
        NowTemperature.innerText = `섭씨 ${data.main.temp}도`;});
}

function GeoError(){
    // alert("날씨 정보를 찾을 수 없습니다.");
    NowWeather.innerText = "미지의 날씨,";
    NowLocation.innerText = "미지의 공간,";
    NowTemperature.innerText = "미지의 온도";
}

NowWeather.innerText = `지금 날씨는,`;
navigator.geolocation.getCurrentPosition(GeoOk, GeoError);