
fibnums = {}

def fib(n):
    if n < 2:
        return n
    if not n in fibnums:
        fibnums[n] = fib(n-1) + fib(n-2)
    return fibnums[n]

def buildFibonacciSequence(maxItems):
    return [fib(n) for n in range(maxItems)]

