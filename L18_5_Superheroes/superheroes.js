//  .map .filter .reduce

const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

// 1. een array van alle superhelden namen
// const names = superheroes.map((n) => {
//   //   const obj = n.name;
//   //   return obj;
//   return n.name; // same as above, but smaller, no new variable needed
// });
// const names = superheroes.map((n) => n.name); // same as above, but even smaller, implied return, and only 1 operation
const names = (array) => array.map((n) => n.name); // independent of superheroes, could work on all arrays ...
console.log(names(superheroes));

// 2.  een array van alle "lichte" superhelden (< 190 pounds)
const weightLowerThan190 = (array) => array.filter((n) => n.weight < "190");
console.log(names(weightLowerThan190(superheroes))); // 2 in 1 !!! :)

// 3. een array met de namen van de superhelden die 200 pounds wegen
const weightIs200 = (array) => array.filter((n) => n.weight == "200");
console.log(names(weightIs200(superheroes))); // 2 in 1 !!! :)

const wL190 = superheroes.filter((n) => n.weight < "190").map((n) => n.name);
console.log(wL190);

console.log(superheroes.filter((n) => n.weight == "200").map((n) => n.name));

// 4. een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const firtsAppearance = function (array) {
  const obj = array.map((n) => n.first_appearance);
  return obj;
};
console.log(firtsAppearance(superheroes));

console.log(superheroes.map((n) => n.first_appearance)); // shorter

// 5. een array met alle superhelden van DC Comics
const DC_Comics = superheroes.filter((n) => n.publisher == "DC Comics");
console.log(DC_Comics);
// 5. een array met alle superhelden van Marvel Comics
const Marvel_Comics = superheroes.filter((n) => n.publisher == "Marvel Comics");
console.log(Marvel_Comics);

// 6. het gewicht van alle superhelden van DC Comics bij elkaar
// 7. het gewicht van alle superhelden van Marvel Comics bij elkaar
const combinedWeight = (array) =>
  array.reduce((a, c) => {
    if (isNaN(c.weight)) {
      c.weight = 0;
    }
    return a + parseInt(c.weight);
  }, 0);
console.log(
  "The combined weight of our DC Comics superheroes is",
  combinedWeight(DC_Comics),
  "lbs!"
);
console.log(
  "The combined weight of our Marvel Comics superheroes is",
  combinedWeight(Marvel_Comics),
  "lbs!"
);
console.log(
  "The combined weight of ALL our superheroes is",
  combinedWeight(superheroes),
  "lbs!"
);

// 8. zoek de zwaarste superheld!
// I think I'm luck there is no tied first place for heaviest
const heaviest = (array) =>
  array.reduce((a, c) => {
    if (isNaN(c.weight)) {
      c.weight = 0;
    }
    if (parseInt(c.weight) > parseInt(a.weight)) {
      return c;
      // } else if (parseInt(c.weight) == parseInt(a.weight)) {
      //   return a + c ; // this doesn't work
    } else {
      return a;
    }
  }, array[0]);

console.log(
  heaviest(DC_Comics).name,
  "is the heaviest DC Comics superhero, with :",
  heaviest(DC_Comics).weight,
  "lbs!"
);
console.log(
  heaviest(Marvel_Comics).name,
  "is the heaviest Marvel Comics superhero, with :",
  heaviest(Marvel_Comics).weight,
  "lbs!"
);
