//***************************//
//		Polyfills	         //
//***************************//	

// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: https://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    var k;
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);
    var len = O.length >>> 0;

    if (len === 0) {
      return -1;
    }

    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }
	
    if (n >= len) {
      return -1;
    }

    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}

function m_stopPropagation(event) {
	if(!event) {
		event = window.event;		
	}
	
	if(!event) return;
	
	if(event.stopPropagation) {
		event.stopPropagation();
	}
	else {
		event.cancelBubble = true;
	}
}

function m_preventDefault(event) {
	if(!event) {
		event = window.event;
	}
	
	if(!event) return;
	
	if(event.preventDefault) {
		event.preventDefault();
	}
	else {
		event.returnValue = false;
	}
}
//Function Generic
function m_bindEvent(ele,eName,eHandler, preventDefault){
	var prvtDefaultHandler = function() {
		eHandler.apply(this, arguments);
		m_preventDefault(arguments[0]);
	},
	handler = eHandler;
	
	if(preventDefault) handler = prvtDefaultHandler;
	if (ele.addEventListener){
		ele.addEventListener(eName, handler, false); 
	} else if (ele.attachEvent){
		ele.attachEvent('on'+eName, function() { handler.apply(ele, arguments) });
	}
}

function m_convertion_tab(div,tab)
{
	if(tab.className==""){
		for(var i=1;i<=3;i++) document.getElementById('m_convertion_content'+i).style.display="";
		document.getElementById('m_convertion_content'+div).style.display="block";
		for(var i=1;i<=3;i++) document.getElementById('m_convertion_tab'+i).className="";
		document.getElementById(tab.id).className="m_convertion_tab_on";
	}
	else{
		var inputs=document.getElementById('m_convertion_content'+div).getElementsByTagName('input');
		for(var i=0;i<inputs.length;i++) inputs[i].value="";
	}
}

function bookmarksite(title, url) {
    if (document.all)
        window.external.AddFavorite(url, title);
    else if (window.sidebar)
        window.sidebar.addPanel(title, url, "")
}

 function getWindowHeight() {
    var h = 0;
    if (typeof(window.innerHeight) == 'number') { // Netscape
        h = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        h = document.documentElement.clientHeight;
    } else if (document.body && document.body.offsetHeight) { //client
        h = document.body.offsetHeight;
    }
    return h;
 }
	
 function getWindowWidth() {
	var w = 0;
	if (typeof(window.innerWidth) == 'number') { // Netscape
		w = window.innerWidth;
	} else if (document.documentElement && document.documentElement.clientWidth) {
		w = document.documentElement.clientWidth;
	} else if (document.body && document.body.offsetWidth) { //client
		w = document.body.offsetWidth;
	}
	return w;
}

function changePlaceholder(elem,text){
	try
	{
		var ele =  getElement(elem);
		if(ele.length != undefined){
			for(var i = 0; i < ele.length;i++){
				changePlaceholder(ele[i],text);
			}
			return true;
		}
		if( placeholderIsSupported()){
			ele.placeholder = "";
		}else{
			ele.onfocus = null;
			ele.onblur = null;
		}
		SetPlaceholder(elem,text);
	}
	catch(ex)
	{
		errlog(ex);
	}
}

function getElement(elem){
	try
	{
		var ele;
		if(typeof(elem) == "string"){
			if(elem.indexOf('.') == 0){
				var eleTab = "";
				if(document.getElementsByClassName == undefined){
					eleTab = document.querySelectorAll(elem);
				}else{
					eleTab = document.getElementsByClassName(elem.substring(1));
				}
				return eleTab;
			}else if(elem.indexOf('#') == 0){
				ele = document.getElementById(elem.substring(1));
			}else{
				ele = document.getElementById(elem);
			}
		}else{
			ele = elem;
		}	
		return ele;
	}
	catch(ex)
	{
		errlog(ex);
	}
}

function getElementsByClassName(className, context) {
	var elems = document.querySelectorAll ? context.querySelectorAll("." + className) : (function() {
		var all = context.getElementsByTagName("*"),
			elements = [],
			i = 0;
		for (; i < all.length; i++) {
			if (all[i].className && (" " + all[i].className + " ").indexOf(" " + className + " ") > -1 && elements.indexOf(all[i]) === -1) elements.push(all[i]);
		}
		return elements;
	})();
	return elems;
};


function SetPlaceholder(elem,text){
	try
	{
		var ele =  getElement(elem);
		if(ele.length != undefined){
			for(var i = 0; i < ele.length;i++){
				SetPlaceholder(ele[i],text);
			}
			return true;
		}
		if( placeholderIsSupported() && ele.placeholder == ""){
			ele.placeholder = text;
		}else if(ele.onfocus == null ||ele.onfocus == undefined || ele.attributes["onfocus"] == ""){
			ele.onfocus = function(){
				if (this.value == text) { this.value = ''; 
				removeClass(this,'m_input_placeholder');}
			}
			ele.onblur = function(){
				if (this.value == '') { this.value = text;AddClass(this,'m_input_placeholder'); }
			}
			if(ele.value == ""){
				ele.value = text;
				AddClass(ele,'m_input_placeholder');
			}
		}
	}
	catch(ex)
	{
		errlog(ex);
	}
}
function AddClass(ele,className){
	try
	{
		if(ele.className.indexOf(className) < 0){
			ele.className += " "+className;
		}
	}
	catch(ex)
	{
		errlog(ex);
	}
}

function removeClass(ele,className){
	try
	{
		var indexStart = ele.className.indexOf(className)
		if(indexStart >= 0){
			ele.className = ele.className.substring(0,indexStart)+ele.className.substring(indexStart+className.length);
		}
	}
	catch(ex){errlog(ex);}
}

