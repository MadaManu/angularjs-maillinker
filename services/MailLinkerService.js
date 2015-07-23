angular.module('maillinker')
  .factory('MailLinkerService', ['$q','$rootScope','$window',function ($q,$rootScope,$window) {
    return {
      test: function () {
        console.log("FUNCTION CALL! B");
        return true;
      }
    };
}]);