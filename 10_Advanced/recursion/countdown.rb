def countdown_iterative(n = 10)
  while n >= 0
    puts n
    n -= 1
    sleep 1
  end
  puts "Blast Off!"
end

def countdown_recursive(n = 10)
  if n < 0
    puts "Blast Off"
  else
    puts n
    sleep 1
    countdown_recursive n - 1
  end
end
