class StocksController < ApplicationController
  def search
    render :search
  end

  def result
    @stock_symbol = params[:stock_symbol]
    @info = StockQuote::Stock.quote @stock_symbol
    redirect to("/") if @info.nil?
    @price = @info.close
    render :result
  end
end
