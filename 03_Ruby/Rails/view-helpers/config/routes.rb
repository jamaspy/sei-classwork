Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "pages#home"
  get "/numbers" => "pages#numbers", :as => "numbers"
  get "/text" => "pages#text"
  get "/url" => "pages#url"
  get "/assets" => "pages#assets"
end
