//FortuneTeller Function
const tellFortune = (jobTitle, geoLocation, partnersName, numberOfChildren) => {
  const result1 = (`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`)
  document.getElementById("answer1").innerHTML = result1;
}

//PuppyAge Calculator
const calculateDogAge = (puppyAge, conversionRate) => {
  const dogYears = puppyAge * conversionRate;
  const result2 = (`Your doggie is ${dogYears} years old in dog years!`);
  document.getElementById("answer2").innerHTML = result2;
}


//LifeTime Supply
const calculateSupply = (age, amountPerDay) => {
  const maxAge = 100;
  const yearsLeft = maxAge - age;
  const restOfLifeAmount = (yearsLeft * 365) * Number((amountPerDay).toFixed(1));;
  const result3 = (`You will need ${restOfLifeAmount} Chocolate Brownies to last you until the rip old afe of ${maxAge}`);
  document.getElementById("answer3").innerHTML = result3;
}


//Calculate Circle Functions.

const calcCircumfrence = (radius) => {
  const circumference = (2 * radius) * Math.PI;
  const result4 = (`The Circumference of your Circle is ${circumference}.`);
  document.getElementById("answer4").innerHTML = result4;
}

const calcArea = (radius) => {
  const areaOfCircle = 3.14 * (radius * radius);
  const result5 = (`The Area of your Circle is ${areaOfCircle}.`);
  document.getElementById("answer5").innerHTML = result5;
}


//Temperature Converter
const celsiusToFahrenheit = (celsius) => {
  const convert = (celsius * 9) / 5 + 32;
  const result6 = (`${celsius}°C is ${convert}°F`);
  document.getElementById("answer6").innerHTML = result6;
}

const fahrenheitToCelsius = (fahrenheit) => {
  const convert = (fahrenheit - 32) * 5 / 9;
  const result7 = (`${fahrenheit}°F is ${convert}°C`)
  document.getElementById("answer7").innerHTML = result7;
}
