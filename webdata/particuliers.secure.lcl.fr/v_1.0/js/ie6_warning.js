

     function getBrowserWindowSize() {
         //see http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
         var myWidth = 0, myHeight = 0;
         if (typeof (window.innerWidth) == 'number') {
             //Non-IE
             myWidth = window.innerWidth;
             myHeight = window.innerHeight;
         }
         else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
             //IE 6+ in 'standards compliant mode'
             myWidth = document.documentElement.clientWidth;
             myHeight = document.documentElement.clientHeight;
         }
         else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
             //IE 4 compatible
             myWidth = document.body.clientWidth;
             myHeight = document.body.clientHeight;
         }
         return [myWidth, myHeight];
     }

     function getScrollXY() {
         //see http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
         var scrOfX = 0, scrOfY = 0;
         if (typeof (window.pageYOffset) == 'number') {
             //Netscape compliant
             scrOfY = window.pageYOffset;
             scrOfX = window.pageXOffset;
         } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
             //DOM compliant
             scrOfY = document.body.scrollTop;
             scrOfX = document.body.scrollLeft;
         } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
             //IE6 standards compliant mode
             scrOfY = document.documentElement.scrollTop;
             scrOfX = document.documentElement.scrollLeft;
         }
         return [scrOfX, scrOfY];
     }

     function popIEwarning(vid) {
         // see http://www.hunlock.com/blogs/Everything_You_Ever_Needed_To_Know_About_Video_Embedding

         var background = document.getElementById('tmp_bgdiv');
         background.style.display = 'none';
         var iewarning = document.getElementById('ie6_warning');
         if (iewarning)
             iewarning.style.display = 'none';
         

         if (vid != 'close')	//if not 'close', then show popup
         {
             popup = document.getElementById(vid);
             if (1)	// always show background with full page size
             {
                 if (window.innerHeight && window.scrollMaxY)  // ( typeof( window.pageYOffset ) == 'number' ) && window.scrollMaxY
                 {
                     var pageWidth = window.innerWidth + window.scrollMaxX;
                     var pageHeight = window.innerHeight + window.scrollMaxY;
                 } else if (document.body.scrollHeight > document.body.offsetHeight) {
                     var pageWidth = document.body.scrollWidth;
                     var pageHeight = document.body.scrollHeight;
                 } else {
                     var pageWidth = document.body.offsetWidth + document.body.offsetLeft;
                     var pageHeight = document.body.offsetHeight + document.body.offsetTop;
                 }
                 //set the shader to cover the entire page and make it visible. 
                 background.style.width = pageWidth + 'px';
                 background.style.height = pageHeight + 'px';
                 background.style.display = 'block';
             }

             popup.style.display = 'block'; 	//show popup

             //set the starting x and y position of the popup
             var WidhtHeight = getBrowserWindowSize();
             //	alert('WindowHeight = ' + WidhtHeight[1]);
             var scrollOfXY = getScrollXY();
             //	alert('ScrollY = ' + scrollOfXY[1]);
             popup.style.left = scrollOfXY[0] + Math.floor((WidhtHeight[0] / 2) - (popup.offsetWidth / 2)) + 'px';
             popup.style.top = scrollOfXY[1] + Math.floor((WidhtHeight[1] / 2) - (popup.offsetHeight / 2)) + 'px';
         }
         return false;
     }

     function shuffle(a) {
         var j = 0;
         var valI = '';
         var valJ = valI;
         var l = a.length - 1;
         while (l > -1) {
             j = Math.floor(Math.random() * l);
             valI = a[l];
             valJ = a[j];
             a[l] = valJ;
             a[j] = valI;
             l = l - 1;
         }
         return a;
     }

     function loadIE6warning() {

         // load CSS
         var css_link = document.createElement('link');
         css_link.href = "Ressources/Stylesheet/ie6_warning.css";
         css_link.rel = "stylesheet";
         css_link.type = "text/css";
         document.getElementsByTagName("head")[0].appendChild(css_link);

         //
         var browser_array = new Array();
         browser_array.push('<div class="ie6w_item"><img src="../v_1.0/img/ie6_warning/logo_safari.png" /><div class="ie6w_link1"><a href="http://www.apple.com/fr/safari/" target="_blank">Installer</a></div><div class="ie6w_link2"><a href="http://www.apple.com/fr/safari/what-is.html" target="_blank">En savoir plus</a></div></div>'); // safari
         browser_array.push('<div class="ie6w_item"><img src="../v_1.0/img/ie6_warning/logo_firefox.png" /><div class="ie6w_link1"><a href="http://download-eu.mozilla.org/" target="_blank">Installer</a></div><div class="ie6w_link2"><a href="http://browserchoice.mozilla.com/lang/fr" target="_blank">En savoir plus</a></div></div>'); // firefox
         browser_array.push('<div class="ie6w_item"><img src="../v_1.0/img/ie6_warning/logo_chrome.png" /><div class="ie6w_link1"><a href="http://www.google.com/chrome/intl/fr/browserchoice/eula1.html" target="_blank">Installer</a></div><div class="ie6w_link2"><a href="http://www.google.com/chrome/intl/fr/browserchoice/index.html" target="_blank">En savoir plus</a></div></div>'); // chrome
         browser_array.push('<div class="ie6w_item"><img src="../v_1.0/img/ie6_warning/logo_ie.png" /><div class="ie6w_link1"><a href="http://windows.microsoft.com/fr-FR/internet-explorer/products/ie/home" target="_blank">Installer</a></div><div class="ie6w_link2"><a href="http://windows.microsoft.com/fr-FR/internet-explorer/products/ie/home" target="_blank">En savoir plus</a></div></div>'); // ie

         //
         browser_array = shuffle(browser_array);
		 if (BrowserDetect.browser=="Explorer" & BrowserDetect.version==7)
			texteMessage.innerHTML= texteMessage.innerHTML.replace("6","7");
			
         var ie6Warning = '<div id="ie6_warning"  style="Z-INDEX: 200000;"><div id="ie6w_close"  style="margin-left: -50px"> <a href="javascript:void(0)" onclick="return popIEwarning(&quot;close&quot;)" style="display:block; width:100%; height:100%;"><img src="../v_1.0/img/ie6_warning/close.gif" class="middle" border="0" alt="" title="" /></a> </div><div id="ie6w_title">Avertissement</div><div id="ie6w_content">' + texteMessage.innerHTML + '</div>';

         ie6Warning += browser_array.join("")
         ie6Warning += '</div>';


         // 'tmp_ie6div' should be <span> and not <div>, because if we set innerHTML='' in IE (only),  
         // it will be interpreted as the space, so we have one additional line
         // see http://weblogs.asp.net/kdente/archive/2007/06/29/empty-div-takes-up-space-after-setting-innerhtml-to-blank.aspx
         document.getElementById('tmp_ie6div').innerHTML = ie6Warning;
         popIEwarning('ie6_warning');
     }
