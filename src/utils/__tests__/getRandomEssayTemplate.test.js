import { getRandomEssayTemplate } from "../getRandomEssayTemplate";
import { FIELDS_LIST } from "../../constants";

// to test random we're hardcoding it to return 0.5
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

const randomEssayTemplate = {
  bar: "You can always catch me at $answer.",
  favoriteFood: "Love going out for $answer.",
  hometown: "$answer, born and raised.",
  loveToDo: "Can never $answer enough.",
  messageIf: "If you $answer, we need to meet.",
  music: "Love listening to $answer.",
};

describe("[Utility] getRandomEssayTemplate", () => {
  it("should return an object of random essay sentences", () => {
    expect(getRandomEssayTemplate(FIELDS_LIST)).toEqual(randomEssayTemplate);
  });
});
