const buildFibonacciSequence = (maxItems) => {
    var x = 0;
    var y = 1;
    let sequence = [];
    let counter = 0;
    while(counter < maxItems) {
        const sum = x + y;
        x = y;
        y = sum;
        sequence.push(y);

        if(counter === 0) {
            x = 0;
        }
        counter++;
    }
    return sequence;
};

module.exports = buildFibonacciSequence;
