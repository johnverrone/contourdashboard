angular.module('d3Directives', ['d3'])
	.directive('jvStackedBar', ['d3Service', function() {
		return {
			restrict: 'EA',
			scope: {},
			link: function(scope, element, attrs) {
				d3Service.d3().then(function(d3) {

				});
			}};
	}]);
