var mongoose = require('mongoose');

module.exports = mongoose.model('Review', {
  title : String,
  rating : Number,
  reviewer : String,
  version : String,
  date : String,
  text : String
});
