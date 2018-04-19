const xhr = new XMLHttpRequest();
let conditionsObj;

xhr.open('GET', 'http://api.wunderground.com/api/e17b6fcb2c4b30bc/conditions/q/CA/San_Francisco.json', true)
xhr.responseType = 'text';
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        conditionsObj = JSON.parse(xhr.responseText);
    }
}