angular.module('maillinker')
  	.factory('MailLinkerService', function (DataService) {
	    var getProviderByDomain = function (domain){
	      var providersArray = DataService.getProviders();
	      return providersArray.filter(function( obj ) {
	        // replace ' '(spaces) in regex with | (or) for a valid regex
	          var re = new RegExp(obj.domains.replace(/ /g,"|"));
	          return re.test(domain);
	      })[0]; // assuming there is only one match

	    };
	    return {
	      getProviderByEmailAddress: function (email) {
	        var emailExplode = email.split("@");
	        if(emailExplode.length > 2 || emailExplode.length < 2){
	          return false; // not valid email
	        }
	        return getProviderByDomain(emailExplode[1]);
	      },
	      getProviderByDomain: function (domain) {
	        return getProviderByDomain(domain);
	      }
	    };
	});