const xhrConditions = new XMLHttpRequest();
let conditionsObj;

xhrConditions.open('GET', 'http://api.wunderground.com/api/e17b6fcb2c4b30bc/conditions/q/CA/San_Francisco.json', true)
xhrConditions.responseType = 'text';
xhrConditions.send();

xhrConditions.onload = function () {
    if (xhrConditions.status === 200) {
        conditionsObj = JSON.parse(xhrConditions.responseText);
        console.log(conditionsObj);

        document.getElementById('location').innerHTML = conditionsObj.current_observation.display_location.full;
        document.getElementById('weather').innerHTML = conditionsObj.current_observation.weather;
        document.getElementById('temperature').innerHTML = conditionsObj.current_observation.temp_c;
    }
}