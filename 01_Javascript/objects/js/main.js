const favRecipes = {
  title: "Chicken Curry",
  servings: 4,
  ingredients: ["chicken", "spices", "tomatoes"]
}

const myBooks = [{
    title: "Book1",
    author: "Sam",
    alreadyRead: true
  },
  {
    title: "Book2",
    author: "James",
    alreadyRead: false
  },
  {
    title: "Book3",
    author: "Kylie",
    alreadyRead: true
  }
]

for (let i = 0; i < myBooks.length; i++){
  let myBook = myBooks[i];
  console.log(`${myBook.title} written by ${myBook.author}` );
}

for (let i = 0; i < myBooks.length; i++){
  let myBook = myBooks[i];
  if(myBook.alreadyRead === true){
    console.log(`You have already read ${myBook.title} written by ${myBook.author}`)
  }else{
    console.log(`You have not read ${myBook.title} written by ${myBook.author}`)
  }
}

const imdb = [{
    title: "Film1",
    duration: 140,
    stars: ["Jim", "Bill"]
  },
  {
    title: "Film2",
    duration: 120,
    stars: ["Chris", "Susan"]
  },
  {
    title: "Film3",
    duration: 210,
    stars: ["Bob", "Sally"]
  }
]
