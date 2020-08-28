const buildFibonacciSequence = (maxItems) => {
  const fn = (index, maxIndex, serie) => {
    if (index === 0) {
      return fn(1, maxIndex, [1]);
    }
    if (index === 1) {
      index = index + 1;
      return fn(2, maxIndex, [1, 1]);
    }
    if (index < maxIndex) {
      const sum = serie[index - 1] + serie[index - 2];
      index = index + 1;

      serie = [...serie, sum];
      return fn(index, maxIndex, serie);
    }
    return serie;
  };

  return fn(0, maxItems, []);
};

module.exports = buildFibonacciSequence;
