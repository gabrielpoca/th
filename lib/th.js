#!/usr/bin/env node

var updateSettings = function(settings) {
  var Settings = require('./config/settings');
  Settings.load(options.settings);
};

var parseArguments = function() {
  var cli = require('./input/cli');
  return cli.parse();
};

var help = function() {
  var cli = require('./input/cli');
  cli.help();
};

var Move = function() {
  return require('./move');
};

var init = function() {
  require('./setup/setup')();
}

var options = parseArguments();

if (options.help) {
  help();
} else {
  if (options.settings) {
    updateSettings();
  }

  if (options.init) {
    init();
  } else if (options.to === 'codereview') {
    Move().toCodeReview();
  } else if (options.to === 'inprogress') {
    Move().toInProgress();
  } else if (options.to === 'live') {
    Move().toLive();
  }
}
