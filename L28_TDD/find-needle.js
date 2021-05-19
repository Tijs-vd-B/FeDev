const findNeedle = function (words) {
  let foundNeedle = (e) => e === "needle";
  return words.findIndex(foundNeedle);
};

module.exports = findNeedle;
