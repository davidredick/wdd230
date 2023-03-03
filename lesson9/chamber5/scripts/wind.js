function windchill() {
let windSpeed = 5;
let temperature = 45;
let fer = "℉";

function CalculateWindChill(speed, temp) {
    if (windSpeed > 3.0 & temperature <= 50) {
        return (35.74 + .621 * temp - (35.75 * speed ** .16) + .4275 * temp * speed ** .16);
    }
    else {
        return "N/A"
    }
}

document.querySelector("#outsidetemp").textContent = temperature + fer;
document.querySelector("#windspeed").textContent = windSpeed;
document.querySelector("#windchill").textContent = CalculateWindChill(windSpeed, temperature).toFixed(1);
/*document.querySelector("#weatherpic").setAttribute("src", "images/weather-rainy.svg");*/


}