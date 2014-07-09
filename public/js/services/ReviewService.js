angular.module('ReviewService', []).factory('Review', function($http) {

	return {
		get: function() {
			return $http.get('/api/reviews');
		}
	}

});
