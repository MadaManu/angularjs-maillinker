angular.module('maillinker')
  .factory('DataService', ['$q',function ($q) {
    return {
      getProviders: function () {
        console.log("get providers!!!");
        return true;
      }
    };
}]);