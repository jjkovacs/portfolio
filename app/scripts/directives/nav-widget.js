'use strict';

angular.module('personalApp')
	.directive('navWidget', function(){
		return {
			restrict: 'A',
			templateUrl: 'views/nav-widget.html',
			scope: {
				navWidget: '='
			},
			link: function(scope) {
				scope.getStyle = getStyle;
				
				function getStyle() {
					var s = {
						'background-image': 'url(' + scope.navWidget.background + ')'
					};
					console.log(s);
					return s;
				}
			}
		};
	});