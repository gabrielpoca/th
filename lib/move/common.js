var Promise = require('promise');
var Print = require('../output/print');
var Prompt = require('../input/prompt');

module.exports = {
  selectCard: function(cards) {
    return new Promise(function(resolve, reject) {
        if (cards.length) {
          Print.cards(cards)
            .then(Prompt.forCard)
            .then(function(response) {
              resolve(cards[response.id]);
            })
            .catch(reject);
        } else {
          reject('There are no cards in this list to move');
        }
      });
  },

  handleError: function(err) {
    if (err.stack)
      console.log(err.stack);
    else
      console.log(err);
  },

  printCard: function(card) {
    return new Promise(function(resolve) {
        Print.message(card.id);
        resolve(card)
      });
  }
};
