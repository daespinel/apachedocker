if (typeof(sas_scriptDomain) == "undefined") {
    sas_scriptDomain = "https://www.smartadserver.com"
}
if (typeof(sas_renderMode) == "undefined") {
    sas_renderMode = 0
}
var sas_ajax = true;
sas_callIndex = 1;
sas_delay = 20;
sas_d = document;
sas_w = window;
sas_tsn = sas_gtsf();
sas_mfb = 1;
sas_olfb = 0;
sas_fa = new Array();
sas_ta = new Array();
sas_aca = new Array();
sas_ccba = new Array();
sas_urls = new Array();
if (typeof(sas_unrenderedFormats) == "undefined") {
    sas_unrenderedFormats = new Array()
}
var icb = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;

function SmartAdServer(c, a, b) {
    if (sas_mfb == 1) {
        sas_mfb = 0;
        sas_master = "M"
    } else {
        sas_master = "S"
    }
    sas_d.write('<div id="sas_' + a + '"><script src="' + sas_scriptDomain + "/call/pubj/" + c + "/" + a + "/" + sas_master + "/" + sas_tsn + "/" + escape(b) + '?"><\/script></div>')
}

function sas_ccf(c) {
    var b = sas_gcf(c);
    myLength = b.childNodes.length;
    if ((b.childNodes != null) && (myLength > 0)) {
        for (sas_cccn = 0; sas_cccn < myLength; sas_cccn++) {
            b.removeChild(b.childNodes[0])
        }
    }
    if (sas_aca.length >= c) {
        if ((typeof(sas_aca[c]) != "undefined") && (sas_aca[c] != null)) {
            for (sas_aca_counter = 0; sas_aca_counter < sas_aca[c].length; sas_aca_counter++) {
                var a = sas_aca[c][sas_aca_counter];
                if ((typeof(a) != "undefined") && (a != null)) {
                    a.parentNode.removeChild(a)
                }
            }
            sas_aca[c] = new Array()
        }
    }
    if (sas_ccba.length >= c) {
        if (typeof(sas_ccba[c]) == "function") {
            sas_ccba[c]();
            sas_ccba[c] = null
        }
    }
}

function sas_gcf(a) {
    return sas_d.getElementById("sas_" + a)
}

function sas_appendToContainer(c, a) {
    var d = sas_gcf(c);
    if ((typeof(d) != "undefined") && (d != null) && (typeof(a) != "undefined") && (a != null)) {
        if (typeof(a) == "string") {
            var b = sas_d.createElement("div");
            b.innerHTML = a;
            a = b
        }
        d.appendChild(a);
        if (icb) {
            d.style.visibility = "hidden";
            sas_w.setTimeout("sas_fv(" + c + ")", 100)
        }
    }
}

function sas_appendScripts(a, b) {
    if (typeof(b) != "undefined") {
        for (i = 0; i < b.length; i++) {
            sas_appendToContainer(a, b[i])
        }
    }
}

function sas_fv(a) {
    var b = sas_gcf(a);
    if ((typeof(b) != "undefined") && (b != null)) {
        b.style.visibility = "visible"
    }
}

function sas_addCleanListener(b, a) {
    sas_ccba[b] = a
}

