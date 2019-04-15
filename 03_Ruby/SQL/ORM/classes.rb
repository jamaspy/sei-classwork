# Classes

class Actor
  def award_speech
    puts "SPEECH"
  end
  def deny_allegations
    puts "I DIDNT DO IT!"
  end
end

class Stooge < Actor
 def terrible?
   true
 end
end

class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice
  def initialize(name, instrument, vice)
    @name = name
    @instrument = instrument
    @vice = vice
  end
  def perform
    "My name is #{@name} and I play the #{@instrument}"
  end
end

groucho = MarxBrother.new
groucho.name = "GrouchoMarx"
groucho.instrument = "Guitar"
groucho.vice = "Cigars"

harpo = MarxBrother.new
