var Common = require('./common');
var Card = require('../card');

var selectCard = Common.selectCard;
var printCard = Common.printCard;
var handleError = Common.handleError;

var moveToLive = function(card) {
  Card(card).toLive();
};

module.exports = function(card) {
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
};
