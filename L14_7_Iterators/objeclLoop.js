const object = {
  type: "Fiat",
  model: "500",
  color: "white",
  age: 12,
  year: 1982,
};
console.log(
  "https://www.webtips.dev/webtips/javascript/how-to-loop-through-properties-of-an-object-in-javascript"
);
console.log("---Object.keys---forEach---");

Object.keys(object).forEach((key, index) => {
  console.log(`key: ${key}, value: ${object[key]}, index: ${index}`);
});

console.log(
  "https://flaviocopes.com/how-to-iterate-object-properties-javascript/"
);

console.log("---Object.entries---map()---");
Object.entries(object).map((item) => {
  console.log(item);
});
console.log("---Object.entries---forEach---");
Object.entries(object).forEach((item) => {
  console.log(item);
});
console.log("---Object.entries---for..of---");
for (const item of Object.entries(object)) {
  console.log(item);
}
