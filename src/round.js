const { evaluateGuess } = require("./turn")

const createRound = (deck) => ({
  deck: deck,
  currentCard: deck[0],
  turns: 0,
  incorrectGuesses: []
})

const takeTurn = (guess, round) => {
  round.turns += 1
  var currentGuess = evaluateGuess(guess, round.currentCard.correctAnswer)
  if (currentGuess === 'Incorrect - please try again.') {
    round.incorrectGuesses.push(currentGuess.id)
  } else {
    round.deck.shift()
    round.currentCard = round.deck[0]
  }
  return currentGuess
}

function calculatePercentCorrect(round) {
  percentage = (round.turns - round.incorrectGuesses.length) / (round.turns) * 100
  return parseInt(percentage)
}

const endRound = round => {
  console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`)
  return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`
}

module.exports = { 
  createRound,
  takeTurn,
  evaluateGuess,
  calculatePercentCorrect,
  endRound
}; 