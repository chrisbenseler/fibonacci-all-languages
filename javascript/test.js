const iterateArray = require("./iterate_array");
const recursive = require("./recursive");
const whileLoop = require("./while");

describe("Fibonnaci sequence", () => {
  test("Iterate array", () => {
    const sequence = iterateArray(15);
    expect(sequence.length).toBe(15);
    expect(sequence).toStrictEqual(fibonacciSequence);
  });

  test("Recursive", () => {
    const sequence = recursive(15);
    console.log(sequence)
    expect(sequence.length).toBe(15);
    
    expect(sequence).toStrictEqual(fibonacciSequence);
  });

  test("While", () => {
    const sequence = whileLoop(15);
    expect(sequence.length).toBe(15);
    expect(sequence).toStrictEqual(fibonacciSequence);
  });
});

const fibonacciSequence = [
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
];
