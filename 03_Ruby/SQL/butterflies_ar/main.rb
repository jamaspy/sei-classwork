require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

#Rails will do this for you next week
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#Optional Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

#MODELS
class Butterfly < ActiveRecord::Base
  belongs_to :plant, :optional => true # Rails5
end

class Plant < ActiveRecord::Base
  has_many :butterflies
end

get "/" do
  erb :home
end

# INDEX ROUTE - show all Butterflies
get "/butterflies" do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

#CREATE - Create New - FORM
get "/butterflies/new" do
  erb :butterflies_new
end
post "/butterflies" do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to("/butterflies/#{butterfly.id}")
end

#SHOW PAGE
get "/butterflies/:id" do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

#EDIT PAGE
get "/butterflies/:id/edit" do
@butterfly = Butterfly.find params[:id]
erb :butterflies_edit
end

#UPDATE action
post "/butterflies/:id" do
  butterfly = Butterfly.find parama[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params [:plant_id]
  butterfly.save
  redirect to("/butterflies/#{params[:id]}")
end

#DESTROY - Delete Stupid Butterflies
get "/butterflies/:id/delete" do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to("/butterflies")
end



# plant index
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

#NEW
get"/plants/new" do
  erb :plants_new
end
#CREATE
post "/plants" do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to ("/plants/#{plant.id}")
end


#SHOW
get "/plants/:id" do
  @plant = Plant.find params[:id]
  erb :plants_show
end

#EDIT
get "/plant/:id/edit" do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

post "/plants/:id" do
  @plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to ("/{plant/#{plant.id}")
end

get "/plants/:id/delete" do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to("/plants")
end

after do
  ActiveRecord::Base.connection.close
end
