var _ = require('underscore-node');
var Board = require('../board');
var Prompt = require('../input/prompt');
var Promise = require('promise');

var parseSelection = function(data) {
  var lists = data.lists,
    map = data.map;

  return new Promise(function(resolve) {
      _.map(Object.keys(map), function(key) {
        map[key] = lists[map[key]].id;
      });

      resolve(map);
    });
}

var handleError = function(err) {
  console.log(err);
};

module.exports = function() {
  return Board('2spWWtt3').lists()
    .then(Prompt.userLists)
    .then(parseSelection)
    .catch(handleError);
};
