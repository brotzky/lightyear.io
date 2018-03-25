import { getRandomValueFromArray } from "../getRandomValueFromArray";

// to test random we're hardcoding it to return 0.5
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

const arr = [1, 2, 3, 4, 5, 6];

describe("[Utility] getRandomValueFromArray", () => {
  it("should return an object of random essay sentences", () => {
    expect(getRandomValueFromArray(arr)).toEqual([3]);
  });
});
