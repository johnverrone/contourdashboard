var mongoose = require('mongoose');
var Feedback = require('../models/feedback');
var MailParser = require('mailparser').MailParser;
var fs = require('fs');

exports.all = function(req, res) {
	Feedback.find(function(err, feedback) {
		if (err) console.error(err);
		res.jsonp(feedback);
	});
}


fs.readdir('Feedback June 17_to_July 2/',function(err,files){
    if(err) throw err;
    files.forEach(function(file){
			var mailparser = new MailParser();


			// Parse through emails and save feedback to database
			mailparser.once("end", function(mail_object) {
				var mversion = mail_object.subject.substring(22,27);

				var tail = mail_object.subject.substring(31).split("--");
				var mdevice = tail[0].trim();
				var missue = tail[1].trim();

				var start = mail_object.text.indexOf("------------------") + 18;
				var end = mail_object.text.indexOf("Customer Information:")
				var mbody = mail_object.text.substring(start, end);

				var e = new Feedback({
					_id: mail_object.date,
					from: mail_object.from,
					subject: mail_object.subject,
					version: mversion,
					device: mdevice,
					issue: missue,
					body: mbody
				})
				e.save(function(err) {
					if (err) {
						console.error(err);
					}
				});
			});

			fs.createReadStream("Feedback June 17_to_July 2/" + file).pipe(mailparser);
    });
 });

// fs.createReadStream("Feedback June 17_to_July 2/Feedback from Contour 1.2.1 on Android -- bug report.eml").pipe(mailparser);
