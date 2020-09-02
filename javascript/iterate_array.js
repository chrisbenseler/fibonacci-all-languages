const buildFibonacciSequence = (maxItems) => {
  const array = Array.from(Array(maxItems).keys());

  let actual = 0;
  let previous = null;
  return array.map((_) => {
    if (previous === null) {
      previous = 1;
      actual = 0
      return 0;
    }

    const sum = actual + previous;
    previous = actual;
    actual = sum;
    return sum;
  });
};

module.exports = buildFibonacciSequence;
