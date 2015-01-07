var ignoreSettingsFile = require('./ignore_settings_file');
var promptUserSettings = require('./prompt_user_settings');
var Settings = require('../config/settings');
var Print = require('../input/print');
var Prompt = require('../input/prompt');

var saveSettings = function(data) {
  Settings.save(data);
};

module.exports = function() {
  Print.message('creating default settings');
  saveSettings();

  Prompt.developerInformation()
    .then(saveSettings)
    .then(promptUserSettings)
    .then(saveSettings);

  //ignoreSettingsFile();
}
