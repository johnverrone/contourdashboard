var mongoose = require('mongoose');
var Feedback = require('../models/feedback');
var MailParser = require('mailparser').MailParser;
var fs = require('fs');
var mailparser = new MailParser();

exports.all = function(req, res) {
	Feedback.find(function(err, feedback) {
		if (err) console.error(err);
		res.jsonp(feedback);
	});
}

var bulk = Feedback.collection.initializeUnorderedBulkOp();

// Parse through emails and save feedback to database
mailparser.on("end", function(mail_object) {
	// var e = new Feedback({
	// 	_id: "1",
	// 	from: mail_object.from,
	// 	subject: mail_object.subject,
	// 	body: mail_object.text
	// });
	// e.update({_id:e._id}, {$set: e}, {upsert: true}, function(){});
});

fs.createReadStream("Feedback June 17_to_July 2/Feedback from Contour 1.2.1 on Android -- bug report.eml").pipe(mailparser);
