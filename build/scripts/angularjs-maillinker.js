angular.module('maillinker', []);
(function() {
  'use strict';
  var MailLinkerService = function($q) {
    return {
      test : function(options) {
        void 0;
        return true;
      }
    }
  };
  MailLinkerService.$inject = ['$q'];

  angular.module('maillinker').service('MailLinkerService', MailLinkerService);
})();