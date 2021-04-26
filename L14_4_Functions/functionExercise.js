let numberFirst = 5;
let numberSecond = 18;

function declaredAddSquaresSquared(number1, number2) {
  const sum = number1 * number1 + number2 * number2;
  return sum * sum;
}

console.log(declaredAddSquaresSquared(numberFirst, numberSecond));

const expressionAddSquaresSquared = function (number1, number2) {
  const sum = number1 * number1 + number2 * number2;
  return sum * sum;
};

console.log(expressionAddSquaresSquared(numberFirst, numberSecond));

const arrowAddSquaresSquared = (number1, number2) => {
  const sum = number1 * number1 + number2 * number2;
  return sum * sum;
};

console.log(arrowAddSquaresSquared(numberFirst, numberSecond));
