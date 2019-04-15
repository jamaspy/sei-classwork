Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => "pages#hello"
  get "/hello" => "pages#hello"
  get "/faq" => "pages#faq"
  get "/about" => "pages#about"
  get "/funny" => "pages#gfunny"

  get "auto/:color" => "auto#color"
  get "auto/:hp/:torque" => "auto#engine"

  get "/calc/:x/:y/:operator" => "calc#calculate"
end
