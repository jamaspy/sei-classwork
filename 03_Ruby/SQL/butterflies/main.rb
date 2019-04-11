require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get "/" do
  erb :home
end

# INDEX ROUTE - show all Butterflies

get "/butterflies" do

  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

#CREATE - Create New - FORM
get "/butterflies/new" do
  erb :butterflies_new
end
post "/butterflies" do
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{params[:name]}','#{params[:family]}','#{params[:image]}')"
  query_db query
  redirect to("/butterflies")
end

#SHOW PAGE - Singler Butterfly In More Details
get "/butterflies/:id" do
  butterflies = query_db "SELECT * FROM butterflies WHERE id=#{params[:id]}"
  @butterfly = butterflies.first
  erb :butterflies_show
end

#EDIT - Existing
get "/butterflies/:id/edit" do
butterflies = query_db "SELECT * FROM butterflies WHERE id=#{params[:id]}"
@butterfly = butterflies.first
erb :butterflies_edit
end

#UPDATE action
post "/butterflies/:id" do
  query = "UPDATE butterflies SET name='#{params[:name]}',
  family='#{params[:family]}',
  image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/butterflies/#{params[:id]}")
end

#DESTROY - Delete Stupid Butterflies
get "/butterflies/:id/delete" do
  query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
  redirect to("http://www.google.com")
end

def query_db(sql_statement)
  puts sql_statement
  db = SQLite3:: Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end
