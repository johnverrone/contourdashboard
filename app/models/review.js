var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  _id: String
}, {strict: false });

module.exports = mongoose.model('Review', reviewSchema);
