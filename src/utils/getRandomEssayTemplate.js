import { getTextTemplate } from "./getTextTemplate";
import { getRandomValueFromArray } from "./getRandomValueFromArray";

const createRandomTemplateFromField = (field) => {
  const listOfPossibleLibs = getTextTemplate(field[0]);
  return {
    [field[0]]: listOfPossibleLibs[getRandomValueFromArray(listOfPossibleLibs)],
  };
};

const createObjectFromArray = (curr, acc) => Object.assign({}, curr, acc);

export function getRandomEssayTemplate(fields) {
  return fields
    .map(createRandomTemplateFromField)
    .reduce(createObjectFromArray);
}
