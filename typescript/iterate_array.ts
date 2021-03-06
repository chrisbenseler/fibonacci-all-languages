export function buildFibonacciSequence(maxItems: number) {
  const array = Array.from(Array(maxItems).keys());

  let actual = 1;
  let previous: number;
  return array.map((_) => {
    if (previous === undefined) {
      previous = 1;
      actual = 0;
      return 0;
    }

    const sum = actual + previous;
    previous = actual;
    actual = sum;
    return sum;
  });
};
