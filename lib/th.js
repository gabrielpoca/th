#!/usr/bin/env node

var Move = require('./move');

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
  if (options.init) {
    init();
  } else if (options.to === 'codereview') {
    Move().toCodeReview(options.card);
  } else if (options.to === 'inprogress') {
    Move().toInProgress(options.card);
  } else if (options.to === 'live') {
    Move().toLive(options.card);
  }
}
