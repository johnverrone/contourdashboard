angular.module('FeedbackService', []).factory('Feedback', function($http) {

	return {
		get: function() {
			return $http.get('/api/feedback');
		}
	}

});
