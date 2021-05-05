// A
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

// Hier komt jouw functie
const findSpiderMan = function (array) {
  const isSpiderman = function (hero) {
    return hero.name === "Spiderman";
  };
  return array.find(isSpiderman);
  // return array.find(array.name === "Spiderman"); // no worky
  // return array.find("Spiderman"); // no worky
};

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// B with .map
const doubleArrayValues = function (array) {
  const double = array.map((x) => x * 2);
  return double;
};
console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

// B with .forEach
const doubleArrayValues2 = function (array) {
  let newArray = [];
  array.forEach((number) => newArray.push(number * 2));
  return newArray;
};
console.log(doubleArrayValues2([11, 22, 33]));
// result should be [2, 4, 6]

// C
const containsNumberBiggerThan10 = function (array) {
  return array.some((x) => x > 10);
};
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

// D
const isItalyInTheGreat7 = function (array) {
  return array.some((x) => x === "Italy");
};
console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// result should be true

// E  (= // B with .forEach)
const tenfold = function (array) {
  let newArray = [];
  array.forEach((number) => newArray.push(number * 10));
  return newArray;
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

// F
const isBelow100 = function (array) {
  return array.every((x) => x < 100);
};
console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
// result should be: false

// G
const bigSum = function (array) {
  const total = array.reduce((currentTotal, item) => {
    return item + currentTotal;
  }, 0);
  return total;
};
console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
