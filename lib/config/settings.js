var fs = require('fs');
var path = require('path');
var _ = require('underscore-node');
var Promise = require('promise');

var fileName = '.thrc';
var filePath = path.resolve(fileName);

var defaultSettings = function() {
  var source = path.resolve(__dirname, '../../templates/thrc');
  var file = fs.readFileSync(source, 'utf8');

  return JSON.parse(file);
}

var fileExists = function(filePath) {
  return fs.existsSync(filePath);
}

Settings = {
  save: function(data) {
    return new Promise(function(resolve) {
        data = data || {};

        if (fileExists(filePath))
          _.defaults(data, Settings.load());

        _.defaults(data, defaultSettings());

        fs.writeFileSync(filePath, JSON.stringify(data));

        resolve();
      });
  },

  load: function() {
    if (fileExists(filePath)) {
      var file = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(file);
    }
  }
};

module.exports = Settings;
