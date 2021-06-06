Debugging
bug : als het input veld leeg is dan kunnen we alsnog die "letter" raden

- check dat de bug inderdaad aanwezig is
    - idd,
    - bij in-/correcte letters geeft hij wel juiste response
- TextInput geeft currentChosenLetter terug door 
chosenLetterHandler (dit klopt) en on sumbmit wirdt er iets mee gedaan door  guessLetterHandler in AppContainer
Daar zou je een check verwachten die kijkt of er wel input is, maar dat is er niet

Fix:
AppContainer.js:45 +
    if (this.state.currentChosenLetter !== "") {

AppContainer.js:51
    });}
       ^











- error bij laatste letter goed kiezen
- gameIsOver word alleen aangeroepen aangeroepen als alle guesses op zijn of er geen ongevonden letters meer zijn (remaining.length === 0)

- GameOver.js wordt aangeroepen daarin wordt als props.wordGuessed true is win getoond, en anders lose
- blijkbaar ziet hij props.wordGuessed altijd als false
- dat klopt want hij krijgt geen props.wordGuessed maar een props.wordGuesed

FiX App.js:31
    <GameOver chosenWord={game.chosenWord} wordGuessed={wordWasGuessed} />