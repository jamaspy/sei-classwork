"use strict";

var page = 1;

var showImages = function showImages(results) {
    var generateURL = function generateURL(p) {
        return ["http://farm", p.farm, ".static.flickr.com/", p.server, "/", p.id, "_", p.secret, "_q.jpg" //change q to something else for different sizes 
        ].join('');
    };
    results.photos.photo.forEach(function (photo) {
        var thumbnailURL = generateURL(photo);
        var $img = $("<img>", { src: thumbnailURL });
        $img.appendTo("#images");
    });
};

var searchFlickr = function searchFlickr(terms) {
    var flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";
    $.getJSON(flickrURL, {
        page: page,
        method: "flickr.photos.search",
        api_key: "2f5ac274ecfac5a455f38745704ad084",
        text: terms,
        format: "json"
    }).done(showImages).done(function (data) {
        console.log(data);
    }).done(console.log(page));
};

$(document).ready(function () {
    $("#search").on("submit", function (event) {
        event.preventDefault();
        var query = $("#query").val();
        $("#images").empty();
        searchFlickr(query);
    });

    $(window).on("scroll", function () {
        var scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());
        if (scrollBottom <= 10) {
            var query = $("#query").val();
            searchFlickr(query);
            page += 1;
        }
    });
});