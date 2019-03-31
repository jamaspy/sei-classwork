

const madLibButton = document.getElementById("lib-button");

const makeMadLib = () => {
  console.log("YES");
  let noun = document.getElementById("noun").value;
  let adjective = document.getElementById("adjective").value;
  let person = document.getElementById("person").value;
  let story = (`${person} really likes ${adjective} ${noun}`)
  console.log(story);
  document.getElementById("story").innerHTML= story;
};

madLibButton.addEventListener("click" , makeMadLib);
