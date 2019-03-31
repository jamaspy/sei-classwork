const links = document.querySelectorAll("li a")
for (var i = 0; i < links.length; i++) {
  const url = links[i].getAttribute("href");
  const thumbURL = youtube.generateThumbnailUrl(url);

  const thumbnail = document.createElement('img');
  thumbnail.setAttribute("src", thumbURL);

  links[i].appendChild( thumbnail);
}
