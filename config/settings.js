var fs = require('fs');
var path = require('path');
var _ = require('underscore-node');

var defaultFileName = '.thrc';

var defaultSettings = function() {
  var source = path.resolve(__dirname, '../templates/thrc');
  var file = fs.readFileSync(source, 'utf8');

  return JSON.parse(file);
}();

var settings;

module.exports = {
  save: function(data) {
    _.defaults(data, defaultSettings);
    fs.writeFile(path.resolve(defaultFileName), JSON.stringify(data));
  },

  load: function(optionsFileName) {
    if (!settings) {
      var fileName = optionsFileName || defaultFileName;
      var file = fs.readFileSync(path.resolve(fileName), 'utf8');
      settings = JSON.parse(file);
    }

    return settings;
  }
}
