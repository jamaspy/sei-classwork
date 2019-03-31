//Greatest Number
const greaterNum = (num1, num2) => {
  if (num1 > num2) {
    console.log(`The greater number of ${num1} and ${num2} is ${num1}`);
  } else if (num2 > num1) {
    console.log(`The greater number of ${num1} and ${num2} is ${num2}`);
  } else {
    console.log(`The numbers are equal.`);
  }
}

//HelloWorld Languages
const helloWorld = (code) => {
  if (code === "es") {
    console.log("Hola Mundo");
  } else if (code === "de") {
    console.log("Hallo Welt");
  } else if (code === "au") {
    console.log("G'Day World");
  } else {
    console.log("Hello World");
  }
}

//Assign Grade Function
const assignGrade = (grade) => {
  if (grade >= 90) {
    console.log("You Got An A");
  } else if (grade >= 80) {
    console.log("You Got A B")
  } else if (grade >= 70) {
    console.log("You Got A C")
  } else if (grade >= 60) {
    console.log("You Got A D")
  } else if (grade >= 50) {
    console.log("You Got An E")
  } else if (grade >= 40) {
    console.log("You Got An F")
  } else {
    console.log("You Failed")
  }
}

// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = (noun, number) =>{
  if (number >= 2){
    console.log(`You have many ${noun}s`);
  }else{
    console.log(`You only have a single ${noun}`);
  }
}
