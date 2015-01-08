var cliArguments = require("command-line-args");

var cli = cliArguments([
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
    alias: 't',
    type: String
  },
  {
    name: 'card',
    description: 'Card you want to use',
    alias: 'c',
    type: String
  }
]);

var help = cli.getUsage({
  header: 'An application to move trello cards',
  footer: '\n  For more information, visit https://github.com/gabrielpoca/th'
});

module.exports = {
  parse: function() {
    return cli.parse();
  },
  help: function() {
    return console.log(help);
  }
};
