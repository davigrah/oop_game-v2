/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const startScreen = document.getElementById('overlay')
const hearts = document.querySelectorAll('.tries')
const ul = phraseDiv.querySelector('ul')

class Game {
  constructor () {
    this.missed = 0
    this.phrases = [
      new Phrase('Life is like a box of chocolates'),
      new Phrase('There is no trying'),
      new Phrase('May the force be with you'),
      new Phrase('You talking to me'),
      new Phrase('I see dead people')
    ]
    this.activePhrase = null
  }

  /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
  getRandomPhrase () {
    const randomNumber = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomNumber]
  }

  /**
* Begins game by selecting a random phrase and displaying it to user
*/
  startGame () {
    document.getElementById('overlay').style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin () {
    let remainingLetters = 0
    for (let i = 0; i < ul.children.length; i++) {
      if (ul.children[i].className.includes('hide')) {
        remainingLetters++
      }
    }
    if (remainingLetters === 0) {
      return true
    }
  }

  /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
  removeLife () {
    this.missed += 1
    const heartIndex = hearts.length - this.missed
    if (this.missed < 5) {
      hearts[heartIndex].firstChild.src = 'images/lostHeart.png'
    } else {
      this.gameOver(false)
    }
  }

  /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  gameOver (gameWon) {
    const message = document.getElementById('game-over-message')
    if (gameWon) {
      startScreen.style.display = ''
      startScreen.className = 'win'
      message.innerHTML = 'You win!'
    } else {
      startScreen.style.display = ''
      startScreen.className = 'lose'
      message.innerHTML = `You lose! The phrase was <em>"${this.activePhrase.phrase}"</em>`
    }
  }

  /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
  handleInteraction (button) {
    button.disabled = true
    if (this.activePhrase.phrase.includes(button.innerHTML)) {
      button.className += ' chosen'
      this.activePhrase.showMatchedLetter(button.innerHTML)
      if (this.checkForWin()) {
        this.gameOver(true)
      }
    } else {
      button.className += ' wrong'
      this.removeLife()
    }
  }

  // this method resets the game board, the missed guesses, and the heart images (i.e. the player's lives) at the start of each game.
  resetGame (e) {
    this.missed = 0
    const hearts = document.getElementsByClassName('tries')

    for (let i = 0; i < hearts.length; i++) {
      hearts[i].firstElementChild.src = 'images/liveHeart.png'
    }
    const buttons = document.getElementsByClassName('key')
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('wrong')
      buttons[i].classList.remove('chosen')
      buttons[i].disabled = false
    }
    const phrase = document.querySelector('#phrase ul')
    phrase.innerHTML = ''
  }
}
