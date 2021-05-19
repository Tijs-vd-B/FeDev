const addOne = function (numbers) {
  let newArray = [];
  numbers.forEach((e) => newArray.push(e + 1));
  return newArray;
};

module.exports = addOne;
