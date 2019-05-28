
//Error First Pattern with a callBack Function 
// const fs = require('fs')
// fs.readFile('flintstones.txt', 'utf-8', (err, content) => {
//   if(err){
//       throw err;
//   }
//   console.log( content )
// });

// // Promise wrpapper around readFile - Good To Know For Interview
// const fs = require('fs')

// const readFile = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, 'utf-8', (err, content) => {
            
//             if(err){
//                 reject(err);
//                 return;
//             }

//             resolve(content);

//         });
//     });
// };

// readFile('flintstones.txt').then((content) => {
//     console.log(`This .then() callback was actiallu invokde under resolve()`)
//     console.log(content)
// }).catch((error) => {
//     console.log("there was error", error)
// })

// const fileReadingPromise = readFile('flintstones.txt')
// fileReadingPromise.then ( (content) => {
//     console.log ( content )
// })

// fileReadingPromise.catch( (err) => {
//     console.error("Tghere was error", error)
// })

const wait = ( duration ) => {
return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
})
};

wait(2000).then(()=> {
    console.log("2 seconds has passed")
})