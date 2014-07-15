var express = require('express');
var mongoose = require('mongoose');
var database = require('./config/database');
var app = express();

var port = process.env.PORT || 9000;   // set the port


// configuration =========================================
mongoose.connect(database.url); // connect to mongoDB
var db = mongoose.connection;

db.on('error', function callback () {
  console.log("Connection error");
});

db.once('open', function callback () {
  console.log("Mongo working!");
});

app.use(express.static(__dirname + '/public'));


// routes ================================================
require('./app/routes')(app);

// listen (start app with 'node server.js') ==============
app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
