app.get('/api/reviews', function(req, res) {
	var options = {
		url: 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/customerReviews',
		qs: {
			'displayable-kind': '11',
			'id': '662900426',
			'page': '1',
			'sort': '4'
		},
		headers: {
			'User-Agent': 'iTunes/10.3.1 (Macintosh; Intel Mac OS X 10.6.8) AppleWebKit/533.21.1',
			'X-Apple-Store-Front': '143441-1,12',
			'X-Apple-Tz': '-18000',
			'Accept-Language': 'en-us, en;q=0.50',
		}
	};

	request(options, function(error, response, html) {
		if (!error) {
			var $ = cheerio.load(html);

			console.log(html);

			var reviews = [];


			$('.all-reviews').find('.customer-review').each(function(i, elem) {
				var title, rating, reviewer, version, date, text;
				var json = {
					title : "",
					rating : "",
					userInfo : {
						reviewer : "",
						version : "",
						date : ""
					},
					text : ""};

				title = $(elem).find('.customerReviewTitle').text();
				json.title = title;

				rating = $(elem).find('.rating').attr('aria-label');
				json.rating = rating;

				var userInfo = $(elem).find('.user-info').text().trim().replace(/(\r\n|\n|\r|\s)/gm, '').split("-");
				reviewer = userInfo[0].substring(2);
				version = userInfo[1];
				date = userInfo[2];
				json.userInfo.reviewer = reviewer;
				json.userInfo.version = version;
				json.userInfo.date = date;

				text = $(elem).find('.content').text().trim();
				json.text = text;

				reviews[i] = json;
				console.log($(this).html());
			});
		console.log(reviews.length);
		}

		fs.writeFile('output.json', JSON.stringify(reviews, null, 4), function(err) {
			console.log('File successfully written!');
		})
		res.send('Check your console!')
	})
