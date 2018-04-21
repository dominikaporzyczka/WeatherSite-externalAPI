const xhrConditions = new XMLHttpRequest();
const xhrForecast = new XMLHttpRequest();
let conditionsObj;
let forecastObj;

// CONDITIONS
xhrConditions.open('GET', 'http://api.wunderground.com/api/e17b6fcb2c4b30bc/conditions/q/CA/San_Francisco.json', true)
xhrConditions.responseType = 'text';
xhrConditions.send();

xhrConditions.onload = function () {
    if (xhrConditions.status === 200) {
        conditionsObj = JSON.parse(xhrConditions.responseText);

        document.getElementById('location').innerHTML = conditionsObj.current_observation.display_location.full;
        document.getElementById('weather').innerHTML = conditionsObj.current_observation.weather;
        document.getElementById('temperature').innerHTML = conditionsObj.current_observation.temp_c;
    }
}

// FORECAST
xhrForecast.open('GET', 'http://api.wunderground.com/api/e17b6fcb2c4b30bc/forecast/q/CA/San_Francisco.json', true)
xhrForecast.responseType = 'text';
xhrForecast.send();

xhrForecast.onload = function () {
    if (xhrForecast.status === 200) {
        forecastObj = JSON.parse(xhrForecast.responseText);
        
        document.getElementById('description').innerHTML = forecastObj.forecast.txt_forecast.forecastday[0].fcttext;

        // DAY 1
        document.getElementById('day1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].date.weekday;
        document.getElementById('img1').src = forecastObj.forecast.simpleforecast.forecastday[1].icon_url;
        document.getElementById('tempMax1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].high.celsius + '°';
        document.getElementById('tempMin1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].low.celsius + '°';
    }
}