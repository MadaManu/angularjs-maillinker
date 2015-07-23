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
        void 0;
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
        void 0;
        return true;
      }
    };
}]);