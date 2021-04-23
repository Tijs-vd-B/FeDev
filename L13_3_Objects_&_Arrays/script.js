// create object person
let person = {
  name: "Tijssieee",
  age: 40,
};

// // Dot Notation
// person.name = "John";
// // Bracket Notation
// person["name"] = "Mary";

console.log(person.name);
console.log(person["age"]);

let selectedColors = ["Red", "Blue"]; // defines a data array, each item gets indexed, [0] Red / [1] Blue / [3  ... etc
selectedColors[2] = "Green";
selectedColors[3] = 13; // properties are dynamic, can contain strings and numbers etc...
console.log(selectedColors[2]);
console.log(selectedColors);
console.log(selectedColors.length);

let evaluations = [7, 10, 9];
console.log(evaluations);

let colors = ["groen", "blauw", "rood"];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]); // [colors.length--] werkt hier niet...
colors.push("geel");
console.log(colors);
console.log(colors.length);
console.log(colors[colors.length - 1]);
colors.push(5);
console.log(colors);
console.log(colors.length);
console.log(colors[colors.length - 1]);
colors.push({ greeting: "hi ik ben een object" });
console.log(colors);
console.log(colors[colors.length - 1]);
