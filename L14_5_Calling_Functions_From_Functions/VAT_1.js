const calcVAT = function (value, VAT) {
  return value * (VAT / 100);
};

const includeVAT = function (value, VAT) {
  return value + calcVAT(value, VAT);
};

console.log(includeVAT(2, 9));
console.log(includeVAT(1000, 21));
