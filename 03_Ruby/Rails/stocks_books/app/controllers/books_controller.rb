class BooksController < ApplicationController
  def search
    render :search
  end

  def result
    @book_title = params[:book_title]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
    @info = HTTParty.get url
    @book_cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_author = @info["items"][0]["volumeInfo"]["authors"][0]
    @date_published = @info["items"][0]["volumeInfo"]["publishedDate"]
    @number_of_pages = @info["items"][0]["volumeInfo"]["pageCount"]
    render :result
  end
end
