from functools import lru_cache

@lru_cache()
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

def buildFibonacciSequence(maxItems):
    return [fib(n) for n in range(maxItems)]

