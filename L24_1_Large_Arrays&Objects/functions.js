const keepUnique = (uniqueItems, item) => {
  // We don't want the caller to have to pass in an empty array.
  if (!Array.isArray(uniqueItems)) uniqueItems = [];
  if (!uniqueItems.includes(item)) uniqueItems.push(item);
  return uniqueItems;
};
const allCountries = async (array) =>
  array
    .map((item) => item.region)
    .reduce(keepUnique) // reduce the list
    .sort();

const isFemale = (person) => person.gender === "female";

const timeStamp = Math.floor(Date.now() / 1000);
const twentyeightYearsInS = 883612800;
const thirtyYearsInS = 946728000;
const overTwentyeightThreshold = timeStamp - twentyeightYearsInS;
const overThirtyThreshold = timeStamp - thirtyYearsInS;
const isOverTwentyeight = (person) =>
  person.birthday.raw < overTwentyeightThreshold;
const isOverThirty = (person) => person.birthday.raw < overThirtyThreshold;

const isCapri = (person) => {
  const month = parseInt(person.birthday.dmy.split("/")[1]); // 1..12
  const day = parseInt(person.birthday.dmy.split("/")[0]); // 1..31
  return starSign(day, month) === 1;
};

const getCapriWomenAbove30 = async (array) =>
  array
    .filter(isFemale)
    .filter(isOverTwentyeight)
    .filter(isCapri)
    .sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    });
