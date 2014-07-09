var mongoose = require('mongoose');
var Review = require('../models/review');
var CronJob = require('cron').CronJob;
var request = require('request');
var FeedParser = require('feedparser');

exports.all = function(req, res) {
	Review.find(function(err, reviews) {
		if (err) console.error(err);
		res.jsonp(reviews);
	});
}


// Updates MongoDB with info from RSS feed every 60 seconds
var job = new CronJob({
	cronTime: '0 0-59 * * * *',

	onTick: function() {

		var req = request('https://itunes.apple.com/us/rss/customerreviews/id=662900426/sortBy=mostRecent/xml'),
				feedparser = new FeedParser();

		var bulk = Review.collection.initializeUnorderedBulkOp();

		req.on('error', function(err) {
			throw err;
		});

		req.on('response', function(res) {
			var stream = this;

			if (res.statusCode != 200) {
				return this.emit('error', new Error('Bad Status Code'));
			} else {
				console.log('response OK');
			}

			stream.pipe(feedparser);
		});

		feedparser.on('readable', function() {
			var stream = this,
					meta = this.meta,
					item;

			while (item = stream.read()) {
				item._id = item.guid;
				delete item.guid;
				bulk.find({_id: item._id}).upsert().updateOne({"$set": item});
			}
		});

		feedparser.on('end', function() {
			console.log('at end');
			bulk.execute(function(err, response) {
				if (err) throw err;

				console.log(JSON.stringify(response, undefined, 4));
			});
		});
	},
	start: true
});

mongoose.connection.on('open', function(err, db) {
	job.start();
});
