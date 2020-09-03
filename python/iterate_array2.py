
def buildFibonacciSequence(items):
    actual = 0
    next = 1
    sequence = []
    for index in range(items):
        sequence.append(actual)
        actual, next = next, actual+next
    return sequence
