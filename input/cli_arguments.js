var cliArgs = require("command-line-args");

var cli = cliArgs([
  {
    name: 'settings',
    type: String,
    alias: 's',
    description: 'Use this settings file'
  },
  {
    name: 'help',
    type: Boolean,
    alias: 'h',
    description: 'Print usage instructions'
  },
  {
    name: 'init',
    alias: 'i',
    description: 'Initialize project',
    type: Boolean
  },
  {
    name: 'to',
    description: 'Action you want to take',
    alias: 'to',
    type: String,
    defaultOption: true
  }
]);

var help = cli.getUsage({
    header: 'An application to move trello cards',
    footer: 'For more information, visit http://gabrielpoca.com'
});

module.exports = {
  parse: function() {
    return cli.parse();
  },
  help: function() {
    return console.log(help);
  }
};
