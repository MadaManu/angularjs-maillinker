angular.module('maillinker')
  .factory('DataService', function (providers) {
    return {
      getProviders: function () {
        var providersArray = providers.data;

        for (var i = providersArray.length; i >= 0; i--) {
            // removal of comments
            if(typeof providersArray[i] === 'string' || providersArray[i] instanceof String){
              providersArray.splice(i, 1);
            }
        }

        return providersArray;
      }
    };
});