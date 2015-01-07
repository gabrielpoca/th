var cliArguments = require('./input/cli_arguments');
var Move = require('./move');

var options = cliArguments.parse();

var updateSettings = function(settings) {
  require('./config/settings')(options.settings);
}

if (options.help) {
  cliArguments.help();
} else {
  if (options.settings) {
    updateSettings();
  }

  if (options.init) {
    require('./init')();
  } else if (options.to === 'codereview') {
    Move.toCodeReview();
  } else if (options.to === 'inprogress') {
    Move.toInProgress();
  } else if (options.to === 'live') {
    Move.toLive();
  }
}
