def buildFibonacciSequence(maxItems):
    
   
    def fn(index, maxIndex, sequence):
        nextIndex = index + 1
        if index == 0:
            return fn(1, maxIndex, [1])
        if index == 1:
            return fn(nextIndex, maxIndex, [1, 1])
        if index < maxIndex:
            sum = sequence[index - 1] + sequence[index - 2]
            sequence.append(sum)
            return fn(nextIndex, maxIndex, sequence)
        return sequence

    return fn(0, maxItems, [])

