var fs = require('fs');

module.exports = function() {
  console.log('adding .thrc to gitignore');

  fs.appendFile('.gitignore', '.thrc', function(err) {
    console.log('failed to add .thrc go gitignore');
  });
};
