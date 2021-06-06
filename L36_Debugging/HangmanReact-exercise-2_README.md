Debugging
bug : we kunnen geen letter raden

- check dat de bug inderdaad aanwezig is
    - bij goede of foute letters wordt er niets ingevuld
    - het te zoeken woord veranderd wel > refreshed?

- de teskstinput en submit button zitten in TextInput.js
- in TextInput.js de guess knop is de submit en verwijst naar props.submit
-> props.guessLetterHandler in App.js
-> this.guessLetterHandler in AppContainer.js
- de currentChosenLetter is te zien in state
 const newGuessedLetters = [...this.state.guesedLetters]; > bestaat niet

FiX AppContainer.js:50
      const newGuessedLetters = [...this.state.guessedLetters];