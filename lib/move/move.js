var _ = require('underscore-node');
var Promise = require('promise');
var Prompt = require('../input/prompt');
var Card = require('../card');
var Print = require('../output/print');

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

var printCard = function(card) {
  return new Promise(function(resolve) {
      Print.message(card.id);
      resolve(card)
    });
};

var handleError = function(err) {
  if (err.stack)
    console.log(err.stack);
  else
    console.log(err);
};

module.exports = function(card) {
  return {
    toCodeReview: function() {
      if (!card) {
        Card().inProgress()
          .then(selectCard)
          .then(printCard)
          .then(moveToCodeReview)
          .catch(handleError);
      } else {
        printCard(card)
          .then(moveToCodeReview)
          .catch(handleError);
      }
    },

    toInProgress: function() {
      if (!card) {
        Card().nextUp()
          .then(selectCard)
          .then(printCard)
          .then(moveToInProgress)
          .catch(handleError);
      } else {
        printCard(card)
          .then(moveToInProgress)
          .catch(handleError);
      }
    },

    toLive: function() {
      if (!card) {
        Card().codeReview()
          .then(selectCard)
          .then(printCard)
          .then(moveToLive)
          .catch(handleError);
      } else {
        printCard(card)
          .then(moveToLive)
          .catch(handleError);
      }
    }
  }
};
