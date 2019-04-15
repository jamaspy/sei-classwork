Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "pages#index"

  get "/books" => "books#search"
  get "/books/result" => "books#result"

  get "/stocks" => "stocks#search"
  get "/stocks/result" => "stocks#result"
end
