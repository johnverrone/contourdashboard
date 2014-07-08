angular.module('ReviewCtrl', []).controller('ReviewController', function($scope, Review) {
	$scope.tagline = 'Contour reviews controller bruh';

	Review.get().then(function(data) {
		var header = data.data.feed.entry.shift();
		$scope.reviews = data.data.feed.entry;
	});
});
