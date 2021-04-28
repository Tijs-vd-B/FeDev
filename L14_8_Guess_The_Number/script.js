let name = prompt("Welkom! Wat is je naam", "Mads");

alert("Hey " + name + "!");

let winningNumber = Math.floor(Math.random() * 26);
console.log(winningNumber); //cheatmode ;)

play();

function play() {
  for (i = 1; i < 6; i++) {
    alert("Dit wordt je " + i + "e poging van de 5.");
    let number = prompt(
      "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
    );
    if (number == winningNumber) {
      alert("Gefeliciteerd je hebt gewonnen!");
      alert("Dag " + name + ", tot de volgende keer.");
      return;
    } else {
      alert("Dat is niet correct");
    }
  }
  alert("Dag " + name + ", tot de volgende keer.");
}
