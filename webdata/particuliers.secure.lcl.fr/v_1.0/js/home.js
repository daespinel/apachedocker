var count = 0, menuObj = new Array(), timer; var flashvars = {}, params = { wmode: "transparent" }, attributes = {};
//Nouveau test browser

var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
		{
		    string: navigator.userAgent,
		    subString: "Chrome",
		    identity: "Chrome"
		},
		{ string: navigator.userAgent,
		    subString: "OmniWeb",
		    versionSearch: "OmniWeb/",
		    identity: "OmniWeb"
		},
		{
		    string: navigator.vendor,
		    subString: "Apple",
		    identity: "Safari",
		    versionSearch: "Version"
		},
		{
		    prop: window.opera,
		    identity: "Opera",
		    versionSearch: "Version"
		},
		{
		    string: navigator.vendor,
		    subString: "iCab",
		    identity: "iCab"
		},
		{
		    string: navigator.vendor,
		    subString: "KDE",
		    identity: "Konqueror"
		},
		{
		    string: navigator.userAgent,
		    subString: "Firefox",
		    identity: "Firefox"
		},
		{
		    string: navigator.vendor,
		    subString: "Camino",
		    identity: "Camino"
		},
		{		// for newer Netscapes (6+)
		    string: navigator.userAgent,
		    subString: "Netscape",
		    identity: "Netscape"
		},
		{
		    string: navigator.userAgent,
		    subString: "MSIE",
		    identity: "Explorer",
		    versionSearch: "MSIE"
		},
		{
		    string: navigator.userAgent,
		    subString: "Gecko",
		    identity: "Mozilla",
		    versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
		    string: navigator.userAgent,
		    subString: "Mozilla",
		    identity: "Netscape",
		    versionSearch: "Mozilla"
		}
	],
    dataOS: [
		{
		    string: navigator.platform,
		    subString: "Win",
		    identity: "Windows"
		},
		{
		    string: navigator.platform,
		    subString: "Mac",
		    identity: "Mac"
		},
		{
		    string: navigator.userAgent,
		    subString: "iPhone",
		    identity: "iPhone/iPod"
		},
        {
		    string: navigator.userAgent,
		    subString: "iPad",
		    identity: "iPhone/iPod"
		},

		{
		    string: navigator.platform,
		    subString: "Linux",
		    identity: "Linux"
		}
	]

};
BrowserDetect.init();
//*******Focus Header
function isOldIE() {
    var iec = new IECompatibility();
    //return navigator.appVersion.indexOf('MSIE 6') > 0;
    if (BrowserDetect.browser=="Explorer" & BrowserDetect.version<=7 & iec.Version != "IE9" & iec.Version != "IE10" & iec.Version != "IE11" & iec.IsOn != "IE7")
        return true;
    else return false;
}
function isIE7() {

    if (BrowserDetect.browser == "Explorer" & BrowserDetect.version == 7)
        return true;
    else return false;
}
function isMobile() {
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {        
       return true;
        }
        if ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/IEMobile/i))) {
            return true;
        }
    return false;
}

function testFocus(focusId) {
    try {
        if (isOldIE()) {
            var idActive = document.activeElement.id;

            if (idActive.substring(5, 0) == 'flash') {
                document.getElementById(focusId).focus();
            } 
        } 
    }
    catch (err)
{ }
}
//*****Fin Focus Header
  function IECompatibility() {
    var agentStr = navigator.userAgent;
    this.IsIE = false;
    this.IsOn = undefined;  //defined only if IE
    this.Version = undefined;

    if (agentStr.indexOf("MSIE 7.0") > -1) {
      this.IsIE = true;
      this.IsOn = true;
	  if (agentStr.indexOf("Trident/7.0") > -1) {
        this.Version = 'IE11';
      } else if (agentStr.indexOf("Trident/6.0") > -1) {
        this.Version = 'IE10';
      } else if (agentStr.indexOf("Trident/5.0") > -1) {
        this.Version = 'IE9';
      //} else if (agentStr.indexOf("Trident/4.0") > -1) {
      //  this.Version = 'IE8';
      } else {
        this.IsOn = false; // compatability mimics 7, thus not on
        this.Version = 'IE7';
      }
    } //IE 7
  }