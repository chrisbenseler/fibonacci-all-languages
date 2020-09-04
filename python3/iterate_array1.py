def buildFibonacciSequence(items):
    actual = 0
    previous = None
    sequence = []
    for index in range(items):
        if(previous == None):
            previous = 1
            actual = 0
            sequence.append(0)
            continue
        
        
        sum = actual + previous 
        previous = actual
        actual = sum
        sequence.append(sum)

    return sequence
