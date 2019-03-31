for (let i = 0; i <= 20; i++){
  if(i % 2 === 0){
    console.log(`The number ${i} is equal`);
  }else{
    console.log(`The number ${i} is odd`);
  }
}

for (let i = 0; i <= 10; i++) {
  let multiply = i * 9;
  console.log(`${i} times 9 equals ${multiply}`);
}

for (var i = 0; i <= 100; i++) {
  if (i >= 90) {
    console.log("You Got An A");
  } else if (i >= 80) {
    console.log("You Got A B")
  } else if (i >= 70) {
    console.log("You Got A C")
  } else if (i >= 60) {
    console.log("You Got A D")
  } else if (i >= 50) {
    console.log("You Got An E")
  } else if (i >= 40) {
    console.log("You Got An F")
  } else {
    console.log("You Failed")
  }
}
