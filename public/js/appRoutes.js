angular.module('myApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/reviews', {
			templateUrl: 'views/reviews.html',
			controller: 'ReviewController'
		})

		.when('/feedback', {
			templateUrl: 'views/feedback.html',
			controller: 'FeedbackController'
		});

	$locationProvider.html5Mode(true);

}]);
