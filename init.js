var ignoreSettingsFile = require('./tasks/ignore_settings_file');
var createSettingsFile = require('./tasks/create_settings_file');

module.exports = function() {
  createSettingsFile();
  ignoreSettingsFile();
}
