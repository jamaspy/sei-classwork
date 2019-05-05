class DashboardController < ApplicationController
  def brother
    brother = %w(Groucho Harpo Chico James Sam Jennifer Kylie Frankie John Eve Gaynor Nick David Lynn).sample
    render :plain => brother
  end

  def time
    render :plain => Time.now
  end

  def uptime
    render :plain => `uptime`
  end

  def fortune
    render :plain => `fortune`
  end

  def info
    brother = %w(Groucho Harpo Chico James Sam Jennifer Kylie Frankie John Eve Gaynor Nick David Lynn).sample
    time = Time.now
    uptime = `uptime`
    render :json => {
      :brother => brother,
      :time => time,
      :uptime => uptime,
    }
  end
end
