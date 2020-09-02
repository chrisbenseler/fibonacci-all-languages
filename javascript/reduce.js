const buildFibonacciSequence = (maxItems) =>
  Array.from({ length: maxItems }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

module.exports = buildFibonacciSequence;
