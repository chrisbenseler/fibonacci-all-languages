
def fibonacci_generator(items):
    actual = 0
    next = 1
    for index in range(items):
        yield actual
        actual, next = next, actual+next

def buildFibonacciSequence(items):
    return list(fibonacci_generator(items))
