'use strict';
angular.module('maillinker', []);
angular.module('maillinker')
  .factory('DataService', ['$q',function ($q) {
    return {
      getProviders: function () {
        void 0;
        return true;
      }
    };
}]);
angular.module('maillinker')
  .factory('MailLinkerService', ['$q','$rootScope','$window',function ($q,$rootScope,$window) {
    return {
      test: function () {
        void 0;
        return true;
      }
    };
}]);