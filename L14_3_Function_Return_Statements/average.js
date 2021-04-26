// function average(fiveNumbers) {
//   return Math.round(
//     //   return (
//     (fiveNumbers[0] +
//       fiveNumbers[1] +
//       fiveNumbers[2] +
//       fiveNumbers[3] +
//       fiveNumbers[4]) /
//       5
//     //   fiveNumbers.length // > false result if using more or less than 5 numbers
//   );
// }

function average(fiveNumbers) {
  return Math.round(
    //   return (
    total(fiveNumbers) / 5
    //   fiveNumbers.length // > false result if using more or less than 5 numbers
  );
}

console.log(average([1, 2, 3, 4, 4, 5]));
console.log(average([111, 2222, 333, 44, 65]));
console.log(average([10, 21, 32, 43, 54]));
console.log(average([-19, -2, 30, -4, -6]));
console.log(average([11, 12, 13, 14])); // NaN > The global NaN property is a value representing Not-A-Number.
