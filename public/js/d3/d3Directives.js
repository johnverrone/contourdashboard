angular.module('d3')
	.directive('jvStackedBar', ['d3Service', function() {
		return {
			restrict: 'EA',
			template: "<svg width='850' height='200'></svg>",
			link: function(scope, element, attrs) {
				d3Service.d3().then(function(d3) {
					var svg = d3.select(element[0])
            .append('svg')
            .style('width', '100%');

					scope.data = [
            {name: "Greg", score: 98},
            {name: "Ari", score: 96},
            {name: 'Q', score: 75},
            {name: "Loser", score: 48}
          ];

				});
			}};
	}]);
