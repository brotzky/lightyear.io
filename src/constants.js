// Key names
export const FIELD_NAMES = {
  hometown: "hometown",
  favoriteFood: "favoriteFood",
  likeAdventure: "likeAdventure",
  loveToDo: "loveToDo",
  music: "music",
  messageIf: "messageIf",
  bar: "bar",
};

// Copy
export const COPY = {
  [FIELD_NAMES.hometown]: "Where did you grow up?",
  [FIELD_NAMES.favoriteFood]: "What’s your favorite food?",
  [FIELD_NAMES.loveToDo]: "What do you LOVE to do?",
  [FIELD_NAMES.messageIf]: "People should message you if they...",
  [FIELD_NAMES.music]: "What’s the last musician or band you got into?",
  [FIELD_NAMES.bar]: "What’s your favorite watering hole?",
};

// Whole outlay
export const FIELDS = {
  [FIELD_NAMES.hometown]: COPY[FIELD_NAMES.hometown],
  [FIELD_NAMES.favoriteFood]: COPY[FIELD_NAMES.favoriteFood],
  [FIELD_NAMES.loveToDo]: COPY[FIELD_NAMES.loveToDo],
  [FIELD_NAMES.messageIf]: COPY[FIELD_NAMES.messageIf],
  [FIELD_NAMES.music]: COPY[FIELD_NAMES.music],
  [FIELD_NAMES.bar]: COPY[FIELD_NAMES.bar],
};

export const FIELDS_LIST = Object.entries(FIELDS);