function SmartAdServerAjax(h, c, f, g) {
    if (typeof(this.sas_pageid) == "undefined") {
        this.sas_pageid = h
    }
    var e = sas_gcf(c);
    if (sas_mfb == 1) {
        sas_mfb = 0;
        sas_master = "M"
    } else {
        sas_master = "S"
    }
    sas_scripturl = g || sas_scriptDomain + "/call/pubj/" + h + "/" + c + "/" + sas_master + "/" + sas_tsn + "/" + escape(f) + "?";
    if ((typeof(e) == "undefined") || (e == null)) {
        sas_fa.push(c);
        sas_ta.push(f);
        sas_urls.push(sas_scripturl);
        if (sas_renderMode == 0) {
            sas_d.write('<div id="sas_' + c + '"></div>');
            var a = sas_createScript(c, sas_scripturl);
            var d = sas_d.getElementById("sas_" + c);
            d.appendChild(a)
        } else {
            if (sas_renderMode == 3) {
                sas_d.write('<div id="sas_' + c + '"></div>');
                var b = "sas_d.getElementById('sas_" + c + "').appendChild(sas_createScript(" + c + ", '" + sas_scripturl + "'));";
                sas_w.setTimeout(b, sas_callIndex * sas_delay);
                sas_callIndex++
            } else {
                if (sas_renderMode == 4) {
                    sas_d.write('<div id="sas_' + c + '"><script id="sas_s' + c + '" src="' + sas_scripturl + '"><\/script></div>')
                } else {
                    sas_d.write('<div id="sas_' + c + '"></div>');
                    if (sas_renderMode == 1 && !sas_olfb) {
                        sas_olfb = 1;
                        sas_addEvent(sas_w, "load", sas_callAds, false)
                    }
                }
            }
        }
    } else {
        var a = sas_createScript(c, sas_scripturl);
        sas_ccf(c);
        sas_appendToContainer(c, a)
    }
}

function SmartAdServerAjaxOneCall(h, c, g) {
    if (typeof(this.sas_pageid) == "undefined") {
        this.sas_pageid = h
    }
    var e = sas_gcf(c);
    if (sas_mfb == 1) {
        sas_mfb = 0;
        sas_master = "M"
    } else {
        sas_master = "S"
    }
    sas_fa.push(c);
    sas_ta.push(g);
    // sas_d.write('<div id="sas_' + c + '"></div>');
    if (typeof(sas_manager) != "undefined") {
        if (sas_manager.exists(c)) {
            var d = sas_manager.formats["f" + c].scriptSrc();
            var b = sas_manager.formats["f" + c].scriptType();
            var a = 0;
            var f = 0;
            if (b == "iframe") {
                a = sas_manager.formats["f" + c].scriptWidth();
                f = sas_manager.formats["f" + c].scriptHeight()
            }
            sas_render(c, d, b, a, f)
        } else {
            sas_unrenderedFormats.push(c)
        }
    } else {
        sas_unrenderedFormats.push(c)
    }
}

function sas_render(d, f, b, a, g) {
    if (sas_renderMode == 0) {
        var c;
        if (b == "iframe") {
            c = sas_createIframe(d, f, a, g)
        } else {
            c = sas_createScript(d, f)
        }
        var e = sas_d.getElementById("sas_" + d);
        e.appendChild(c)
    } else {
        if (sas_renderMode == 1 && !sas_olfb) {
            sas_olfb = 1;
            sas_addEvent(sas_w, "load", sas_callAds, false)
        }
    }
}

function sas_createIframe(c, d, a, e) {
    var b = sas_d.createElement("iframe");
    b.id = "sas_i" + c;
    b.src = d;
    b.setAttribute("width", a);
    b.setAttribute("height", e);
    b.frameBorder = "0";
    b.style.border = 0;
    b.scrolling = "no";
    b.marginWidth = "0px";
    b.marginHeight = "0px";
    b.setAttribute("vspace", 0);
    b.setAttribute("hspace", 0);
    b.setAttribute("allowtransparency", true);
    return b
}

function sas_createScript(b, c) {
    var a = sas_d.createElement("script");
    a.id = "sas_s" + b;
    a.type = "text/javascript";
    a.src = c;
    a.onreadystatechange = function() {
        if (this.readyState == "loaded") {
            sas_scriptLoadHandler(this)
        }
    };
    if ((window.opera === undefined) && ((navigator.appVersion.indexOf("MSIE 9") < 0))) {
        a.onload = sas_scriptLoadHandler
    }
    a.async = "async";
    return a
}

