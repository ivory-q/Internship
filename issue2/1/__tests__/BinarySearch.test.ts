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

    it("-2 Да", () => {
      const needle = -2;

      expect(BinarySearch.search([needle], haystack)).toEqual(["-2 Да"]);
    });

    it("3 Нет", () => {
      const needle = 3;

      expect(BinarySearch.search([needle], haystack)).toEqual(["3 Нет"]);
    });

    it("5 Нет", () => {
      const needle = 5;

      expect(BinarySearch.search([needle], haystack)).toEqual(["5 Нет"]);
    });

    it("12 Да", () => {
      const needle = 12;

      expect(BinarySearch.search([needle], haystack)).toEqual(["12 Да"]);
    });

    it("22 Да", () => {
      const needle = 22;

      expect(BinarySearch.search([needle], haystack)).toEqual(["22 Да"]);
    });
  });
});
