#!/usr/bin/env node

var Move = require('./move/move');

var parseArguments = function() {
  var cli = require('./input/cli');
  return cli.parse();
};

var help = function() {
  var cli = require('./input/cli');
  cli.help();
};

var init = function() {
  require('./setup/setup')();
}

var options = parseArguments();

if (options.help) {
  help();
} else {

  var card;
  if (options.card) {
    card = { id: options.card };
  }

  if (options.init) {
    init();
  } else if (options.to === 'codereview') {
    Move(card).toCodeReview();
  } else if (options.to === 'inprogress') {
    Move(card).toInProgress();
  } else if (options.to === 'live') {
    Move(card).toLive();
  }
}
