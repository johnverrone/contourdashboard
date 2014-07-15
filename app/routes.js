var mongoose = require('mongoose');
var fs = require('fs');
var reviews = require('./controllers/reviewCtrl');
var feedback = require('./controllers/feedbackCtrl');

module.exports = function(app) {

  app.get('/api/reviews', reviews.all);

  app.get('/api/feedback', feedback.all);

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html') // load the single view (angular)
  });

};
