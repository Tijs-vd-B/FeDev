// A
// zet de functie om naar een arrow functie
// const ikRockArrowFunctions = function () {
//     console.log("Joe, ik rock de arrow functions!");
//   };
const ikRockArrowFunctions = () =>
  console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions();

// B
// const fivePlusSeven = function () {
//     return 5 + 7
//   };

const fivePlusSeven = () => 5 + 7;

fivePlusSeven();
// to see anything on the console you could do:
console.log(fivePlusSeven());

// C
let myFunction = (a, b) => a + b;
// test
console.log(myFunction(21, 18)); // could be 39

// D
let addFive = (a) => a + 5;
// test
console.log(addFive(17)); // could be 22

// E
// no implicit return statement when returning an object{}
// you need to put the object inside ()  so they won't be seen as {}
const createObject = () => ({ greeting: "hoi" });
console.log(createObject());
