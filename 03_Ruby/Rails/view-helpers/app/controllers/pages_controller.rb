class PagesController < ApplicationController
  def home
    render :home
  end

  def numbers
    @amount = 234567.223
    @large_number = 1234567888765
    @phone = 2125551212
    render :numbers
  end

  def text
    @numbers = (1..20).to_a
    @friend_count = 1
    @enemy_count = 2
    @story = "A very very very very very long string"
  end

  def assets
    render :assets
  end

  def url
    render :url
  end
end
