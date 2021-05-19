const getWordLengths = function (someWords) {
  let newArray = [];
  someWords.forEach((e) => newArray.push(e.length));
  return newArray;
};

module.exports = getWordLengths;
