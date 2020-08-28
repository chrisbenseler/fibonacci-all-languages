const iterateArray = require("./iterate_array");

const fibonacciSerie = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ]

describe("Fibonnaci series", () => {
  test("Iterate array", () => {

    const serie = iterateArray(15);
    expect(serie.length).toBe(15);
    expect(serie).toStrictEqual(fibonacciSerie);
  });
});

