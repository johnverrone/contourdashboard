var serviceMod = angular.module('myApp.services', []);

serviceMod.factory('Feedback', function($http) {

	return {
		get: function() {
			return $http.get('/api/feedback');
		}
	}

});

serviceMod.factory('Review', function($http) {

	return {
		get: function() {
			return $http.get('/api/reviews');
		}
	}

});
