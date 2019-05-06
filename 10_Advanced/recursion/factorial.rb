def factorial_iterative(n)
  result = 1
  while n > 1
    result *= n
    n -= 1
  end
  result
end

def factorial_recursive(n)
  if n > 1
    n * factorial_recursive(n - 1)
  else
    1
  end
end
