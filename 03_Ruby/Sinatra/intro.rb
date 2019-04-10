require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "Hello World!"
end


get '/lucky_number' do
  "here is your lucky number #{rand 1..40}"
end

get "/uptime" do
  "The server uptime is #{ `uptime` }"
end

get "/fanclub/martin" do
  "Martin is proud memeber of the Marx Brothers Fan Club"
end

get "/fanclub/:name" do
"#{ params[:name].capitalize } is proud memeber of the Marx Brothers Fan Club"
end

get "/fanclub/:name/:last" do
"#{ params[:name].capitalize } #{ params[:last].capitalize } is proud memeber of the Marx Brothers Fan Club"
end

get "/multiply/:x/:y" do
  result = params[:x].to_f * params[:y].to_f
  "the result is #{result}"
end
