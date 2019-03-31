var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

  const ul = document.createElement("ul");

  for (var i = 0; i < books.length; i++) {
      const book = books[i]
      const li = document.createElement("li");
      li.innerHTML = `${book.title} by ${book.author}`
      ul.appendChild(li);
  }

  document.body.appendChild(ul);
