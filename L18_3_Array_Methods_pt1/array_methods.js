// A
const addTheWordCool = function (array) {
  //   let coolAdd = array.push("cool");
  array.push("cool");
  return array;
};
// console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
console.log(addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// B
const amountOfElementsInArray = function (array) {
  return array.length;
};

console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
// 3

//C
const firstElementInArray = function (array) {
  return array[0];
};
console.log(firstElementInArray(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//C as the name 'selectBelgiumFromBenelux' suggests
const selectBelgiumFromBenelux = function (array) {
  let posBelgium = array.indexOf("Belgie");
  return array[posBelgium];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//D
const lastElementInArray = function (array) {
  return array[array.length - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
  return array.slice(1);
  //   return array.slice(1, array.length);
};
// .slice = immutable
const impeachTrumpSplice = function (array) {
  array.splice(0, 1);
  return array;
};
// .splice is mutable
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(presidents, "original presidents array is still intact");
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(presidents, "original presidents array is mutilated");

// F
const stringsTogether = function (array) {
  return array.join(" ");
};
console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

//G
const combineArrays = function (array1, array2) {
  //   let arrays = array1.concat(array2);
  //   return arrays;
  return array1.concat(array2);
};
// .concat = immutable
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]
