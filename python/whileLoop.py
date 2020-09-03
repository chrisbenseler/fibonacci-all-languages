# baseado no exemplo https://franciscochaves.com.br/blog/fibonacci-em-python
def buildFibonacciSequence(maxItems):
    previous = 0
    nxt = 0

    counter = 0
    sequence = []
    while(counter < maxItems):
        counter += 1
        sequence.append(nxt)
        nxt += previous
        previous = nxt - previous
        if(nxt == 0):
            nxt += 1
    return sequence

