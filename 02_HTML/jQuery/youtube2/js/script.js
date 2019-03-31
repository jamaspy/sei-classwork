// const $links = $("li a")
// console.log($links);
// for (var i = 0; i < $links.length; i++) {
//   const $link = $($links[i]); //Turn vanilla DOm nide back in to a jQuery Object
//   const url = $link.attr("href");
//   // console.log(url);
//   const thumbURL = youtube.generateThumbnailUrl(url);
//   $thumbnail = $("<img>").attr("src", thumbURL);
//   $link.append($thumbnail);
// }

$('h1').funText(54, 'candy');
$('a').funText(32, 'candy');

const $links = $("li a")

const thumbnailify = ($a) => {
  const url = $a.attr("href");
  const thumbURL = youtube.generateThumbnailUrl(url);
  $thumbnail = $("<img>").attr("src", thumbURL);
  $a.append($thumbnail);

  $thumbnail.on("click", function (event){
    event.preventDefault();
    $("#player").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/sBws8MSXN7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>');


  });
}

for (var i = 0; i < $links.length; i++) {
  const $link = $($links[i]);
  thumbnailify( $link );
};
