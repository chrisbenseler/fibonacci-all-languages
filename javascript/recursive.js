const buildFibonacciSequence = (maxItems) => {
  const fn = (index, maxIndex, sequence) => {
    const nextIndex = index + 1;

    if (nextIndex > maxIndex) {
      return sequence;
    }

    if (index === 0) {
      sequence = [0];
    } else {
      const sum = sequence[index - 1] + sequence[index - 2] || 1;
      sequence = [...sequence, sum];
    }
    return fn(nextIndex, maxIndex, sequence);
  };

  return fn(0, maxItems, []);
};

module.exports = buildFibonacciSequence;
