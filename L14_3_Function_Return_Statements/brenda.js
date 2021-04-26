// function allowEntranceResponse(amountMax, amountCurrent, age) {
//   if (age < 18) {
//     return "this is a club for adults";
//   } else if (amountCurrent >= amountMax) {
//     return "it's too busy now, come back later";
//   } else {
//     return "come in";
//   }
// }

// diferent order of ifs, same result
function allowEntranceResponse(amountMax, amountCurrent, age) {
  if (amountCurrent < amountMax && age >= 18) {
    return "come in";
  } else if (amountCurrent >= amountMax && age >= 18) {
    return "it's too busy now, come back later";
  } else {
    return "this is a club for adults";
  }
}

console.log("Hi, I'm Brenda, " + allowEntranceResponse(50, 52, 19) + "!");
console.log("Hi, I'm Brenda, " + allowEntranceResponse(50, 42, 18) + "!");
console.log("Hi, I'm Brenda, " + allowEntranceResponse(50, 52, 17) + "!");

allowEntranceResponse(50, 52, 19);
