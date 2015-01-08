module.exports = function(boardId) {
  var trelloRequest = require('./trello_request');

  return {
    lists: function() {
      return trelloRequest.get('1/boards/' + boardId + '/lists');
    }
  };
};
