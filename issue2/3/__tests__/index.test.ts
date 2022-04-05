import { countFridayAnniversaries, dateArrayFromString } from "../functions";

describe("friday anniversary count", () => {
  it("transforms dates from string correctly", () => {
    expect(dateArrayFromString("06.03.2006")).toEqual([6, 3, 2006]);
  });
  it("counts amount of anniversaries on fridays correctly", () => {
    expect(countFridayAnniversaries("06.03.2006")).toEqual(2);
  });
});
