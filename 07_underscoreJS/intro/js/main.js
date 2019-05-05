console.log(_.VERSION);

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 

_.each(numbers, function ( number, index){
    console.log(number, index);
})

const obj = {
    4: "four",
    5: "five",
    6: "six"
};

_(obj).each(function(value, key, entireObj){
    console.log( value);
    console.log(key);
})

//.map()//////////////////
const byFives = _(numbers).map(function(n){
    return n * 5
})
console.log(byFives);

//.map() also works with Objects

const objFacts = _(obj).map(function (v, k){
    return `${k}  :  ${v}`
})
console.log(objFacts);


//.reduce()/////////////////
const sumNumbers = _(numbers).reduce(function(runningTotal, n){
    return runningTotal + n
})
console.log(sumNumbers)

// .find()/////////////////// ALSO try .filter() /////////
// find finds one and filter finds all 
const firstMultipleOfFour = _(numbers).find(function(n){
    console.log("considering", n);
    return n % 2 === 0;
})
console.log(firstMultipleOfFour);
///write a helper function 
const isEven = function(n) {
    return n % 2 === 0;
}
const evens = _(numbers).filter(isEven);
console.log(evens);

// .reject()////
const odss = _(numbers).reject( isEven )
console.log(odss);


// .pluck() //////
const bros = [
    {name: "James", age: 12, color: "blue", place: "house"},
    {name: "Sam", age: 222, color: "red", place: "shed"},
    {name: "Jen", age: 32, color: "green", place: "garage"}
];

const names = _(bros).pluck("name")
console.log(names);

const findWhere = _(bros).findWhere({place: "shed"})
console.log(findWhere);



//.max() & min()
console.log(_(numbers).max());
console.log(_(numbers).min());

//.sortBy() _ READ DOCS

// .shuffle() //////
const shuffled = _(numbers).shuffle()
console.log(shuffled);
// .sample == gets random number from the arrange
const sample = _(numbers).sample(3);
console.log(sample);
