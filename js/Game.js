/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomNumber]
  }

  /**
* Begins game by selecting a random phrase and displaying it to user
*/
   startGame() {
     document.getElementById('overlay').style.display = 'none'
     this.activePhrase = this.getRandomPhrase()
     this.activePhrase.addPhraseToDisplay()
   }
}
