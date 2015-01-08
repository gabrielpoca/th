module.exports = function(card) {
  var Settings = require('./config/settings').load();
  var trelloRequest = require('./trello_request');

  var codeReview = Settings.codeReview;
  var inProgress = Settings.inProgress;
  var nextUp = Settings.nextUp;
  var live = Settings.live;

  var moveCard =  function(card, destinationList) {
    return trelloRequest.put('1/cards/' + card.id, {
      idList: destinationList
    });
  }

  return {
    inProgress: function() {
      return trelloRequest.get('1/lists/' + inProgress + '/cards');
    },

    nextUp: function() {
      return trelloRequest.get('1/lists/' + nextUp + '/cards');
    },

    codeReview: function() {
      return trelloRequest.get('1/lists/' + codeReview + '/cards');
    },

    toCodeReview: function() {
      return moveCard(card, codeReview);
    },

    toInProgress: function() {
      return moveCard(card, inProgress);
    },

    toLive: function() {
      return moveCard(card, live);
    }
  }
};
