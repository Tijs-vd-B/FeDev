Debugging
bug : als het woord goed geraden is, verlies je alsnog
- check dat de bug inderdaad aanwezig is
    - console laat al zien wat het woord moet zijn (AppContainer.js:26)
- error bij laatste letter goed kiezen
- gameIsOver word alleen aangeroepen aangeroepen als alle guesses op zijn of er geen ongevonden letters meer zijn (remaining.length === 0)

- GameOver.js wordt aangeroepen daarin wordt als props.wordGuessed true is win getoond, en anders lose
- blijkbaar ziet hij props.wordGuessed altijd als false
- dat klopt want hij krijgt geen props.wordGuessed maar een props.wordGuesed

FiX App.js:31
    <GameOver chosenWord={game.chosenWord} wordGuessed={wordWasGuessed} />