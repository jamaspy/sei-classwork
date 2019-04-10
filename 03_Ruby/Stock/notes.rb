#HOMEWROK NOTES
gem install httparty
require httparty

@title = "Jaws"
# params[:title]

url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"

@info = HTTParty.get url
#Look around the JSON - @info.keys
@book_cover = @info["items"][0]["volumeInfo"]["imageLinks"]


# in erb file to display image
<img src = "<%= @book_cover %> ">
