module.exports = function(boardId) {
  var Trello = require('./trello');

  return {
    lists: function() {
      return trelloRequest.get('1/boards/' + boardId + '/lists');
    }
  };
};