function hasClass(ele, className)
{
	try
	{
		return (' ' + ele.className + ' ').indexOf(' ' + className + ' ') !== -1
	}
	catch(ex){
		errorlog(ex);
	}
		
	return false;
}

var _placeholderIsSupported = undefined;
function placeholderIsSupported() {
	try{
		var test = document.createElement('input');
		if(_placeholderIsSupported == undefined){
			_placeholderIsSupported = ('placeholder' in test);
		}
		return _placeholderIsSupported;
	}catch(ex){errlog(ex);}
}

function getTokenFromString(text) {
	text = $.trim(text);
	if (text == '')
		return text;

	var exp = /(?:^\s+|\s+$)/gi; 
	text = text.replace(exp, ''); // supprime les espaces, tabs, newlines aux extréminités
	exp = /\s+/gi; 
	text = text.replace(exp, ' '); // remplace les espaces, tabs, newlines par un espace simple
	text = removeDiacritics(text); // remplace les lettres accentuées par leurs équivalents simples
	exp = /[^a-z0-9]+/gi; 
	text = text.replace(exp, '-'); // remplace les caractères non alphanum par un tiret
	exp = /[\-]+/gi; 
	text = text.replace(exp, '-'); // remplace les suites de tirets par un tiret unique
	exp = /(?:^[\-]+|[-]+$)/gi; 
	text = text.replace(exp, ''); // supprime les tirets aux extrémités
	return text;
}


function removeDiacritics(s) {
	try
	{
		var r = s.toLowerCase();
		r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
		r = r.replace(new RegExp("æ", 'g'),"ae");
		r = r.replace(new RegExp("ç", 'g'),"c");
		r = r.replace(new RegExp("[èéêë]", 'g'),"e");
		r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
		r = r.replace(new RegExp("ñ", 'g'),"n");                            
		r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
		r = r.replace(new RegExp("œ", 'g'),"oe");
		r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
		r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
		return r;
	}
	catch(ex)
	{
		errlog(ex);
	}
};

function errlog(ex){
	if (typeof(console)!='undefined' && console.log){
		console.log("[errjs] "+ex.message+" : \r\n"+ex.stack);
	}
}
	
function openUrlWithPostData(page, data) {
        var data = JSON.parse(data);
        var form = document.createElement('form');
        form.setAttribute('action', page);
        form.setAttribute('method', 'post');
        for (var n in data) {
            var inputvar = document.createElement('input');
            inputvar.setAttribute('type', 'hidden');
            inputvar.setAttribute('name', n);
            inputvar.setAttribute('value', data[n]);
            form.appendChild(inputvar);
        }
        document.body.appendChild(form);
        form.submit();
    }
	
function addEvent(obj, event, fct) {
	if (obj.attachEvent) //Est-ce IE ?
		obj.attachEvent("on" + event, fct); //Ne pas oublier le "on"
	else
		obj.addEventListener(event, fct, true);
}

function createCookie(name,value,days) {
	try
	{
		var expires = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		document.cookie = name+"="+value+expires+"; path=/";
	}
	catch(ex)
	{
		errLog(ex);
	}
}

function readCookie(name) {
try
	{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	}
	catch(ex)
	{
		errLog(ex);
	}
	return null;
	
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

  function transitionEndEventName() {
        var i,
            undefined,
            el = document.createElement('div'),
            transitions = {
                'transition': 'transitionend',
                'OTransition': 'otransitionend',
                'MozTransition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
            };

        for (i in transitions) {
            if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
                return transitions[i];
            }
        }
    }

	 function popupOpen(url, name, width, height) {
        newwindow = window.open(url, name, 'height=' + height + ',width=' + width);
        if (window.focus) { newwindow.focus() }
        return false;
    }
//***************************//
//	Ajax Gene	     //
//***************************//	
function mAjax(method, url, params, async, callback, reloadCol, nameColRight,className,paramsCol, debug) {
	try {
		var xmlhttp;
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		}
		else {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (debug == true) {
				switch (xmlhttp.readyState) {
					case 0:
						console.log("request not initialized");
						break;
					case 1:
						console.log("server connection established");
						break;
					case 2:
						console.log("request received");
						break;
					case 3:
						console.log("processing request");
						break;
					case 4:
						console.log("request finished and response is ready, status : " + xmlhttp.status);
						break;
				}
			}
			if (xmlhttp.readyState == 4) {
				if (callback != undefined) {
					callback(xmlhttp);
				}
			}
		}
		if (method == "GET" && (params != undefined || params != null && params != "")) {
			if (url.indexOf('?') > 0) {
				if (url.indexOf('?', url.length - 1) !== -1) {
					url += "&" + params;
				} else {
					url += params;
				}
			} else {
				url += "?" + params;
			}
		}
		xmlhttp.open(method, url, async);

		if (reloadCol) {
			if (document.location.href.indexOf('localhost.marmiton.org') > 0)
				var url = "https://localhost.marmiton.org/www.marmiton.org/masters/colonnedroite/"+nameColRight+".aspx?cn="+className;
			else{
				var url = "https://www.marmiton.org/masters/colonnedroite/"+nameColRight+".aspx?cn="+className;
				}
			if (sas_target != undefined) {
				url += "&sas=" + sas_target;
				if (paramsCol != undefined && paramsCol != '') {
					if (params.indexOf('&') != 0) {
						url += "&";
					}

					url += paramsCol
				}
			}else{
				sas_target = "";
			}
			var colRight = document.getElementById("m_col_right");
			var frame = document.createElement("iframe");
			//frame.setAttribute("id", "frame_col_right");
			frame.setAttribute("frameBorder", "0");
			frame.setAttribute("src", url);
			frame.setAttribute("style", "height:0px;");
			frame.style.border = "none";
			colRight.appendChild(frame);
			var MediumPageBottom = document.getElementById("m_block_page_medium_bottom");
			if(MediumPageBottom != undefined){
				frame = document.createElement("iframe");
				frame.setAttribute("frameBorder", "0");
				if (document.location.href.indexOf('localhost.marmiton.org') > 0)
					frame.setAttribute("src", "https://localhost.marmiton.org/www.marmiton.org/masters/content/SmartAd_PageMediumBottom_Ajax.aspx?cn="+className+"&sas=" + sas_target);
				else
					frame.setAttribute("src", "https://www.marmiton.org/masters/content/SmartAd_PageMediumBottom_Ajax.aspx?cn="+className+"&sas=" + sas_target);	
				frame.setAttribute("style", "height:0px;width:100%;");
				frame.style.border = "none";
				MediumPageBottom.appendChild(frame);
			}
		}

		if (method == "POST") {
			xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xmlhttp.send(params);
		} else {
			xmlhttp.send();
		}
	}
	catch (ex) {
		errlog(ex);
		callback(null);
	}
}

