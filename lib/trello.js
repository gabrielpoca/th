var Trello = require('node-trello');
var Promise = require('promise');
var Settings = require('./config/settings').load();

var myTrello = new Trello(Settings.key, Settings.token);

module.exports = {
  get: function(url, params) {
    return new Promise(function(resolve, reject) {
        myTrello.get(url, params, function(err, data) {
          if (err)
            reject(err);
          else
            resolve(data);
        });
      });
  },
  put: function(url, params) {
    return new Promise(function(resolve, reject) {
        myTrello.put(url, params, function(err, data) {
          if (err)
            reject(err);
          else
            resolve(data);
        });
      });
  }
};
