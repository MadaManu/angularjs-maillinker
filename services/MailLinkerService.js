(function() {
  'use strict';
  var MailLinkerService = function($q) {
    return {
      test : function(options) {
        console.log("FUNCTION CALL!");
        return true;
      }
    }
  };
  MailLinkerService.$inject = ['$q'];

  angular.module('maillinker').service('MailLinkerService', MailLinkerService);
})();