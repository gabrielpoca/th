var Settings = require('../config/settings');
var ignoreInGit = require('./tasks/ignore_in_git');
var selectBoard = require('./tasks/select_board');
var selectBoardLists = require('./tasks/select_board_lists');
var selectTokenAndKey = require('./tasks/select_token_and_key');

var saveToSettings = function(data) {
  return Settings.save(data);
};

module.exports = function() {
  saveToSettings()
    .then(ignoreInGit)

    .then(selectTokenAndKey)
    .then(saveToSettings)

    .then(selectBoard)
    .then(saveToSettings)

    .then(selectBoardLists)
    .then(saveToSettings)

    .catch(function(err) {
      console.log(err.stack);
    });
}
