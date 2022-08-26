/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

  addPhraseToDisplay () {
    const splitPhrase = this.phrase.split('')
    const phraseSection = document.getElementById('phraseSection')
    for (let i = 0; i < splitPhrase.length; i++) {
      if (splitPhrase[i] === ' ') {
        phraseSection.innerHTML += '<li class="space"> </li>'
      } else {
        phraseSection.innerHTML += `<li class="hide letter ${splitPhrase[i]}">${splitPhrase[i]}</li>`
      }
    }
  }
}
