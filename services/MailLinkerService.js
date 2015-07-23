angular.module('maillinker')
  .factory('MailLinkerService', function () {
    return {
      getProviderByEmailAddress: function () {
        console.log("function a");
        return true;
      },
      getProviderByDomain: function () {
      	console.log("function b");
        return true;
      }
    };
});