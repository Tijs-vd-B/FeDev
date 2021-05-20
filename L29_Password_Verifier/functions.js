// Utility functions
const isNotNullOrUndefined = (str) => str !== undefined && str !== null; // you can only make this an unconditional restriction

// doesn't seem good sense to have the length be a restriction that can be passed by not failing enough others, but that was the task of the exercise
const hasRightLength = (str) => isNotNullOrUndefined(str) && str.length < 9;

const hasUpperCaseCharacter = (str) =>
  isNotNullOrUndefined(str) && str.search(/[A-Z]+/) !== -1;

const hasLowerCaseCharacter = (str) =>
  isNotNullOrUndefined(str) && str.search(/[a-z]+/) !== -1;

const hasDigit = (str) => isNotNullOrUndefined(str) && str.search(/\d+/) !== -1;

const minimumConditionsReached = (password) => {
  const conditions = [
    isNotNullOrUndefined(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password),
  ];
  // conditions is an array of booleans
  trueConditions = conditions.filter((bool) => bool == true);
  // console.log(trueConditions.length);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const result =
    minimumConditionsReached(password) && hasLowerCaseCharacter(password);
  // minimumConditionsReached(password) && hasLowerCaseCharacter(password) && hasRightLength(password);
  // above seems better, but is against the set conditions, will in this situ fail the "Password is too long, but passes enough others" test ;)
  return result;
};

module.exports = {
  verifyPassword,
  hasRightLength,
  isNotNullOrUndefined,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
};
