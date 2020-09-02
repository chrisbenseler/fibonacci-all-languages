const buildFibonacciSequence = (maxItems) => {
    var x = 0;
    var y = 0;
    let sequence = [];
    let counter = 0;
    while(counter < maxItems) {

        if(counter === 0) {
            x++;
            sequence.push(0)
            counter++;
            continue;
        }

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
