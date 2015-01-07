var trelloRequest = require('./trello_request');

module.exports = function(boardId) {
  return {
    lists: function() {
      return trelloRequest.get('1/boards/' + boardId + '/lists');
    }
  };
}
