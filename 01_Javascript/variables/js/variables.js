// Fortune Teller
const numberOfChildren = 2;
const partnersName = "Kylie";
const geoLocation = "Sydney";
const jobTitle = "Frontend Developer"
const result1 = (`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`)
document.getElementById("answer1").innerHTML = result1;


// The Age Calculator
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

const currentYear = 2019;
const birthYear = 1985;
const calcAge1 = currentYear - birthYear;
const calcAge2 = (currentYear - birthYear) - 1;
const result2 = (`You are either ${calcAge1} or ${calcAge2} years only depending on the current month.`);
document.getElementById("answer2").innerHTML = result2;
console.log(`You are either ${calcAge1} or ${calcAge2} years only depending on the current month.`)


// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

const myAge = 33;
const maxAge = 99;
const yearsLeft = maxAge - myAge;
const estimatedDailyAmount = 3;
const restOfLifeAmount = (yearsLeft * 365) * estimatedDailyAmount;
const result3 = (`You will need ${restOfLifeAmount} Chocolate Brownies to last you until the rip old afe of ${maxAge}`);
document.getElementById("answer3").innerHTML = result3;
console.log(`You will need ${restOfLifeAmount} Chocolate Brownies to last you until the rip old afe of ${maxAge}`);

// Calculate properties of a circle, using the definitions here.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

const radius = 3;
const circumference = (2 * radius) * Math.PI
const areaOfCircle = 3.14 * (radius * radius);
const result4 = (`The Circumference of your Circle is ${circumference}.`);
document.getElementById("answer4").innerHTML = result4;
const result5 = (`The Area of your Circle is ${areaOfCircle}.`);
document.getElementById("answer5").innerHTML = result5;
console.log(`The Circumference of your Circle is ${circumference}.`)
console.log(`The Area of your Circle is ${areaOfCircle}.`)


// It's hot out! Let's make a converter based on the steps here.
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F" - Multiply by 9, then divide by 5, then add 32
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C." - Deduct 32, then multiply by 5, then divide by 9

const tempInCelsius = 26;
const convertCelsiusToFahrenheit = (tempInCelsius * 9) / 5 + 32;
const tempInFahrenheit = 30;
const convertFahrenheitToCelcius = (tempInFahrenheit - 32) * 5 / 9;
const result6 = (`${tempInCelsius}°C is ${convertCelsiusToFahrenheit}°F`);
document.getElementById("answer6").innerHTML = result6;
const result7 = (`${tempInFahrenheit}°C is ${convertFahrenheitToCelcius}°F`)
document.getElementById("answer7").innerHTML = result7;
console.log(`${tempInCelsius}°C is ${convertCelsiusToFahrenheit}°F`)
console.log(`${tempInFahrenheit}°C is ${convertFahrenheitToCelcius}°F`)
