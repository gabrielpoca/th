var _ = require('underscore-node');
var Promise = require('promise');
var Prompt = require('./input/prompt');
var Card = require('./card');

var promptProperties = {
  name: 'id',
  validator: /[0-9]+/,
  warning: 'Please enter a valid id'
};

var selectCard = function(cards) {
  return new Promise(function(resolve, reject) {
      if (cards.length) {
        _.each(cards, function(card, index) {
          console.log(index + ") " + card.name);
        });

        Prompt.for(promptProperties)
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

module.exports = {
  toCodeReview: function() {
    Card().inProgress()
      .then(selectCard)
      .then(moveToCodeReview)
      .catch(handleError);
  },
  toInProgress: function() {
    Card().nextUp()
      .then(selectCard)
      .then(moveToInProgress)
      .catch(handleError);
  },
  toLive: function() {
    Card().codeReview()
      .then(selectCard)
      .then(moveToLive)
      .catch(handleError);
  }
}
