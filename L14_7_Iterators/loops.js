const colors = ["yellow", "blue", "red", "orange"];

console.log("----------while loop------------");

// let index = 0;
// while (index <= colors.length - 1) {
//   console.log("the amount of colors is " + colors.length);
//   console.log("index is " + index + " let's print colors[" + index + "]");
//   console.log(colors[index]);
//   index++; // increments by 1
// }
let index = 0;
while (index <= colors.length - 1) {
  console.log(colors[index]);
  index++; // increments by 1
}

console.log("------------for loop------------");

// for (i = 0; i <= colors.length - 1; i++) {
//   console.log("the amount of colors is " + colors.length);
//   //   console.log("i is " + i + " let's print colors[" + i + "]");
//   console.log("colors[" + i + "] is " + colors[i]);
// }

for (i = 0; i <= colors.length - 1; i++) {
  console.log(colors[i]);
}

console.log("------forEach Array method------");

colors.forEach((element) => console.log(element));

//while loop = 5 lines
//for loop = 3 lines
//forEach method = 1 line
