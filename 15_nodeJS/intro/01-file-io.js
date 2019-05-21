const fs = require('fs');
const colors = require('colors');

// Synchronous
// const fileData = fs.readFileSync("flinstones.txt", "utf-8");
// console.log(fileData.rainbow);

//Asynchronous
fs.readFile('flinstones.txt', 'utf-8', function(error, data){
    if(error){
        console.log("ERROR".rainbow);
        return
    }
    console.log(data.rainbow);
})