
/**
 * Created by ElasticAd. Version: 1.6.9014


 * @change log
 * 1.6.9014 - added allowed_selectors/blocked_selectos
 * 1.6.9013 - modificarea, bug event.data.indexOf
 * 1.6.9012 - added italian timezone language + insert_at fix.
 * 1.6.9011 - criteo picture scalebox
 * 1.6.9010 - vast teaser correction
 * 1.6.9009 - vast teaser stops at 50%
 * 1.6.9008 - added more ea_date possibilities
 * 1.6.9007 - added ea_native_element on inserted elements
 * 1.6.9006 - teaser video vast visibility change
 * 1.6.9005 - added ea_placement_display_video query string
 * ...
 *
 */



(function(window, document){
    var eaNative;
    var win = window;
    var doc = document;

    if(isInIframe()){
        win = window.parent;
        doc = window.parent.document;
    }

    if(!win.ean){
		win.ean = {};
		win.ean.placements = {} ;
		win.ean.placementsByAPXID = {} ;
		win.ean.placementsNotVisible = [] ;
        win.ean.videosOnAutoPlay = [];
		win.ean.processedPlacements = {} ;
		win.ean.placementsById = {} ;
		win.ean.nativeAds = {} ;
		win.ean.nativeAdsSource = {} ;
		win.ean.nativeAdsSourceByVid = {} ;
		win.ean.articlePlacement = {} ;
		win.ean.initialized =false ;
		win.ean.ean_window_ready =false ;
        win.ean.monthNames = {
            en: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],
            fr: ["Janvier","FÃ©vrier","Mars","Avril","Mai","Juin",
                "Juillet","AoÃ»t","Septembre","Octobre","Novembre","DÃ©cembre"],
            it: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
                "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
        };

	} else {
        return -1;
    }
    /****************************/
    /*** IE7 querySelectorAll ***/
    /****************************/

    if( typeof doc.querySelector === "undefined") {
        doc.querySelectorAll = function(sel) {

            var sels = sel.split(","),
                run = function(node,selector) {
                    var sel = selector.split(/[ >]+/), com = selector.match(/[ >]+/g) || [], s, c, ret = [node], nodes, l, i, subs, m, j, check, x, w, ok,
                        as;
                    com.unshift(" ");
                    while(s = sel.shift()) {
                        c = com.shift();
                        if( c) c = c.replace(/^ +| +$/g,"");
                        nodes = ret.slice(0);
                        ret = [];
                        l = nodes.length;
                        subs = s.match(/[#.[]?[a-z_-]+(?:='[^']+'|="[^"]+")?]?/gi);
                        m = subs.length;
                        for( i=0; i<l; i++) {
                            if( subs[0].charAt(0) == "#") ret = [doc.getElementById(subs[0].substr(1))];
                            else {
                                check = c == ">" ? nodes[i].children : nodes[i].getElementsByTagName("*");
                                if( !check) continue;
                                w = check.length;
                                for( x=0; x<w; x++) {
                                    ok = true;
                                    for( j=0; j<m; j++) {
                                        switch(subs[j].charAt(0)) {
                                            case ".":
                                                if( !check[x].className.match(new RegExp("\\b"+subs[j].substr(1)+"\\b"))) ok = false;
                                                break;
                                            case "[":
                                                as = subs[j].substr(1,subs[j].length-2).split("=");
                                                if( !check[x].getAttribute(as[0])) ok = false;
                                                else if( as[1]) {
                                                    as[1] = as[1].replace(/^['"]|['"]$/g,"");
                                                    if( check[x].getAttribute(as[0]) != as[1]) ok = false;
                                                }
                                                break;
                                            default:
                                                if( check[x].tagName.toLowerCase() != subs[j].toLowerCase()) ok = false;
                                                break;
                                        }
                                        if( !ok) break;
                                    }
                                    if( ok) ret.push(check[x]);
                                }
                            }
                        }
                    }
                    return ret;
                }, l = sels.length, i, ret = [], tmp, m, j;
            for( i=0; i<l; i++) {
                tmp = run(this,sels[i]);
                m = tmp.length;
                for( j=0; j<m; j++) {
                    ret.push(tmp[j]);
                }
            }
            return ret;
        };
        doc.querySelector = function(sel) {
            var ret = this.querySelectorAll(sel);
            if( ret.length > 0) return ret[0];
            else return null;
        };
        if( typeof HTMLElement != "undefined") {
            HTMLElement.prototype.querySelector = doc.querySelector;
            HTMLElement.prototype.querySelectorAll = doc.querySelectorAll;
        }
        else {
            var dommods_extend = [];
            dommods_extend.push(function() {
                var a = doc.getElementsByTagName("*"), l = a.length, i;
                for( i=0; i<l; i++) {
                    a[i].querySelector = doc.querySelector;
                    a[i].querySelectorAll = doc.querySelectorAll;
                }
            });
            // dommods_extend is an array of functions that are run whenever the DOM is updated,
            // to apply changes such as auto-resizing textareas, default value for <select> and so on.
        }
    }
    /****************************/
    //utils --------
    win.ean.utils = {
        extend:function(obj, source) {
            if (obj&&source) {
                for (var prop in source) {
                    if(source.hasOwnProperty(prop)) {
                        obj[prop] = source[prop];
                    }
                }
            }
            return obj;
        },
        isEmpty:function(obj) {

            // null and undefined are "empty"
            if (obj == null) return true;

            // Assume if it has a length property with a non-zero value
            // that that property is correct.
            if (obj.length > 0)    return false;
            if (obj.length === 0)  return true;

            // Otherwise, does it have any properties of its own?
            // Note that this doesn't handle
            // toString and valueOf enumeration bugs in IE < 9
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
            }

            return true;
        },
        parseContent:function(content){
            var myRegExp = new RegExp ("<script", "g");
            content = content.replace(myRegExp,  "<script data-eascript=\"true\"");
            return content;
        },
        strip:function(value, maxChar){
            var originalValue = value;
            var originalWords = originalValue.split(" ");
            if(maxChar !=undefined &&!isNaN(maxChar))
                if(String(value).length > Number(maxChar) ){
                    value = String(value).substr(0,maxChar);
                    value = String(value).split(" ");
                    if(value[value.length-1] != originalWords[value.length-1] && value.length>1){
                        value.pop();
                    }
                    value = value.join(" ");
                    value += "...";
                }
            return value;
        },
        checkSelectors:function(arr_selectors, allowed, operator) {
            var isAllowed = operator === "and";
            for(var i in arr_selectors) {
                var isSelector = document.querySelector(arr_selectors[i]) ? allowed : !allowed;
                if (operator === "and" ) {
                    isAllowed = isAllowed && isSelector;
                } else {
                    isAllowed = isAllowed || isSelector;
                    if(allowed === false && isAllowed === true){
                        break;
                    }
                }
            }
            return isAllowed;
        },
        checkAllowedURLs:function(arr_urls, allowed, strict) {
            var isAllowed = !allowed;
            var path = win.location.href;
            for(var i in arr_urls) {
                if(strict == true){
                    path = win.location.hostname + win.location.pathname;
                    if(path == arr_urls[i]||win.location.protocol + "//" + path == arr_urls[i]){
                        isAllowed = allowed;
                        break;
                    }
                }else if (path.indexOf(arr_urls[i]) > -1) {
                    isAllowed = allowed;
                    break;
                }
            }
            return isAllowed;
        },
        checkStatus:function(template){
            var isAllowed = true;
            var pidOnly = win.ean.utils.getParameterByName('ean-pid-only');
            if(pidOnly && template.pid!=pidOnly){
                return false;
            }
            var tpl = (template && template.template) ? template.template : null;
            if (tpl) {
                if (tpl.strict_urls) {
                    isAllowed = win.ean.utils.checkAllowedURLs(tpl.strict_urls, true, true);
                }
                if (isAllowed && tpl.strict_blocked_urls) {
                    isAllowed = win.ean.utils.checkAllowedURLs(tpl.strict_blocked_urls,false, true);
                }
                if (isAllowed && tpl.allowed_urls) {
                    isAllowed = win.ean.utils.checkAllowedURLs(tpl.allowed_urls, true, false);
                }
                if (isAllowed && tpl.blocked_urls) {
                    isAllowed = win.ean.utils.checkAllowedURLs(tpl.blocked_urls,false, false);
                }
                if (isAllowed && tpl.allowed_selectors) {
                    isAllowed = win.ean.utils.checkSelectors(tpl.allowed_selectors,true, tpl.allowed_selectors_operator||"and");
                }
                if (isAllowed && tpl.blocked_selectors) {
                    isAllowed = win.ean.utils.checkSelectors(tpl.blocked_selectors,false, tpl.blocked_selectors_operator||"and");
                }
            }
            return template && isAllowed && template.status &&(template.status =="active" || template.status =="ready_for_test_campaign" ||(template.status == "ready_to_test"&&(win.ean.utils.getParameterByName("ean-test-native")||win.ean.utils.getParameterByName("ean-testall-native"))) ||(template.status == "pending" && win.ean.utils.getParameterByName("ean-testall-native")));
        },
        replaceHtml: function(rawHtml, settings, selector, method, placementData, templateData){

            var tags = settings.tags;

            var position = templateData.position;
            var maxChars = templateData.max_chars;
            var selectorIndex = templateData.selector_index || 0;

            for(var i in tags){
                var maxChar = null;
                if(maxChars && maxChars[i])maxChar = maxChars[i];

                var tagValue = tags[i];

                var content = win.ean.utils.strip(tagValue,maxChar );
                content = win.ean.utils.parseContent(content);
                rawHtml = win.ean.utils.replaceParam (rawHtml, i, content);
            }

            //replace date tag


            var dateExp = function(){
                return /\{ea_date\("(.*?)","(.*?)"(?:,?"?([a-z]{2})?"?)\)\}/g;
            }
            var dateResult = rawHtml.match(dateExp());

            if(dateResult&&dateResult.length){
                for(var d =0;d<dateResult.length;d++){

                    var stringToReplace = String(dateResult[d]);
                    var dateMethod = dateExp().exec(stringToReplace);
                    if(dateMethod){
                        var dateToReplace = win.ean.utils.getEADate(dateMethod [1]||"/", dateMethod [2]||"dmy", dateMethod [3]||"en");
                        rawHtml = rawHtml.replace(stringToReplace,dateToReplace);
                    }
                }
            }

            var container = null;
            if(selector) {
                container = win.document.querySelectorAll(selector)[parseInt(selectorIndex)];
            }
            if (container) {
                var validChildren = eaNative.utils.getValidChildren(templateData.child_selector? win.document.querySelectorAll(templateData.child_selector):container.children);

                var beforeElement = validChildren[Math.min(Number(position)||0, validChildren.length-1)];

                switch (method){
                    case "every":

                        var incr =  (templateData.frequency || 2);
                        if(!templateData.addedFirst){
                            incr = 0;
                            templateData.addedFirst = true;
                        }
                        templateData.position = position +incr +1;
                        position +=incr;

                        beforeElement = validChildren[Math.min(position, validChildren.length-1)];

                    case "insert_before":
                        if(method==='insert_before'){
                            beforeElement = win.document.querySelectorAll(templateData.before_selector)[templateData.before_selector_index||0]
                            || container.children[position||0];
                        }
                    case "insert_at":
                        var defaultTempElement="div";

                        var tempElement;
                        switch (container.tagName.toUpperCase()){
                            default :
                                tempElement = win.document.createElement(defaultTempElement);
                                break;
                            case "TBODY":
                            case "TABLE":
                                tempElement = win.document.createElement("table");
                                tempElement.innerHTML="<tbody></tbody>";
                                tempElement = tempElement.children[0];
                                break;
                            case "TR":
                                tempElement = win.document.createElement("table");
                                tempElement.innerHTML="<tbody><tr></tr></tbody>";
                                tempElement = tempElement.getElementsByTagName("tr")[0];

                                break;
                        }

                        tempElement.innerHTML = rawHtml;
                        var firstChild = null;
                        var childrenToInsert =tempElement.children.length;
                        for(i=childrenToInsert-1;i>=0;i--){
                            var childElement = tempElement.children[i];
                            var childClass = childElement.getAttribute('class') ||"";
                            childElement.setAttribute("class", childClass + " ea_native_element");
                            if(position =="last" ||container.children.length==0 || parseInt(position)>=validChildren.length){
                                container.appendChild(childElement);
                            }else{
                                container.insertBefore(childElement,beforeElement);
                            }

                            if(childElement.nodeName !="STYLE"){
                                firstChild = childElement;
                            }


                        }
                        if(firstChild){
                            win.ean.utils.triggerEvent("ean-native-placement-show", {container:firstChild, isChild:childrenToInsert>1, placement:placementData});
                        }
                        break;
                    default :
                        try{
                            container.innerHTML = rawHtml;
                            var childrenLen =container.children.length;
                            for(i=0;i<childrenLen;i++) {
                                var childElement = container.children[i];
                                var childClass = childElement.getAttribute('class') || "";
                                childElement.setAttribute("class", childClass + " ea_native_element");
                            }
                            win.ean.utils.triggerEvent("ean-native-placement-show", {container:container,isChild:false, placement:placementData});
                        }catch (e){
                            if(window.console)
                                window.console.log("EANative ERROR: Error inserting HTML",e);
                        }
                        break;
                }
                if (settings.adnx && eaNative.hasDSPLoadExtras(settings.adnx.dsp)) {
                    eaNative.dspLoadExtras(container.querySelector('.ea_native_element') ? container.querySelector('.ea_native_element') : container);
                }
            }
        },

        triggerEvent:function(type,data){
            if(doc.createEvent) {
                var evt = doc.createEvent("Event");
                evt.initEvent(type, true, true);
                evt.data = data;
                evt.eventType = type;
                if (doc.dispatchEvent) {
                    doc.dispatchEvent(evt);
                }
            }
        },
        getElementIndex:function(children,element){
            for (var i=0;i<children.length;i++){
                if(children[i]==element){
                    return i;
                }
            }
        },
        getEADate:function(splitter, format, language){
            var z = new Date();
            var m = ((z.getMonth()+1)>9) ? (z.getMonth()+1) : ('0' + (z.getMonth()+1));
            var d = (z.getDate()>9) ? z.getDate() : ("0" + z.getDate());
            if(!language || !win.ean.monthNames[language]){
                language = "en";
            }
            var dateArray = [];
            var formatParts = format.split("");

            if(formatParts){
                for(var f =0;f<formatParts.length;f++){
                    switch (formatParts[f]){
                        case "d":
                            dateArray.push(d);
                            break;
                        case "m":
                            dateArray.push(m);
                            break;
                        case "y":
                            dateArray.push(z.getFullYear());
                            break;
                        case "F":
                            dateArray.push(win.ean.monthNames[language][z.getMonth()]);
                            break
                        case "K":
                            dateArray.push(win.ean.monthNames[language][z.getMonth()].slice(0,3));
                            break;
                        case "h":
                            dateArray.push(z.getHours());
                            break;
                        case "i":
                            dateArray.push(z.getMinutes());
                            break;
                        case "s":
                            dateArray.push(z.getSeconds());
                            break;
                    }
                }
            }
            return dateArray.join(splitter);
        },
        replaceParam:function(str, param,content){
            var myRegExp = new RegExp ("{"+param+"}", "g");
            try{
                str = str.replace(myRegExp,  content);
            }catch (e){

            }
            return str;
        },
        loadPlacementConfig:function(baseURL){
            baseURL = baseURL.replace("{domain}", win.ean.utils.getDomainName());
            var script = win.document.createElement("script");
            script.type = "text/javascript";
            script.src = baseURL +  "?r="+ win.ean.utils.getRand();
            win.document.getElementsByTagName("head")[0].appendChild(script);
        },
        getParameterByName :function(name){
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&#]" + name + "=([^&#]*)"),
                results = regex.exec(win.location.search);
            if(results==null){
                results = regex.exec(win.location.hash);
            }
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        },
        getDomainName:function(){
            var forcedDomain = eaNative.utils.getParameterByName("ean-domain");
            if(forcedDomain!=""){
                return forcedDomain;
            }
            var domain = win.location.hostname;

            if(domain.substr(0,4) == "www."){
                domain = domain.substr(4);
            }

            var tempSplitter = "__ean__";
            for(var i=0;i<EAdConfig.customDomainExtensions.length;i++){
                var ext = EAdConfig.customDomainExtensions[i];
                domain = domain.replace(ext,ext.replace( /\./g ,tempSplitter));
            }
            var domainParts = domain.split(".");
            domainParts.splice(0,domainParts.length-2);
            domain = domainParts.join(".");

            var regExp = new RegExp(tempSplitter, "g");
            domain = domain.replace(regExp,".");

            return domain;
        },
        openURL:function(url, target, clickTag, specs){
            if(clickTag && clickTag !="")url = encodeURI(url);
            url = (clickTag||"") +url;
            target = target||"_self";
            if(specs)win.open (url, target, specs);
            else win.open(url, target);
        },
        getRand:function(){
            return Math.random().toString(16).substr(2);
        },
        getValueFromPath:function(obj,is, value) {
            if (typeof is == 'string')
                return win.ean.utils.getValueFromPath(obj,is.split('.'), value);
            else if (is.length==1 && value!==undefined)
                return obj[is[0]] = value;
            else if (is.length==0)
                return obj;
            else
                return win.ean.utils.getValueFromPath(obj[is[0]],is.slice(1), value);
        },
        isElementVisible:function(selector,method, placement , position)
        //trebuie modificat nu cauta bine visibilitatea elementului, buhuhuhuhuhu
        {
            var elem = null;
            var templateData = placement.template;
            if(!position){
                position = templateData.position;
            }
            var selectorIndex = templateData.selector_index || 0;
            var container = null;
            if(selector) {
                container = win.document.querySelectorAll(selector)[parseInt(selectorIndex)];
            }
            var verifyTop = false;
            if (container) {
                var validChildren = eaNative.utils.getValidChildren(templateData.child_selector? win.document.querySelectorAll(templateData.child_selector):container.children);

                var beforeElement = validChildren[Math.min(Number(position)||0, validChildren.length-1)];

                switch (method){

                    case "insert_before":
                        beforeElement = win.document.querySelectorAll(templateData.before_selector)[templateData.before_selector_index||0]
                        || container.children[position||0];
                    case "insert_at":
                        if(position==0 || validChildren.length==0 ) {
                            elem = container;
                        }else  if(position =="last" || parseInt(position)>=validChildren.length-1){
                            elem = validChildren[validChildren.length-1];
                        }else{
                            elem =  beforeElement;
                            verifyTop = true;
                        }
                        break;
                    case "every":
                        elem =  validChildren[Math.min(position, validChildren.length-1)];
                        break;
                    default :
                        elem = container;
                        break;
                }
            }

            if(!elem){
                return false;
            }else{
                if(elem === container || method=="update") {
                    verifyTop = true;
                }
            }

            var pageYOffset = win.pageYOffset;
            if(pageYOffset ==undefined){
                pageYOffset = doc.documentElement.scrollTop;
            }
            var innerHeight = win.innerHeight;
            if(innerHeight==undefined){
                innerHeight = doc.documentElement.clientHeight;
            }

            var docViewTop = Math.max(pageYOffset,0);
            var docViewBottom = docViewTop + innerHeight;

            var elemTop = win.ean.utils.getOffset(elem);
            var elemBottom = elemTop + elem.offsetHeight;

            var isVisible = false;
            if(verifyTop ==true){
                isVisible = (elemTop >= docViewTop && elemTop <docViewBottom );
            }else{
                isVisible = (elemBottom >= docViewTop && elemBottom <docViewBottom );
            }
            if(!isVisible){
                var bounding = elem.getBoundingClientRect();
                if(verifyTop ==true){
                    isVisible = (bounding.top>0 && bounding.top<innerHeight);
                }else{
                    isVisible = bounding.bottom>0 && bounding.bottom<innerHeight;
                }
            }
            return isVisible;
        },
        getOffset:function( elem,side )
        {
            if(!side){
                side = 'offsetTop';
            }
            var offset = 0;
            do {
                if ( !isNaN( elem[side]) )
                {
                    offset += elem[side];
                }
            } while( elem = elem.offsetParent );
            return offset;
        },
        isElementVisiblePercent:function (elem, percent) {                  
            var bounds = elem.getBoundingClientRect();                 
            var pageYOffset = win.pageYOffset;
            if(pageYOffset === undefined){
                pageYOffset = doc.documentElement.scrollTop;
            }
            var innerHeight = win.innerHeight;
            if(innerHeight === undefined){
                innerHeight = doc.documentElement.clientHeight;
            }    
            var topBound = bounds.top + (percent ? bounds.height*percent/100 : 0);
            var bottomBound = bounds.bottom - (percent ? bounds.height*percent/100 : 0);
            
            return ((topBound>0) && (bottomBound<innerHeight));
        },
        replaceDiacritics:function(s) {
            var re1 = /[ÃÃÃÃÃÃ¡Ã Ã¢Ã£ÂªÃ€]/g;
            var re2 = /[ÃÃÃÃÃ©ÃšÃªÃ«&]/g;
            var re3 = /[Ã³Ã²ÃŽÃµÃ¶ÂºÃÃÃÃÃ]/g;
            var re4 = /[ÃºÃ¹Ã»ÃŒÃÃÃÃ]/g;
            var re5 = /[Ã­ÃÃ®Ã¯Ã]/g;
            s = s.replace(re1, "a");
            s = s.replace(re2, "e");
            s = s.replace(re3, "o");
            s = s.replace(re4, "u");
            s = s.replace(re5, "i");
            s = s.replace(/[Ã§Ã]/g, "c");
            return s;
        },
        getStyle:function(oElm, strCssRule){
            var strValue = "";
            if(document.defaultView && document.defaultView.getComputedStyle){
                strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
            }
            else if(oElm.currentStyle){
                strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
                    return p1.toUpperCase();
                });
                strValue = oElm.currentStyle[strCssRule];
            }
            return strValue;
        },
        getValidChildren:function(collection){
            var validChildren = [];
            if(collection && collection.length>0) {
                for (var i = 0; i < collection.length;i++){
                    if(collection[i].nodeType==1){
                        validChildren.push(collection[i]);
                    }
                }
            }
            return validChildren;
        },
        isMobile:function(){
           return  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        isIOS:function(){
            return  /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
        },
        replaceCreativeMacros:function(source , adSettings){

            if (adSettings.auctionid != undefined) {
                source = source.replace('${AUCTION_ID}', adSettings.auctionid);
            }
            source = source.replace('${PUBLISHER_ID}', adSettings.pubid);
            source = source.replace('${SITE_ID}', adSettings.sid);
            source = source.replace('${TAG_ID}', adSettings.adnxsId);
            source = source.replace('${PLACEMENT_ID}', adSettings.pid);
            source = source.replace('${CP_ID}', adSettings.adnxsId);
            source = source.replace('${USER_COUNTRY}', adSettings.country);
            source = source.replace('${CLICK_URL}', adSettings.clickTAG);
            source = source.replace('${USER_ID}', adSettings.uid);
            return source;
        },
        getURLHostname:function(href) {
            var l = doc.createElement("a");
            l.href = href;
            return l.hostname;
        },
        base64url_encode:function(str) {
            return str.replace("/","_").replace("+","-");;
        }
    };

    function isInIframe (){
        if(window.parent!=window){
            try{
                var u=window.parent.location;
                var frm=window.frameElement;
                var doc =window.parent.document
                if(doc==undefined)return false;
                return  true;
            }catch(e){}
        }
        return false;
    };

    if (typeof JSON === "undefined") {
        var script = win.document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.elasticad.net/native/serve/js/helper/json3.min.gz.js";
        win.document.getElementsByTagName("head")[0].appendChild(script);
    }

    
	eaNative = win.ean;

	var trackingEvents={
		'click':1,
		'general':100
	}
	var formatType = {
		"native":2,
		"article":3,
		"expanded":4
	}
	var URLPaths  ={
		nativePlacementsConfigURL:"{protocol}//{bucket}/native/placements/{domain}/pconfig",
		articlePlacemensConfigURL:"{protocol}//{bucket}/native/placements/{domain}/aconfig",
		vastEmbed:"{protocol}//{bucket}/native/serve/vastEmbed.html?vast=",
		vastTeaser:"{protocol}//{bucket}/native/serve/vastTeaser.html?vast=",
//		vastTeaser:"{protocol}//devfiles.elasticad.net/native/serve/vastTeaser.html?vast=", //doar pentru test
		articleURL:"{protocol}//{bucket}/native/ad/{hash}/article/settings",
		nativeURL:"{protocol}//{bucket}/native/ad/{hash}/teaser/settings",
		cdnURL:"{protocol}//{cdn}",
		sharePageUrl:"https://{share_page_domain_url}/nredir.php?hash={ah}&href={encoded_article_link}&r=" + win.ean.utils.getRand(),
		defaultSharePageUrl:"{share_page_domain}",

		resizeServerImagesPath:"{protocol}//{subdomain}resize.elasticad.net/{scalemode}-{wxh}/{hash}",
		imagesPath:"{protocol}//{bucket}/media/image/{hash}/{scalemode}-{wxh}",
		originalImagesPath:"{protocol}//{bucket}/media/image/{hash}/original",

        externalResizeServerImagesPath:"{protocol}//{subdomain}resize.elasticad.net/{scalemode}-{wxh}/{hash}/external",
        externalImagesPath:"{protocol}//{bucket}/media/extimage/{hash}/{scalemode}-{wxh}",
        externalOriginalImagesPath:"{protocol}//{bucket}/media/extimage/{hash}/original",

        trackingURL:"{protocol}//{subdomain}tracking.elasticad.net/pixel.php",
		nativeADSize:"19x11"
	};
	var defaultImageScaleMode  = {
		brand_logo:"scaleh",
		defaultScale:"scalecrop"
	};
	eaNative.window = win;
	eaNative.document = doc;


	var bucket = "s3.amazonaws.com/files.elasticad.net";
	var cdn = "cdn.elasticad.net";
	var subdomain = "";
	var protocol="http:";
	var adnxsURL = "https://cdn.adnxs.com/";
	var sharePageDomain = "share.elasticad.net";
    var defaultPlacementId = "2281525";
    var queryParams = {};
    var ttjURI = 'ib.adnxs.com/ttj';
	var isDev = false;

    if(win.ean.utils.getParameterByName("ean-dev")==="true")isDev=true;
	if(win.location.protocol=="https:")protocol =win.location.protocol;


    var script = window.document.getElementById('ean-native-embed-tag' );
    if(script){
        var loadedScriptSource = script.getAttribute("src");
        if(loadedScriptSource && loadedScriptSource.indexOf("devfiles.elasticad.net")!=-1){
            isDev = true;

        }

        if(loadedScriptSource.indexOf("?")>0){
            var jsQuery = loadedScriptSource.substr(loadedScriptSource.indexOf("?")+1);

            var jsQueryParams= jsQuery.split("&");

            for(var i=0; i<jsQueryParams.length; i++) {
                var item = jsQueryParams[i].split("=");
                queryParams[item[0]] = item[1];
            }
        }
    }

    if(isDev){
        subdomain = "dev.";
        cdn = bucket = "devfiles.elasticad.net";
        //defaultPlacementId = "1436048";
        sharePageDomain = "share.sharepage.dev.elasticad.net";
        if(!queryParams["liveTTJ"]) {
            ttjURI = 'ib.client-testing.adnxs.net/ttj'
        }
    }

	if(protocol=="https:"){
		adnxsURL="https://a248.e.akamai.net/appnexus.download.akamai.com/89298/adnexus-prod/";
	}
	for(var i in URLPaths){
		URLPaths[i] = URLPaths[i].replace("{bucket}", bucket).replace("{subdomain}", subdomain)
                                .replace("{cdn}", cdn)
                                .replace("{protocol}", protocol)
                                .replace("{adnxs}", adnxsURL)
                                .replace("{share_page_domain}",sharePageDomain);
	}
    if(win.ean.utils.getParameterByName('ean-placement-preview')=="true"){
        var script = win.document.createElement("script");
        script.type = "text/javascript";
        script.src = protocol + "//"+cdn+"/native/serve/js/helper/nativePreviewEmbedHelper.gz.js?v=1.0";
        //script.src = "https://cdn.elasticad.net/native/serve/js/helper/nativePreviewEmbedHelper.gz.js?v=1.0";
        win.document.getElementsByTagName("head")[0].appendChild(script);
    }
	var EAdConfig = {
		debug:isDev ,
		uid:0,
		vid:0,
		h:0,
		defaultPlacementId:defaultPlacementId,
        queryParams:queryParams,
        customDomainExtensions : ['elasticad.net.s3.amazonaws.com',"elasticad.net",'wordpress.com',
                                   'elasticad.jumpeye.net','co.uk','elasticad.jumpeye.com' ,'blogspot.ro','blogspot.com']
    }
    if(win.ean.utils.getParameterByName('ean-debug')){
        EAdConfig.debug = true;
    }
	eaNative.URLPaths = URLPaths;
	eaNative.EAdConfig = EAdConfig;
    
    eaNative.dspLoadExtras = function(container){};

    eaNative.getURLPath = function(pathName,dsp){
        switch (pathName){
            case "imagesPath":
            case "originalImagesPath":
            case "resizeServerImagesPath":
                switch (dsp){
                    case "a":
                        return URLPaths[pathName];
                        break;
                    default :
                        return URLPaths["external"+ pathName.charAt(0).toUpperCase() + pathName.slice(1)];
                        break;
                }
                break;
            default :
                return URLPaths[pathName];
                break;
        }
        return '';
    }
    eaNative.addTTJTag = function(config){

        var ttjSrc = protocol + "//"+ttjURI+"?";

        var params = [];
        for(var i in config){
            params.push(encodeURIComponent(i)+"="+encodeURIComponent(config[i]));
        }
        ttjSrc+=params.join("&");
        var content = "<html><head><script type='text/javascript'>window.closeDocumentInterval = setInterval(function(){var scripts = document.getElementsByTagName('script'); if(scripts.length>2){window.clearInterval(window.closeDocumentInterval);document.close();} }, 500);var newDomain = '"+doc.domain+"'; if(document.domain!=newDomain)document.domain = newDomain; document.write('<script type=text/javascript src="+ttjSrc+"></scr'+'ipt>')</scr"+"ipt></head></html>";

        var frmEm = doc.createElement("iframe");
        var frameId = "load-ad-"+win.ean.utils.getRand();
        frmEm.id = frameId;

        var iframeContainer = doc.createElement("div");
        iframeContainer.style.display="none";
        iframeContainer.appendChild(frmEm);
        doc.body.appendChild(iframeContainer);

        frmEm = doc.getElementById(frameId);

        if(frmEm){
            frmEm.src = 'javascript:(window.onload=function(){document.open();document.write("'+content+'");/*document.close();*/' + '})();';
        }
    }
    eaNative.initTTJTag = function(placement){
        var placementID = placement.placementID;
        var placements =eaNative.placements[placementID] || [];
        placements.push(placement);
        eaNative.placements[placementID] = placements;
        eaNative.placementsByAPXID[placementID] = placement;
        var testHash =win.ean.utils.getParameterByName("ean-test-hash");
        if(testHash){
            eaNative.initNativeAd({type:"native",ah:testHash,adnxsId:placementID,clickTAG:"",uid:"0",dsp:"a", isInPreview:win.ean.utils.getParameterByName("ean-isinpreview")});
        }else{

            var loadConfig = {
                id: placement.placementID,
                ea_placement_id:placement.pid,
                ea_placement_expandable:placement.expandable||false,
                ea_placement_accept_auto_expandable:placement.accept_auto_expandable !=undefined?placement.accept_auto_expandable:true,
                ea_placement_sharing:placement.sharing||false,
                ea_placement_display_video:placement.video_teaser||false,
                size: URLPaths.nativeADSize,
                promo_sizes: "19x12",
                ttjb:1,
                ext_inv_code:"ea_pid_"+placement.pid,
                status:placement.status,
                include_inventory_company_id:placement.inventory_company_id,
                include_inventory_master_company_id:placement.inventory_master_company_id,
                exclude_inventory_company_id:placement.inventory_company_id,
                exclude_inventory_master_company_id:placement.inventory_master_company_id
            };
            win.ean.utils.extend(loadConfig, placement.template.placement_params);
            win.ean.utils.extend(loadConfig,EAdConfig.queryParams);
            try{
                if(placement.template.placement_params_publisher){
                    for(var prop in placement.template.placement_params_publisher){
                        loadConfig [prop] = win.ean.utils.getValueFromPath(win,placement.template.placement_params_publisher[prop]);
                    }
                }
            }catch (e){
                if(window.console){
                    window.console.log("EANative ERROR: Error adding placement_params_publisher:",e);
                }
            }

            eaNative.addTTJTag(loadConfig);
        }

    };
	eaNative.initPlacement = function(data){
		for(var i=0;i<data.length;i++){
			var placement = data[i];

            eaNative.placementsById [placement.pid] = placement;
            switch (placement.type){
				case "native":

					if(placement&&win.ean.utils.checkStatus(placement) &&
						placement.template && placement.template.selector){

						var selector = placement.template.selector;
                        var alternative_selectors = placement.template.alternative_selectors ? placement.template.alternative_selectors : null;
                        if(alternative_selectors && Object.prototype.toString.call(alternative_selectors) !== '[object Array]'){
							alternative_selectors = [alternative_selectors];
						}
						if(Object.prototype.toString.call(selector) !== '[object Array]'){
							selector = [selector];
						}
						var placementContainerFound = false;
                        var containerSelector = selector;
						for(var s=0;s<selector.length;s++){
                            containerSelector = selector[s];
                            try{
								var container = win.document.querySelector(containerSelector);
							}catch (e){};
                            
                            if(!container && alternative_selectors) {
                                var k;
                                if (alternative_selectors[s]) {
                                    for (k=0; k<alternative_selectors[s].length; k++) {
                                        containerSelector = alternative_selectors[s][k];
                                        try{
                                            container = win.document.querySelector(containerSelector);
                                        }catch (e){};
                                        if (container) {
                                            placement.template.selector = containerSelector;
                                            break;
                                            
                                        }
                                    }
                                }
                            }

							if(container){
                                if(placement.template.fixedPosition==true){
                                    if(container.children.length<parseInt(placement.template.position)){
                                        placementContainerFound = false;
                                        break;
                                    }else{
                                        placementContainerFound = true;
                                        break;
                                    }
                                }else{
                                    placementContainerFound = true;
                                }

								break;
							}

						}
                        if(placementContainerFound){
							var placementID = placement.placementID;
							if(win.ean.utils.getParameterByName("ean-test-native")||win.ean.utils.getParameterByName("ean-testall-native")){
								placementID = EAdConfig.defaultPlacementId;
							}
							placement.placementID = placementID;

							var method = placement.template.method || placement.method;
							switch (method ){
								default :
                                    if(placement.ttjParsed!==true) {
                                        if (win.ean.utils.getParameterByName('ean-placement-preview')=="true" || win.ean.utils.getParameterByName('ean-isinpreview')=="1" || String(placement.skip_visibility_test)== "true" ||  win.ean.utils.isElementVisible(containerSelector, method, placement)) {
                                            placement.ttjParsed = true;
                                            eaNative.initTTJTag(placement);
                                            eaNative.removePlacementForScrollingChecking(placement);
                                        } else {
                                            eaNative.addPlacementForScrollingChecking(placement);
                                        }
                                    }else{
                                        eaNative.addPlacementForScrollingChecking(placement);
                                    }
								break;
								case "every":
									placement.template.position = parseInt(placement.template.position);
									if(isNaN(placement.template.position))placement.template.position = 0;
									var validChildrens = eaNative.utils.getValidChildren(placement.template.child_selector? win.document.querySelectorAll(placement.template.child_selector):container.children);

                                    var inventoryElements = [];

                                    for(var v=0;v<validChildrens.length;v++){
                                        if(validChildrens[v].getAttribute("class").indexOf("ea_native_element")==-1){
                                            inventoryElements.push(validChildrens[v]);
                                        }
                                    }
                                    var position = placement.template.position;
                                    var frequency = placement.template.frequency||2;
                                    var placementsCount = (inventoryElements.length -position)/(frequency) +1;

                                    placementsCount = Math.max(Math.round(placementsCount),0);
                                    if(!placement.ttjParsed)placement.ttjParsed = {};


                                    var placementToAddForChecking = false;
									while(placementsCount){
                                        if(!placement.ttjParsed[position]) {
                                            if (win.ean.utils.getParameterByName('ean-placement-preview')=="true" ||win.ean.utils.getParameterByName('ean-isinpreview')=="1" || String(placement.skip_visibility_test)== "true" || win.ean.utils.isElementVisible(containerSelector, method, placement, position)) {
                                                var placementData  = JSON.parse(JSON.stringify(placement));;
                                                placementData.template.position = win.ean.utils.getElementIndex(container.children,inventoryElements[position]);
                                                placementData.template.method = "insert_at";
                                                eaNative.initTTJTag(placementData);

                                                placement.ttjParsed[position] = true;
                                            } else {
                                                placementToAddForChecking = true;
                                            }

                                        }
                                        placementsCount--;
                                        position +=frequency;
									}
                                    if(placementToAddForChecking ==false){
                                        eaNative.removePlacementForScrollingChecking(placement);
                                    }else{
                                        eaNative.addPlacementForScrollingChecking(placement);
                                    }

								break;
							}
                            

						}else{
                            if(!placement.parsed && placement.template.initDelay){
                                placement.parsed = true;
                                clearTimeout(placement.delayTimer);

                                var callWithDelay = function(delayedPlacement){
                                    delayedPlacement.delayTimer = setTimeout(function(){
                                        eaNative.initPlacement([delayedPlacement]);
                                    }, parseInt(delayedPlacement.template.initDelay));
                                };
                                callWithDelay(placement);

                            }

                        }
					}
				break;
				case "article":
					if(placement&&win.ean.utils.checkStatus(placement) &&placement.article_template  && placement.articlePID===win.ean.utils.getParameterByName ("ean-article-pid")){
						var url = win.ean.utils.getParameterByName('adArticleJsonPath');
                        if(!url){
                            url = URLPaths.articleURL.replace("{hash}", win.ean.utils.getParameterByName ("ean-article-id")) ;
                        }
						eaNative.loadAdSettings(url,placement.placementID);
						eaNative.articlePlacement = placement;
						return;//in case there are more placements, we take just first when we are on articles page.
					}
				break;
			};
		}
	}
    eaNative.trackClickTag = function (adSettings) {
        if(adSettings.adnx && adSettings.adnx.clickTAG){
            var script = win.document.createElement("script");
            script.type = "text/javascript";
            var clickTAG = adSettings.adnx.clickTAG;
            /*if(clickTAG.indexOf("?")==-1){
                clickTAG+="?"
            }else{
                clickTAG+="&"
            }
            clickTAG +="ean_cachebuster="+win.ean.utils.getRand();*/
            script.src = clickTAG;
            win.document.getElementsByTagName("head")[0].appendChild(script);
        }
    };
    eaNative.initNativeAd = function(data){

        eaNative.setUID(data.uid);
		var nativeAds =eaNative.nativeAds[data.ah] ||[];
		nativeAds.push(data);
		eaNative.nativeAds[data.ah] = nativeAds;

		var placementData = eaNative.placements [data.adnxsId];
		if(placementData  && placementData.length!=undefined) placementData = placementData.shift();

        if(placementData){
            eaNative.processedPlacements[data.adnxsId] = eaNative.processedPlacements[data.adnxsId]||[];
            eaNative.processedPlacements[data.adnxsId].push(placementData );

            var url = data.adTeaserJsonPath ? data.adTeaserJsonPath:URLPaths.nativeURL.replace("{hash}", data.ah);
            if (data.dsp && !eaNative.isIntegrationDSP(data.dsp)) {
                eaNative.loadAdSettings(url,placementData.pid);
            }
        }
	},
	eaNative.loadAdSettings = function(url,pid){
		if(win.ean.utils.getParameterByName("ean-test-hash")&&win.ean.utils.getParameterByName("ean-preview")){
			url +="_temp";
		}
		var script = win.document.createElement("script");
		script.type = "text/javascript";
        url += (url.indexOf("?")!=-1)? "&":"?";
		script.src = url +  "r="+ win.ean.utils.getRand() + "&uid=" + EAdConfig.uid + "&vid=" +new Date().getTime() + "."+ Math.random().toString(36).slice(-8) + "&pid="+ pid; ;
		win.document.getElementsByTagName("head")[0].appendChild(script);
	},
	eaNative.show = function(data){
		var selector = "";
		var template ;
		var templateData ;
		var placementData;
		var adSettings;
        var clickTAG = "";
		if(data&&data.settings){
			eaNative.nativeAdsSource [data.settings.ah] = data.settings;

			switch (data.settings.type) {
				case "native":

					var placements = eaNative.nativeAds[data.settings.ah];

					if(!data.settings.vid)data.settings.vid =new Date().getTime() + "."+ Math.random().toString(36).slice(-8);
					if(placements && placements.length){
						adSettings = placements.shift();
                        data.settings.adnx = adSettings;
						data.settings.adnxsId = adSettings.adnxsId;
						placementData = eaNative.processedPlacements [adSettings.adnxsId];
						if(placementData  && placementData.length!=undefined) placementData = placementData.shift();
						if(placementData){
							templateData = placementData.template;
							template = placementData.template.template_html;

                            data.settings.tags['data-vid'] = data.settings.vid;

                            if(adSettings.clickTAG){
                                clickTAG =adSettings.clickTAG;
                            }

                            selector = placementData.template.selector;
						}else{
							return;
						}

					}else{
						return;
					}
				break;
				case "article":
					placementData = eaNative.articlePlacement;
                    data.settings.adnx      = data.settings;
					data.settings.feac      = win.ean.utils.getParameterByName ("ean-feac");
					data.settings.sid       = win.ean.utils.getParameterByName ("ean-sid");
					data.settings.pubid     = win.ean.utils.getParameterByName ("ean-pubid");
					data.settings.country   = win.ean.utils.getParameterByName ("ean-country");
					data.settings.cpid      = win.ean.utils.getParameterByName ("ean-cpid");
					data.settings.ah        = win.ean.utils.getParameterByName ("ean-article-id");
					data.settings.uid       = win.ean.utils.getParameterByName ("ean-uid");
					data.settings.vid       = win.ean.utils.getParameterByName ("ean-vid");
					data.settings.adnxsId   = win.ean.utils.getParameterByName ("ean-pid");
					data.settings.dsp       = win.ean.utils.getParameterByName ("ean-dsp");

                    adSettings = data.settings;
					templateData = placementData.article_template;
					template = placementData.article_template.template_html;
					selector = placementData.article_template.selector;
					placementData.pid = win.ean.utils.getParameterByName ("ean-pid");/*placementData.articlePID;*/


					if(data.settings.tags.title)
						win.document.title = data.settings.tags.title;
					if(data.settings.tags.content_type=="overlay_content" || data.settings.tags.content_type=="internal_content_link")data.settings.tags.full_text =eaNative.getHTMLTag(data.settings.tags,data.settings.tags.content_type);

					win[add](pre + "blur", eaNative.stopUITTracking, false);
					win[add](pre + "focus", function(){eaNative.startUITTracking(data.settings.vid)}, false);

					eaNative.uit = 0;
					eaNative.uitInterval = 1000;
					eaNative.startUITTracking(data.settings.vid);
				break;
			}
			eaNative.nativeAdsSourceByVid [data.settings.vid] = data.settings;
			eaNative.tagsIndexes = {};
			eaNative.viewsTrack = [];
			if(placementData) {

                data.settings.pid = placementData.pid;
                adSettings.placementConfig = placementData;
                var articleLink =  placementData.link || "";
                if(data.settings.tags && data.settings.tags.content_type == "content_link")
                    articleLink = data.settings.tags.content_link;
                else{
                    articleLink  += (articleLink.indexOf("?")==-1)?"?" :"&";
                    articleLink += "ean-article-id={hash}&ean-article-pid={apid}&ean-uid={uid}&ean-vid={vid}&ean-pid={pid}&ean-sid={sid}&ean-cpid={cpid}&ean-pubid={pubid}&ean-country={ean-country}&ean-feac={feac}&ean-dsp={dsp}";
                    if(win.ean.utils.getParameterByName("ean-test-native")){
                        articleLink+="&ean-test-native=true"
                    }
                    if(win.ean.utils.getParameterByName("ean-preview")){
                        articleLink+="&ean-preview=true"
                    }
                    if(win.ean.utils.getParameterByName("ean-testall-native")){
                        articleLink+="&ean-testall-native=true"
                    }
                    if(win.ean.utils.getParameterByName("ean-test-hash")){
                        articleLink+="&ean-test-hash="+win.ean.utils.getParameterByName("ean-test-hash");
                    }
                    if(win.ean.utils.getParameterByName("ean-debug")){
                        articleLink+="&ean-debug=true";
                    }
                    if(data.settings.adnx.dsp!="a"){
                        articleLink+="&adArticleJsonPath="+encodeURIComponent(data.settings.adnx.adArticleJsonPath);
                    }

                    articleLink = win.ean.utils.replaceParam(articleLink, "hash", data.settings.ah);
                    articleLink = win.ean.utils.replaceParam(articleLink, "apid", placementData.articlePID);
                    articleLink = win.ean.utils.replaceParam(articleLink, "uid", EAdConfig.uid);
                    articleLink = win.ean.utils.replaceParam(articleLink, "vid", data.settings.vid);
                    articleLink = win.ean.utils.replaceParam(articleLink, "pid", placementData.pid);
                    articleLink = win.ean.utils.replaceParam(articleLink, "sid", adSettings.sid);
                    articleLink = win.ean.utils.replaceParam(articleLink, "cpid", adSettings.cpid);
                    articleLink = win.ean.utils.replaceParam(articleLink, "pubid", adSettings.pubid);
                    articleLink = win.ean.utils.replaceParam(articleLink, "feac", adSettings.feac);
                    articleLink = win.ean.utils.replaceParam(articleLink, "ean-country", adSettings.country);
                    articleLink = win.ean.utils.replaceParam(articleLink, "dsp", adSettings.dsp);

                }
                articleLink = eaNative.utils.replaceCreativeMacros(articleLink,adSettings);

                data.settings.tags.encoded_article_link = encodeURIComponent(articleLink);
                data.settings.tags.encoded_title = encodeURIComponent(data.settings.tags.title);
                data.settings.tags.article_link = articleLink;
                data.settings.tags.ah = data.settings.ah;
                data.settings.tags.share_page_url = encodeURIComponent(URLPaths.sharePageUrl
                    .replace("{ah}",data.settings.ah)
                    .replace("{encoded_article_link}",data.settings.tags.encoded_article_link)
                    .replace("{share_page_domain_url}",
                        win.ean.utils.replaceDiacritics(String(data.settings.tags.brand_name)).replace(/[^\w\s]/gi, '').replace(/ /g,"-").toLowerCase()+
                            "."+(data.settings.sharer_domain||URLPaths.defaultSharePageUrl)));

                if(clickTAG){
                    articleLink = adSettings.clickTAG + encodeURIComponent(articleLink);
                    data.settings.tags.brand_url =  adSettings.clickTAG
                        + encodeURIComponent(data.settings.tags.brand_url);
                }
                data.settings.tags.link = articleLink;

				var method = templateData.method || placementData.method;

                if(Object.prototype.toString.call(selector) !== '[object Array]'){
					selector = [selector];
				}
				if(Object.prototype.toString.call(template) !== '[object Array]'){
					template = [template];
				}

				if(Object.prototype.toString.call(method) !== '[object Array]'){
					method = [method];
				}

				var toString = Object.prototype.toString;
				for(var i in data.settings.tags){
					var tagValue = data.settings.tags[i];

                    if(toString.call(tagValue) === "[object String]") {
                        tagValue = eaNative.utils.replaceCreativeMacros(tagValue, adSettings);
                    }
                    if(toString.call(tagValue) === "[object Array]") {
						var validValues = [];
						for(var v=0;v<tagValue.length;v++){
							if(tagValue[v] && tagValue[v]!=null&& tagValue[v]!=="null"){
								validValues.push({value:tagValue[v],position:v});
							}
						}
						var tagIndex = Math.floor(Math.random()*validValues.length*0.999999999);
						tagValue = validValues[tagIndex].value;
						if(template.join().indexOf("{"+i+"}")!=-1){
							eaNative.tagsIndexes[i]= tagValue;
							var track = {ih:tagValue};
							switch (i){
								default:
									track.eis = 102;
									break;
							}
							eaNative.viewsTrack.push(track);
						}
					}

					if(templateData.images_size && tagValue!==""){
						if(templateData.images_size[i]){

                            var hash = tagValue;
                            if(data.settings.adnx.dsp!="a"){
                                var encodedTagValue = B64.encode(tagValue);
                                hash = win.ean.utils.base64url_encode(encodedTagValue);

                                data.settings.tags["original_"+i] = tagValue;
                            }else{
                                data.settings.tags["original_"+i] = URLPaths.originalImagesPath.replace("{hash}",tagValue);
                            }
							data.settings.tags["hash_"+i] = hash;

							var scaleMode = defaultImageScaleMode [i] ||defaultImageScaleMode.defaultScale;
                            if(data.settings.adnx.dsp=="criteo") {
                                scaleMode = 'scalebox';
                            }
							else if(templateData.images_scalemode && templateData.images_scalemode[i]){
								scaleMode = templateData.images_scalemode[i];
							}
							tagValue = eaNative.getURLPath("imagesPath",data.settings.adnx.dsp).replace("{hash}",hash).replace("{wxh}",templateData.images_size[i]).replace("{scalemode}",scaleMode);
						}
					}
					data.settings.tags[i] = tagValue;
				}


				for(var i=0;i<selector.length;i++){
                    win.ean.utils.replaceHtml(template[i], data.settings, selector[i],method[Math.min(i, method.length-1)],placementData,templateData );
				}
				data.settings.performance = eaNative.tagsIndexes;

			}
			this.trackEvent({v:[{es:trackingEvents.general}],ev:eaNative.viewsTrack}, data.settings,false);
			//add events

			if(data.settings.type =="native"){
				var self = this;

                data.settings.tags.expanded_summary = win.ean.utils.replaceParam (data.settings.tags.expanded_summary, "CACHEBUSTER", Math.floor(Math.random()*100000));
                if(data.settings.adnx) {
                    data.settings.tags.expanded_summary = win.ean.utils.replaceParam(data.settings.tags.expanded_summary, "CLICK_URL_ENC", encodeURIComponent(data.settings.adnx.clickTAG));
                }

				var summaryTags = win.document.querySelectorAll(".ea_summary,.ea_expanded_summary");
				for(var i=0;i<summaryTags.length;i++){
					var element = summaryTags[i];
					if(!element.getAttribute("data-ea-parsed")){
						element.setAttribute("data-ea-parsed", "true");
						element.setAttribute("data-vid", data.settings.vid);
					}
				}

                var expandLinksNoHide = win.document.querySelectorAll(".ea_expand,.ea_expand_hide");

                if (String(data.settings.tags.expanded_content_type)!=='none' && String(placementData.expandable)==='true'  && String(placementData.accept_auto_expandable)!='false' && String(data.settings.tags.autoexpand_content_type)==='true') {
                    data.settings.expand_status = true;
                    eaNative.clickExpandHide(data.settings);

                }
				for(var i=0;i<expandLinksNoHide.length;i++){
					var element = expandLinksNoHide[i];
					if(!element.getAttribute("data-ea-parsed")){

						element.setAttribute("data-ah", data.settings.ah);
						element.setAttribute("data-vid", data.settings.vid);
						element.setAttribute("data-pid", placementData.pid);
                        element.setAttribute("data-ea-content", data.settings.tags.content_type);
						if(!data.settings.tags.expanded_summary || String(data.settings.tags.expanded_content_type)==='none'){
							element.setAttribute("class",element.getAttribute("class")+ " ea_link");
							continue;
						}
						element.setAttribute("data-ea-parsed", "true");

                        var expandHandler = function (ev){
                            if(!ev)ev = window.event;

                            var vid = this.getAttribute("data-vid");
                            var adSettings = eaNative.nativeAdsSourceByVid[vid];
                            if(adSettings.expand_status!=true) {
                                eaNative.clickExpandHide(adSettings);
                                adSettings.expand_status = true;
                                self.trackEvent({ev:[{a:trackingEvents.click,es:trackingEvents.general}]}, adSettings);
                                eaNative.trackClickTag(adSettings);
                            }else{
                                if(ev.type =="click" || ev.type =="touchend") {
                                    if(this.getAttribute("href") == adSettings.tags.link){
                                        if(win.location.hostname!=win.ean.utils.getURLHostname(adSettings.tags.article_link)){
                                            this.setAttribute("target", "_blank");
                                        }
                                    }
                                    eaNative.processLinkClickAction(this);
                                }
                            }

                            if(ev) {

                                if (ev.preventDefault) {
                                    ev.preventDefault();
                                }
                                else {
                                    ev.returnValue = false;

                                }
                            }
                            return false;
                        };
                        element.onclick = element.ontouchend = expandHandler;
                        if(data.settings.tags.autoexpand_content_type == "hover" && String(placementData.accept_auto_expandable)!='false'){
                            element.onmouseover = expandHandler;
                        }
					}
				}
                var expandLinksClose = win.document.querySelectorAll(".ea_expand_close");
                for(var i=0;i<expandLinksClose.length;i++){
                    var element = expandLinksClose[i];
                    if(!element.getAttribute("data-ea-parsed")){

                        element.setAttribute("data-ah", data.settings.ah);
                        element.setAttribute("data-vid", data.settings.vid);
                        element.setAttribute("data-pid", placementData.pid);

                        element.setAttribute("data-ea-parsed", "true");
                        element.onclick = element.ontouchend= function (ev){
                            if(!ev)ev = window.event;

                            var ah = this.getAttribute("data-ah");
                            var vid = this.getAttribute("data-vid");
                            var pid = this.getAttribute("data-pid");
                            var adSettings = eaNative.nativeAdsSourceByVid[vid];
                            var placementData = eaNative.placementsById[pid];

                            var summaryContainer = win.document.querySelector(".ea_summary[data-vid='"+adSettings.vid+"']");
                            if(summaryContainer){
                                var maxChar = null;
                                if(placementData&& placementData.template && placementData.template.max_chars && placementData.template.max_chars["summary"]){
                                    maxChar = placementData.template.max_chars["summary"];
                                }

                                summaryContainer.innerHTML = win.ean.utils.strip(adSettings.tags.summary,maxChar);
                            }


                            var expandLink = win.document.querySelector(".ea_expand_hide[data-vid='"+adSettings.vid+"']");
                            if (expandLink) {expandLink.style.display ="";}

                            this.style.display ="none";

                            var expandedSummaryContainer = win.document.querySelector(".ea_expanded_summary[data-vid='"+adSettings.vid+"']");
                            if(expandedSummaryContainer){
								expandedSummaryContainer.innerHTML = "";
								expandedSummaryContainer.style.display="none";
							}
                            adSettings.expand_status = false;

                            if(ev&&ev.preventDefault){
                                ev.preventDefault();
                            }
                            else {
                                ev.returnValue = false;
                            }
                            return false;
                        };

                    }
                }
				var links = win.document.querySelectorAll(".ea_link");
				for(var i=0;i<links.length;i++){
					var element = links[i];
					if(!element.getAttribute("data-ea-parsed")){
						element.setAttribute("data-ea-parsed", "true");
						element.setAttribute("data-ea-content", data.settings.tags.content_type);
						element.setAttribute("data-ah", data.settings.ah);
						element.setAttribute("data-vid", data.settings.vid);
						element.setAttribute("data-pid", placementData.pid);
                        if (data.settings.adnx && data.settings.adnx.dsp=="twenga") {
                            element.setAttribute("rel","nofollow");
                        }

						if(data.settings.tags.content_type=="content_link"){
							element.setAttribute("target", "_blank");
						}
                        var mainEvent = "onclick";
                        if(element.getAttribute("href") == data.settings.tags.link){
                            if(win.location.hostname!=win.ean.utils.getURLHostname(data.settings.tags.article_link)){
                                element.setAttribute("target", "_blank");
                            }
                        }
                        if(data.settings.tags.content_type== "overlay_content" && element.getAttribute("href") != data.settings.tags.brand_url){
                            element.setAttribute("oncontextmenu", "return false");
                            element.oncontextmenu = function(ev){
                                if(ev&&ev.preventDefault){
                                    ev.preventDefault();
                                }
                                return false;
                            }
                            mainEvent = "onmousedown";
                        }

						element[mainEvent]=element.ontouchend= function(ev){
                            if(!ev)ev = window.event;

                            eaNative.processLinkClickAction(this);
                            if(ev&&ev.preventDefault){
                                ev.preventDefault();
                                ev.stopPropagation();
                            }
                            else {
                                ev.returnValue = false;
                            }
							return false;
						}
					}
				}
                eaNative.measureAndSendSizeEvent(adSettings);
			}
			var shares = win.document.querySelectorAll(".ea_share");
			for(var i=0;i<shares.length;i++){
				var element = shares[i];
               	if(!element.getAttribute("data-ea-parsed")){
					element.setAttribute("data-ea-parsed", "true");
					element.setAttribute("data-ah", data.settings.ah);
					element.setAttribute("data-vid", data.settings.vid);
					element.setAttribute("data-pid", placementData.pid);

					element.onclick = element.ontouchend= function (ev){
                        if(!ev)ev = window.event;

                        var ah = this.getAttribute("data-ah");
						var vid = this.getAttribute("data-vid");
						var pid = this.getAttribute("data-pid");
                        var adSettings = eaNative.nativeAdsSourceByVid[vid];

                        eaNative.trackEvent({ev:[{a:trackingEvents.click,es:trackingEvents.general}]}, adSettings);
                        eaNative.trackClickTag(adSettings);
						this.setAttribute("target", "_blank");

						switch(this.getAttribute("data-eashare")){
							default :
								return;
								//openURL(this.href,"_blank");
							break;
							case "facebook":
							case "gplus":
                                win.ean.utils.openURL(this.href, "_blank",null, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
							break;
						}
                        if(ev&&ev.preventDefault){
                            ev.preventDefault();
                        }
                        else {
                            ev.returnValue = false;
                        }
						return false;
					}

				}
			}
            for(var tagName in data.settings.tags){
                if(!data.settings.tags[tagName] || (data.settings.tags["hash_"+tagName]!=undefined && data.settings.tags["hash_"+tagName]=="")){
                    var tagElements = win.document.querySelectorAll(".ea_hide_"+tagName);
                    for(var i=0;i<tagElements.length;i++){
                        var element = tagElements[i];
                        if(element && !element.getAttribute("data-ea-hide-parsed")){
                            element.setAttribute("data-ea-hide-parsed", "true");

                            element.style.display = "none";
                        }
                    }
                }
            }
            var images = win.document.querySelectorAll(".ea_image");
			for(var i=0;i<images.length;i++){
                var img = images[i];
                if(!img.getAttribute("data-ea-parsed")) {
                    if (placementData.video_teaser && data.settings.tags['video_url']) {
                        if (img.className.indexOf('ea_image_video')>-1) {
                            img.parentNode.removeChild(img);
                            continue;
                        }
                    }
                    img.setAttribute("data-ea-parsed", "true");
                    img.setAttribute("data-ea-dsp", data.settings.adnx.dsp);
                    if (!img.complete) {
                        img.onerror = function () {
                            var src = this.getAttribute("src");
                            var hashStart = src.indexOf("image/") + 6;
                            var hashEnd = src.indexOf("/", hashStart);
                            var hash = src.substring(hashStart, hashEnd);
                            var dsp = this.getAttribute('data-ea-dsp');

                            var sizeArr = src.split("-");
                            var size = sizeArr[sizeArr.length - 1];
                            var scaleMode = sizeArr [0].split("/");
                            scaleMode = scaleMode[scaleMode.length - 1];

                            if (hash && size && scaleMode) {
                                this.setAttribute("src", eaNative.getURLPath("resizeServerImagesPath",dsp).replace("{hash}", hash).replace("{wxh}", size).replace("{scalemode}", scaleMode));
                            }
                            this.onerror = null;
                        };
                    }
                }
			}
            var videos =  win.document.querySelectorAll(".ea_video_vast");
            videos.length>0 && eaNative.startPostMessageTracking(data.settings);
            for(var i=0;i<videos.length;i++){
                var video = videos[i];
                if(!video.getAttribute("data-ea-parsed")) {
                    if (!(placementData.video_teaser && data.settings.tags['video_url'])) {
                        video.parentNode.removeChild(video);
                        continue;
                    }
                    video.setAttribute('data-ea-parsed','true');
                    video.setAttribute("data-ah", data.settings.ah);
                    video.setAttribute("data-vid", data.settings.vid);
                    video.setAttribute("data-pid", placementData.pid);
                    video.innerHTML = eaNative.getHTMLTag(data.settings.tags,"video_url", data.settings.vid);
                    eaNative.addVastVideosForScrollingChecking(video);
                }
            }
			var scripts = win.document.querySelectorAll("[data-eascript=true]");
			eaNative.parseScripts(scripts);

			if(data.settings.type=="article"){
				var useBackground = data.settings.tags.use_skin_background ;
				if(String(useBackground)==="true"){
					var headImage = data.settings.tags.hash_skin_head_image;
					var leftImage = data.settings.tags.hash_skin_left_image;
					var rightImage = data.settings.tags.hash_skin_right_image;

					var isImageAvailable = function(image){
						if(image && image.length){
							return true;
						}
						return false;
					};
					if(isImageAvailable(headImage)||isImageAvailable(leftImage)||isImageAvailable(rightImage)){
						var skinContainer = win.document.querySelector(".ea_background_skin");
						if(skinContainer){
							skinContainer.style.display = "block";

                            var headImage = data.settings.tags.original_skin_head_image;
                            var img = new Image();
                            img.onload = function(){
                                var headContainer = win.document.querySelector(".ea_background_skin .ea_skin_head");

                                if(headContainer)
                                    headContainer.style.height = img.height + "px";
                            }
                            img.src = headImage;
						}
					}
                    win.document.body.style.background = data.settings.tags.skin_bgcolor;
				}
			}
		}
	}

	eaNative.processLinkClickAction = function(element){
        var ah = element.getAttribute("data-ah");
        var href = element.getAttribute("href");
        var target = element.getAttribute("target");
        var vid = element.getAttribute("data-vid");
        var pid = element.getAttribute("data-pid");
        var contentType = element.getAttribute("data-ea-content");
        var adSettings = eaNative.nativeAdsSourceByVid[vid];
        eaNative.trackEvent({ev:[{a:trackingEvents.click,es:trackingEvents.general}]}, adSettings);

        if(href == adSettings.tags.brand_url){
            contentType = "";
            target = "_blank";
        }

        if(contentType=="content_link" ){
            target = "_blank";
        }

        switch (contentType){
            default :
                if(target =="_blank"){
                    win.ean.utils.openURL(href,target);
                }else{
                    setTimeout(function(){
                        win.ean.utils.openURL(href,target);
                    }, 500);
                }
                break;
            case "overlay_content":
                var overlayContainer = eaNative.getOverlayContainer(vid);
                overlayContainer.innerHTML =eaNative.getHTMLTag(adSettings.tags,"overlay_content");

                eaNative.trackEvent({v:[{es:trackingEvents.general}]}, adSettings);
                eaNative.trackClickTag(adSettings);

                eaNative.parseScripts(overlayContainer.children);

                if(win.document.body && win.document.body.parentElement){
                    win.document.body.style.overflow  = win.document.body.parentElement.style.overflow =  "hidden";
                }
                if(adSettings.adnx.isInPreview) {
                    eaNative.sendSizeEvent(doc.body.offsetWidth, Math.max(400, doc.body.offsetHeight));
                }

                break;

        }
    }
	eaNative.placementDefaultCreativeHandler = function(settings){
        var placementData = eaNative.placementsByAPXID [settings.id];

        if(placementData) {
            var default_creative = JSON.parse(placementData.default_creative);
            if (placementData && placementData.default_creative && default_creative) {
                var selector = placementData.template.selector;
                if (Object.prototype.toString.call(selector) === '[object Array]') {
                    selector = selector[0];
                }
                var method = placementData.template.method || placementData.method;
                if (Object.prototype.toString.call(method) === '[object Array]') {
                    method = method[0];
                }
                var htmlSettings = {};
                htmlSettings.tags = {};


                var content = default_creative.code;
                if (default_creative.type == "raw-js") {
                    var scr = doc.createElement('script');
                    scr.setAttribute('type', 'text/javascript');
                    scr.text = content;
                    var head = doc.getElementsByTagName('head')[0];
                    if (head) {
                        head.appendChild(scr);
                    }
                } else {
                    content = win.ean.utils.parseContent(content);
                    win.ean.utils.replaceHtml(content, htmlSettings, selector, method, placementData, placementData.template);

                    var scripts = win.document.querySelectorAll("[data-eascript=true]");
                    eaNative.parseScripts(scripts);
                }
            }
        }
    }
	eaNative.getHTMLTag = function(tags, tagName, other){
        other = other === undefined ? "" : other;
        var contentType = "";
        var style="";
        var path = "vastEmbed";
        var tagValue = tags[tagName];
        tagValue = tagValue.replace(/\{UNIQUE_ID\}/g , "id-"+win.ean.utils.getRand());

        var vastMinHeight="min-height: 315px;";
        switch (tagName){
            case "expanded_summary":
                if(tags.expanded_content_type =="vast"){
                    contentType = "vast";
                    style = "max-height:315px";
                }
            break;
            case "internal_content_link":
                contentType = "external_url";
                if(tags.internal_content_link_height!="auto"){
                    style = "height:" + tags.internal_content_link_height +"px";
                }
            break;
            case "overlay_content":
                if(tags.overlay_content_type =="vast"){
                    contentType = "vast";
                    style = "max-width:640px;max-height:380px";
                }
            break;
            case "video_url":
                contentType = "vast";
                style= "";
                vastMinHeight = "";
                path = "vastTeaser";
                other = other !== "" ? '&vid='+other : '';
            break;
        };
        switch (contentType){
            case "external_url":
                var iOS = eaNative.utils.isIOS();
                var scrolling = (iOS || tags.internal_content_link_height=="auto") ?"no":"auto";
                var html_code = '<iframe id="ean_external_embed" frameborder="0" width ="100%" height="315px" style="width:1px; min-width:100%;min-height: 315px;'+style+'" allowfullscreen="true" mozallowfullscreen="true" scrolling="'+scrolling+'" src="'+tags.internal_content_link+'"></iframe>';
                if(tags.internal_content_link_height =="auto"){
                    html_code += '<scr'+'ipt>function listener(event){ if ( String(event.data).indexOf("ean_internal_height_") ==-1)return; var newHeight = String(event.data).substr(20) ;var iFrameContainer = document.getElementById("ean_external_embed"); if(Math.abs(iFrameContainer.offsetHeight-newHeight)<10)return ; iFrameContainer.style.height = newHeight+ "px";} if (window.addEventListener){ addEventListener("message", listener, false)} else {attachEvent("onmessage", listener)} </scr'+'ipt>';
                }
                return html_code;
                break;
            case "vast":
            return '<iframe frameborder="0" width ="100%" height="100%" style="'+vastMinHeight+style+'" allowfullscreen="true" mozallowfullscreen="true" src="'+URLPaths[path]+encodeURIComponent(tagValue)+other+'"></iframe>';
                break;
            default :
        return tagValue;
                break;
        }
    };
	eaNative.parseScripts = function(scripts){
        var scriptsToProcess = [];
        for(var i= 0, scriptsLength = scripts.length;i<scriptsLength;i++){
            var oldScript = scripts[i];
            if(oldScript && String(oldScript.tagName).toUpperCase()=="SCRIPT" && !oldScript.getAttribute("data-eaparsed") ){
                scriptsToProcess.push(oldScript);
            }
        }
        for(var i= 0, scriptsLength = scriptsToProcess.length;i<scriptsLength;i++){
			var oldScript = scriptsToProcess[i];
            if(oldScript && String(oldScript.tagName).toUpperCase()=="SCRIPT" && !oldScript.getAttribute("data-eaparsed") ){
				var newScript = win.document.createElement("script");
				newScript.type = "text/javascript";
                oldScript.parentElement.appendChild(newScript);
                oldScript.parentElement.removeChild(oldScript);
                var attributes = oldScript.attributes;
                for(var a=0;a<attributes.length;a++){
                    newScript.setAttribute(attributes[a].name,attributes[a].value);
                }

                newScript.setAttribute("data-eaparsed", true);
                if(oldScript.src)
					newScript.src = oldScript.src;
				else{
					newScript.text = oldScript.innerHTML;
				}

			}
		}
	}
	eaNative.closeOverlayContent = function(){
		var container = win.document.getElementById("ea-overlay-content");
		if(container){
            container.style.display = "none";
        }
		if(win.document.body && win.document.body.parentElement)
			win.document.body.style.overflow  = win.document.body.parentElement.style.overflow = "";
		if(container && container.parentNode) {
			container.parentNode.removeChild(container);
        }
        var vid = container.getAttribute('data-vid');
        var adSettings = eaNative.nativeAdsSourceByVid[vid];
        eaNative.measureAndSendSizeEvent(adSettings.adnx);

	}
	eaNative.getOverlayCloseButton = function(){
		var closeButton = win.document.createElement("div");
		closeButton.innerHTML = "<div style ='background: url(https://de5zarwna0j2q.cloudfront.net/site/images/videoCloseBtn.png); width: 16px; height: 16px; '></div>"
		closeButton.setAttribute("style", "position:absolute; z-index:12234;right:10px;top:10px; opacity: 0.7;cursor: pointer;padding:14px; ");
		closeButton.onmouseover = function(){
			closeButton.style.opacity = "1";
		}
		closeButton.onmouseout = function(){
			closeButton.style.opacity = "0.7";
		}
		closeButton.onclick = function(){
            eaNative.closeOverlayContent();
		}
		return closeButton;
	}
	eaNative.getOverlayContainer = function(vid){
		var container = win.document.getElementById("ea-overlay-content");
		if(!container){
			container = win.document.createElement("div");
			container.innerHTML = "<div id='ea-overlay-wrapper' style='display: table;width:100%;height:100%;'><div id='ea-overlay-inner-container' oncontextmenu='return false' style='display: table-cell;vertical-align: middle;text-align: center;width:100%;height:100%;'></div></div>";
			container.setAttribute("id","ea-overlay-content");
			container.setAttribute("style","display:block;position:fixed;z-index: 3147483656;width:100%;height:100%;top:0;left:0;background:#000;background:rgba(0,0,0,0.8);");

			container.appendChild(eaNative.getOverlayCloseButton());
		}
        container.setAttribute('data-vid',vid);
		var wrapper =container.children[0];
		container.onclick = function(ev){

			if(!ev) ev = window.event;
			var target = ev.target;
			if(!target) target = ev.srcElement;
			if(target==container.children[0]||target==wrapper.children[0]){
				eaNative.closeOverlayContent();

				return false;
			}
		}
		win.document.body.appendChild(container);

		return wrapper.children[0];
	}

	///tracking system
	eaNative.stopUITTracking =function(){
		clearInterval(eaNative.tuitTrackingInterval);
	}
	eaNative.startUITTracking =function(vid){
		clearInterval(eaNative.tuitTrackingInterval);
		eaNative.tuitTrackingInterval = setInterval(function(){
			eaNative.trackUITEvent(vid);
		},1000);
	}
	eaNative.trackUITEvent =function(vid ){
		eaNative.uit +=eaNative.uitInterval;
		if(eaNative.uit>60000){
			eaNative.uitInterval = 10000;
		}else if(eaNative.uit>30000){
            eaNative.uitInterval = 50000;
        };
        var adSettings = eaNative.nativeAdsSourceByVid[vid];
		this.trackEvent({vst:[{es:trackingEvents.general,tuit:eaNative.uitInterval}]}, adSettings,false);
	}

    eaNative.trackEvent =function( data, adSettings, isEventTracking, formatTypeId){
        "use strict";
        if(!adSettings){
            if (win.console && win.console.log) {
                win.console.log('EA Error: - tracking failed');
            }
            return;
        };
        if (adSettings.adnx && eaNative.isIntegrationDSP(adSettings.adnx.dsp)) {
            return;
        }
        if(!formatTypeId){
            formatTypeId = formatType[adSettings.type];
        }
        var trackedEvents = {};
        trackedEvents.h = "nuid." + EAdConfig.uid + "." + adSettings.vid;
        trackedEvents.type = data;
        trackedEvents.ft = formatTypeId;
        trackedEvents.ch = adSettings.ah;
        trackedEvents.uid = EAdConfig.uid;
        trackedEvents.pid = adSettings.pid;
        trackedEvents.dsp = adSettings.adnx.dsp;

        var adnx = adSettings;

        if(adSettings.adnx) {
            adnx = adSettings.adnx;
        }
        trackedEvents.feac = String(adnx.feac) === "true" ? 1 : 0;
        trackedEvents.country = adnx.country;
        trackedEvents.pubid = adnx.pubid;
        trackedEvents.sid = adnx.sid;
        trackedEvents.cpid = adnx.cpid;


        if(adSettings.performance && !win.ean.utils.isEmpty(adSettings.performance))
            trackedEvents.performance = {type:(isEventTracking ==false ? "v":"ev"),data:adSettings.performance};

        if(EAdConfig.debug==true) {
            if (win.console && win.console.log) {
                win.console.log("TRACK:", trackedEvents, adSettings);
            }
        }
        var source = (URLPaths.trackingURL)+"?trk="+B64.encode(JSON.stringify(trackedEvents));
        this.createNewPixel(source);
    }
	eaNative.createNewPixel=function(source, onComplete,onError){
		"use strict";

		var type = "script";
		var pixelElement =win.document.createElement(type);
		pixelElement.setAttribute("type","text/javascript")
		pixelElement.setAttribute("src", source);
		win.document.body.appendChild(pixelElement);
	}
	eaNative.setUID = function(uid){
		if(!EAdConfig.uid && uid){
			EAdConfig.uid = uid || 0;
		}
	}
    eaNative.loadPlacementData = function(){
        var articleId = win.ean.utils.getParameterByName ("ean-article-id");
        var articlePID = win.ean.utils.getParameterByName ("ean-article-pid");
        if(articleId&&articlePID){
            win.ean.utils.loadPlacementConfig(URLPaths.articlePlacemensConfigURL);
        }
        win.ean.utils.loadPlacementConfig(URLPaths.nativePlacementsConfigURL);
    }
    eaNative.init = function(){

        if(eaNative.initialized==true)return;


        eaNative.initialized = true;
        eaNative.setUID(win.ean.utils.getParameterByName("ean-uid"));
        eaNative.loadPlacementData();


    }
    eaNative.removePlacementForScrollingChecking = function(placement) {
        if(eaNative.placementsNotVisible.length>0){
            for(var i in eaNative.placementsNotVisible){
                if(eaNative.placementsNotVisible[i]==placement){
                    eaNative.placementsNotVisible.splice(i,1);
                    break;
                }
            }
        }
        if(eaNative.placementsNotVisible.length ==0) {
            win[rem](pre + "scroll", eaNative.windowScrollHandler, false);
        }
    }
    eaNative.addPlacementForScrollingChecking = function(placement) {
        var placementAlreadyExist = false;
        if(eaNative.placementsNotVisible.length>0){
            for(var i in eaNative.placementsNotVisible){
                if(eaNative.placementsNotVisible[i]==placement){
                    placementAlreadyExist= true;
                }
            }
        }
        if(placementAlreadyExist==false){
            eaNative.placementsNotVisible.push(placement);
        }
        win.clearInterval(eaNative.checkPlacementVisibilityInterval);
        if(eaNative.placementsNotVisible.length>0 && placement.template.check_visibility_with_interval ==true){
            eaNative.checkPlacementVisibilityInterval = win.setInterval(eaNative.checkPlacementsNotVisibleHandler,100);
        }
        win[eaNative.placementsNotVisible.length>0?add:rem](pre + "scroll", eaNative.windowScrollHandler, false);

    }
    eaNative.windowScrollHandler = function() {
        win.clearTimeout(eaNative.placementCheckScrollInterval);
        eaNative.placementCheckScrollInterval = win.setTimeout(eaNative.checkPlacementsNotVisibleHandler, 100);
    }
    eaNative.checkPlacementsNotVisibleHandler = function() {
        if(eaNative.placementsNotVisible.length>0){
            eaNative.initPlacement(eaNative.placementsNotVisible);
        }
    }
    eaNative.removeVastVideosForScrollingChecking = function(vastvideo) {
        if(eaNative.videosOnAutoPlay.length>0){
            for(var i in eaNative.videosOnAutoPlay){
                if(eaNative.videosOnAutoPlay[i] === vastvideo){
                    eaNative.videosOnAutoPlay.splice(i,1);
                    break;
                }
            }
        }
        if(eaNative.videosOnAutoPlay.length ==0) {
            win[rem](pre + "scroll", eaNative.windowVideoScrollHandler, false);
        }
    };
    eaNative.addVastVideosForScrollingChecking = function(vastvideo) {
        var vastvideoAlreadyExist = false;
        if(eaNative.videosOnAutoPlay.length>0){
            for(var i in eaNative.videosOnAutoPlay){
                if(eaNative.videosOnAutoPlay[i]===vastvideo){
                    vastvideoAlreadyExist = true;
                }
            }
        }
        if(vastvideoAlreadyExist === false){
            eaNative.videosOnAutoPlay.push(vastvideo);
        }
        win[eaNative.videosOnAutoPlay.length>0?add:rem](pre + "scroll", eaNative.windowVideoScrollHandler, false);
    };
    eaNative.windowVideoScrollHandler = function() {
        win.clearTimeout(eaNative.vastVideosCheckScrollInterval);
        eaNative.vastVideosCheckScrollInterval = win.setTimeout(eaNative.checkVastVideosNotVisibleHandler, 100);
    };
    eaNative.checkVastVideosNotVisibleHandler = function() {
        if(eaNative.videosOnAutoPlay.length>0){
            for (var i=0; i<eaNative.videosOnAutoPlay.length;i++){
                var vid = eaNative.videosOnAutoPlay[i].getAttribute('data-vid');
                if(win.ean.utils.isElementVisiblePercent(eaNative.videosOnAutoPlay[i],50)
                   && eaNative.videosOnAutoPlay[i].querySelector('iframe').contentWindow){
                    eaNative.videosOnAutoPlay[i].querySelector('iframe').contentWindow.postMessage('ea_video_play|'+vid, '*');
                } else if (eaNative.videosOnAutoPlay[i].querySelector('iframe').contentWindow){
                    eaNative.videosOnAutoPlay[i].querySelector('iframe').contentWindow.postMessage('ea_video_pause|'+vid, '*');
                }
            }
        }
    };
    eaNative.startPostMessageTracking = function() {
        function receiveMessage(event) {
            if (!event.data || !event.data.indexOf || event.data.indexOf('ea_track_') < 0) {
                return;
            }
            var vid = event.data.split('|')[1];
            var adSettings = eaNative.nativeAdsSourceByVid[vid];
            eaNative.trackEvent({ev:[{a:trackingEvents.click,es:trackingEvents.general}]}, adSettings);
            eaNative.trackClickTag(adSettings);
        }
        if(window.addEventListener) {window.addEventListener("message", receiveMessage, false);}
        else {window.attachEvent("message", receiveMessage);}
    };
    eaNative.clickExpandHide = function(adSettings) {
        var closeButton = win.document.querySelector(".ea_expand_close[data-vid='"+adSettings.vid+"']");
        if(closeButton!=null){
            closeButton.style.display="block";
        }

        var summaryContainer = win.document.querySelector(".ea_summary[data-vid='"+adSettings.vid+"']");
        if(summaryContainer){
            summaryContainer.innerHTML = adSettings.tags.summary ;
        }

        var expandedSummaryContainer = win.document.querySelector(".ea_expanded_summary[data-vid='"+adSettings.vid+"']");
        if(expandedSummaryContainer){
            expandedSummaryContainer.innerHTML = eaNative.getHTMLTag(adSettings.tags,"expanded_summary");
            expandedSummaryContainer.style.display="";

            eaNative.parseScripts(expandedSummaryContainer.children);
        }

        var expandLinks = win.document.querySelectorAll(".ea_expand_hide[data-vid='"+adSettings.vid+"']");
        for (var i=0; i<expandLinks.length; i++) {
            expandLinks[i].style.display = "none";
        }

        eaNative.trackEvent({v:[{es:trackingEvents.general}]}, adSettings, false, formatType.expanded);
        eaNative.measureAndSendSizeEvent(adSettings.adnx);
    }
    eaNative.sendSizeEvent = function(w, h){
        if(win.parent){
            win.parent.postMessage('size_'+w + "x"+h,'*');
        }
    }
    eaNative.measureAndSendSizeEvent = function(adSettings){
        if((String(adSettings.isInPreview)=="true" || String(adSettings.isInPreview)=="1")  && win.parent){

            var selector = adSettings.placementConfig.template.selector;

            if(Object.prototype.toString.call(selector) !== '[object Array]'){
                selector = [selector];
            }
            var adContainer = null;
            for(var i in selector){
                adContainer = doc.querySelector(selector[i]);
                if(adContainer!=null)break;
            }
            if(adContainer) {
                eaNative.sendSizeEvent(adContainer.offsetWidth, adContainer.offsetHeight);
            }
        }
    }
    eaNative.isIntegrationDSP = function(dsp) {
        var dspList = "_rp,_criteo,_twenga";
        return dspList.indexOf('_'+dsp) >= 0 ? true : false;
    };
    eaNative.hasDSPLoadExtras = function(dsp) {
        var dspList = "_criteo,_twenga";
        return dspList.indexOf('_'+dsp) >= 0 ? true : false;
    };

    eaNative.callShtPixels = function() {
        /*var retargetingShtPixels = doc.createElement('iframe');
        retargetingShtPixels.name = '_rlcdn';
        retargetingShtPixels.width = 0;
        retargetingShtPixels.height = 0;
        retargetingShtPixels.frameborder = 0;
        retargetingShtPixels.src = 'https://rc.rlcdn.com/400476.html';
        doc.body.appendChild(retargetingShtPixels);*/

        /*var retargetingShtPixels2 = doc.createElement('iframe');
        retargetingShtPixels2.style.visibility = 'hidden';
        retargetingShtPixels2.width = 0;
        retargetingShtPixels2.height = 0;
        retargetingShtPixels2.src = 'https://tag.leadplace.fr/wckr.php?id=HIM2';
        doc.body.appendChild(retargetingShtPixels2);*/
    };

	//bsae64 --------------------------------------------------------------------------------------------------
	var B64 = {
		alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
		lookup: null,
		ie: /MSIE /.test(navigator.userAgent),
		ieo: /MSIE [67]/.test(navigator.userAgent),
		encode: function (s) {
			var buffer = B64.toUtf8(s),
				position = -1,
				len = buffer.length,
				nan1, nan2, enc = [, , , ];
			if (B64.ie) {
				var result = [];
				while (++position < len) {
					nan1 = buffer[position + 1], nan2 = buffer[position + 2];
					enc[0] = buffer[position] >> 2;
					enc[1] = ((buffer[position] & 3) << 4) | (buffer[++position] >> 4);
					if (isNaN(nan1)) enc[2] = enc[3] = 64;
					else {
						enc[2] = ((buffer[position] & 15) << 2) | (buffer[++position] >> 6);
						enc[3] = (isNaN(nan2)) ? 64 : buffer[position] & 63;
					}
					result.push(B64.alphabet[enc[0]], B64.alphabet[enc[1]], B64.alphabet[enc[2]], B64.alphabet[enc[3]]);
				}
				return result.join('');
			} else {
				result = '';
				while (++position < len) {
					nan1 = buffer[position + 1], nan2 = buffer[position + 2];
					enc[0] = buffer[position] >> 2;
					enc[1] = ((buffer[position] & 3) << 4) | (buffer[++position] >> 4);
					if (isNaN(nan1)) enc[2] = enc[3] = 64;
					else {
						enc[2] = ((buffer[position] & 15) << 2) | (buffer[++position] >> 6);
						enc[3] = (isNaN(nan2)) ? 64 : buffer[position] & 63;
					}
					result += B64.alphabet[enc[0]] + B64.alphabet[enc[1]] + B64.alphabet[enc[2]] + B64.alphabet[enc[3]];
				}
				return result;
			}
		},
		toUtf8: function (s) {
			var position = -1,
				len = s.length,
				chr, buffer = [];
			if (/^[\x00-\x7f]*$/.test(s)) while (++position < len)
				buffer.push(s.charCodeAt(position));
			else while (++position < len) {
				chr = s.charCodeAt(position);
				if (chr < 128) buffer.push(chr);
				else if (chr < 2048) buffer.push((chr >> 6) | 192, (chr & 63) | 128);
				else buffer.push((chr >> 12) | 224, ((chr >> 6) & 63) | 128, (chr & 63) | 128);
			}
			return buffer;
		}
	};


    //wait for document ready to init
	var initialized = false,
	add = doc.addEventListener ? "addEventListener" : "attachEvent",
			rem = doc.addEventListener ? "removeEventListener" : "detachEvent",
			pre = doc.addEventListener ? "" : "on";
    var isReady = function() {
        var s = doc.readyState;

        if (s === 'complete' || s  === 'loaded' ) {
            return true;
        }
        if( s != 'interactive' )
            return false;
        if( ! doc.documentElement.doScroll )
            return true;
        try {
            doc.documentElement.doScroll('left');
            return true;
        }
        catch (e) {
            return false;
        }
    }
    var isDocumentReady = function () {
		var readyState = doc.readyState;

        if(isReady()) return true;

		return  ((readyState === 'interactive' && navigator.appName.indexOf("Internet Explorer")==-1)
                    || readyState  === 'loaded' || readyState  === 'complete');

	};
	var documentLoadHandler = function(){
        if(isDocumentReady()){
            win.adnxsDomReady = true;
            doc[rem](pre + "DOMContentLoaded", documentLoadHandler, false);
			doc[rem](pre + "readystatechange", documentLoadHandler, false);
			win[rem](pre + "load", documentLoadHandler, false);

			windowReady();

            return true;
		}
        return false;
	}
	var windowReady = function () {
		if(!eaNative.ean_window_ready){
            eaNative.ean_window_ready = true;
            win.clearInterval(eaNative.ieTimeout);
            eaNative.callShtPixels();
			eaNative.init();
		}
	};
    var getIEVersion = function() {
        var rv = -1; // Return value assumes failure.
        if (navigator.appName == 'Microsoft Internet Explorer')
        {
            var ua = navigator.userAgent;
            var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat( RegExp.$1 );
        }
        return rv;
    }

	if (isDocumentReady()){
		windowReady();
	}else {
		doc[add](pre + "DOMContentLoaded", documentLoadHandler, false);
		doc[add](pre + "readystatechange", documentLoadHandler, false);
		win[add](pre + "load", documentLoadHandler, false);

        var ieVersion = getIEVersion();
        if(ieVersion>-1 && ieVersion<9){
            eaNative.ieTimeout = win.setInterval(function(){
                if(documentLoadHandler()){
                    win.clearInterval(eaNative.ieTimeout);
                };
            },500);
        }
	};


})(window, document);
