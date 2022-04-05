import BinarySearch from "../BinarySearch";

describe("binary search", () => {
  const haystack: Array<number> = [-3, -1, 2, 4, -5];

  it("searches element (success)", () => {
    const needle = 4;

    expect(BinarySearch.search([needle], haystack)).toEqual(["4 Да"]);
  });

  it("searches element (failure)", () => {
    const needle = 1;

    expect(BinarySearch.search([needle], haystack)).toEqual(["1 Нет"]);
  });

  it("duplicates in haystack", () => {
    const haystack: Array<number> = [-3, -1, 2, 4, -5 - 5, 2];
    const needle = 2;

    expect(BinarySearch.search([needle], haystack)).toEqual(["2 Да"]);
  });

  describe("given example tests", () => {
    const haystack: Array<number> = [-3, -2, 0, 1, 4, 6, 9, 12, 15, 18, 22];

    it("passes test from example", () => {
      const needle = [-2, 3, 5, 12, 22];

      expect(BinarySearch.search(needle, haystack)).toEqual([
        "-2 Да",
        "3 Нет",
        "5 Нет",
        "12 Да",
        "22 Да",
      ]);
    });
  });
});
