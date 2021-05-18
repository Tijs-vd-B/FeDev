const elementOutput = document.getElementById("output");
const elementButton = document.getElementById("click-me");

elementButton.addEventListener("click", () => {
  let e = Math.floor(Math.random() * 3) + 1;
  doRandomAction(e);
});

const doRandomAction = (e) => {
  if (e == 1) {
    console.log("Random = " + e + ", let's Poké");
    clearOutput();
    addPokéToDom();
  } else if (e == 2) {
    console.log("Random = " + e + ", let's Joke");
    clearOutput();
    addJokeToDom();
  } else {
    console.log("Random = " + e + ", let's Dump");
    clearOutput();
    addDumpToDom();
  }
};

const clearOutput = function () {
  let elementOutputtedItem = elementOutput.querySelectorAll("div");
  elementOutputtedItem.forEach(function (e) {
    elementOutput.removeChild(e);
  });
};

const addPokéToDom = async () => {
  const array = await getRandomPoké();
  let newDivItem = document.createElement("div");
  let photoImg = document.createElement("img");
  photoImg.src = array.sprites.front_shiny;
  newDivItem.appendChild(
    document.createTextNode("Here's a (ORIGINAL!) pokémon: " + array.name)
  );
  elementOutput.appendChild(newDivItem);
  newDivItem.appendChild(document.createElement("br"));
  newDivItem.appendChild(photoImg);
};

const addJokeToDom = async () => {
  let joke = await getRandomDadJoke();
  let newDivItem = document.createElement("div");
  newDivItem.appendChild(document.createTextNode("Here's a joke: " + joke));
  elementOutput.appendChild(newDivItem);
};

const addDumpToDom = async () => {
  const array = await getRandomDumpQuote();
  let newDivItem = document.createElement("div");
  newDivItem.appendChild(
    document.createTextNode(
      "Here's a something dumb Trump said: " + array.value
    )
  );
  elementOutput.appendChild(newDivItem);
};
