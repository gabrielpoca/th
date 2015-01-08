var Common = require('./common');
var Card = require('../card');

var selectCard = Common.selectCard;
var printCard = Common.printCard;
var handleError = Common.handleError;

var moveToInProgress = function(card) {
  Card(card).toInProgress();
};

module.exports = function(card) {
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
};
