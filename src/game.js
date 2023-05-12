const { createCard } = require('./card');
const { createDeck, countCards } = require('./deck');
const { createRound } = require('./round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  let cards = []
  prototypeQuestions.forEach(card => {
    newCard = createCard(
      card.id, 
      card.question, 
      card.answers, 
      card.correctAnswer)
    cards.push(newCard)
  })
  deck = createDeck(cards)
  let round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
  countCards(deck)
};

module.exports = { printMessage, printQuestion, start };