function sas_scriptLoadHandler(c) {
    var d;
    if (c.id !== undefined) {
        d = c.id.replace("sas_s", "")
    } else {
        if (c.target !== undefined && c.target.id !== undefined) {
            d = c.target.id.replace("sas_s", "")
        }
    } if (d != null && typeof(sas_loadHandler) != "undefined") {
        var b = sas_gcf(d);
        var a = {
            id: d
        };
        if (b != null && b.hasChildNodes() && b.childNodes.length > 1) {
            a.hasAd = true
        } else {
            a.hasAd = false
        }
        sas_loadHandler(a)
    }
}

function sas_callAds() {
    sas_callIndex = 1;
    if (sas_fa.length > 0) {
        sas_tsn = sas_gtsf();
        sas_mfb = 1;
        for (var a = 0; a < sas_fa.length; a++) {
            SmartAdServerAjax(sas_pageid, sas_fa[a], sas_ta[a], sas_urls[a])
        }
    }
}

function sas_callAd(d, e, b, a) {
    if (b === undefined) {
        b = true
    }
    if (a === undefined) {
        a = true
    }
    if (b) {
        sas_mfb = 1
    }
    if (a) {
        sas_tsn = sas_gtsf()
    }
    for (var c = 0; c < sas_fa.length; c++) {
        if (d == sas_fa[c]) {
            sas_target = sas_ta[c];
            if (typeof(e) != "undefined") {
                sas_target = e
            }
            SmartAdServerAjax(sas_pageid, sas_fa[c], sas_target)
        }
    }
}

function sas_cleanAds() {
    if (sas_fa.length > 0) {
        for (var a = 0; a < sas_fa.length; a++) {
            sas_ccf(sas_fa[a])
        }
    }
}

function sas_cleanAd(a) {
    for (i = 0; i < sas_fa.length; i++) {
        if (a == sas_fa[i]) {
            sas_ccf(sas_fa[i])
        }
    }
}

function SmartAjaxRender(a, b) {
    if ("object" == typeof(a.formats["f" + b])) {
        if (a.formats["f" + b].scriptType() == "iframe") {
            iframe = sas_d.createElement("iframe");
            iframe.setAttribute("width", a.formats["f" + b].scriptWidth());
            iframe.setAttribute("height", a.formats["f" + b].scriptHeight());
            iframe.marginWidth = "0px";
            iframe.marginHeight = "0px";
            iframe.setAttribute("vspace", 0);
            iframe.setAttribute("hspace", 0);
            iframe.scrolling = "no";
            iframe.setAttribute("frameborder", 0);
            iframe.setAttribute("allowtransparency", true);
            iframe.setAttribute("src", a.formats["f" + b].scriptSrc());
            sas_appendToContainer(b, iframe)
        } else {
            sas_script = sas_d.createElement("script");
            sas_script.setAttribute("src", a.formats["f" + b].scriptSrc());
            sas_appendToContainer(b, sas_script)
        }
    }
}

function SmartAdServerOCAjax(d, a, c) {
    var b = sas_gcf(a);
    if (sas_mfb == 1) {
        sas_mfb = 0;
        sas_master = "M"
    } else {
        sas_master = "S"
    } if ((typeof(b) == "undefined") || (b == null)) {
        sas_fa.push(a);
        sas_ta.push(c);
        sas_d.write('<div id="sas_' + a + '"></div>')
    } else {
        if (typeof sas_manager != "undefined") {
            SmartAjaxRender(sas_manager, a)
        }
    }
}

function sas_callAdsOC() {
    if (sas_fa.length > 0) {
        sas_tsn = sas_gtsf();
        sas_mfb = 1;
        for (var a = 0; a < sas_fa.length; a++) {
            SmartAdServerOCAjax(sas_pageid, sas_fa[a], sas_ta[a])
        }
    }
}

function sas_addEvent(e, b, c, a) {
    if (e.addEventListener) {
        e.addEventListener(b, c, a);
        return true
    } else {
        if (e.attachEvent) {
            var d = e.attachEvent("on" + b, c);
            return d
        } else {
            e["on" + b] = c
        }
    }
    return true
}

function sas_gtsf() {
    return Math.round(Math.random() * 10000000000)
};