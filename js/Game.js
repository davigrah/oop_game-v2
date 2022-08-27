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
    this.chosenLetter = ''
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

  checkLetter () {
    const qwerty = document.getElementsByClassName('key')
    for (let i = 0; i < qwerty.length; i++) {
      qwerty[i].addEventListener('click', (e) => {
        this.chosenLetter = qwerty[i].textContent
        console.log(this.chosenLetter)
        const letter = document.getElementsByClassName('letter')
        console.log(letter[i])
        if (this.chosenLetter === letter[i].textContent) {
          console.log(letter.textContent[i])
          letter[i].classList = 'show'
        }
      })
    }
  }

  showMatchedLetter () {
    for (let i = 0; i < this.activePhrase.length; i++) {
      const letter = document.getElementsByClassName('letter')
      if (this.chosenLetter === this.activePhrase[i]) {
        letter[i].className = 'show'
      }
    }
  }

  // handleInteraction () {}
}
