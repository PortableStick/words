(function() {
  'use strict';

  angular
    .module('quoteApp')
    .controller('MainController', ['$scope', 'getQuote', 'getWiki', '$log', function($scope, getQuote, getWiki, $log){
      
          $scope.newQuote = function(){
                      getQuote.newQuote().then(function(data){
                        var xmlData = $.parseXML(data.data),
                            formattedData = $(xmlData);
                            $scope.author = formattedData.find("author").text();
                            $scope.quote = formattedData.find("quote").text();
                        var searchTerm = $.param({srsearch: $scope.author}, true);
                            getWiki(searchTerm).then(function(data){
                              if(data.data.query.searchinfo.suggestion){
                                $scope.linkTitle = "";
                                return;
                              } else {
                                $scope.linkTitle = data.data.query.search[0].title;
                                $log.log(data.data.query.search);
                              }                             
                            });
                      });
                    }
               
          $scope.newQuote();
    }]);
})();


