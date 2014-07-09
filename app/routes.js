var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var fs = require('fs');
var async = require('async');
var reviews = require('./controllers/reviews');

module.exports = function(app) {

  app.get('/api/reviews', reviews.all);

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html') // load the single view (angular)
  });

};
