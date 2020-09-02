def buildFibonacciSequence(maxItems):
    
   
    def fn(index, maxIndex, sequence):
        nextIndex = index + 1

        if nextIndex > maxIndex:
            return sequence

        if index == 0:
            sum = 0
        elif index == 1:
            sum = 1
        else:
            sum = sequence[index - 1] + sequence[index - 2]
            
        sequence.append(sum)
        return fn(nextIndex, maxIndex, sequence)

    return fn(0, maxItems, [])

