angular.module('feedbackApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/reviews', {
			templateUrl: 'views/reviews.html',
			controller: 'ReviewController'
		});

	$locationProvider.html5Mode(true);

}]);
