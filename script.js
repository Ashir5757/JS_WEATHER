// https://api.openweathermap.org/data/2.5/weather?q=London&appid=ff62a8f54cec0aebe54fd852511feecb 

let form = document.querySelector("#form");
let search =  document.querySelector("#search");
let temp = document.querySelector("#temp");

// loader and blur bg  effect and getting body
let loader = document.querySelector(".loader");
let bg = document.querySelector(".blur-bg");
let body = document.querySelector("body");



// messages success and error 
let messages = document.querySelector(".messages");
let success = document.querySelector(".success");
let errorb = document.querySelector(".error");
let successText = document.querySelector("#success-text");
let errorText = document.querySelector("#error-text");


// sara text get k 
let image = document.querySelector("#image");
let cloudy = document.querySelector("#cloudy");
let pak = document.querySelector("#city");
let date = document.querySelector("#date");
let humidity = document.querySelector("#humidity");
let visibility = document.querySelector("#visibility");
let feelslike = document.querySelector("#feelslike");
let humidityDes = document.querySelector("#humidity-des");
let visibilityDes = document.querySelector("#visibility-des");
let feelslikeDes = document.querySelector("#feelslike-des");

let farenhitetext = document.querySelector("#farenhite");
let celciustext = document.querySelector("#celcius");

getTemp();

// sara function
form.addEventListener("submit",(e) => {
    e.preventDefault();

    getTemp();
})


function farenhite(kelvin) {
    const fahrenheitTemp = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
    farenhitetext.innerHTML = `${fahrenheitTemp}°F`;
}

function celcius(kelvin) {
    const celsiusTemp = (kelvin - 273.15).toFixed(2);
    celciustext.innerHTML = `${celsiusTemp}°C`;
}


// weathr data api
function getTemp(){
    loader.style.display = "block";
    bg.style.display = "block";
    body.style.overflow = "hidden";
    const city = search.value || "islamabad";



const ApiKey = "ff62a8f54cec0aebe54fd852511feecb";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    temp.innerHTML = `${data.main.temp}`;
    cloudy.innerHTML = `${data.weather[0].description}`;
    pak.innerHTML = `${data.name}`;
    date.innerHTML = `${new Date()}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    visibility.innerHTML = `${data.visibility}Km`;
    feelslike.innerHTML = `${data.main.feels_like}`;
    humidityDes.innerHTML = `The humidity of ${city} is ${data.main.humidity}%`;
    visibilityDes.innerHTML = `The Sea level of ${city} is  ${data.main.sea_level}m`;
    feelslikeDes.innerHTML = `The Pressure of ${city} is ${data.main.pressure}hPa`; ;

   

 if(data.weather[0].description == "clear sky"){
     image.src = "cloudy-7098481_1920-removebg-preview (1).png";
    }else if(data.weather[0].description == "rain"){
        image.src = "weather-7159428_1920-removebg-preview (1).png";
    }else if(data.weather[0].description == "overcast clouds"){
    image.src = "cloudy-7098481_1920-removebg-preview (1).png";
}else{
    image.src = "cloudy-7098481_1920-removebg-preview (1).png";
}


let kelvin = data.main.temp;
celcius(kelvin);
farenhite(kelvin);


// display kra rha loader
loader.style.display = "none";
bg.style.display = "none";
body.style.overflow = "auto";

// display kra rha success message 

messages.style.display = "block";
success.style.display = "flex";
successText.innerHTML = `Temperature of ${city} is ${data.main.temp}K `;

setTimeout(() => {
    
    messages.style.display = "none";
    success.style.display = "none";
}, 3000);




 


}).catch((error) => {
    console.log(error);
    loader.style.display = "none";
    bg.style.display = "none";
    body.style.overflow = "auto";
    
    //  error message
    messages.style.display = "block";
    errorb.style.display = "flex";
    errorText.innerHTML = `${city} not found` ;
    setTimeout(() => {
        messages.style.display = "none";
        errorb.style.display = "none";
    }, 3000);

    
    
})
}




