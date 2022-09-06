<h1 align="center">Welcome to OOP Game Show App 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/davilgrah" target="_blank">
    <img alt="Twitter: davilgrah" src="https://img.shields.io/twitter/follow/davilgrah.svg?style=social" />
  </a>
</p>

<h1>This project is a browser-based, word guessing game: &#34;Phrase Hunter.&#34</h1>
<h2>I've implemented with Object Oriented Javascript:</h2>
<p>Game and Phrase Classes;</p>
<p>A Constructor that receives a phrase parameter and initializes a phrase property set to the phrase;</p>
<p> addPhraseToDisplay() method which adds the phrase to the gameboard;</p>
<p> checkLetter() method which checks if a letter is in the phrase;</p>
<p> showMatchedLetter() method which reveals the letter(s) on the board that matches the player's selection;</p>
<p> Constructor that initializes a missed property set to 0, a phrases property set to an array of five Phrase objects, and an activePhrase property set to null</p>
<p> startGame() method that hides the start screen overlay, sets the activePhrase property to a random phrase, and calls the addPhraseToDisplay() method on the activePhrase property;</p>
<p> getRandomPhrase() method that randomly retrieves one phrase from the phrases array;</p>
<p> handleInteraction() method that:

- Disables the selected letter's onscreen keyboard button

- If the phrase does not include the guessed letter, the wrong CSS class is added to the selected letter's keyboard button and the removeLife() method is called

- If the phrase includes the guessed letter, the chosen CSS class is added to the selected letter's keyboard button, the showMatchedLetter() method is called on the phrase, and the checkForWin() method is called. If the player has won the game, the gameOver() method is called</p>
<p> checkForWin() method that checks if the player has revealed all of the letters in the active phrase;</p>
<p>removeLife() method that removes a life from the scoreboard (one of the liveHeart.png images is replaced with a lostHeart.png image), increments the missed property, and if the player has lost the game calls the gameOver() method;</p>
<p>gameOver() method that displays a final "win" or "loss" message by showing the original start screen overlay styled with either the win or lose CSS class;</p>
<p>App styles have been personalized with a new color palette</p>

### ✨ [Demo](https://oop-game-show-app.vercel.app)

## Author

👤 **Davi Grah**

* Website: https://www.davigrah.com
* Twitter: [@davilgrah](https://twitter.com/davilgrah)
* Github: [@davigrah](https://github.com/davigrah)
* LinkedIn: [@davilgrah](https://linkedin.com/in/davilgrah)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_