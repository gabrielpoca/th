var prompt = require('prompt');
var Promise = require('promise');
var Print = require('../output/print');

var customPrompt = function(schema, options) {
  return new Promise(function(resolve, reject) {
      prompt.message = "question".yellow;
      prompt.delimiter = ": ".green;
      prompt.start();
      prompt.get(schema, function(err, data) {
        if (err)
          reject(err, options);
        else
          resolve(data, options);
      });
    });
};

var lists = function(lists) {
  var promptProperties = [{
    description: 'What is the "Next Up" list? ',
    message: 'Please select a valid number',
    name: 'nextUp',
    pattern: /[0-9]+/,
    required: true
    }, {
    description: 'What is the "In Progress" list? ',
    message: 'Please select a valid number',
    name: 'inProgress',
    pattern: /[0-9]+/,
    required: true
    }, {
    description: 'What is the "Code Review" list? ',
    message: 'Please select a valid number',
    name: 'codeReview',
    pattern: /[0-9]+/,
    required: true
    }, {
    description: 'What is the "Live" list? ',
    message: 'Please select a valid number',
    name: 'live',
    pattern: /[0-9]+/,
    required: true
  }];


  return Print.lists(lists)
    .then(function() {
      return customPrompt(promptProperties);
    })
    .then(function(map) {
      return new Promise(function(resolve) {
          resolve({
            lists: lists,
            map: map
          });
        });
    });
};

var tokenAndKey = function() {
  var promptProperties = [{
    description: 'insert your developer key',
    message: 'Please insert a valid key',
    name: 'key',
    type: 'string',
    required: true
    }, {
    description: 'insert your user token',
    message: 'Please insert a valid token',
    name: 'token',
    type: 'string',
    required: true
  }];

  return customPrompt(promptProperties);
};

var board = function() {
  var promptProperties = [{
    description: "insert the id of the board you're working on",
    message: 'Please insert a valid id',
    name: 'board',
    type: 'string',
    required: true
  }];

  return customPrompt(promptProperties);
};

var card = function() {
  var promptProperties = {
    name: 'id',
    validator: /[0-9]+/,
    warning: 'Please enter a valid id'
  };

  return customPrompt(promptProperties);
};

module.exports = {
  for: customPrompt,
  forBoardLists: lists,
  forTokenAndKey: tokenAndKey,
  forBoard: board,
  forCard: card
};
