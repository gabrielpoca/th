var Common = require('./common');
var Card = require('../card');

var selectCard = Common.selectCard;
var printCard = Common.printCard;
var handleError = Common.handleError;

var moveToCodeReview = function(card) {
  Card(card).toCodeReview();
};

module.exports = function(card) {
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
};
