angular.module('maillinker')
  .factory('DataService', function (providers) {
    return {
      getProviders: function () {
        console.log(providers.data);
        return true;
      }
    };
});