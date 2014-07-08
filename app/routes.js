var Review = require('./models/review');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var fs = require('fs');
var async = require('async');

module.exports = function(app) {

  app.get('/api/appstore', function(req, res) {

    var options = {
      url: 'https://itunes.apple.com/us/rss/customerreviews/id=662900426/sortBy=mostRecent/json'
    };

    request(options, function(error, response, body) {
      if (error) console.log("callback error");
      if (response.statusCode != 200) console.log("bad response code");
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        res.send(info);
      }
    });
  });

  // application
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html') // load the single view (angular)
  });

};
