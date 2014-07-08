angular.module('FeedbackCtrl', []).controller('FeedbackController', function($scope, Feedback) {
	$scope.tagline = 'Contour reviews controller bruh';

	Feedback.get().then(function(data) {
		var header = data.data.feed.entry.shift();
		$scope.reviews = data.data.feed.entry;
	});
});
