var mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
	_id: String
}, {strict: false });

module.exports = mongoose.model('Feedback', feedbackSchema);
