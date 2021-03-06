'use strict';
angular.module('maillinker', []);
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
angular.module('maillinker')
  .constant('providers',{ "data": [

  " Webmail Linker – Collection of Email Providers' Webmail Sites                      ",
  " ---------------------------------------------------------------------------------- ",
  " Released under the MIT License - https://github.com/thomasbachem/webmail-linker    ",
  "                                                                                    ",
  " String entries in the array are ignored by the parser and can be used as comments. ",
  "                                                                                    ",
  " The 'domains' property is a space-separated list of regular expressions that will  ",
  " be matched against the domain part of an email address (e.g. 'example.com') like   ",
  " '/^gmail[.]com$/i' (anchored at the beginning and end). '[.]' is preferred over a  ",
  " backslash to escape dots, as it is more readable. The expression '[a-z.]{2,6}' is  ",
  " used to match against different TLDs, e.g. '.de', '.co.uk', '.com.tr' etc.         ",
  "                                                                                    ",
  " The 'icon' URL is optional but should be given and a HTTPS URL whenever possible.  ",
  "                                                                                    ",
  " dev/urlchecker.php can be used to validate the availability of URLs & icons.       ",


  "===== International =====",
  {
    "name":    "Hotmail",
    "domains": "hotmail[.][a-z.]{2,6}",
    "url":     "http://hotmail.com/",
    "icon":    "https://hotmail.com/favicon.ico"
  },
  {
    "name":    "Outlook.com",
    "domains": "live[.][a-z.]{2,6} outlook[.][a-z.]{2,6} msn[.]com windowslive[.]com",
    "url":     "http://outlook.com/",
    "icon":    "https://hotmail.com/favicon.ico"
  },
  {
    "name":    "Gmail",
    "domains": "gmail[.]com googlemail[.][a-z.]{2,6}",
    "url":     "http://gmail.com/",
    "icon":    "https://ssl.gstatic.com/ui/v1/icons/mail/favicon.ico"
  },
  {
    "name":    "Yahoo! Mail",
    "domains": "yahoo[.][a-z.]{2,6} yahoomail[.]com ymail[.]com rocketmail[.]com",
    "url":     "http://mail.yahoo.com/",
    "icon":    "https://mail.yahoo.com/favicon.ico"
  },
  {
    "name":    "iCloud",
    "domains": "me[.]com icloud[.]com mac[.]com",
    "url":     "https://www.icloud.com/#mail",
    "icon":    "https://www.icloud.com/favicon.ico"
  },
  {
    "name":    "AOL Mail",
    "domains": "aol[.]com aol[.]co[.]uk",
    "url":     "http://webmail.aol.com/",
    "icon":    "https://mail.aol.com/favicon.ico"
  },
  {
    "name":    "FastMail",
    "domains": "fastmail[.]fm",
    "url":     "http://www.fastmail.fm/",
    "icon":    "https://www.fastmail.fm/favicon.ico"
  },
  {
    "name":    "Mail.com",
    "domains": "mail[.]com",
    "url":     "http://www.mail.com/",
    "icon":    "https://sec-s.uicdn.com/mail.com/3.0/img/favicon.ico"
  },
  {
    "name":    "AIM Mail",
    "domains": "aim[.]com",
    "url":     "http://mail.aim.com",
    "icon":    "https://s.aolcdn.com/aimcom/static/2.42.0.1/common/images/favicon.ico"
  },
  {
    "name":    "Hushmail",
    "domains": "hushmail[.]com",
    "url":     "https://www.hushmail.com",
    "icon":    "https://www.hushmail.com/public/img/favicon.ico"
  },
  {
    "name":    "Zoho Mail",
    "domains": "zoho[.]com",
    "url":     "https://www.zoho.com/mail",
    "icon":    "https://www.zoho.com/mail/img/favicon.ico"
  },
  {
    "name":    "Web.com",
    "domains": "web[.]com",
    "url":     "https://webmail.web.com/",
    "icon":    "http://web.com/favicon.ico"
  },

  "===== Germany =====",
  {
    "name":    "T-Online E-Mail",
    "domains": "t-online[.]de",
    "url":     "https://email.t-online.de/",
    "icon":    "https://accounts.login.idm.telekom.com/favicon.ico"
  },
  {
    "name":    "freenet.de",
    "domains": "freenet[.]de",
    "url":     "http://www.freenet.de/",
    "icon":    "http://www.freenet.de/favicon.ico"
  },
  {
    "name":    "AOL Mail",
    "domains": "aol[.]de",
    "url":     "http://webmail.aol.de/",
    "icon":    "https://mail.aol.com/favicon.ico"
  },
  {
    "name":    "Arcor Mail",
    "domains": "arcor[.]de",
    "url":     "http://www.arcor.de/ums/ums_index.jsp",
    "icon":    "https://www.arcor.de/favicon.ico"
  },
  {
    "name":    "WEB.DE FreeMail",
    "domains": "web[.]de email[.]de freemail[.]de",
    "url":     "http://www.web.de/fm/",
    "icon":    "https://img.web.de/web/img/v4/web.ico"
  },
  {
    "name":    "GMX FreeMail",
    "domains": "gmx[.][a-z.]{2,6} gmx-topmail[.]de imail[.]de fantasymail[.]de",
    "url":     "http://www.gmx.net/",
    "icon":    "https://img.gmx.net/gmx/hp10/icons/favicon.ico"
  },
  {
    "name":    "1&1 Webmailer",
    "domains": "online[.]de 1und1[.]de onlinehome[.]de",
    "url":     "https://webmailer.1und1.de/",
    "icon":    "https://webmailer.1und1.de/img-mamba/favicon.ico"
  },
  {
    "name":    "Vodafone E-Mail",
    "domains": "vodafone[.]de",
    "url":     "https://email.vodafone.de/",
    "icon":    "https://www.vodafone.de/favicon.ico"
  },
  {
    "name":    "mail.de",
    "domains": "mail[.]de",
    "url":     "https://mail.de/",
    "icon":    "https://mail.de/favicon.ico"
  },
  {
    "name":    "Lycos Mail",
    "domains": "lycos[.]de",
    "url":     "http://www.mail.lycos.com/",
    "icon":    "https://ly.lygo.com/ly/lycos/2/images/favicon.ico"
  },
  {
    "name":    "Kabelmail",
    "domains": "kabelmail[.]de",
    "url":     "http://kabelmail.de/",
    "icon":    "https://sso.kabelmail.de/portal/img/kdg/Icons/favicon/favicon.ico"
  },
  {
    "name":    "Unitymedia Webmail",
    "domains": "unitybox[.]de ish[.]de",
    "url":     "https://webmail.unitybox.de/",
    "icon":    "https://webmail.unitybox.de/files/favicon.ico"
  },
  {
    "name":    "Kabel BW Webmail",
    "domains": "kabelbw[.]de",
    "url":     "https://webmail.kabelbw.de/",
    "icon":    "https://www.kabelbw.de/etc/designs/unitymedia/common/media/icons/favicon.ico"
  },
  {
    "name":    "EWE Webmail",
    "domains": "ewetel[.]net ewe[.]net teleos-web[.]de",
    "url":     "https://webmail.ewe.net/",
    "icon":    "https://webmail.ewe.net/portal/favicon.ico"
  },
  {
    "name":    "NetCologne",
    "domains": "netcologne[.]de",
    "url":     "https://comcenter.netcologne.de/",
    "icon":    "https://comcenter.netcologne.de/favicon.ico"
  },
  {
    "name":    "o2 E-Mail",
    "domains": "o2mail[.]de alice[.]de alice-dsl[.](de|net) hanse[.]net hansenet[.]de",
    "url":     "https://webmail.o2mail.de/",
    "icon":    "https://www.o2online.de/favicon.ico"
  },
  {
    "name":    "o2 E-Mail",
    "domains": "o2online[.]de",
    "url":     "https://gomail.o2online.de/",
    "icon":    "https://www.o2online.de/favicon.ico"
  },
  {
    "name":    "Ok.de",
    "domains": "ok[.]de",
    "url":     "https://www.ok.de/loginscreen/",
    "icon":    "https://ok.gcdn.eu/img/favicon.png"
  },
  {
    "name":    "KölnMail",
    "domains": "koeln[.]de",
    "url":     "http://www.koeln.de/service/koelnde_mail/",
    "icon":    "https://www.koeln.de/favicon.ico"
  },
  {
    "name":    "Hamburg Mail",
    "domains": "hamburg[.]de",
    "url":     "https://www.hamburg.de/hamburg-mail/",
    "icon":    "https://www.hamburg.de/contentblob/9944/favicon/0-home-np.ico"
  },
  {
    "name":    "Berlin.de-Mail",
    "domains": "berlin[.]de",
    "url":     "https://www.berlin.de/mail/",
    "icon":    "https://www.berlin.de/favicon.ico"
  },
  {
    "name":    "Versatel",
    "domains": "versatel[.]de versanet[.]de versanet-online[.]de",
    "url":     "https://www.versatel.de/mein-versatel/dsl",
    "icon":    "https://www.versatel.de/sites/default/files/versatel_favicon.ico"
  },
  {
    "name":    "htp WebMail",
    "domains": "htp-tel[.]de",
    "url":     "https://webmail.htp.net",
    "icon":    "https://webmail.htp.net/ox6/v=OaNNK5b/themes/default/img/favicon.ico"
  },
  {
    "name":    "Osnatel Webmail",
    "domains": "osnanet[.]de osnatel[.]de",
    "url":     "https://webmail.osnanet.de/",
    "icon":    "https://webmail.osnanet.de/portal/favicon_osnatel.ico"
  },
  {
    "name":    "Tele2 Webmail",
    "domains": "tele2[.]de",
    "url":     "http://webmail.tele2.de/",
    "icon":    "https://www.tele2.de/favicon.ico"
  },
  {
    "name":    "Tele Columbus Webmail",
    "domains": "telecolumbus[.]net",
    "url":     "https://webmailer.telecolumbus.net/",
    "icon":    "https://www.telecolumbus.de/favicon.ico"
  },
  {
    "name":    "NeckarCom Webmail",
    "domains": "nc-online[.]de",
    "url":     "http://nc-online.de/login.php"
  },
  {
    "name":    "Emailn.de",
    "domains": "emailn[.]de",
    "url":     "http://www.emailn.de/",
    "icon":    "https://www.emailn.de/favicon.ico"
  },
  {
    "name":    "directBOX",
    "domains": "directbox[.]com",
    "url":     "https://directbox.com/",
    "icon":    "https://directbox.com/portal/img/directbox/Icons/favicon/favicon.ico"
  },
  {
    "name":    "Tutanota",
    "domains": "tutanota[.]de",
    "url":     "https://app.tutanota.de/",
    "icon":    "https://app.tutanota.de/graphics/favicon.png"
  },
  {
    "name":    "Posteo",
    "domains": "posteo[.]de",
    "url":     "https://www.posteo.de",
    "icon":    "https://posteo.de/favicon.ico"
  },
  {
    "name":    "Wilhelm.tel",
    "domains": "wtnet[.]de",
    "url":     "https://webmail.wtnet.de/",
    "icon":    "https://webmail.wtnet.de/skins/wilhelmtel/images/favicon.ico"
  },
  {
    "name":    "M-net",
    "domains": "mnet-mail[.]de mnet-online[.]de maxi-dsl[.]de",
    "url":     "https://webmail.mnet-online.de/rc/",
    "icon":    "https://webmail.mnet-online.de/rc/skins/M-net/images/favicon.ico"
  },
  {
    "name":    "VR-Web",
    "domains": "vr-web[.]de",
    "url":     "https://www.vr-web.de/vrweb/private",
    "icon":    "https://www.vr-web.de/favicon.ico"
  },
  {
    "name":    "Versatel",
    "domains": "foni[.]net",
    "url":     "https://webmail.versatel.de/ox.html",
    "icon":    "http://www.versatel.de/sites/default/files/versatel_favicon_0.ico"
  },
  {
    "name":    "Paderborn Mail",
    "domains": "paderborn[.]com",
    "url":     "https://www.paderborn.com",
    "icon":    "https://www.paderborn.com/portal/img/paderborn/Icons/favicon/favicon.ico"
  },

  "===== German Universities =====",
  {
    "name":    "RWTH Aachen",
    "domains": "rwth-aachen[.]de",
    "url":     "https://mail.rwth-aachen.de",
    "icon":    "https://www.rwth-aachen.de/favicon.ico"
  },
  {
    "name":    "FH Aachen",
    "domains": "fh-aachen[.]de alumni[.]fh-aachen[.]de",
    "url":     "https://mail.fh-aachen.de",
    "icon":    "https://www.fh-aachen.de/favicon.ico"
  },
  {
    "name":    "Uni Bonn",
    "domains": "uni-bonn[.]de",
    "url":     "https://mail.uni-bonn.de/",
    "icon":    "https://mail.uni-bonn.de/favicon.ico"
  },
  {
    "name":    "Uni Siegen",
    "domains": "student[.]uni-siegen[.]de",
    "url":     "https://mail.uni-siegen.de",
    "icon":    "https://www.uni-siegen.de/favicon.ico"
  },
  {
    "name":    "TU Dortmund",
    "domains": "tu-dortmund[.]de uni-dortmund[.]de udo[.]edu",
    "url":     "https://webmail.tu-dortmund.de",
    "icon":    "https://www.tu-dortmund.de/favicon.ico"
  },
  {
    "name":    "Uni Jena",
    "domains": "uni-jena[.]de",
    "url":     "https://webmail.uni-jena.de",
    "icon":    "https://www.uni-jena.de/favicon.ico"
  },
  {
    "name":    "Uni Duisburg-Essen",
    "domains": "stud[.]uni-due[.]de stud[.]uni-duisburg-essen[.]de",
    "url":     "https://webmail.uni-due.de",
    "icon":    "https://www.uni-due.de/favicon.ico"
  },
  {
    "name":    "HHU Düsseldorf",
    "domains": "uni-duesseldorf[.]de hhu[.]de",
    "url":     "https://iwc.uni-duesseldorf.de/iwc_static/layout/login.html",
    "icon":    "https://www.uni-duesseldorf.de/home/fileadmin/images/icons/favicon.ico"
  },
  {
    "name":    "TU Ilmenau",
    "domains": "tu-ilmenau[.]de",
    "url":     "https://webmail.tu-ilmenau.de/",
    "icon":    "https://www.tu-ilmenau.de/favicon.ico"
  },
  {
    "name":    "Uni Konstanz",
    "domains": "uni-konstanz[.]de",
    "url":     "https://sogo.uni-konstanz.de",
    "icon":    "https://sogo.uni-konstanz.de/favicon.ico"
  },
  {
    "name":    "Uni Mainz",
    "domains": "students[.]uni-mainz[.]de",
    "url":     "https://mail.uni-mainz.de/",
    "icon":    "https://www.uni-mainz.de/favicon.ico"
  },
  {
    "name":    "FH Mainz",
    "domains": "students[.]fh-mainz[.]de",
    "url":     "https://webmailer.fh-mainz.de/",
    "icon":    "https://www.fh-mainz.de/favicon.ico"
  },
  {
    "name":    "Uni Bielefeld",
    "domains": "uni-bielefeld[.]de",
    "url":     "https://owa.uni-bielefeld.de",
    "icon":    "https://owa.uni-bielefeld.de/favicon-uni.ico"
  },
  {
    "name":    "Uni Ulm",
    "domains": "uni-ulm[.]de",
    "url":     "https://imap.uni-ulm.de/webmail/",
    "icon":    "https://www.uni-ulm.de/favicon.ico"
  },
  {
    "name":    "Uni Bremen",
    "domains": "uni-bremen[.]de",
    "url":     "https://webmail.uni-bremen.de/",
    "icon":    "https://www.uni-bremen.de/favicon.ico"
  },
  {
    "name":    "Uni Köln",
    "domains": "smail[.]uni-koeln[.]de uni-koeln[.]de",
    "url":     "https://webmail.uni-koeln.de",
    "icon":    "https://klips.uni-koeln.de/favicon.ico"
  },
  {
    "name":    "Uni Trier",
    "domains": "uni-trier[.]de",
    "url":     "https://webmail.uni-trier.de",
    "icon":    "https://www.uni-trier.de/favicon.ico"
  },
  {
    "name":    "Zeppelin University",
    "domains": "zeppelin-university[.](de|net)",
    "url":     "https://webmail.zeppelin-university.de/owa/",
    "icon":    "https://www.zu.de/info-wGlobal/wGlobal/layout/images/favicon.ico"
  },
  {
    "name":    "Uni Oldenburg",
    "domains": "uni-oldenburg[.]de",
    "url":     "https://mail.uni-oldenburg.de/CookieAuth.dll?GetLogon?curl=Z2Fowa&reason=0&formdir=1",
    "icon":    "https://www.uni-oldenburg.de/favicon.ico"
  },
  {
    "name":    "CBS Webmail",
    "domains": "cbs-mail[.]de cbs-edu[.]de cbs-uni[.]de",
    "url":     "http://cbs-mail.de/",
    "icon":    "http://www.cbs.de/favicon.ico"
  },
  {
    "name":    "Uni Rostock",
    "domains": "uni-rostock[.]de",
    "url":     "https://email.uni-rostock.de",
    "icon":    "https://email.uni-rostock.de/owa/14.3.181.6/themes/resources/favicon.ico"
  },
  {
    "name":    "Uni Tübingen",
    "domains": "student[.]uni-tuebingen[.]de",
    "url":     "https://webmail.uni-tuebingen.de/",
    "icon":    "https://www.uni-tuebingen.de/fileadmin/pics/favicon.ico"
  },
  {
    "name":    "Uni Potsdam",
    "domains": "uni-potsdam[.]de",
    "url":     "https://webmail.uni-potsdam.de",
    "icon":    "https://www.uni-potsdam.de/favicon.ico"
  },
  {
    "name":    "Uni Wuppertal",
    "domains": "uni-wuppertal[.]de",
    "url":     "https://webmail.uni-wuppertal.de",
    "icon":    "https://webmail.uni-wuppertal.de/themes/default/graphics/favicon.ico"
  },
  {
    "name":    "Uni Frankfurt",
    "domains": "(stud|bio)[.]uni-frankfurt[.]de",
    "url":     "https://webmail.server.uni-frankfurt.de",
    "icon":    "https://www.uni-frankfurt.de/favicon.ico"
  },
  {
    "name":    "TU München",
    "domains": "tum[.]de",
    "url":     "https://mail.tum.de/",
    "icon":    "https://www.tum.de/favicon.ico"
  },
  {
    "name":    "Uni Koblenz",
    "domains": "uni-koblenz[.]de",
    "url":     "https://sogo.uni-koblenz.de/squirrelmail/",
    "icon":    "https://www.uni-koblenz.de/favicon.ico"
  },
  {
    "name":    "Uni Halle",
    "domains": "student[.]uni-halle[.]de",
    "url":     "https://mail.uni-halle.de/",
    "icon":    "http://www.uni-halle.de/im/sod/common/img/favicon.ico"
  },
  {
    "name":    "UniBw München",
    "domains": "unibw[.]de",
    "url":     "https://mail.unibw.de",
    "icon":    "https://www.unibw.de/favicon.ico"
  },
  {
    "name":    "ISM",
    "domains": "ism[.]de student[.]ism[.]de",
    "url":     "https://mail.google.com/a/student.ism.de/",
    "icon":    "http://www.ism.de/templates/ismStartseite/favicon.ico"
  },
  {
    "name":    "FH Bielefeld",
    "domains": "fh-bielefeld[.]de",
    "url":     "https://owa.fh-bielefeld.de",
    "icon":    "https://www.fh-bielefeld.de/favicon.ico"
  },
  {
    "name":    "KIT",
    "domains": "kit[.]edu students[.]kit[.]edu student[.]kit[.]edu",
    "url":     "https://owa.kit.edu",
    "icon":    "https://www.kit.edu/favicon.ico"
  },
  {
    "name":    "Uni Erfurt",
    "domains": "uni-erfurt[.]de",
    "url":     "https://webmail.uni-erfurt.de",
    "icon":    "https://www.uni-erfurt.de/favicon.ico"
  },
  {
    "name":    "Uni Marburg",
    "domains": "students[.]uni-marburg[.]de",
    "url":     "https://home.students.uni-marburg.de",
    "icon":    "https://www.uni-marburg.de/favicon.ico"
  },
  {
    "name":    "Uni Heidelberg",
    "domains": "stud[.]uni-heidelberg[.]de",
    "url":     "https://exchange.uni-heidelberg.de",
    "icon":    "https://www.uni-heidelberg.de/favicon.ico"
  },
  {
    "name":    "SRH Hochschule Heidelberg",
    "domains": "fh-heidelberg[.]de hochschule-heidelberg[.]de",
    "url":     "http://wwwfh.fh-heidelberg.de/tools/vpnswitch.php?url=http://fhclusrv-ex.dcs.fh-heidelberg.de/exchange/",
    "icon":    "http://www.hochschule-heidelberg.de/favicon.ico"
  },
  {
    "name":    "FH Düsseldorf",
    "domains": "fh-duesseldorf[.]de",
    "url":     "https://campus-it.fh-duesseldorf.de/rcm/",
    "icon":    "http://www.fh-duesseldorf.de/favicon.ico"
  },
  {
    "name":    "Uni Würzburg",
    "domains": "stud-mail[.]uni-wuerzburg[.]de",
    "url":     "https://webmail.uni-wuerzburg.de/",
    "icon":    "https://www.uni-wuerzburg.de/favicon.ico"
  },
  {
    "name":    "TU Dresden",
    "domains": "mailbox[.]tu-dresden[.]de",
    "url":     "https://mail.zih.tu-dresden.de",
    "icon":    "https://www.tu-dresden.de/favicon.ico"
  },
  {
    "name":    "FH Stralsund",
    "domains": "fh-stralsund[.]de",
    "url":     "https://webmail.fh-stralsund.de",
    "icon":    "http://www.fh-stralsund.de/fh_stralsund/FH.ico"
  },
  {
    "name":    "FH Münster",
    "domains": "fh-muenster[.]de",
    "url":     "https://webmail.fh-muenster.de/",
    "icon":    "https://www.fh-muenster.de/favicon.ico"
  },
  {
    "name":    "Uni Jena",
    "domains": "uni-jena[.]de",
    "url":     "https://webmail.uni-jena.de",
    "icon":    "https://www.uni-jena.de/favicon.ico"
  },
  {
    "name":    "HS Mittweida",
    "domains": "hs-mittweida[.]de",
    "url":     "https://www-mail.hs-mittweida.de/",
    "icon":    "https://www.hs-mittweida.de/favicon.ico"
  },
  {
    "name":    "Helmut-Schmidt-Universität",
    "domains": "unibw-hamburg[.]de",
    "url":     "https://webmail.unibw-hamburg.de",
    "icon":    "https://www.hsu-hh.de/favicon_hsu.ico"
  },
  {
    "name":    "Uni Saarland",
    "domains": "mx[.]uni-saarland[.]de",
    "url":     "https://webmail.uni-saarland.de",
    "icon":    "https://www.uni-saarland.de/favicon.ico"
  },
  {
    "name":    "FH Dortmund",
    "domains": "stud[.]fh-dortmund[.]de fh-dortmund[.]de",
    "url":     "https://webmail.fh-dortmund.de",
    "icon":    "http://www.fh-dortmund.de/favicon.ico"
  },
  {
    "name":    "TU Harburg",
    "domains": "tu-harburg[.]de tuhh[.]de",
    "url":     "https://webmail.tu-harburg.de/",
    "icon":    "https://www.tu-harburg.de/favicon.ico"
  },
  {
    "name":    "Uni Witten/Herdecke",
    "domains": "uni-wh[.]de",
    "url":     "https://owa.uni-wh.de",
    "icon":    "https://www.uni-wh.de/favicon.ico"
  },
  {
    "name":    "Karlshochschule",
    "domains": "karlshochschule[.]de",
    "url":     "http://mail.karlshochschule.de",
    "icon":    "http://karlshochschule.de/favicon.ico"
  },
  {
    "name":    "Uni Lübeck",
    "domains": "informatik[.]uni-luebeck[.]de",
    "url":     "https://mail.uni-luebeck.de",
    "icon":    "https://www.uni-luebeck.de/favicon.ico"
  },
  {
    "name":    "Uni Augsburg",
    "domains": "student[.]uni-augsburg[.]de",
    "url":     "https://webmail.uni-augsburg.de/",
    "icon":    "https://webmail.uni-augsburg.de/skins/uaux/images/favicon.ico"
  },
  {
    "name":    "Uni Göttingen",
    "domains": "stud[.]uni-goettingen[.]de",
    "url":     "https://ecampus.uni-goettingen.de",
    "icon":    "https://www.uni-goettingen.de/favicon.ico"
  },
  {
    "name":    "Uni Mannheim",
    "domains": "mail[.]uni-mannheim[.]de",
    "url":     "https://students.webmail.uni-mannheim.de",
    "icon":    "https://www.uni-mannheim.de/favicon.ico"
  },
  {
    "name":    "HS Bochum",
    "domains": "hs-bochum[.]de rub[.]de",
    "url":     "https://app01.hs-bochum.de/iwc/",
    "icon":    "https://app01.hs-bochum.de/iwc_static/c11n/hs-bochum_de/favicon.ico"
  },
  {
    "name":    "MH Hannover",
    "domains": "mh-hannover[.]de",
    "url":     "https://webmail.stud.mh-hannover.de/",
    "icon":    "https://www.mh-hannover.de/favicon.ico"
  },
  {
    "name":    "HS Hannover",
    "domains": "stud[.]fh-hannover[.]de",
    "url":     "https://webmail.fh-hannover.de",
    "icon":    "https://www.hs-hannover.de/fileadmin/templates/img/favicon.ico"
  },
  {
    "name":    "HS Hannover",
    "domains": "stud[.]hs-hannover[.]de",
    "url":     "https://mail.hs-hannover.de",
    "icon":    "https://www.hs-hannover.de/fileadmin/templates/img/favicon.ico"
  },
  {
    "name":    "Uni Greifswald",
    "domains": "uni-greifswald[.]de",
    "url":     "https://groupware.uni-greifswald.de/",
    "icon":    "https://groupware.uni-greifswald.de/branding/favicon.ico"
  },
  {
    "name":    "FU Berlin",
    "domains": "zedat[.]fu-berlin[.]de fu-berlin[.]de",
    "url":     "https://portal.zedat.fu-berlin.de/",
    "icon":    "https://www.fu-berlin.de/images/fu-berlin/favicon.ico"
  },
  {
    "name":    "Uni Hildesheim",
    "domains": "uni-hildesheim[.]de",
    "url":     "https://webmail.uni-hildesheim.de/",
    "icon":    "https://www.uni-hildesheim.de/favicon.ico"
  },
  {
    "name":    "HS Coburg",
    "domains": "stud[.]hs-coburg[.]de",
    "url":     "https://webmail.hs-coburg.de/",
    "icon":    "https://www.hs-coburg.de/favicon.ico"
  },
  {
    "name":    "TU Chemnitz",
    "domains": "(informatik|can)[.]tu-chemnitz[.]de",
    "url":     "https://mail.tu-chemnitz.de",
    "icon":    "https://www.tu-chemnitz.de/favicon.ico"
  },
  {
    "name":    "Uni Kassel",
    "domains": "uni-kassel[.]de student[.]uni-kassel[.]de",
    "url":     "https://wwwmail.uni-kassel.de/",
    "icon":    "https://www.uni-kassel.de/favicon.ico"
  },
  {
    "name":    "HS Fresenius",
    "domains": "stud[.]hs-fresenius[.]de koeln[.]hs-fresenius[.]de",
    "url":     "https://email.hs-fresenius.de/",
    "icon":    "https://email.hs-fresenius.de/skins/hsf/images/favicon.ico"
  },
  {
    "name":    "TU Berlin",
    "domains": "mailbox[.]tu-berlin[.]de campus[.]tu-berlin[.]de",
    "url":     "https://webmail.tu-berlin.de",
    "icon":    "https://www.tu-berlin.de/favicon.ico"
  },
  {
    "name":    "Ruhr-Uni Bochum",
    "domains": "ruhr-uni-bochum[.]de",
    "url":     "https://mpx2.rz.ruhr-uni-bochum.de/roundcubemail/",
    "icon":    "https://www.ruhr-uni-bochum.de/favicon.ico"
  },
  {
    "name":    "HS Merseburg",
    "domains": "stud[.]hs-merseburg[.]de",
    "url":     "https://www.hs-merseburg.de/webmail",
    "icon":    "https://www.hs-merseburg.de/favicon.ico"
  },
  {
    "name":    "FH Worms",
    "domains": "fh-worms[.]de",
    "url":     "https://webmailer.fh-worms.de/",
    "icon":    "https://www.fh-worms.de/favicon.ico"
  },
  {
    "name":    "HS Osnabrueck",
    "domains": "hs-osnabrueck[.]de",
    "url":     "https://mail.hs-osnabrueck.de/cgi-bin/sqwebmail",
    "icon":    "https://www.hs-osnabrueck.de/favicon.ico"
  },
  {
    "name":    "HU Berlin",
    "domains": "hu-berlin[.]de",
    "url":     "https://webmail.cms.hu-berlin.de/roundcubemail/",
    "icon":    "https://www.hu-berlin.de/favicon.ico"
  },
  {
    "name":    "TH Deggendorf",
    "domains": "th-deg[.]de stud[.]hdu-deggendorf[.]de stud[.]th-deg[.]de",
    "url":     "https://webmail.th-deg.de/roundcube/",
    "icon":    "https://www.th-deg.de/favicon.ico"
  },
  {
    "name":    "LMU München",
    "domains": "campus[.]lmu[.]de",
    "url":     "http://campus.lmu.de/",
    "icon":    "https://www.uni-muenchen.de/favicon.ico"
  },
  {
    "name":    "BiTS Iserlohn",
    "domains": "bits-hochschule[.]de bits-iserlohn[.]de",
    "url":     "http://www.bits-hochschule.de/de/intern/studenten-webmail-office365/",
    "icon":    "https://www.bits-hochschule.de/fileadmin/templates/img/favicon.ico"
  },
  {
    "name":    "HS Trier",
    "domains": "fh-trier[.]de hochschule-trier[.]de",
    "url":     "https://webmail.hochschule-trier.de/",
    "icon":    "https://www.hochschule-trier.de/favicon.ico"
  },
  {
    "name":    "HS Augsburg",
    "domains": "hs-augsburg[.]de",
    "url":     "https://sogo.hs-augsburg.de",
    "icon":    "https://www.hs-augsburg.de/favicon.ico"
  },
  {
    "name":    "HS Koblenz",
    "domains": "hs-koblenz[.]de fh-koblenz[.]de",
    "url":     "https://sogo.hs-koblenz.de",
    "icon":    "https://www.hs-koblenz.de/fileadmin/templates/hs-koblenz.de/public/favicon.ico"
  },
  {
    "name":    "Uni Hohenheim",
    "domains": "uni-hohenheim[.]de",
    "url":     "https://webmail.uni-hohenheim.de",
    "icon":    "https://www.uni-hohenheim.de/uploads/tf/favicon003365.ico"
  },
  {
    "name":    "Uni Osnabrück",
    "domains": "uni-osnabrueck[.]de uos[.]de",
    "url":     "https://sogo.uni-osnabrueck.de",
    "icon":    "https://www.rz.uni-osnabrueck.de/favicon.ico"
  },
  {
    "name":    "Uni Koblenz Landau",
    "domains": "uni-landau[.]de",
    "url":     "https://mail.uni-landau.de/",
    "icon":    "https://www.uni-koblenz-landau.de/favicon.ico"
  },
  {
    "name":    "Uni Paderborn",
    "domains": "mail[.]uni-paderborn[.]de",
    "url":     "https://webmail.uni-paderborn.de",
    "icon":    "https://www.uni-paderborn.de/typo3conf/ext/upb/Resources/Public/Icons/favicon.ico"
  },
  {
    "name":    "HS Albstadt-Sigmaringen",
    "domains": "hs-albsig[.]de",
    "url":     "https://webmail1.hs-albsig.de",
    "icon":    "http://www.hs-albsig.de/images/FAVICON.ICO"
  },
  {
    "name":    "FAU Erlangen-Nürnberg",
    "domains": "studium[.]fau[.]de studium[.]uni-erlangen[.]de fau[.]de",
    "url":     "https://faumail.uni-erlangen.de",
    "icon":    "https://faumail.uni-erlangen.de/favicon.ico"
  },
  {
    "name":    "Uni Regensburg",
    "domains": "stud[.]uni-regensburg[.]de",
    "url":     "https://gw.uni-regensburg.de/gw/",
    "icon":    "https://www.uni-regensburg.de/favicon.ico"
  },
  {
    "name":    "FH Rosenheim",
    "domains": "stud[.]fh-rosenheim[.]de",
    "url":     "https://webmail.fh-rosenheim.de",
    "icon":    "https://www.fh-rosenheim.de/typo3conf/ext/in2template/Resources/Public/Images/favicon.ico"
  },
  {
    "name":    "HS Heilbronn",
    "domains": "stud[.]hs-heilbronn[.]de",
    "url":     "https://webmail.stud.hs-heilbronn.de/",
    "icon":    "https://www.hs-heilbronn.de/favicon.ico"
  },
  {
    "name":    "Uni Münster",
    "domains": "uni-muenster[.]de",
    "url":     "https://permail.uni-muenster.de/",
    "icon":    "https://www.uni-muenster.de/imperia/md/content/allgemein/farbunabhaengig/favicon.ico"
  },
  {
    "name":    "TU Braunschweig",
    "domains": "tu-bs[.]de tu-braunschweig[.]de",
    "url":     "https://groupware.tu-braunschweig.de/",
    "icon":    "https://www.tu-braunschweig.de/icons/tubsdesign/favicon.ico"
  },
  {
    "name":    "HAW Hamburg",
    "domains": "haw-hamburg[.]de",
    "url":     "https://haw-mailer.haw-hamburg.de/owa/",
    "icon":    "http://haw-hamburg.de/favicon.ico"
  },
  {
    "name":    "HS Zwickau",
    "domains": "fh-zwickau[.]de",
    "url":     "https://mail.fh-zwickau.de/owa/",
    "icon":    "https://www.fh-zwickau.de/favicon.ico"
  },
  {
    "name":    "HS Madgeburg-Stendal",
    "domains": "hs-magdeburg[.]de",
    "url":     "https://webmail.hs-magdeburg.de",
    "icon":    "https://www.hs-magdeburg.de/favicon.ico"
  },
  {
    "name":    "FH Kaiserslautern",
    "domains": "stud[.]fh-kl[.]de",
    "url":     "https://mail01.ds.fh-kl.de",
    "icon":    "https://www.fh-kl.de/fileadmin/favicon.ico"
  },
  {
    "name":    "my.ebs",
    "domains": "ebs[.]de",
    "url":     "https://www.myebs.de/",
    "icon":    "http://www.ebs.edu/favicon.ico"
  },
  {
    "name":    "WHU Webmail",
    "domains": "whu[.]edu",
    "url":     "https://webmail.whu.edu/",
    "icon":    "http://www.whu.edu/favicon.ico"
  },
  {
    "name":    "Westfälische Hochschule",
    "domains": "studmail[.]w-hs[.]de",
    "url":     "https://mail.w-hs.de/",
    "icon":    "https://www.w-hs.de/fileadmin/template/img/favicon.png"
  },
  {
    "name":    "FH Schmalkalden",
    "domains": "stud[.]fh-sm[.]de stud[.]fh-schmalkalden[.]de",
    "url":     "https://webmail.fh-schmalkalden.de/",
    "icon":    "http://www.fh-schmalkalden.de/skin/schmalkalden/favicon.ico"
  },
  {
    "name":    "Uni Bamberg",
    "domains": "stud[.]uni-bamberg[.]de uni-bamberg[.]de",
    "url":     "https://mail.stud.uni-bamberg.de/",
    "icon":    "https://www.uni-bamberg.de/favicon.ico"
  },
  {
    "name":    "Hochschule München",
    "domains": "hm[.]edu",
    "url":     "https://portal.hm.edu/webmail",
    "icon":    "https://portal.hm.edu/webmail/skins/larry/images/favicon.ico"
  },
  {
    "name":    "Uni Magdeburg",
    "domains": "st[.]ovgu[.]de",
    "url":     "https://webmail.uni-magdeburg.de",
    "icon":    "https://webmail.uni-magdeburg.de/imp/themes/graphics/favicon.ico"
  },
  {
    "name":    "Ostfalia",
    "domains": "ostfalia[.]de",
    "url":     "https://mika.sonia.de",
    "icon":    "https://www.ostfalia.de/cms/system/modules/sonia.ostfalia/resources/images/favicon/favicon.ico"
  },
  {
    "name":    "HS Niederrhein",
    "domains": "stud[.]hn[.]de",
    "url":     "https://webmail.stud.hn.de",
    "icon":    "http://www.hs-niederrhein.de/fileadmin/images/layout/icons/favicon.ico"
  },
  {
    "name":    "Macromedia HS",
    "domains": "mhmk[.]de",
    "url":     "https://www.macromedia-portal.de",
    "icon":    "https://www.macromedia-portal.de/favicon.ico"
  },
  {
    "name":    "Hochschule Darmstadt",
    "domains": "stud[.]h-da[.]de",
    "url":     "https://webmail.stud.h-da.de",
    "icon":    "https://www.h-da.de/fileadmin/favicon.ico"
  },
  {
    "name":    "FH Köln",
    "domains": "smail[.]fh-koeln[.]de",
    "url":     "https://webmail.fh-koeln.de",
    "icon":    "https://webmail.fh-koeln.de/themes/fh-koeln/graphics/favicon.ico"
  },
  {
    "name":    "HS Pforzheim",
    "domains": "hs-pforzheim[.]de",
    "url":     "https://webmail.hs-pforzheim.de",
    "icon":    "https://www.hs-pforzheim.de/favicon.ico"
  },
  {
    "name":    "MyTUM",
    "domains": "mytum[.]de",
    "url":     "https://portal.mytum.de",
    "icon":    "https://portal.mytum.de/favicon.ico"
  },
  {
    "name":    "Leuphana",
    "domains": "stud[.]leuphana[.]de",
    "url":     "https://mailhost.leuphana.de",
    "icon":    "https://mailhost.leuphana.de/favicon.ico"
  },
  {
    "name":    "Europa Universität",
    "domains": "europa-uni[.]de",
    "url":     "https://owa.europa-uni.de",
    "icon":    "http://www.europa-uni.de/resources/pic/favicon-euv.ico"
  },
  {
    "name":    "IUBH",
    "domains": "iubh[.]de",
    "url":     "http://mail.iubh.de",
    "icon":    "http://www.iubh.de/favicon.ico"
  },
  {
    "name":    "Ratsgymnasiums Osnabrück",
    "domains": "rats-os[.]de",
    "url":     "http://www.rats-os.de/idesk/"
  },
  {
    "name":    "Hoffmann-von-Fallersleben-Schule",
    "domains": "hvf-bs[.]net",
    "url":     "https://hvf-bs.net/idesk/",
    "icon":    "https://www.htw-berlin.de/fileadmin/Templates/images/favicon.ico"
  },
  {
    "name":    "HTW Berlin",
    "domains": "htw-berlin[.]de",
    "url":     "https://webmail.htw-berlin.de/",
    "icon":    "http://www.htw-berlin.de/fileadmin/Templates/images/favicon.ico"
  },
  {
    "name":    "B TU Cottbus",
    "domains": "tu-cottbus[.]de",
    "url":     "https://www.tu-cottbus.de/cas",
    "icon":    "https://www.tu-cottbus.de/cas/favicon.ico"
  },
  {
    "name":    "HS RheinMain",
    "domains": "student[.]hs-rm[.]de",
    "url":     "https://webmail.student.hs-rm.de",
    "icon":    "https://www.hs-rm.de/typo3conf/ext/hsrm_template/resource/public/img/favicon.ico"
  },
  {
    "name":    "FH Erfurt",
    "domains": "fh-erfurt[.]de",
    "url":     "https://webmail.fh-erfurt.de",
    "icon":    "https://www.fh-erfurt.de/fhe/fileadmin/templates/favicon.ico"
  },
  {
    "name":    "PH Heidelberg",
    "domains": "ph-heidelberg[.]de",
    "url":     "https://lamp42.ph-heidelberg.de/horde",
    "icon":    "https://lamp42.ph-heidelberg.de/horde/themes/silver/graphics/favicon.ico"
  },
  {
    "name":    "HDM Stuttgart",
    "domains": "hdm-stuttgart[.]de",
    "url":     "https://mail.hdm-stuttgart.de",
    "icon":    "https://www.hdm-stuttgart.de/favicon.ico"
  },
  {
    "name":    "FH Brandenburg",
    "domains": "fh-brandenburg[.]de",
    "url":     "https://hermod1.fh-brandenburg.de/horde-webmail-1.2.11",
    "icon":    "https://fh-brandenburg.de/fileadmin/fhb/favicon_new.ico"
  },
  {
    "name":    "IGS Querum",
    "domains": "igsquerum[.]de",
    "url":     "https://igsquerum.de/idesk",
    "icon":    "http://igsquerum.org/favicon.ico"
  },
  {
    "name":    "HTWG Konstanz",
    "domains": "htwg-konstanz[.]de",
    "url":     "https://webmail.htwg-konstanz.de/SOGo",
    "icon":    "https://webmail.htwg-konstanz.de/favicon.ico"
  },
  {
    "name":    "HafenCity University",
    "domains": "hcu-hamburg[.]de",
    "url":     "https://webmail.hcu-hamburg.de/horde",
    "icon":    "https://webmail.hcu-hamburg.de/rzt/include/tuhh_icon.ico"
  },
  {
    "name":    "Gausschule Braunschweig",
    "domains": "gaussschule-bs[.]de",
    "url":     "https://webmail.hcu-hamburg.de/horde",
    "icon":    "http://www.gaussschule-bs.de/templates/beez_20/favicon.ico"
  },
  {
    "name":    "Gymnasium Am Fredenberg",
    "domains": "gymfred[.]de",
    "url":     "https://gymfred.de/idesk"
  },
  {
    "name":    "TU Kaiserslautern",
    "domains": "rhrk[.]uni-kl[.]de",
    "url":     "https://mail.uni-kl.de",
    "icon":    "https://www.uni-kl.de/fileadmin/wd2013/images/favicon.ico"
  },
  {
    "name":    "Gymnasium Carolinum",
    "domains": "caro-os[.]de",
    "url":     "http://www.caro-os.de/idesk",
    "icon":    "http://www.carolinumosnabrueck.de/caro_favicon.ico"
  },

  "===== Austria =====",
  {
    "name":    "A1 Webmail",
    "domains": "a1[.]net aon[.]at",
    "url":     "https://www.a1.net/mail",
    "icon":    "https://cdn1.a1.net/final/de/imgs/layout/piano.ico"
  },
  {
    "name":    "UPC Mail",
    "domains": "upc[.]at chello[.]at",
    "url":     "https://www.upc.at/upcmail/",
    "icon":    "https://www.upc.at/etc/designs/upc-generic/media/icons/favicon.ico"
  },
  {
    "name":    "LIWEST Webmail",
    "domains": "liwest[.]at 24speed[.]at",
    "url":     "https://webmail.24speed.at/",
    "icon":    "https://www.liwest.at/fileadmin/templates/2012/liwest/pix/favicon.ico"
  },
  {
    "name":    "UPC Business Webmail",
    "domains": "inode[.]at",
    "url":     "https://business.upc.at/webmail/",
    "icon":    "https://business.upc.at/favicon.ico"
  },
  {
    "name":    "sms.at",
    "domains": "sms[.]at",
    "url":     "http://www.sms.at/messagebox/postfach/",
    "icon":    "https://i.sms.at/favorites.ico"
  },
  {
    "name":    "drei.at",
    "domains": "drei[.]at",
    "url":     "https://www.drei.at/selfcare/restricted/openWebmail.do",
    "icon":    "https://www.drei.at/favicon.ico"
  },
  {
    "name":    "Tele2 Webmail",
    "domains": "tele2[.]at utanet[.]at",
    "url":     "https://webmail.tele2.at/",
    "icon":    "https://www.tele2.de/favicon.ico"
  },
  {
    "name":    "kabelplus Webmail",
    "domains": "kabelplus[.]at kabsi[.]at kabelsignal[.]at wavenet[.]at",
    "url":     "https://webmail.kabelplus.at/horde/imp/",
    "icon":    "https://www.kabelplus.at/favicon.ico"
  },
  {
    "name":    "kabelplus Webmail",
    "domains": "bnet[.]at",
    "url":     "https://webmail.bnet.at/",
    "icon":    "https://www.kabelplus.at/favicon.ico"
  },

  "===== Austrian Universities =====",
  {
    "name":    "Uni Innsbruck",
    "domains": "student[.]uibk[.]ac[.]at",
    "url":     "https://web-mail.uibk.ac.at",
    "icon":    "https://www2.uibk.ac.at/images/10/favicon.png"
  },
  {
    "name":    "Uni Wien",
    "domains": "univie[.]ac[.]at",
    "url":     "http://webmail.univie.ac.at/",
    "icon":    "https://www.univie.ac.at/favicon.ico"
  },
  {
    "name":    "FH Wien",
    "domains": "edu[.]fh-wien[.]ac[.]at",
    "url":     "https://webmail.fh-wien.ac.at/",
    "icon":    "http://en.fh-wien.ac.at/fileadmin/favicon.ico"
  },
  {
    "name":    "FH des BFI Wien",
    "domains": "fh-vie[.]ac[.]at",
    "url":     "http://mail.office365.com/",
    "icon":    "http://www.fh-vie.ac.at/design/em_plain_site/images/favicon.ico"
  },
  {
    "name":    "Uni Graz",
    "domains": "edu[.]uni-graz[.]at",
    "url":     "https://sbox.edu.uni-graz.at/",
    "icon":    "https://it.uni-graz.at/favicon.ico"
  },
  {
    "name":    "FH Wiener Neustadt",
    "domains": "fhwn[.]ac[.]at",
    "url":     "https://mail.fhwn.ac.at",
    "icon":    "http://www.fhwn.ac.at/Frontend/img/favicon.ico"
  },
  {
    "name":    "HLW Mistelbach",
    "domains": "hlwmistelbach[.]ac[.]at",
    "url":     "https://mail.hlwmistelbach.ac.at/",
    "icon":    "http://www.hlwmistelbach.ac.at/templates/bakiphlwfwmistelbach/favicon.ico"
  },
  {
    "name":    "FH OÖ",
    "domains": "students[.]fh-linz[.]at",
    "url":     "http://webmail.fh-linz.at/",
    "icon":    "http://www.fh-ooe.at/favicon.ico"
  },
  {
    "name":    "Uni Salzburg",
    "domains": "stud[.]sbg[.]ac[.]at",
    "url":     "https://sso.sbg.ac.at",
    "icon":    "https://sbg.ac.at/images_2004/favicon.ico"
  },

  "===== Switzerland =====",
  {
    "name":    "Swisscom Webmail",
    "domains": "bluewin[.]ch bluemail[.]ch",
    "url":     "http://www.bluewin.ch/de/email/",
    "icon":    "https://www.res1ep.scsstatic.ch/etc/designs/bluewin/resources/global/img/favicon.ico"
  },
  {
    "name":    "hispeed Webmail",
    "domains": "hispeed[.]ch swissonline[.]ch",
    "url":     "http://www.upc-cablecom.ch/de/support/tools/hispeed/",
    "icon":    "https://www.upc-cablecom.ch/etc/designs/upc-generic/media/icons/favicon.ico"
  },
  {
    "name":    "Sunrise mail",
    "domains": "sunrise[.]ch freesurf[.]ch",
    "url":     "https://mip.sunrise.ch/mip/dyn/login/login",
    "icon":    "https://mip.sunrise.ch/mip/ext/img/favicon.ico"
  },
  {
    "name":    "Raiffeisen Online",
    "domains": "rolmail[.]net",
    "url":     "https://web.rolmail.net/",
    "icon":    "https://rob.raiffeisen.it/favicon.ico"
  },

  "===== Swiss Universities =====",
  {
    "name":    "FHNW",
    "domains": "students[.]fhnw[.]ch",
    "url":     "https://webmail.students.fhnw.ch",
    "icon":    "https://webmail.students.fhnw.ch/CookieAuth.dll?GetPic?formdir=1&image=favicon.ico"
  },
  {
    "name":    "Uni Bern",
    "domains": "students[.]unibe[.]ch",
    "url":     "https://mail.campus.unibe.ch",
    "icon":    "http://www.unibe.ch/favicon.ico"
  },
  {
    "name":    "Uni Freiburg",
    "domains": "unifr[.]ch",
    "url":     "https://mail.unifr.ch",
    "icon":    "https://webaccess.unifr.ch/Images/UniFr-favicon.ico"
  },

  "===== US =====",
  {
    "name":    "AT&T Webmail",
    "domains": "att[.](com|net) sbcglobal[.]net bellsouth[.]net",
    "url":     "https://att.yahoo.com/mail",
    "icon":    "https://s.yimg.com/sf/l/1.0.0/i/favicon.ico"
  },
  {
    "name":    "Comcast.net",
    "domains": "comcast[.]net",
    "url":     "https://login.comcast.net",
    "icon":    "https://login.comcast.net/static/images/global/favicon.ico"
  },
  {
    "name":    "Verizon Webmail",
    "domains": "verizon[.](net|com)",
    "url":     "https://webmail.verizon.com",
    "icon":    "https://webmail.verizon.com/favicon.ico"
  },
  {
    "name":    "EarthLink Webmail",
    "domains": "earthlink[.]net mindspring[.]com",
    "url":     "https://webmail.earthlink.net",
    "icon":    "https://webmail.earthlink.net/wam/brand/earthlink/favicon.ico"
  },
  {
    "name":    "Cox WebMail",
    "domains": "cox[.]net",
    "url":     "https://webmail.cox.net",
    "icon":    "https://images.cox.net/presentation/emergence/corp/favicon.ico"
  },
  {
    "name":    "TWC Webmail",
    "domains": "twc[.]com roadrunner[.]com [a-z]+[.]rr[.]com",
    "url":     "https://webmail.twc.com/",
    "icon":    "https://www.twcc.com/etc/designs/twccentral/favicon.ico"
  },
  {
    "name":    "Optimum Webmail",
    "domains": "optimum[.]net",
    "url":     "https://webmail.optimum.net/",
    "icon":    "https://www.optimum.net/favicon.ico"
  },
  {
    "name":    "Virgin Media",
    "domains": "ntlworld[.]com",
    "url":     "https://my.virginmedia.com/my-apps/email/mailbox",
    "icon":    "https://www.virginmedia.com/favicon.ico"
  },
  {
    "name":    "Lycos Mail",
    "domains": "lycos[.]com",
    "url":     "http://www.mail.lycos.com/",
    "icon":    "https://ly.lygo.com/ly/lycos/2/images/favicon.ico"
  },
  {
    "name":    "rediffmail",
    "domains": "rediffmail[.]com",
    "url":     "http://mail.rediff.com/cgi-bin/login.cgi",
    "icon":    "https://mail.rediff.com/favicon.ico"
  },

  "===== UK =====",
  {
    "name":    "BT Mail",
    "domains": "btinternet[.]com",
    "url":     "https://signin1.bt.com/login/emailloginform",
    "icon":    "https://img01.bt.co.uk/s/assets/020714/images/favicon.ico"
  },
  {
    "name":    "TalkTalk Webmail",
    "domains": "tiscali[.]co[.]uk",
    "url":     "http://www.talktalk.co.uk/mail/",
    "icon":    "https://www.talktalk.co.uk/favicon.ico"
  },

  "===== France =====",
  {
    "name":    "Orange Webmail",
    "domains": "orange[.]fr wanadoo[.]fr",
    "url":     "http://webmail.orange.fr/",
    "icon":    "https://id.orange.fr/favicon.ico"
  },
  {
    "name":    "Free.fr Webmail",
    "domains": "free[.]fr",
    "url":     "http://imp.free.fr/",
    "icon":    "http://www.free.fr/favicon.ico"
  },
  {
    "name":    "La Poste Webmail",
    "domains": "laposte[.]fr laposte[.]net",
    "url":     "http://www.laposte.fr/particulier/webmail",
    "icon":    "https://www.laposte.net/img/favicon.png"
  },

  "===== Belgium =====",
  {
    "name":    "Telia Webmail",
    "domains": "telia[.]com",
    "url":     "https://webmail.telia.com",
    "icon":    "https://webmail.telia.com/cp/images/webmail.WEB.2.0/en/main/bee-favicon.ico"
  },
  {
    "name":    "Skynet Webmail",
    "domains": "skynet[.]be",
    "url":     "https://webmail.skynet.be/",
    "icon":    "https://common.staticskynet.be/v_23908de/images/favicon.ico"
  },

  "===== Netherlands =====",
  {
    "name":    "XS4ALL Webmail",
    "domains": "xs4all[.]nl",
    "url":     "https://webmail.xs4all.nl",
    "icon":    "https://webmail.xs4all.nl/images/favicon.ico"
  },
  {
    "name":    "KPN Webmail",
    "domains": "kpnmail[.]nl planet[.]nl",
    "url":     "https://webmail.kpnmail.nl/mail/logon.asp",
    "icon":    "https://webmail.kpnmail.nl/loginpages/images/kpnmail/favicon.ico"
  },
  {
    "name":    "Netmail",
    "domains": "hetnet[.]nl",
    "url":     "https://webmail.hetnet.nl/mail/logon.asp",
    "icon":    "https://webmail.kpnmail.nl/loginpages/images/kpnmail/favicon.ico"
  },

  "===== Netherlands Universities =====",
  {
    "name":    "Maastricht University",
    "domains": "student[.]maastrichtuniversity[.]nl",
    "url":     "https://webmail.maastrichtuniversity.nl",
    "icon":    "http://www.maastrichtuniversity.nl/favicon.ico"
  },
  {
    "name":    "Fontys",
    "domains": "fontys[.]nl",
    "url":     "https://webmail.fontys.nl/",
    "icon":    "https://fontys.nl/static/fontyspresentation/favicon.ico"
  },
  {
    "name":    "Stenden",
    "domains": "student[.]stenden[.]com",
    "url":     "http://livemail.student.stenden.com",
    "icon":    "http://www.stenden.com/_layouts/Stenden/images/favicon.ico"
  },

  "===== Spain =====",
  {
    "name":    "Correo Orange",
    "domains": "orangemail[.]es wanadoo[.]es ya[.]com mixmail[.]com eresmas[.]com",
    "url":     "http://correo.orange.es/",
    "icon":    "http://www.orange.es/favicon.ico"
  },
  {
    "name":    "Terra Mail",
    "domains": "terra[.](es|com|com[.]pe|com[.]ve)",
    "url":     "http://correo.terra.com/",
    "icon":    "https://s1.trrsf.com.br/favicon.ico"
  },
  {
    "name":    "Movistar",
    "domains": "movistar[.]es telefonica[.]net",
    "url":     "https://correo.movistar.es",
    "icon":    "https://www.movistar.es/estaticos/favicon.ico"
  },
  {
    "name":    "Correo ONO",
    "domains": "ono[.]com",
    "url":     "http://www.ono.com/correoONO/",
    "icon":    "https://www.ono.es/ono-resources/img/favicon.png"
  },

  "===== Italy =====",
  {
    "name":    "Libero",
    "domains": "libero[.]it",
    "url":     "https://login.libero.it",
    "icon":    "http://img1.iol.it/s/2013/i/hf/favicon.ico"
  },
  {
    "name":    "Tiscali Mail",
    "domains": "tiscali[.]it",
    "url":     "https://mail.tiscali.it/",
    "icon":    "https://mail.tiscali.it/skins/wm_mc_tiscali_it/images/favicon.ico"
  },
  {
    "name":    "Virgilio Mail",
    "domains": "virgilio[.]it",
    "url":     "http://mail.virgilio.it/login/",
    "icon":    "http://www.virgilio.it/favicon.png"
  },
  {
    "name":    "Alice Mail",
    "domains": "alice[.]it tin[.]it tim[.]it",
    "url":     "https://mail.alice.it/",
    "icon":    "https://mail.alice.it/favicon.ico"
  },
  {
    "name":    "FASTMail",
    "domains": "fastwebnet[.]it",
    "url":     "http://www.fastweb.it/servizi/fastmail/",
    "icon":    "http://www.fastweb.it/favicon.ico"
  },
  {
    "name":    "Email.it",
    "domains": "email[.]it",
    "url":     "http://www.email.it/mail.php",
    "icon":    "https://www.email.it/favicon.ico"
  },
  {
    "name":    "PEC",
    "domains": "pec[.]it",
    "url":     "https://legalwm.email.it/webmail/Login",
    "icon":    "https://www.pec.it/favicon.ico"
  },
  {
    "name":    "Katamail",
    "domains": "katamail[.](it|com)",
    "url":     "http://www.katamail.kataweb.it/",
    "icon":    "http://www.kataweb.it/favicon.ico"
  },

  "===== Russia =====",
  {
    "name":    "Mail.Ru",
    "domains": "mail[.]ru inbox[.]ru bk[.]ru list[.]ru",
    "url":     "http://mail.ru/",
    "icon":    "https://img.mail.ru/r/favicon.ico"
  },
  {
    "name":    "Яндекс",
    "domains": "yandex[.](ru|ua|com)",
    "url":     "https://mail.yandex.ru/",
    "icon":    "https://yastatic.net/morda-logo/i/favicon_islands.ico"
  },
  {
    "name":    "Рамблер-Почта",
    "domains": "rambler[.]ru",
    "url":     "https://mail.rambler.ru/",
    "icon":    "https://mail.rambler.su/000148/i/icons/favicon.ico"
  },
  {
    "name":    "bigmir)net",
    "domains": "bigmir[.]net",
    "url":     "http://mail.bigmir.net/",
    "icon":    "http://bm.img.com.ua/a/hp5/img/favicon.ico"
  },

  "===== Poland =====",
  {
    "name":    "Wirtualna Polska",
    "domains": "wp[.]pl",
    "url":     "http://profil.wp.pl/",
    "icon":    "http://www.wp.pl/i/ivar/layout/201201/favicon.ico"
  },
  {
    "name":    "Poczta o2",
    "domains": "o2[.]pl tlen[.]pl",
    "url":     "http://poczta.o2.pl/",
    "icon":    "https://poczta.o2.pl/favicon.ico"
  },
  {
    "name":    "INTERIA.PL",
    "domains": "interia[.](pl|eu) poczta[.]fm",
    "url":     "https://poczta.interia.pl/",
    "icon":    "https://poczta.interia.pl/favmix.ico"
  },
  {
    "name":    "Gazeta.pl",
    "domains": "gazeta[.]pl",
    "url":     "http://poczta.gazeta.pl/",
    "icon":    "http://www.gazeta.pl/favicon.ico"
  },
  {
    "name":    "Onet Poczta",
    "domains": "onet[.](pl|eu) poczta[.]onet[.]pl op[.]pl vp[.]pl",
    "url":     "https://poczta.onet.pl/",
    "icon":    "https://konto.onet.pl/favicon.ico"
  },

  "===== Czech Republic =====",
  {
    "name":    "Seznam E-mail",
    "domains": "seznam[.]cz email[.]cz",
    "url":     "https://email.seznam.cz",
    "icon":    "https://login.szn.cz/img/favicon.ico"
  },
  {
    "name":    "Tiscali E-mail",
    "domains": "tiscali[.]cz",
    "url":     "http://email.tiscali.cz",
    "icon":    "http://hp.timg.cz/favicon.ico"
  },

  "===== Bulgaria =====",
  {
    "name":    "АБВ Поща",
    "domains": "abv[.]bg",
    "url":     "http://www.abv.bg/",
    "icon":    "https://img.abv.bg/favicon.ico"
  },
  {
    "name":    "mail.bg",
    "domains": "mail[.]bg",
    "url":     "http://mail.bg",
    "icon":    "https://mail.bg/favicon.ico"
  },

  "===== Hungary =====",
  {
    "name":    "[freemail]",
    "domains": "freemail[.]hu",
    "url":     "http://freemail.hu/mail/login.fm",
    "icon":    "http://freemail.hu/favicon.ico"
  },
  {
    "name":    "UPC Webmail",
    "domains": "chello[.]hu",
    "url":     "http://www.upc.hu/webmail/",
    "icon":    "https://www.upc.hu/favicon.ico"
  },
  {
    "name":    "CitroMail.hu",
    "domains": "citromail[.]hu",
    "url":     "http://www.citromail.hu/",
    "icon":    "https://www.citromail.hu/favicon.ico"
  },

  "===== Turkey =====",
  {
    "name":    "Mynet Üyelik",
    "domains": "mynet[.]com",
    "url":     "http://uyeler.mynet.com/",
    "icon":    "https://uyeler.mynet.com/favicon.ico"
  },
  {
    "name":    "Superonline Eposta",
    "domains": "superonline[.]com ttnet[.]net[.]tr alanadi[.]com[.]tr",
    "url":     "https://kurumsalposta.superonline.com",
    "icon":    "http://www.superonline.net/favicon.png"
  },

  "===== Latin America =====",
  {
    "name":    "LatinMail",
    "domains": "latinmail[.]com",
    "url":     "http://www.latinmail.com/",
    "icon":    "http://www.latinmail.com/favicon.ico"
  },

  "===== Argentina =====",
  {
    "name":    "FibertelMail",
    "domains": "fibertel[.]com[.]ar",
    "url":     "http://wm2.fibertel.com.ar/",
    "icon":    "http://wm2.fibertel.com.ar/favicon.ico"
  },
  {
    "name":    "Ciudad.com",
    "domains": "ciudad[.]com[.]ar",
    "url":     "http://webmail.ciudad.com.ar/",
    "icon":    "http://static.ciudad.com.ar/sites/all/themes/urbem/favicon.ico"
  },
  {
    "name":    "Webmail Arnet",
    "domains": "arnet[.]com[.]ar",
    "url":     "https://webmail.arnet.com.ar/",
    "icon":    "https://webmail.arnet.com.ar/skins/default/images/favicon.ico"
  },

  "===== Uruguay =====",
  {
    "name":    "Adinet Correo",
    "domains": "adinet[.]com[.]uy",
    "url":     "http://correo.adinet.com.uy",
    "icon":    "https://login.vera.com.uy/login/images/lookandfeel/favicon.ico"
  },

  "===== Korea =====",
  {
    "name":    "Daum 메일",
    "domains": "daum[.]net",
    "url":     "http://mail.daum.net/",
    "icon":    "https://i1.daumcdn.net/mimg/favicon/mail_favicon3.ICO"
  },
  {
    "name":    "Naver",
    "domains": "naver[.]com",
    "url":     "http://mail.naver.com/",
    "icon":    "http://www.naver.com/favicon.ico"
  },

  "===== China =====",
  {
    "name":    "QQMail",
    "domains": "qq[.]com",
    "url":     "https://mail.qq.com",
    "icon":    "https://mail.qq.com/favicon.ico"
  },
  {
    "name":    "网易免费邮",
    "domains": "163[.]com 126[.]com yeah[.]net vip[.]163[.]com",
    "url":     "http://email.163.com/",
    "icon":    "http://email.163.com/favicon.ico"
  },
  {
    "name":    "新浪邮箱",
    "domains": "sina[.](com[.]cn|com) vip[.]sina[.]com",
    "url":     "http://mail.sina.com.cn/",
    "icon":    "https://mail.sina.com.cn/favicon.ico"
  },
  {
    "name":    "263企业邮箱",
    "domains": "263[.]net",
    "url":     "http://www.263.net/",
    "icon":    "http://www.263.net/r/cms/www/263/resources/img/favicon.ico"
  },
  {
    "name":    "搜狐闪电邮箱",
    "domains": "sohu[.]com",
    "url":     "http://mail.sohu.com/",
    "icon":    "https://mail.sohu.com/favicon.ico"
  },
  {
    "name":    "TOM邮箱登录",
    "domains": "tom[.]com",
    "url":     "http://mail.tom.com",
    "icon":    "http://web.mail.tom.com/webmail-static/images/favicon.ico"
  },
  {
    "name":    "登录21CN邮箱",
    "domains": "21cn[.]com",
    "url":     "http://mail.21cn.com/",
    "icon":    "http://www.21cn.com/other/css/2012/index/bgimg/21cn-favicon.ico"
  },
  {
    "name":    "Eyou个人邮件系统",
    "domains": "eyou[.]com",
    "url":     "http://eyou.com/"
  },

  "===== Lativa =====",
  {
    "name":    "Inbox",
    "domains": "inbox[.]lv",
    "url":     "http://www.inbox.lv",
    "icon":    "https://www.inbox.lv/assets/com/img/icons/mail/favicon.ico"
  },

  "===== Ukraine =====",
  {
    "name":    "UKR",
    "domains": "ukr[.]net",
    "url":     "https://www.ukr.net",
    "icon":    "https://upst.fwdcdn.com/favicon-v3.ico"
  },

  "===== Slovakia =====",
  {
    "name":    "Centrum.sk",
    "domains": "centrum[.]sk",
    "url":     "http://user.centrum.sk",
    "icon":    "http://img.centrum.sk/7/hp/img/skins005/spring/favicon.ico"
  },
  {
    "name":    "Azet",
    "domains": "azet[.]sk",
    "url":     "http://www.azet.sk",
    "icon":    "http://www.azet.sk/favicon.ico"
  }
]});