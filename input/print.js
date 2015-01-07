var _ = require('underscore-node');
var Promise = require('promise');

module.exports = {
  message: function(message) {
    return new Promise(function(resolve) {
      console.log(message);
      resolve();
    });
  },

  lists: function(lists) {
    return new Promise(function(resolve) {
      _.each(lists, function(list, index) {
        console.log(index + ') ' + list.name);
      });

      resolve();
    });
  }
}
