def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 2
    a, b = b, a + b
    n -= 1
  end
  puts b
end

def fibonacci_recursive

    
end


fibonacci_iterative(9)
