body = document.body
body.style.fontFamily = "Arial, sans-serif";

nickname = document.getElementById("nickname");
nickname.innerHTML = "Jimmy";

favorites = document.getElementById("favorites");
favorites.innerHTML = "Dogs";

hometown = document.getElementById("hometown");
hometown.innerHTML = "Stoke-on-Trent";

listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++){
  listItems[i].className = "listitem";
}

const bill = document.createElement("img");
bill.src = "http://fillmurray.com/222/111";
document.body.appendChild(bill);
