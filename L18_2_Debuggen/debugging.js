const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

for (let person of array) {
  //   console.log("Dit is de gehele persoon:", person);
  //   console.log("Dit is de naam:", person.name);
  //   console.log("Dit is de leeftijd:", person.age);
  //   console.log("Dit is een benadering van het geboortejaar:", 2021 - person.age);
  console.log(person.name, "is", person.profession, "van beroep.");
  if (person.age >= 50) {
    console.log(person.name, "is", person.age, "en dus 50-plusser");
  } else console.log(person.name, "is nog geen 50-plusser");
}
