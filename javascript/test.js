const iterateArray = require("./iterate_array");

const fibonacciSequence = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ]

describe("Fibonnaci sequence", () => {
  test("Iterate array", () => {

    const sequence = iterateArray(15);
    expect(sequence.length).toBe(15);
    expect(sequence).toStrictEqual(fibonacciSequence);
  });
});

