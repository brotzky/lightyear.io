import { getTextTemplate } from "../getTextTemplate";
import { FIELD_NAMES } from "../../constants";

describe("[Utility] getTextTemplate", () => {
  it("should return an array of sentences for 'hometown' of random essay sentences", () => {
    expect(getTextTemplate(FIELD_NAMES.hometown)).toMatchSnapshot();
  });
  it("should return an array of sentences for 'favoriteFood' of random essay sentences", () => {
    expect(getTextTemplate(FIELD_NAMES.favoriteFood)).toMatchSnapshot();
  });
  it("should return an array of sentences for 'bar' of random essay sentences", () => {
    expect(getTextTemplate(FIELD_NAMES.bar)).toMatchSnapshot();
  });
  it("should return an array of sentences for 'loveToDo' of random essay sentences", () => {
    expect(getTextTemplate(FIELD_NAMES.loveToDo)).toMatchSnapshot();
  });
  it("should return an array of sentences for 'music' of random essay sentences", () => {
    expect(getTextTemplate(FIELD_NAMES.music)).toMatchSnapshot();
  });
  it("should return an array of sentences for 'messageIf' of random essay sentences", () => {
    expect(getTextTemplate(FIELD_NAMES.messageIf)).toMatchSnapshot();
  });
});
