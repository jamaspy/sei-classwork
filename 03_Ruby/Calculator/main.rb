require 'sinatra'
require 'sinatra/reloader'


get '/' do
  erb :home
end

get '/faq' do
  erb :faq
end

get '/result' do
  @x = params[:x].to_f
  @y = params[:y].to_f

  @result = case params[:operator]
  when '+' then @x + @y
  when '-' then @x - @y
  when '/' then @x / @y
  when '*' then @x * @y
  end
  erb :result
end

require 'stock_quote'
# params[:stock_symbol]
@stock_symbol = "GOOG"
@info = StockQuote::Stock.quote @stock_symbol
@price = @info.close
