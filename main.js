let num = 15.16698;
console.log(num.toPrecision(2), num.toPrecision(3), num.toPrecision(5));

let num1 = 7.78714;
console.log(num1.toPrecision(2), num1.toPrecision(3), num1.toPrecision(5));

let num2 = '12.3';
console.log(
    (num2 * 1).toPrecision(2),
    (num2 * 1).toPrecision(3),
    (num2 * 1).toPrecision(5)
);

let num3 = '3.14random';
console.log(
    (num3 * 1).toPrecision(2),
    (num3 * 1).toPrecision(3),
    (num3 * 1).toPrecision(5)
);
let num4 = '32px';
console.log(
    (num4 * 1).toPrecision(2),
    (num4 * 1).toPrecision(3),
    (num4 * 1).toPrecision(5)
);

let num5 = true;
console.log(
    (num5 * 1).toPrecision(2),
    (num5 * 1).toPrecision(3),
    (num5 * 1).toPrecision(5)
);

let num6 = false;
console.log(
    (num6 * 1).toPrecision(2),
    (num6 * 1).toPrecision(3),
    (num6 * 1).toPrecision(5)
);

let num7 = '321';
console.log(
    (num7 * 1).toPrecision(2),
    (num7 * 1).toPrecision(3),
    (num7 * 1).toPrecision(5)
);
let num8 = 'supercode';
console.log(
    (num8 * 1).toPrecision(2),
    (num8 * 1).toPrecision(3),
    (num8 * 1).toPrecision(5)
);

console.log('==================');

let num11 = 15.16698;
console.log(num11.toFixed(2));

let num22 = 7.78714;
console.log(num22.toFixed(2));

let num33 = '12.3';
console.log((num33 * 1).toFixed(2));

let num44 = true;
console.log((num44 * 1).toFixed(2));

let num55 = false;
console.log((num55 * 1).toFixed(2));

let num66 = '321';
console.log((num66 * 1).toFixed(2));

let num77 = 'supercode';
console.log((num77 * 1).toFixed(2));

console.log('==================');

let num111 = 15.16698;
console.log(num111.toString());

let num222 = 7.78714;
console.log(num222.toString());

let num333 = '12.3';
console.log((num333 * 1).toString());

let num444 = true;
console.log((num444 * 1).toString());

let num555 = false;
console.log((num555 * 1).toString());

let num666 = '321';
console.log((num666 * 1).toString());

let num777 = 'supercode';
console.log((num777 * 1).toString(3));

console.log('==================');

let num1111 = 15.16698;
console.log(Number(num111.toString()));

let num2222 = 7.78714;
console.log(Number(num222.toString()));

let num3333 = '12.3';
console.log(Number(num333));

let num4444 = true;
console.log(Number(num444.toString()));

let num5555 = false;
console.log(Number(num555.toString()));

let num6666 = '321';
console.log(Number(num666));

let num7777 = 'supercode';
console.log(Number(num777));

console.log('==================');

const age = document.getElementById('age');
const result = document.getElementById('result');

function checkAge() {
    if (age.value >= 18) {
        result.innerHTML = 'der Nutzer*in ist volljährig';
        console.log(true);
    } else {
        result.innerHTML = 'der Nutzer*in ist minderjährig';
        console.log(false);
    }
}

console.log('==================');

const weather = document.getElementById('weather');
const weatherResult = document.getElementById('weather-result');

function checkWeather() {
    if (weather.value >= 8 && weather.value <= 10) {
        weatherResult.innerHTML = 'Super ';
    } else if (weather.value >= 6 && weather.value <= 7) {
        weatherResult.innerHTML = 'Gut';
    } else if (weather.value >= 3 && weather.value <= 5) {
        weatherResult.innerHTML = 'Okay';
    } else if (weather.value >= 0 && weather.value <= 2) {
        weatherResult.innerHTML = 'Schlecht';
    } else {
        weatherResult.innerHTML = 'Giben Sie eine Werte zwischen 0 bis 10 ein';
    }
}
