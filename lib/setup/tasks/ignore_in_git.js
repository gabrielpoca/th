var fs = require('fs');

var fileName = '.gitignore';

var readFile = function(cb) {
  fs.readFileSync(fileName);
}

var addToFile = function() {
  fs.appendFileSync(fileName, '.thrc');
}

module.exports = function() {
  console.log('adding .thrc to gitignore');

  readFile(function(cont) {
    if (cont.indexOf('.thrc') === -1)
      addToFile();
  });
};
