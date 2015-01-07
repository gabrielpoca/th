var fs = require('fs');
var path = require('path');
var _ = require('underscore-node');
var Promise = require('promise');

var defaultFileName = '.thrc';

var defaultSettings = function() {
  var source = path.resolve(__dirname, '../../templates/thrc');
  var file = fs.readFileSync(source, 'utf8');

  return JSON.parse(file);
}

var fileExists = function(filePath) {
  return fs.existsSync(filePath);
}

var Settings = {
  save: function(data) {
    return new Promise(function(resolve) {
      var filePath = path.resolve(defaultFileName);

      data = data || {};

      if (fileExists(filePath))
        _.defaults(data, Settings.load());

      _.defaults(data, defaultSettings());

      fs.writeFileSync(filePath, JSON.stringify(data));

      resolve();
    });
  },

  load: function(optionsFileName) {
    var fileName = optionsFileName || defaultFileName;
    var filePath = path.resolve(fileName);

    if (fileExists(filePath)) {
      var file = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(file);
    }
  }
}

module.exports = Settings;
