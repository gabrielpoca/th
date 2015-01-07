var prompt = require('prompt');
var Promise = require('promise');
var Print = require('../input/print');

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

var userLists = function(lists) {
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

module.exports = {
  for: customPrompt,
  userLists: userLists
};
