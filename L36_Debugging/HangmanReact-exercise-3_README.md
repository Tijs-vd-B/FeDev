Debugging
bug : als we het spel starten is het meteen gewonnen

- check dat de bug inderdaad aanwezig is
    - idd

- state van App> GameOver wordGuessed: true
- state van App> TextInput gameIsOver: true

wordGuessed is een function in App.js
// If the letter is guessed return false (we want to remove that then)
maar de functie returned juist true bij een goede letter


FiX App.js:18
    !guessedLetters.includes(letter)