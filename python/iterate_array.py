def buildFibonacciSequence(items):
    actual = 1
    previous = None
    sequence = []
    for index in range(items):
        if(previous == None):
            previous = 0
            sequence.append(1)
            continue
        
        
        sum = actual + previous 
        previous = actual
        actual = sum
        sequence.append(sum)

    return sequence
