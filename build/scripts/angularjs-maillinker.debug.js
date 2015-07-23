'use strict';
angular.module('maillinker', []);
angular.module('maillinker')
  .factory('DataService', ['$q',function ($q) {
    return {
      getProviders: function () {
        console.log("get providers!!!");
        return true;
      }
    };
}]);
angular.module('maillinker')
  .factory('MailLinkerService', ['$q','$rootScope','$window',function ($q,$rootScope,$window) {
    return {
      test: function () {
        console.log("FUNCTION CALL! B");
        return true;
      }
    };
}]);