(function(){

	'use strict';

	angular.module('quoteApp')
		.directive('quoteGenerator', function(){
			return {
				restrict: 'E',
				templateUrl: 'app/directives/quoteTemplate.html'
			};
		});

})();