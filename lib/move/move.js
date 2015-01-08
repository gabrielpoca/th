var toCodeReview = require('./to_code_review');
var toInProgress = require('./to_in_progress');
var toLive = require('./to_live');

module.exports = function(card) {
  return {
    toCodeReview: toCodeReview,
    toInProgress: toInProgress,
    toLive: toLive
  }
};
