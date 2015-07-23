'use strict';
angular.module('maillinker', []);
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
angular.module('maillinker')
  .factory('MailLinkerService', ['$q','$rootScope','$window',function ($q,$rootScope,$window) {
    return {
      test: function () {
        console.log("FUNCTION CALL! B");
        return true;
      }
    };
}]);