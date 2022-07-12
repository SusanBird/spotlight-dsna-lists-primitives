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