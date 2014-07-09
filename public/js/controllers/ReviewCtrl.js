angular.module('ReviewCtrl', []).controller('ReviewController', function($scope, Review) {
	$scope.tagline = 'Contour reviews controller bruh';

	Review.get().then(function(data) {
		$scope.reviews = data.data;
	});
});
