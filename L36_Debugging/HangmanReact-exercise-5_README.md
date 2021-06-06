Debugging
bug : je kan blijven raden tot -1 guesses

- check dat de bug inderdaad aanwezig is
    - idd, maar niet oneindig, bij -1 komt gameOver

- het aantal guesses wordt waarsch bijgehouden door GuessesLeft
-> nee, dat geeft alleen de weergave
- een conditie voor isGameOver om true te eindigen:

  if (
    getWrongLetters(game.chosenWord, game.guessedLetters).length >
    game.maxGuesses
  ) {
    return true;
maxGuesses: 5

checked of het aantal foutgekozen letters meer is dan maxguesses

added: console.log("getWrongLetters.length =", getWrongLetters(game.chosenWord, game.guessedLetters).length); klopt idd

Er moet true gegeven worden zodra het aantal foutgekozen letters GELIJK AAN (of meer is dan) maxguesses


Fix: App.js:31
    getWrongLetters(game.chosenWord, game.guessedLetters).length >=
                                                                  ^