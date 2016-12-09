/*
Patch concernant Internet Explorer lors d'un drag (drag&drop) apres une requete AJAX,
IE générant une exception.

Explication : 
jQuery essaye d'apeler des éléments (div) n'existant plus dans le DOM.
La requete AJAX les ayant remplacés par de nouveaux éléments.

Code générant l'erreur sous IE : 
"var G=this[0].getBoundingClientRect()".

Source : https://dev.jquery.com/ticket/4996
*/

//For Jquery 1.3
/*if (document.documentElement["getBoundingClientRect"]) {
    jQuery.fn.offset = function() {
        if (!this[0]) return { top: 0, left: 0 };
        if (this[0] === this[0].ownerDocument.body) return jQuery.offset.bodyOffset(this[0]);
        var box;
        try {
            box = this[0].getBoundingClientRect()
        } catch (ex) {
            box = { top: 0, left: 0, right: 0, bottom: 0 }
        }
        
        var doc = this[0].ownerDocument, body = doc.body, docElem = doc.documentElement,
             clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
             top = box.top + (self.pageYOffset || jQuery.boxModel && docElem.scrollTop || body.scrollTop) - clientTop,
             left = box.left + (self.pageXOffset || jQuery.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;
             
        return { top: top, left: left };
    };*/
    
//For Jquery 1.4
if ("getBoundingClientRect" in document.documentElement) {
    jQuery.fn.offset = function(options) {
        var elem = this[0];

        if (options) {
            return this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
        }

        if (!elem || !elem.ownerDocument) {
            return null;
        }

        if (elem === elem.ownerDocument.body) {
            return jQuery.offset.bodyOffset(elem);
        }

        var box = null;

        try
        { box = elem.getBoundingClientRect(); }
        catch (e)
        { box = { top: elem.offsetTop, left: elem.offsetLeft }; } /*elem.getBoundingClientRect()*/

        var doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement,
			clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
			top = box.top + (self.pageYOffset || jQuery.support.boxModel && docElem.scrollTop || body.scrollTop) - clientTop,
			left = box.left + (self.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;

        return { top: top, left: left };
    };

} else {
    jQuery.fn.offset = function(options) {
        var elem = this[0];

        if (options) {
            return this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
        }

        if (!elem || !elem.ownerDocument) {
            return null;
        }

        if (elem === elem.ownerDocument.body) {
            return jQuery.offset.bodyOffset(elem);
        }

        jQuery.offset.initialize();

        var offsetParent = elem.offsetParent, prevOffsetParent = elem,
			doc = elem.ownerDocument, computedStyle, docElem = doc.documentElement,
			body = doc.body, defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle,
			top = elem.offsetTop, left = elem.offsetLeft;

        while ((elem = elem.parentNode) && elem !== body && elem !== docElem) {
            if (jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed") {
                break;
            }

            computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
            top -= elem.scrollTop;
            left -= elem.scrollLeft;

            if (elem === offsetParent) {
                top += elem.offsetTop;
                left += elem.offsetLeft;

                if (jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.nodeName))) {
                    top += parseFloat(computedStyle.borderTopWidth) || 0;
                    left += parseFloat(computedStyle.borderLeftWidth) || 0;
                }

                prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;
            }

            if (jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible") {
                top += parseFloat(computedStyle.borderTopWidth) || 0;
                left += parseFloat(computedStyle.borderLeftWidth) || 0;
            }

            prevComputedStyle = computedStyle;
        }

        if (prevComputedStyle.position === "relative" || prevComputedStyle.position === "static") {
            top += body.offsetTop;
            left += body.offsetLeft;
        }

        if (jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed") {
            top += Math.max(docElem.scrollTop, body.scrollTop);
            left += Math.max(docElem.scrollLeft, body.scrollLeft);
        }

        return { top: top, left: left };
    };
}