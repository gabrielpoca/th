var _ = require('underscore-node');
var Promise = require('promise');
var Prompt = require('./input/prompt');
var Card = require('./card');
var Print = require('./output/print');

var selectCard = function(cards) {
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
};

var moveToCodeReview = function(card) {
  Card(card).toCodeReview()
    .catch(handleError);
};

var moveToInProgress = function(card) {
  Card(card).toInProgress()
    .catch(handleError);
};

var moveToLive = function(card) {
  Card(card).toLive()
    .catch(handleError);
};

var handleError = function(err) {
  if (err.stack)
    console.log(err.stack);
  else
    console.log(err);
};

module.exports = function(cardId) {
  return {
    toCodeReview: function() {
      if (!cardId) {
        Card().inProgress()
          .then(selectCard)
          .then(moveToCodeReview)
          .catch(handleError);
      } else {
        moveToCodeReview({ id: cardId })
          .catch(handleError);
      }
    },

    toInProgress: function() {
      if (!cardId) {
        Card().nextUp()
          .then(selectCard)
          .then(moveToInProgress)
          .catch(handleError);
      } else {
        moveToInProgress({ id: cardId })
          .then(handleError);
      }
    },

    toLive: function() {
      if (!cardId) {
        Card().codeReview()
          .then(selectCard)
          .then(moveToLive)
          .catch(handleError);
      } else {
        moveToLive({ id: cardId })
          .then(handleError);
      }
    }
  }
};