function changeMetaFB(property, value) {
	try {
		var metas = document.getElementsByTagName("meta");
		for (var i = 0; i < metas.length; i++) {
			if (metas[i].attributes["property"] != undefined) {
				if (metas[i].attributes["property"].value == "og:" + property) {
					metas[i].attributes["content"].value = value;
				}
			}
		}
	}catch(ex){errlog(ex);}
}

function cutText(text, maxLength, separateChar) {
	var trimmedString = text.substr(0, maxLength);
	trimmedString = trimmedString.substr(0, trimmedString.lastIndexOf(separateChar) < 0 ? trimmedString.length : (trimmedString.length < maxLength ? maxLength : trimmedString.lastIndexOf(separateChar)))
	if (trimmedString.length != text.length)
		trimmedString += "...";
	return trimmedString;
}


function isValidURL(url){
	var exp = /^http(?:s|):\/\/(?:[\w-]+\.)+[\w-]+(\/[\w- .\/?%&=\[\]\+]*)?(?:#.+|)$/i;
	if(exp.test(url)){
		return true;
	}else{
		return false;
	}
}

//***************************//
//	     Tracker  	         //
//***************************//	
 function recordInternalLinkGANoBounce(category, action, link) {
	try {
		pageTracker._trackEvent(category, action, link, undefined, true);
	}catch(ex){errlog(ex);}
}

//***************************//
//	     Background  	     //
//***************************//	

var m_Bg = {
            displayed: false,
            init: function () {
                var background = document.getElementById('m_bg');
                if (background == undefined || background == null) {
                    background = document.createElement('div');
                    background.id = "m_bg";
                    background.className = "m_bg";
                    background.style.display = "none";
                    document.body.appendChild(background);
                    m_bindEvent(window,'resize', m_Bg.resize);
                }
            },
            clic: function (action) {
                var background = document.getElementById('m_bg');
                if (background == undefined || background == null) {
                    m_Bg.init();
                    background = document.getElementById('m_bg');
                }
                background.onclick = function () {
                    action();
                }
            },
            open: function () {
                if (!m_Bg.displayed) {
                    var background = document.getElementById('m_bg');
                    if (background == undefined || background == null) {
                        m_Bg.init();
                        background = document.getElementById('m_bg');
                    }
                    m_Bg.resize();
                    background.style.display = "block";
                    m_Bg.displayed = true;
                }
            },
            close: function () {
                var background = document.getElementById('m_bg');
                background.style.display = "none";
                m_Bg.displayed = false;
            },
            resize: function () {
                var background = document.getElementById('m_bg');
                background.style.height = m_Window.docHeight() + "px";
            }
        }
	
//***************************//
//	   Windows	     //
//***************************//	

var m_Window = {
            dh: 0,
            dw: 0,
            st: 0,
            sh: 0,
            sw: 0,
            docHeight: function () {
                if (m_Window.dh == 0 && m_Window.dw == 0 && m_Window.st == 0) {
                    m_Window.init();
                }
                return m_Window.dh;
            },
            docWidth: function () {
                if (m_Window.dh == 0 && m_Window.dw == 0 && m_Window.st == 0) {
                    m_Window.init();
                }
                return m_Window.dw;
            },
            screenHeight: function () {
                if (m_Window.dh == 0 && m_Window.dw == 0 && m_Window.st == 0) {
                    m_Window.init();
                }
                return m_Window.sh;
            },
            screenWidth: function () {
                if (m_Window.dh == 0 && m_Window.dw == 0 && m_Window.st == 0) {
                    m_Window.init();
                }
                return m_Window.sw;
            },
            scrollTop: function () {
                if (m_Window.dh == 0 && m_Window.dw == 0 && m_Window.st == 0) {
                    m_Window.init();
                }
                return m_Window.st;
            },
            init: function () {
                m_Window.resize();
				m_bindEvent(window,'resize',m_Window.resize);
                m_bindEvent(window,'scroll',m_Window.resize);
            },
            resize: function () {
                m_Window.dh = document.body.scrollHeight;
                m_Window.dw = document.body.scrollWidth;
				m_Window.st = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
                m_Window.sw = window.innerWidth || document.documentElement.clientWidth ;
                m_Window.sh = window.innerHeight || document.documentElement.clientHeight;
            }
        }


//***************************//
//	   Bouncer	     //
//***************************//	

 var m_GBounce = {
            displayType: 1,
            displayed: false,
            init: function (data) {
                var bounce_popup = document.getElementById('m_see_also_bouncer');
                if (bounce_popup != undefined || bounce_popup == null)
                    bounce_popup = null;
                bounce_popup = document.createElement('div');
                bounce_popup.id = "m_see_also_bouncer";
                bounce_popup.className = "m_see_also_bouncer";
                bounce_popup.style.display = "none";

                var childNode;
                //Add btn close
                childNode = document.createElement('div');
                childNode.className = "m_see_also_bouncer_fermer";
                childNode.innerHTML = "X";
                childNode.onclick = function () { m_GBounce.close(); };
                bounce_popup.appendChild(childNode);
                //Add Title
                childNode = document.createElement('h2');
                childNode.innerHTML = "Ne ratez pas sur Marmiton";
                bounce_popup.appendChild(childNode);
                //Add container
                childNode = document.createElement('div');
                childNode.className = "m_bouncer";
                //Add data
                for (var i = 0; i < data.length; i++) {
                    var childNodeData = document.createElement('div');
                    childNodeData.className = "m_bouncer_contenu";
                    var innerHtmlNodeData = '<a href="#" onclick="recordInternalLinkGANoBounce(\'popup-bouncer\',\''+data[i].type+'\',\''+data[i].urlDest+'\');location.href = \''+data[i].urlDest+'\'"><img src="' + data[i].urlImg + '" width="228" height="140" alt="' + data[i].title + '"></a>';
                    innerHtmlNodeData += '<a href="#" onclick="recordInternalLinkGANoBounce(\'popup-bouncer\',\''+data[i].type+'\',\''+data[i].urlDest+'\');location.href = \''+data[i].urlDest+'\'" class="m_bouncer_link"><span>' + data[i].type + '</span><br>' + data[i].title + '</a>';
                    innerHtmlNodeData += '<a href="#" class="m_bouncer_decouvrir" onclick="recordInternalLinkGANoBounce(\'popup-bouncer\',\''+data[i].type+'\',\''+data[i].urlDest+'\');location.href = \''+data[i].urlDest+'\'">D&eacute;couvrir</a>';
                    childNodeData.innerHTML = innerHtmlNodeData;
                    childNode.appendChild(childNodeData);
                }
		var childNodeClear = document.createElement('div');
		childNodeClear.style.clear = "both";
		childNode.appendChild(childNodeClear);
                bounce_popup.appendChild(childNode);
                switch (m_GBounce.displayType) {
                    case 2:
                        childNode = document.createElement('div');
                        childNode.id = "m_bouncer_commentaire";
                        childNode.className = "m_bouncer_commentaire";
			var formAddComment = document.getElementById("m_commentaire_form");
		        if(formAddComment != null){
				var childNodeH2 = document.createElement('h2');
				childNodeH2.innerHTML = "Avez-vous comment&eacute; la recette ?";
				childNode.appendChild(childNodeH2);
			}
                        bounce_popup.appendChild(childNode);
                        break;
                    default:
                        break;
                }

                //Add clear both
                childNode = document.createElement('div');
                childNode.style.clear = "both";
                bounce_popup.appendChild(childNode);
                //Add bouncer to dom
                document.body.appendChild(bounce_popup);
				m_bindEvent(window,'mouseout',m_GBounce.onMouseOut);
                m_bindEvent(window,'resize',m_GBounce.resize);
                m_bindEvent(window,'scroll',m_GBounce.resize);
            },
            open: function () {
                var bounce_popup = document.getElementById('m_see_also_bouncer');
                m_GBounce.resize();
                m_Bg.clic(m_GBounce.close);
                m_Bg.open();
                //Si autre type d'affichage
                if (m_GBounce.displayType == 2) {
                    var formAddComment = document.getElementById("m_commentaire_form");
		    if(formAddComment != null){
			    var bounceComment = document.getElementById("m_bouncer_commentaire");
			    formAddComment.children[0].children[3].style.display = "none";
			    formAddComment.children[0].children[4].style.display = "none";
			    bounceComment.appendChild(formAddComment);
		    }
                }
                bounce_popup.style.display = "block";
		recordInternalLinkGANoBounce('popup-bouncer','Open',location.href);
                m_GBounce.displayed = true;
            },
            close: function () {
                var bounce_popup = document.getElementById('m_see_also_bouncer');
                bounce_popup.style.display = "none";
                m_Bg.close();
                //Si autre type d'affichage
                if (m_GBounce.displayType == 2) {
                    var formAddComment = document.getElementById("m_commentaire_form");
		    if(formAddComment != null){
			    var formPageComment = document.getElementById("commentaire");
			    formAddComment.children[0].children[3].style.display = "";
			    formAddComment.children[0].children[4].style.display = "";
			    formPageComment.children[1].appendChild(formAddComment);
		    }
                }
		recordInternalLinkGANoBounce('popup-bouncer','Close',location.href);
                m_GBounce.displayed = false;
            },
            onMouseOut: function (e) {
                if (!m_GBounce.displayed) {
                    e = e ? e : window.event;
                    var from = e.relatedTarget || e.toElement;
                    if ((!from || from.nodeName == "HTML") && e.clientY <= 0) {
			if(readCookie("pbounce") == null){
				m_GBounce.open();
				createCookie("pbounce","1",1);
			}
                    }
                }
            },
            resize: function () {
                var w = 730, h = 620;
                var bounce_popup = document.getElementById('m_see_also_bouncer');
                bounce_popup.style.top = Math.max(0, ((m_Window.screenHeight() - h) / 2) + m_Window.scrollTop()) + 'px';
                bounce_popup.style.left = Math.max(0, ((m_Window.screenWidth() - w) / 2)) + 'px';
		setTimeout(m_GBounce.resize,100);
            }

        };
		
		
/* Header */
 function toggleMenuDisplay(event) {
        var menuuser = getElement("#m_menu_user");
        if (menuuser.className.indexOf("menu_ouvert") > 0) {
            removeClass(menuuser, "menu_ouvert");
        } else {
            AddClass(menuuser, "menu_ouvert");
        }
    }

    function toggleMenuHam(event) {
        var menuham = getElement("#m_menu_ham");
        if (menuham.className.indexOf("m_show") > 0) {
            var allmenuitem = getElement(".m_menu_ham_item");
            for (var i = 0; i < allmenuitem.length; i++) {
                if (allmenuitem[i].className.indexOf("actif") > 0) {
                    removeClass(allmenuitem[i], "actif");
                }
            }
            var allssmenuitem = getElement(".m_sous_menu_responsive");
            for (var i = 0; i < allssmenuitem.length; i++) {
                if (allssmenuitem[i].className.indexOf("m_show") > 0) {
                    removeClass(allssmenuitem[i], "m_show");
                }
            }
            removeClass(menuham, "m_show");
        } else {
            AddClass(menuham, "m_show");
        }
    }

    function closeMenuHam(event) {
        var target = event.target || event.srcElement;
        if (target.className.indexOf("m_phHam") < 0) {
            var menuham = getElement("#m_menu_ham");
            var allmenuitem = getElement(".m_menu_ham_item");
            for (var i = 0; i < allmenuitem.length; i++) {
                if (allmenuitem[i].className.indexOf("actif") > 0) {
                    removeClass(allmenuitem[i], "actif");
                }
            }
            var allssmenuitem = getElement(".m_sous_menu_responsive");
            for (var i = 0; i < allssmenuitem.length; i++) {
                if (allssmenuitem[i].className.indexOf("m_show") > 0) {
                    removeClass(allssmenuitem[i], "m_show");
                }
            }
            removeClass(menuham, "m_show");
        }
    }

    function menuResponsiveClick(classMenu, classSsMenu) {
        var menuressel = getElement(classMenu)[0];
        if (menuressel.className.indexOf("actif") < 0) {
            var allmenuitem = getElement(".m_menu_ham_item");
            for (var i = 0; i < allmenuitem.length; i++) {
                if (allmenuitem[i].className.indexOf("actif") > 0) {
                    removeClass(allmenuitem[i], "actif");
                }
            }
            AddClass(menuressel, "actif");
        } else {
            removeClass(menuressel, "actif");
        }
        var ssmenuressel = getElement(classSsMenu)[0];
        if (ssmenuressel.className.indexOf("m_show") < 0) {
            var allssmenuitem = getElement(".m_sous_menu_responsive");
            for (var i = 0; i < allssmenuitem.length; i++) {
                if (allssmenuitem[i].className.indexOf("m_show") > 0) {
                    removeClass(allssmenuitem[i], "m_show");
                }
            }
            AddClass(ssmenuressel, "m_show");
        } else {
            removeClass(ssmenuressel, "m_show");
        }
        return false;
    }

    function headerDisplay(e) {
        var headerSticky = getElement("#header_sticky");
        var header = getElement("#header");
        var baseline = getElement("#m_accroche_baseline");
        var search = getElement("#m_recherche_sticky");
        var linkcomm = getElement("#m_liens_commerciaux");
        var hamMenu = getElement("#hamburger");
        var menuham = getElement("#m_menu_ham");
        if (m_Window.scrollTop() > 0 && header.className.indexOf('m_top') < 0) {

        AddClass(headerSticky, "m_sticky");
        AddClass(hamMenu, "m_show");
        AddClass(baseline, "m_hide");
        AddClass(linkcomm, "m_hide");
        AddClass(header, "m_top");

    } else if (m_Window.scrollTop() == 0 && header.className.indexOf('m_top') > 0) {
        removeClass(headerSticky, "m_sticky");
        removeClass(menuham, "m_show");
        removeClass(hamMenu, "m_show");
        removeClass(baseline, "m_none");
        removeClass(linkcomm, "m_none");
        removeClass(header, "m_top");
        setTimeout(function () { removeClass(baseline, "m_hide"); }, 10);
        removeClass(linkcomm, "m_hide");
    }
}

function noneBaseline(e) {
	var baseline = getElement("#m_accroche_baseline");
	if (baseline.className.indexOf("m_hide") > 0) {
		AddClass(baseline, "m_none");
	}
}

function noneLinkcomm(e) {
	var linkcomm = getElement("#m_liens_commerciaux");
	if (linkcomm.className.indexOf("m_hide") > 0) {
		AddClass(linkcomm, "m_none");
	}
}

(function(){
	function moveHeadline() {
		var menu = getElement(".m_text_accroche");
		if (menu.length > 0) {
			var m_header_nb_interval = setInterval(function () {
				try {
					var i = 0;
					for (var ilen = menu.length; i < ilen; i++) {
						if (menu[i].className.indexOf('m_show') > 0) break;
				   }
					removeClass(menu[i], 'm_show');
					AddClass(menu[(i + 1) % menu.length], 'm_show');
				} catch (ex) {
					errlog(ex); clearInterval(m_header_nb_interval);
				}
			}, 5000);
		}
	}
	m_bindEvent(window, 'load', moveHeadline);
})();

/* SeeAlso videos with autoplay */
m_seealso = {
	init: function(pageid,target,domain,url,w,h) {
		var m = document.getElementById('afsa_VidMenu');
		if (m) {
			l = m.childNodes;
			if (l) {
				m_seealso.onload_done = false;
				m_seealso.pageid = (pageid ? pageid : afAd.pageid);
				if (!target) target = afAd.target;
				m_seealso.target = (m_seealso.target ? m_seealso.target+';'+target : target);
				m_seealso.domain = domain;
				m_seealso.url = url;
				m_seealso.prevItem = l[0];
				for (var i=0; i<l.length; i++) {
					afAdScripts.addEvent(l[i], 'click', function() {
							m_seealso.play(this, false);
							m_seealso.prevItem.className = 'item';
							this.className = 'item selected';
							m_seealso.prevItem = this;
							var t = document.getElementById('afsa_title');
							if (t) {
								if (t.href) {
									var link = this.getElementsByTagName('a')[0];
									if (link) {
										t.href = link.href;
										t.innerHTML = link.getElementsByTagName('span')[0].innerHTML;
									}
								} else {
									t.innerHTML = t.innerHTML.substr(0, t.innerHTML.indexOf(': ')+2) + this.getElementsByClassName('label')[0].innerHTML;
								}
							}
						}, false);
				}
				if (!m_seealso.autoplay_disabled) {
					$(document).ready( function() { m_seealso.onload_done=true; m_seealso.autoplay(); });
					//afAdScripts.addEvent(window, 'load', function() { m_seealso.onload_done=true; m_seealso.autoplay(); }, false);
					afAdScripts.addEvent(window, 'scroll', function() { m_seealso.autoplay(); }, false);
				} else {
					m_seealso.onload_done=true;
				}
			}
		}
	},
	autoplay: function(force) {
		if (!m_seealso.autoplay_done && m_seealso.onload_done) {
			if (typeof(force) != 'boolean') force=false;
			if (m_seealso.autoplay_disabled && !force) return;
			var p = document.getElementById('afsa_container');
			if (p) {
				var w = afAdScripts.windowSize(), i = afAdScripts.findPos(p);
				if (force || (w && i && w.l <= i.l && w.r >= i.r &&  w.t <= i.t  && w.b >= i.b)) {
					m_seealso.autoplay_done = true;
					var m = document.getElementById('afsa_VidMenu');
					if (m) first = m.firstChild;
					if (first) m_seealso.play(first, !force);
				}
			}
		}
	},
	play: function(o, autoplay) {
		var c = document.getElementById('afsa_container');
		if (c) {
			var f = document.getElementById('afsa_iframe');
			if (!f) {				
				f = document.createElement('iframe'); 
				f.setAttribute('id', 'afsa_iframe');
				f.setAttribute('scrolling', 'no');
				f.setAttribute('frameborder', 0);
				f.setAttribute('width', '100%');
				f.setAttribute('height', '100%');
				c.innerHTML='';
				c.appendChild(f);
			}
			
			if (o) {
				f.setAttribute('src', (m_seealso.domain ? m_seealso.domain : '')
										+m_seealso.url
										+'?url='+encodeURIComponent(o.getAttribute('url'))
										+'&w='+o.getAttribute('w')
										+'&h='+o.getAttribute('h')
										+'&rid='+o.getAttribute('rid')
										+'&pubp='+m_seealso.pageid
										+'&pubt='+encodeURIComponent(m_seealso.target+';autoplay='+autoplay)
										+'&pubd='+(m_seealso.disable?1:0)
										+'&spid='+o.getAttribute('spid')
										+'&t='+encodeURIComponent(o.getAttribute('t'))
										+'&ts='+Math.floor(Math.random()*100000)
										+'&ishd='+o.getAttribute('ishd'));
			}
			
			recordInternalLinkGA('SeeAlsoVideo', 'IframeSetting', autoplay?'autoplay':'userplay');
		}
	}
};



//Form validator
var m_form_validators = [],
availableValidators,
clientValidation = true,

availableValidators = function () {
	function compare(input, compareInputId) {
		var compareInput = document.getElementById(compareInputId);

		return input &&
			input.value &&
			compareInput &&
			input.value === compareInput.value
	}
	
	function different(input, value) {
		return input &&
			input.value &&
			input.value !== value;		
	}
	
	function minLength(input, value) {
		return required(input) &&
			input.value.length > value;
	}

	function maxLength(input, value) {
		return required(input) &&
			input.value.length < value;
	}

	function regEx(input, value) {
		var regex = new RegExp(value, 'i');
		return required(input) &&
			regex.test(input.value);
	}

	function required(input) {
		var ok = false;
		if(input && input.nodeName.toUpperCase() == "SELECT" && input.value != "undefined"){
			ok = true;
		}else if(input && !!input.value && input.nodeName.toUpperCase() != "SELECT"){
			ok = true;
		}
		return ok;
	}
	
	function range(input, value) {
		var values = value.split(',');
		return (input.value == '' || (parseInt(input.value) && input.value >= values[0] && input.value <= values[1]));
	}

	return {
		compare: compare,
		different : different,
		minLenth: minLength,
		maxLength: maxLength,
		regEx: regEx,
		required: required,
		range: range
	}
}();

function FormValidator(container) {
    var SEL_VALIDATION_FIELD_CONTAINER = 'j_field_container',
        SEL_VALIDATION_VALIDATE = 'j_validate',

        fields = getElementsByClassName(SEL_VALIDATION_FIELD_CONTAINER,container),
        validators = [],
        callbackValidate,
		opts = {
			callback : undefined,
			noBlur : false
		}

    function init() {
		var validateTrigger = getElementsByClassName(SEL_VALIDATION_VALIDATE,container)[0];
		opts = $(container).data('validation') || opts;
		
        for (var i = 0; i < fields.length; i++) {
            setValidators(i, fields[i]);
        }
		
        m_bindEvent(validateTrigger, 'click', validate);
    }

    function setValidator(elm, input, config) {
        var validatorName = config.name,
            validatorExists = availableValidators.hasOwnProperty(validatorName),
            validator = validatorExists && availableValidators[validatorName];

        if (typeof config !== 'object') {
            throw 'Invalid validator configuration';
        }

        if (!validatorExists || typeof validator !== 'function') {
            throw 'Invalid validator';
        }
        return function () { return validator(input, config.opts); };
    }

    function setValidators(i, elm) {
        var input = elm.getElementsByTagName('textarea')[0] || elm.getElementsByTagName('input')[0] ||elm.getElementsByTagName("SELECT")[0],
            fieldValidatorsData = $(input).data('validation'),
            length = fieldValidatorsData && fieldValidatorsData.length,
            fieldValidators = [],
            executeValidators = function () {
                var validatorResult,
                    result = true,
                    length = fieldValidators.length,
                    msg = getElementsByClassName('j_msg',elm)[0];

                for (var j = 0; j < length; j++) {
                    validatorResult = fieldValidators[j]();

                    if (validatorResult) {
                        msg.innerHTML = '';
                        removeClass(elm,'m_form_erreur');
                    }
                    else {
                        msg.innerHTML = fieldValidatorsData[j].msg;
                        AddClass(elm,'m_form_erreur');
                        return false;
                    }
                }

                return true;
            };
        if(typeof fieldValidatorsData === "string" && input.attributes["data-validation"] != undefined)
        {
        	try
        	{
        	fieldValidatorsData = eval(input.attributes["data-validation"].value);
        	length = fieldValidatorsData && fieldValidatorsData.length;
        	}
        	catch(ex)
        	{

        	}
        }

        if (!length) return;

        for (var j = 0; j < length; j++) {
            fieldValidators.push(setValidator(elm, input, fieldValidatorsData[j]));
        }

        validators.push({
			element : elm,
			input : input,
			execute : executeValidators
		});
		if(!opts.noBlur){
			m_bindEvent(input, 'blur', executeValidators);
		}
    }

    function validate(evt) {
        var length = validators.length,
            valid = true,
			result = false;

        for (var i = 0; i < length; i++) {
            result = validators[i].execute();
			if(valid && !result) {
				//first validator in error
				validators[i].input.focus();
			}
			valid &= result;
        }
        if (evt && !valid) {
            m_preventDefault(evt);
        } else if(opts.callback && typeof(window[opts.callback] === 'function')) {
			window[opts.callback]();
			m_preventDefault(evt);
		}
		
        return !!valid;
    }

    init();

    return {
        validate: validate
    };
}

function initFormValidators() {
    var SEL_VALIDATION_CONTAINER = 'j_validation_container',
        containers = getElementsByClassName(SEL_VALIDATION_CONTAINER,document),
        i = containers.length;
    for (; i--;) {
        m_form_validators.push(new FormValidator(containers[i]));
    }
}

if (clientValidation) {
   m_bindEvent(window, 'DOMContentLoaded', initFormValidators);
}

// images with m_pinitimage class


(function(){
	function addPinitImages() {
		var pinitimages = getElementsByClassName("m_pinitimage",document);
		for(i=0;i<pinitimages.length;i++) {
			var urlPin = document.location.href;
			if (pinitimages[i].attributes["data-url"])
				urlPin = pinitimages[i].attributes["data-url"].value;
			var divPinItLink = document.createElement("div"),parent = pinitimages[i].parentNode,element = pinitimages[i];
			divPinItLink.innerHTML = '<div class="m_pinit_btn"><a class="m_pinit_link" href="https://www.pinterest.com/pin/create/button/?url=' + urlPin + '&media=' + pinitimages[i].src + '&description=' + encodeURI(document.title) + '" data-pin-do="buttonBookmark"  data-pin-color="red" data-pin-height="28" target="_blank"><img src="https://assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_28.png" style="width:56px;" /></a></div>';
			divPinItLink.className = 'm_pinit_btn_hover';
			if(parent.nodeName == "A"){
				element = parent;
				parent = parent.parentNode;
			}
			parent.replaceChild(divPinItLink,element);
			divPinItLink.appendChild(element);
		}
	}
	m_bindEvent(window, 'load', addPinitImages);
})();

//collapse
 var m_collapse = (function () {
        function init() {
            var eleCollapse = getElementsByClassName("j_collapse", document);
            for (var i = 0; i < eleCollapse.length; i++) {
                if (eleCollapse[i].attributes["data-collapse-target"]) {
                    var id = eleCollapse[i].attributes["data-collapse-target"].value;
                    var target = document.getElementById(id);
                    if (target) {
                        if (!hasClass(target, "m_collapse"))
                            AddClass(target, "m_collapse");
                        displayIcon(eleCollapse[i], hasClass(target, "m_open"));
                        m_bindEvent(eleCollapse[i], "click", collapse,true);
                    }
                }
            }
        }
        function collapse() {
            var id = this.attributes["data-collapse-target"].value;
            var target = document.getElementById(id);
            if (target) {
                if (hasClass(target, "m_open")){
                    target.style.height = "";
                    removeClass(target, "m_open");
                }
                else
                {
                    AddClass(target, "m_open");
                	target.style.height = target.scrollHeight+'px';
                }
                displayIcon(this, hasClass(target, "m_open"));
            }
        }
        function displayIcon(ele,hasOpen) {
            var icon = getElementsByClassName("m_collapse_icon", ele)[0];
            if (icon) {
                if (icon.attributes["data-icon-open"] && icon.attributes["data-icon-close"]) {
                    var classOpen = icon.attributes["data-icon-open"].value;
                    var classClose = icon.attributes["data-icon-close"].value;
                    if (hasOpen) {
                        AddClass(icon, classOpen);
                        removeClass(icon, classClose);
                    }
                    else {
                        AddClass(icon, classClose);
                        removeClass(icon, classOpen);
                    }
                }
            }
        }
        m_bindEvent(window, "load", init);
		
		return {
			init : init
		}
    })();

function getParameterUri(name) {
	if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
		return decodeURIComponent(name[1]);
}

// get element size+position
function af_findPos(o) {
	if (!o || o==document.body){
		return { l:0, t:0 };
	}
	var l = t = 0,
	b = document.body,
	w = o.offsetWidth,
	h = o.offsetHeight;
	if (o.offsetParent) {
		l = o.offsetLeft - o.scrollLeft;
		t = o.offsetTop - o.scrollTop;
		while (o = o.offsetParent) {
			l += o.offsetLeft - (o != b ? o.scrollLeft : 0);
			t += o.offsetTop - (o != b ? o.scrollTop : 0);
		}
	}
	return { l:l, t:t, r:l+w, b:t+h, w:w, h:h };
}

// Refresh ads of the current page (async) 
function af_refreshAds(target, formatId, delay) {
	// - Do not reload ads for ad blockers
	// - Also prevent from reloading ads if first call has not been done, when ad library loaded asynchronously
	// - Do not refresh ads with ADTECH tagging either: only one ad call for several gemius page views 
	//   is the standard behavior in poland ... welcome to year 1990!
	if (!window.afAd && !window.sas && !window.asmi /* && !window.onetAds */) {
		return false;
	}
	
	// Init ad timer to have a minimum exposure time of X sec (by default X = 2 seconds)
	if (af_refreshAds.canRefreshAds === undefined) {
		af_refreshAds.canRefreshAds = true;
		af_refreshAds.canRefreshAdsDelay = (!isNaN(delay) ? delay : 2000);
	}
	
	// Do not reload ads if the timer is not finished
	if (!af_refreshAds.canRefreshAds) {
		return false;
	}
	
	// Clean keywords
	/* global sas_target */
	target += ';' + sas_target;
	target = target.replace(';new_ref', '').replace(';new_visit', '').replace(';new_page', '');
	target = target.replace('ajax=0', '').replace('ajax=1', '') + ';ajax=1'; 
	target = target.replace('/;+/', ';');
	
	// Clean global vars
	sas_ajax = true;
	
	// Use a timeout to fire ads refresh with low priority compared to content refresh
	setTimeout(function () {
		// Reset ad timer
		af_refreshAds.canRefreshAds = false;
		setTimeout(function () { af_refreshAds.canRefreshAds = true; }, af_refreshAds.canRefreshAdsDelay);
		
		// No refresh of polish ads with ADTECH
		/* if (window.onetAds) {
			// ADTECH tagging (PL)
			if (formatIds && !isNaN(formatIds) {
				// Refresh specific ad format
				onetAds.fetchTo(document.getElementById('sas_' + formatIds), ['right3'], function() {}, 0, 0, 0, 1);
			} else {
				// Refresh all ads
				var elt, name, placements = document.getElementsByClassName('onet-ad');
				for (var i = 0, l = placements.length; i<l; i++) {
					elt = placements[i];
					elt.innerHTML = ''; // clean old ads
					name = elt.id.replace('onet-ad-', '');
					onetAds.fetchTo(elt, [name]);
				}
			}
		} else */
		if (window.asmi) {
			// Smart AdServer tagging with ASMI IDs (DE)
			
			if (formatId && !isNaN(formatId)) {
				// Refresh specific ad format
				/* globals SmartAdServerAjax */
				SmartAdServerAjax(false, formatId, target);
			} else {
				// Refresh all ads
				/* globals sas_callAds */
				sas_callAds();
			}
		} else if (window.sas) {
			// Smart AdServer tagging with aufeminin IDs
			
			if (formatId && !isNaN(formatId)) {
				// Refresh specific ad format
				/* globals sas */
				sas.call('std', {
						siteId:	sas_siteId,
						pageId:	sas_pageId,
						formatId: formatId,
						target:	target
					}, {
						forceMasterFlag: true,
						resetTimestamp: true,
						async: true
					}
				);
			} else {
				// Refresh all ads
				/* globals sas_formatIds */
				afAd.async = true;
				afAd.refresh(sas_formatIds, sas_target);
				// sas.refresh(sas_formatIds, { target: sas_target }); // TODO : use official refresh function when Smart has updated its library to refresh multiple formats ...
			}
		}
	}, 50);
}

// check .cfm links
(function(){
	function logCfmLinkClick() {
		var cfmLinks = $('#af_tdContenu a[href*=".cfm"]');
		for(i=0;i<cfmLinks.length;i++) {
			cfmLinks[i].onclick = function () { mAjax("POST", 'https://www.marmiton.org/handlers/hcontentlog.ashx', 'log=redirectcfm&urllink=' + encodeURIComponent(this.href), true, null, false, "","","", false); };
		}
	}
	m_bindEvent(window, 'load', logCfmLinkClick);
})();