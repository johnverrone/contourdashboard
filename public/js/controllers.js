var ctrlMod = angular.module('myApp.controllers', []);

ctrlMod.controller('MainController', function($scope) {
	$scope.tagline = 'Contour main controller bruh';
});

ctrlMod.controller('ReviewController', function($scope, Review) {
	$scope.tagline = 'Contour reviews controller bruh';

	Review.get().then(function(data) {
		$scope.reviews = data.data;
	});
});

ctrlMod.controller('FeedbackController', function($scope, Feedback) {
	$scope.tagline = 'Contour reviews controller bruh';

	Feedback.get().then(function(data) {
		$scope.feedback = data.data;
	});
});
