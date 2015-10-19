(function(){

	'use strict';

	angular.module('quoteApp')
		.factory('getQuote', ['$http', function($http){
            return {
            	newQuote: function(){
            		return $http.get("http://www.stands4.com/services/v2/quotes.php?uid=4248&tokenid=BN96gld8w2rOjGcV");
            	}
            }
        }]);

})();