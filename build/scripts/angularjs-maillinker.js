angular.module('maillinker', []);
(function() {
  'use strict';
  var DataService = function($q) {
    return {
      getProviders : function() {
        void 0;
        return true;
      }
    }
  };
  DataService.$inject = ['$q'];

  angular.module('maillinker').service('DataService', DataService);
})();
(function() {
  'use strict';
  var MailLinkerService = function($q, DataService) {
    return {
      test : function(options) {
        void 0;
        return true;
      }
    }
  };
  MailLinkerService.$inject = ['$q', 'DataService'];

  angular.module('maillinker').service('MailLinkerService', MailLinkerService);
})();