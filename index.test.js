const { reverseWords, titleCase, oddishOrEvenish } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});

describe("title case words", () => {
  it("should capitalize the first letter of each word only", () => {
    expect(titleCase("alchemy ROCKS goLD")).toBe("Alchemy Rocks Gold");
  });
});

describe("oddishOrEvenish", () => {
  it("should determine whether the sum of a numbers digits is odd or even", () => {
    expect(oddishOrEvenish(121)).toBe('Evenish');
    expect(oddishOrEvenish(41)).toBe('Oddish');
  });
});

describe("at", () => {
  it("should take an array and an index and return the item at corresponding index", () => {
    expect(at(['a', 'b', 'c', 'd', 'e'], 1)).toBe('b');
    expect(at(['a', 'b', 'c', 'd', 'e'], -2)).toBe('d');
  });
});

describe("fizz-buzz", () => {
  it("should take an integer and do fizz buzzy things with it", () => {
    expect(fizzBuzz(16)).toBe([
      1, 2, 'Fizz', 4, 'Buzz', 
      'Fizz', 7, 8, 'Fizz', 'Buzz', 
      11, 'Fizz', 13, 14, 'FizzBuzz', 
      16
    ])
  });
});