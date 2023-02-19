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

document.querySelector("#temperature").textContent = temperature + fer;
document.querySelector("#wind-speed").textContent = windSpeed;
document.querySelector("#wind-chill").textContent = CalculateWindChill(windSpeed, temperature).toFixed(1);
/*document.querySelector("#weather-icon").setAttribute("src", "images/weather-rainy.svg");*/


}