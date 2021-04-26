const calcVAT = function (VAT) {
  return VAT / 100;
};

const splitVAT = function (bruto, VAT) {
  console.log("reaching out to calcVAT, it gives me " + calcVAT(VAT));
  const netto = bruto / (1 + calcVAT(VAT));
  const addedVAT = bruto - netto;
  return [netto, addedVAT];
};

console.log(splitVAT(2.18, 9)); // resulting VAT 0.18000000000000016 ... close enough...?
console.log(splitVAT(1210, 21));
console.log(splitVAT(106, 6));
