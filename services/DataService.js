(function() {
  'use strict';
  var DataService = function($q) {
    return {
      getProviders : function() {
        // $http.get('/api/people/pikachu').success(function(data) {
        //   $scope.name = data.name;
        // }).error(function(data) {
        //   $scope.name = data;
        // });
        console.log("FUNCTION CALL! A");
        return true;
      }
    }
  };
  DataService.$inject = ['$q'];

  angular.module('maillinker').service('DataService', DataService);
})();