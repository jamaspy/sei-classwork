console.log("YES", $.fn.jquery)


//A callback is a funciton passed in another function which calls that first function for you at some 
//later point in time

//Timers
console.log("A: before setTimer");

setTimeout(function () {
    console.log("B: time has passed")
}, 4000);

console.log("C: after setTimout");


//jQuery: Docuemnt Ready
console.log("1: before doucment ready");
$(document).ready(function () {
    console.log("2: the docuemnt is ready")
});
console.log("3: after document is ready");

//Event Handlers 
console.log("Groucho");
$(document).on("click", function () {
    console.log("Harpo");
})
console.log("Cheeko");

//You are not expeceted to understand this 
const colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

const each = function (someArray, callback) {
    for (let i = 0; i < someArray.length; i++) {
        callback(someArray[i]);
    }
}

each(colours, function (c) {
    console.log(c)
});

//.forEach
colours.forEach(function (likky) {
    console.log(likky)
});