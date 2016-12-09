/*
    https://www.JSON.org/json2.js
    2010-03-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See https://www.JSON.org/js.html


    This code should be minified before deployment.
    See https://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());;
"use strict"
// Module export pattern from
// https://github.com/umdjs/umd/blob/master/returnExports.js
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.store = factory();
  }
}(this, function () {
	
	// Store.js
	var store = {},
		win = window,
		doc = win.document,
		localStorageName = 'localStorage',
		scriptTag = 'script',
		storage

	store.disabled = false
	store.version = '1.3.17'
	store.set = function(key, value) {}
	store.get = function(key, defaultVal) {}
	store.has = function(key) { return store.get(key) !== undefined }
	store.remove = function(key) {}
	store.clear = function() {}
	store.transact = function(key, defaultVal, transactionFn) {
		if (transactionFn == null) {
			transactionFn = defaultVal
			defaultVal = null
		}
		if (defaultVal == null) {
			defaultVal = {}
		}
		var val = store.get(key, defaultVal)
		transactionFn(val)
		store.set(key, val)
	}
	store.getAll = function() {}
	store.forEach = function() {}

	store.serialize = function(value) {
		return JSON.stringify(value)
	}
	store.deserialize = function(value) {
		if (typeof value != 'string') { return undefined }
		try { return JSON.parse(value) }
		catch(e) { return value || undefined }
	}

	// Functions to encapsulate questionable FireFox 3.6.13 behavior
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
		try { return (localStorageName in win && win[localStorageName]) }
		catch(err) { return false }
	}

	if (isLocalStorageNameSupported()) {
		storage = win[localStorageName]
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key) }
			storage.setItem(key, store.serialize(val))
			return val
		}
		store.get = function(key, defaultVal) {
			var val = store.deserialize(storage.getItem(key))
			return (val === undefined ? defaultVal : val)
		}
		store.remove = function(key) { storage.removeItem(key) }
		store.clear = function() { storage.clear() }
		store.getAll = function() {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = function(callback) {
			for (var i=0; i<storage.length; i++) {
				var key = storage.key(i)
				callback(key, store.get(key))
			}
		}
	} else if (doc.documentElement.addBehavior) {
		var storageOwner,
			storageContainer
		// Since #userData storage applies only to specific paths, we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option, since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see: https://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element, even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
			storageContainer = new ActiveXObject('htmlfile')
			storageContainer.open()
			storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
			storageContainer.close()
			storageOwner = storageContainer.w.frames[0].document
			storage = storageOwner.createElement('div')
		} catch(e) {
			// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse), fall back to per-path storage
			storage = doc.createElement('div')
			storageOwner = doc.body
		}
		var withIEStorage = function(storeFunction) {
			return function() {
				var args = Array.prototype.slice.call(arguments, 0)
				args.unshift(storage)
				// See https://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and https://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage)
				storage.addBehavior('#default#userData')
				storage.load(localStorageName)
				var result = storeFunction.apply(store, args)
				storageOwner.removeChild(storage)
				return result
			}
		}

		// In IE7, keys cannot start with a digit or contain certain chars.
		// See https://github.com/marcuswestin/store.js/issues/40
		// See https://github.com/marcuswestin/store.js/issues/83
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
		var ieKeyFix = function(key) {
			return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
		}
		store.set = withIEStorage(function(storage, key, val) {
			key = ieKeyFix(key)
			if (val === undefined) { return store.remove(key) }
			storage.setAttribute(key, store.serialize(val))
			storage.save(localStorageName)
			return val
		})
		store.get = withIEStorage(function(storage, key, defaultVal) {
			key = ieKeyFix(key)
			var val = store.deserialize(storage.getAttribute(key))
			return (val === undefined ? defaultVal : val)
		})
		store.remove = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			storage.removeAttribute(key)
			storage.save(localStorageName)
		})
		store.clear = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			while (attributes.length) {
				storage.removeAttribute(attributes[0].name)
			}
			storage.save(localStorageName)
		})
		store.getAll = function(storage) {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = withIEStorage(function(storage, callback) {
			var attributes = storage.XMLDocument.documentElement.attributes
			for (var i=0, attr; attr=attributes[i]; ++i) {
				callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
			}
		})
	}

	try {
		var testKey = '__storejs__'
		store.set(testKey, testKey)
		if (store.get(testKey) != testKey) { store.disabled = true }
		store.remove(testKey)
	} catch(e) {
		store.disabled = true
	}
	store.enabled = !store.disabled
	
	return store
}));
;
/*!
 * jQuery UI 1.8.9
 *
 * Copyright 2011, AUTHORS.txt (https://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://jquery.org/license
 *
 * https://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.9",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.9
 *
 * Copyright 2011, AUTHORS.txt (https://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://jquery.org/license
 *
 * https://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.9
 *
 * Copyright 2011, AUTHORS.txt (https://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://jquery.org/license
 *
 * https://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).bind("click."+this.widgetName,function(b){if(true===c.data(b.target,a.widgetName+".preventClickEvent")){c.removeData(b.target,a.widgetName+".preventClickEvent");b.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var b=this,e=a.which==1,f=typeof this.options.cancel=="string"?c(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){b.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}this._mouseMoveDelegate=function(d){return b._mouseMove(d)};this._mouseUpDelegate=function(d){return b._mouseUp(d)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=true}},_mouseMove:function(a){if(c.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);
return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&c.data(a.target,this.widgetName+".preventClickEvent",
true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.9
 *
 * Copyright 2011, AUTHORS.txt (https://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://jquery.org/license
 *
 * https://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Datepicker 1.8.9
 *
 * Copyright 2011, AUTHORS.txt (https://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://jquery.org/license
 *
 * https://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,G){function K(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}function E(a,b){d.extend(a,b);for(var c in b)if(b[c]==
null||b[c]==G)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.9"}});var y=(new Date).getTime();d.extend(K.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){E(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();
f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},
_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&
b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c=="focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==
""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,
c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),
true);this._updateDatepicker(b);this._updateAlternate(b);b.dpDiv.show()}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}E(a.settings,e||{});
b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,
function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:
f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},
e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true);E(e.settings,f);this._attachments(d(a),e);this._autoSize(e);this._setDateDatepicker(a,h);this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);
this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);c[0]?
d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]):d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||
a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,
e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,
"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==G?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},
_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);d.datepicker._curInst&&d.datepicker._curInst!=b&&d.datepicker._curInst.dpDiv.stop(true,true);var c=d.datepicker._get(b,"beforeShow");E(b.settings,c?c.apply(a,[a,b]):{});b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value="";if(!d.datepicker._pos){d.datepicker._pos=
d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);c=d.datepicker._checkOffset(b,
c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");var f=d.datepicker._get(b,"duration"),h=function(){d.datepicker._datepickerShowing=true;var i=b.dpDiv.find("iframe.ui-datepicker-cover");if(i.length){var g=d.datepicker._getBorders(b.dpDiv);i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.effects&&
d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}},_updateDatepicker:function(a){var b=this,c=d.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a));var e=a.dpDiv.find("iframe.ui-datepicker-cover");e.length&&e.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",
function(){d(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).removeClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&d(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!b._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");d(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=
-1&&d(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&d(this).addClass("ui-datepicker-next-hover")}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();c=this._getNumberOfMonths(a);e=c[1];e>1?a.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",17*e+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(c[0]!=1||c[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,
"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input.focus();if(a.yearshtml){var f=a.yearshtml;setTimeout(function(){f===a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);f=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},
_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-
g):0);b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=this._get(this._getInst(a),"isRTL");a&&(a.type=="hidden"||a.nodeType!=1);)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);this._curInst=null};d.effects&&d.effects[a]?
b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?c:null,e);a||e();if(a=this._get(b,"onClose"))a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},
_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):
0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e._selectingMonthYear=
false;e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_clickMonthYear:function(a){var b=this._getInst(d(a)[0]);b.input&&b._selectingMonthYear&&setTimeout(function(){b.input.focus()},0);b._selectingMonthYear=!b._selectingMonthYear},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=
d("a",e).html();f.selectedMonth=f.currentMonth=b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);
else{this._hideDatepicker();this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=
a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,
g=(c?c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=z+1<a.length&&a.charAt(z+1)==p)&&z++;return p},m=function(p){var v=o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&v?4:p=="o"?3:2)+"}");p=b.substring(s).match(p);if(!p)throw"Missing number at position "+s;s+=p[0].length;return parseInt(p[0],10)},n=function(p,v,H){p=o(p)?H:v;for(v=0;v<p.length;v++)if(b.substr(s,p[v].length).toLowerCase()==p[v].toLowerCase()){s+=p[v].length;return v+1}throw"Unknown name at position "+
s;},r=function(){if(b.charAt(s)!=a.charAt(z))throw"Unexpected literal at position "+s;s++},s=0,z=0;z<a.length;z++)if(k)if(a.charAt(z)=="'"&&!o("'"))k=false;else r();else switch(a.charAt(z)){case "d":l=m("d");break;case "D":n("D",f,h);break;case "o":u=m("o");break;case "m":j=m("m");break;case "M":j=n("M",i,g);break;case "y":c=m("y");break;case "@":var w=new Date(m("@"));c=w.getFullYear();j=w.getMonth()+1;l=w.getDate();break;case "!":w=new Date((m("!")-this._ticksTo1970)/1E4);c=w.getFullYear();j=w.getMonth()+
1;l=w.getDate();break;case "'":if(o("'"))r();else k=true;break;default:r()}if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){j=1;l=u;do{e=this._getDaysInMonth(c,j-1);if(l<=e)break;j++;l-=e}while(1)}w=this._daylightSavingAdjust(new Date(c,j-1,l));if(w.getFullYear()!=c||w.getMonth()+1!=j||w.getDate()!=l)throw"Invalid date";return w},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:null)||this._defaults.monthNames;var i=function(o){(o=k+1<a.length&&
a.charAt(k+1)==o)&&k++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},j=function(o,m,n,r){return i(o)?r[m]:n[m]},l="",u=false;if(b)for(var k=0;k<a.length;k++)if(u)if(a.charAt(k)=="'"&&!i("'"))u=false;else l+=a.charAt(k);else switch(a.charAt(k)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=j("D",b.getDay(),e,f);break;case "o":l+=g("o",(b.getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=j("M",
b.getMonth(),h,c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(k)}return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+=
"0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==G?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=
f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=
(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);k;){switch(k[2]||"d"){case "d":case "D":g+=parseInt(k[1],10);break;case "w":case "W":g+=parseInt(k[1],10)*7;break;case "m":case "M":l+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break;case "y":case "Y":j+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break}k=u.exec(h)}return new Date(j,
l,g)};if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=
a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),
b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=
this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var r=this._get(a,"nextText");r=!h?r:this.formatDate(r,this._daylightSavingAdjust(new Date(m,g+j,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+r+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+r+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+r+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+r+"</span></a>";j=this._get(a,"currentText");r=this._get(a,"gotoCurrent")&&a.currentDay?u:b;j=!h?j:this.formatDate(j,r,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+y+'.datepicker._hideDatepicker();">'+this._get(a,
"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,r)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;j=this._get(a,"showWeek");r=this._get(a,"dayNames");this._get(a,"dayNamesShort");var s=this._get(a,"dayNamesMin"),z=
this._get(a,"monthNames"),w=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),v=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var L=this._getDefaultDate(a),I="",C=0;C<i[0];C++){for(var M="",D=0;D<i[1];D++){var N=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",x="";if(l){x+='<div class="ui-datepicker-group';if(i[1]>1)switch(D){case 0:x+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-
1:x+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:x+=" ui-datepicker-group-middle";t="";break}x+='">'}x+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&C==0?c?f:n:"")+(/all|right/.test(t)&&C==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,C>0||D>0,z,w)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var A=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var q=
(t+h)%7;A+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+r[q]+'">'+s[q]+"</span></th>"}x+=A+"</tr></thead><tbody>";A=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,A);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;A=l?6:Math.ceil((t+A)/7);q=this._daylightSavingAdjust(new Date(m,g,1-t));for(var O=0;O<A;O++){x+="<tr>";var P=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(q)+"</td>";for(t=0;t<7;t++){var F=
p?p.apply(a.input?a.input[0]:null,[q]):[true,""],B=q.getMonth()!=g,J=B&&!H||!F[0]||k&&q<k||o&&q>o;P+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(B?" ui-datepicker-other-month":"")+(q.getTime()==N.getTime()&&g==a.selectedMonth&&a._keyEvent||L.getTime()==q.getTime()&&L.getTime()==N.getTime()?" "+this._dayOverClass:"")+(J?" "+this._unselectableClass+" ui-state-disabled":"")+(B&&!v?"":" "+F[1]+(q.getTime()==u.getTime()?" "+this._currentClass:"")+(q.getTime()==b.getTime()?" ui-datepicker-today":
""))+'"'+((!B||v)&&F[2]?' title="'+F[2]+'"':"")+(J?"":' onclick="DP_jQuery_'+y+".datepicker._selectDay('#"+a.id+"',"+q.getMonth()+","+q.getFullYear()+', this);return false;"')+">"+(B&&!v?"&#xa0;":J?'<span class="ui-state-default">'+q.getDate()+"</span>":'<a class="ui-state-default'+(q.getTime()==b.getTime()?" ui-state-highlight":"")+(q.getTime()==u.getTime()?" ui-state-active":"")+(B?" ui-priority-secondary":"")+'" href="#">'+q.getDate()+"</a>")+"</td>";q.setDate(q.getDate()+1);q=this._daylightSavingAdjust(q)}x+=
P+"</tr>"}g++;if(g>11){g=0;m++}x+="</tbody></table>"+(l?"</div>"+(i[0]>0&&D==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");M+=x}I+=M}I+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return I},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',
o="";if(h||!j)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(k+=o+(h||!(j&&
l)?"&#xa0;":""));a.yearshtml="";if(h||!l)k+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var r=(new Date).getFullYear();i=function(s){s=s.match(/c[+-].*/)?c+parseInt(s.substring(1),10):s.match(/[+-].*/)?r+parseInt(s,10):parseInt(s,10);return isNaN(s)?r:s};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+
a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";if(d.browser.mozilla)k+='<select class="ui-datepicker-year"><option value="'+c+'" selected="selected">'+c+"</option></select>";else{k+=a.yearshtml;a.yearshtml=null}}k+=this._get(a,"yearSuffix");if(u)k+=(h||!(j&&l)?"&#xa0;":"")+o;k+="</div>";return k},_adjustInstDate:function(a,b,c){var e=
a.drawYear+(c=="Y"?b:0),f=a.drawMonth+(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,
"onChangeMonthYear");if(b)b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);
c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=
function(a){if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));
return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new K;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.9";window["DP_jQuery_"+y]=d})(jQuery);
;


/* French initialisation for the jQuery UI date picker plugin. */
/* Written by Keith Wood (kbwood{at}iinet.com.au) and Stéphane Nahmani (sholby@sholby.net). */
jQuery(function($){
  if(typeof($.datepicker) != "undefined") {
  	$.datepicker.regional['fr'] = {
  		closeText: 'Annuler',
  		prevText: '&#x3c;Préc',
  		nextText: 'Suiv&#x3e;',
  		currentText: "Aujourd'hui",
  		monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
  		'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  		monthNamesShort: ['Janvier','Février','Mars','Avril','Mai','Juin',
  		'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  		dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
  		dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
  		weekHeader: 'Sm',
  		dateFormat: 'dd/mm/yy',
  		firstDay: 1,
  		isRTL: false,
  		showMonthAfterYear: false,
  		yearSuffix: ''};
  	$.datepicker.setDefaults($.datepicker.regional['fr']);
  }
});


(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.curCSS(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);
;
/*
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * https://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var az,Q=this,Y,ak,v,am,T,Z,y,q,aA,aF,av,i,I,h,j,aa,U,aq,X,t,A,ar,af,an,G,l,au,ay,x,aw,aI,f,L,aj=true,P=true,aH=false,k=false,ap=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aI=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function at(aR){var aM,aO,aN,aK,aJ,aQ,aP=false,aL=false;az=aR;if(Y===c){aJ=D.scrollTop();aQ=D.scrollLeft();D.css({overflow:"hidden",padding:0});ak=D.innerWidth()+f;v=D.innerHeight();D.width(ak);Y=b('<div class="jspPane" />').css("padding",aI).append(D.children());am=b('<div class="jspContainer" />').css({width:ak+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aP=az.stickToBottom&&K();aL=az.stickToRight&&B();aK=D.innerWidth()+f!=ak||D.outerHeight()!=v;if(aK){ak=D.innerWidth()+f;v=D.innerHeight();am.css({width:ak+"px",height:v+"px"})}if(!aK&&L==T&&Y.outerHeight()==Z){D.width(ak);return}L=T;Y.css("width","");D.width(ak);am.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aR.contentWidth){T=aR.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/ak;q=Z/v;aA=q>1;aF=y>1;if(!(aF||aA)){D.removeClass("jspScrollable");Y.css({top:0,width:am.width()-f});n();E();R();w();ai()}else{D.addClass("jspScrollable");aM=az.maintainPosition&&(I||aa);if(aM){aO=aD();aN=aB()}aG();z();F();if(aM){N(aL?(T-ak):aO,false);M(aP?(Z-v):aN,false)}J();ag();ao();if(az.enableKeyboardNavigation){S()}if(az.clickOnTrack){p()}C();if(az.hijackInternalLinks){m()}}if(az.autoReinitialise&&!aw){aw=setInterval(function(){at(az)},az.autoReinitialiseDelay)}else{if(!az.autoReinitialise&&aw){clearInterval(aw)}}aJ&&D.scrollTop(0)&&M(aJ,false);aQ&&D.scrollLeft(0)&&N(aQ,false);D.trigger("jsp-initialised",[aF||aA])}function aG(){if(aA){am.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=am.find(">.jspVerticalBar");aq=U.find(">.jspTrack");av=aq.find(">.jspDrag");if(az.showArrows){ar=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aE(0,-1)).bind("click.jsp",aC);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aE(0,1)).bind("click.jsp",aC);if(az.arrowScrollOnHover){ar.bind("mouseover.jsp",aE(0,-1,ar));af.bind("mouseover.jsp",aE(0,1,af))}al(aq,az.verticalArrowPositions,ar,af)}t=v;am.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});av.hover(function(){av.addClass("jspHover")},function(){av.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);av.addClass("jspActive");var s=aJ.pageY-av.position().top;b("html").bind("mousemove.jsp",function(aK){V(aK.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});o()}}function o(){aq.height(t+"px");I=0;X=az.verticalGutter+aq.outerWidth();Y.width(ak-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aF){am.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));an=am.find(">.jspHorizontalBar");G=an.find(">.jspTrack");h=G.find(">.jspDrag");if(az.showArrows){ay=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aE(-1,0)).bind("click.jsp",aC);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aE(1,0)).bind("click.jsp",aC);
if(az.arrowScrollOnHover){ay.bind("mouseover.jsp",aE(-1,0,ay));x.bind("mouseover.jsp",aE(1,0,x))}al(G,az.horizontalArrowPositions,ay,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);h.addClass("jspActive");var s=aJ.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aK){W(aK.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});l=am.innerWidth();ah()}}function ah(){am.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aF&&aA){var aJ=G.outerHeight(),s=aq.outerWidth();t-=aJ;b(an).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;ak-=aJ;G.parent().append(b('<div class="jspCorner" />').css("width",aJ+"px"));o();ah()}if(aF){Y.width((am.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aF){au=Math.ceil(1/y*l);if(au>az.horizontalDragMaxWidth){au=az.horizontalDragMaxWidth}else{if(au<az.horizontalDragMinWidth){au=az.horizontalDragMinWidth}}h.width(au+"px");j=l-au;ae(aa)}if(aA){A=Math.ceil(1/q*t);if(A>az.verticalDragMaxHeight){A=az.verticalDragMaxHeight}else{if(A<az.verticalDragMinHeight){A=az.verticalDragMinHeight}}av.height(A+"px");i=t-A;ad(I)}}function al(aK,aM,aJ,s){var aO="before",aL="after",aN;if(aM=="os"){aM=/Mac/.test(navigator.platform)?"after":"split"}if(aM==aO){aL=aM}else{if(aM==aL){aO=aM;aN=aJ;aJ=s;s=aN}}aK[aO](aJ)[aL](s)}function aE(aJ,s,aK){return function(){H(aJ,s,this,aK);this.blur();return false}}function H(aM,aL,aP,aO){aP=b(aP).addClass("jspActive");var aN,aK,aJ=true,s=function(){if(aM!==0){Q.scrollByX(aM*az.arrowButtonSpeed)}if(aL!==0){Q.scrollByY(aL*az.arrowButtonSpeed)}aK=setTimeout(s,aJ?az.initialDelay:az.arrowRepeatFreq);aJ=false};s();aN=aO?"mouseout.jsp":"mouseup.jsp";aO=aO||b("html");aO.bind(aN,function(){aP.removeClass("jspActive");aK&&clearTimeout(aK);aK=null;aO.unbind(aN)})}function p(){w();if(aA){aq.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageY-aP.top-I,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageY-aS.top-A/2,aQ=v*az.scrollPagePercent,aR=i*aQ/(Z-v);if(aN<0){if(I-aR>aT){Q.scrollByY(-aQ)}else{V(aT)}}else{if(aN>0){if(I+aR<aT){Q.scrollByY(aQ)}else{V(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}if(aF){G.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageX-aP.left-aa,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageX-aS.left-au/2,aQ=ak*az.scrollPagePercent,aR=j*aQ/(T-ak);if(aN<0){if(aa-aR>aT){Q.scrollByX(-aQ)}else{W(aT)}}else{if(aN>0){if(aa+aR<aT){Q.scrollByX(aQ)}else{W(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(aq){aq.unbind("mousedown.jsp")}}function ax(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(av){av.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aJ){if(!aA){return}if(s<0){s=0}else{if(s>i){s=i}}if(aJ===c){aJ=az.animateScroll}if(aJ){Q.animate(av,"top",s,ad)}else{av.css("top",s);ad(s)}}function ad(aJ){if(aJ===c){aJ=av.position().top}am.scrollTop(0);I=aJ;var aM=I===0,aK=I==i,aL=aJ/i,s=-aL*(Z-v);if(aj!=aM||aH!=aK){aj=aM;aH=aK;D.trigger("jsp-arrow-change",[aj,aH,P,k])}u(aM,aK);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aM,aK]).trigger("scroll")}function W(aJ,s){if(!aF){return}if(aJ<0){aJ=0}else{if(aJ>j){aJ=j}}if(s===c){s=az.animateScroll}if(s){Q.animate(h,"left",aJ,ae)
}else{h.css("left",aJ);ae(aJ)}}function ae(aJ){if(aJ===c){aJ=h.position().left}am.scrollTop(0);aa=aJ;var aM=aa===0,aL=aa==j,aK=aJ/j,s=-aK*(T-ak);if(P!=aM||k!=aL){P=aM;k=aL;D.trigger("jsp-arrow-change",[aj,aH,P,k])}r(aM,aL);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aM,aL]).trigger("scroll")}function u(aJ,s){if(az.showArrows){ar[aJ?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aJ,s){if(az.showArrows){ay[aJ?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aJ){var aK=s/(Z-v);V(aK*i,aJ)}function N(aJ,s){var aK=aJ/(T-ak);W(aK*j,s)}function ab(aW,aR,aK){var aO,aL,aM,s=0,aV=0,aJ,aQ,aP,aT,aS,aU;try{aO=b(aW)}catch(aN){return}aL=aO.outerHeight();aM=aO.outerWidth();am.scrollTop(0);am.scrollLeft(0);while(!aO.is(".jspPane")){s+=aO.position().top;aV+=aO.position().left;aO=aO.offsetParent();if(/^body|html$/i.test(aO[0].nodeName)){return}}aJ=aB();aP=aJ+v;if(s<aJ||aR){aS=s-az.verticalGutter}else{if(s+aL>aP){aS=s-v+aL+az.verticalGutter}}if(aS){M(aS,aK)}aQ=aD();aT=aQ+ak;if(aV<aQ||aR){aU=aV-az.horizontalGutter}else{if(aV+aM>aT){aU=aV-ak+aM+az.horizontalGutter}}if(aU){N(aU,aK)}}function aD(){return -Y.position().left}function aB(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aB()<10)}function B(){var s=T-ak;return(s>20)&&(s-aD()<10)}function ag(){am.unbind(ac).bind(ac,function(aM,aN,aL,aJ){var aK=aa,s=I;Q.scrollBy(aL*az.mouseWheelSpeed,-aJ*az.mouseWheelSpeed,false);return aK==aa&&s==I})}function n(){am.unbind(ac)}function aC(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aJ,aL=[];aF&&aL.push(an[0]);aA&&aL.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aO){if(aO.target!==this&&!(aL.length&&b(aO.target).closest(aL).length)){return}var aN=aa,aM=I;switch(aO.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aO.keyCode;aK();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aJ=aO.keyCode==s&&aN!=aa||aM!=I;return !aJ}).bind("keypress.jsp",function(aM){if(aM.keyCode==s){aK()}return !aJ});if(az.hideFocus){D.css("outline","none");if("hideFocus" in am[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in am[0]){D.attr("hideFocus",false)}}function aK(){var aN=aa,aM=I;switch(s){case 40:Q.scrollByY(az.keyboardSpeed,false);break;case 38:Q.scrollByY(-az.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*az.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*az.scrollPagePercent,false);break;case 39:Q.scrollByX(az.keyboardSpeed,false);break;case 37:Q.scrollByX(-az.keyboardSpeed,false);break}aJ=aN!=aa||aM!=I;return aJ}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aL,aJ,aK=escape(location.hash);try{aL=b(aK)}catch(s){return}if(aL.length&&Y.find(aK)){if(am.scrollTop()===0){aJ=setInterval(function(){if(am.scrollTop()>0){ab(aK,true);b(document).scrollTop(am.position().top);clearInterval(aJ)}},50)}else{ab(aK,true);b(document).scrollTop(am.position().top)}}}}function ai(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function m(){ai();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var s=this.href.split("#"),aJ;if(s.length>1){aJ=s[1];if(aJ.length>0&&Y.find("#"+aJ).length>0){ab("#"+aJ,true);return false}}})}function ao(){var aK,aJ,aM,aL,aN,s=false;am.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aO){var aP=aO.originalEvent.touches[0];aK=aD();aJ=aB();aM=aP.pageX;aL=aP.pageY;aN=false;s=true}).bind("touchmove.jsp",function(aR){if(!s){return}var aQ=aR.originalEvent.touches[0],aP=aa,aO=I;Q.scrollTo(aK+aM-aQ.pageX,aJ+aL-aQ.pageY);aN=aN||Math.abs(aM-aQ.pageX)>5||Math.abs(aL-aQ.pageY)>5;
return aP==aa&&aO==I}).bind("touchend.jsp",function(aO){s=false}).bind("click.jsp-touchclick",function(aO){if(aN){aN=false;return false}})}function g(){var s=aB(),aJ=aD();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ap.append(Y.children()));ap.scrollTop(s);ap.scrollLeft(aJ)}b.extend(Q,{reinitialise:function(aJ){aJ=b.extend({},az,aJ);at(aJ)},scrollToElement:function(aK,aJ,s){ab(aK,aJ,s)},scrollTo:function(aK,s,aJ){N(aK,aJ);M(s,aJ)},scrollToX:function(aJ,s){N(aJ,s)},scrollToY:function(s,aJ){M(s,aJ)},scrollToPercentX:function(aJ,s){N(aJ*(T-ak),s)},scrollToPercentY:function(aJ,s){M(aJ*(Z-v),s)},scrollBy:function(aJ,s,aK){Q.scrollByX(aJ,aK);Q.scrollByY(s,aK)},scrollByX:function(s,aK){var aJ=aD()+Math[s<0?"floor":"ceil"](s),aL=aJ/(T-ak);W(aL*j,aK)},scrollByY:function(s,aK){var aJ=aB()+Math[s<0?"floor":"ceil"](s),aL=aJ/(Z-v);V(aL*i,aK)},positionDragX:function(s,aJ){W(s,aJ)},positionDragY:function(aJ,s){V(aJ,s)},animate:function(aJ,aM,s,aL){var aK={};aK[aM]=s;aJ.animate(aK,{duration:az.animateDuration,easing:az.animateEase,queue:false,step:aL})},getContentPositionX:function(){return aD()},getContentPositionY:function(){return aB()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aD()/(T-ak)},getPercentScrolledY:function(){return aB()/(Z-v)},getIsScrollableH:function(){return aF},getIsScrollableV:function(){return aA},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:function(){m()},destroy:function(){g()}});at(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);;
/*------------------------------------------------------------------------------
    JS Document (https://developer.mozilla.org/en/JavaScript)

    project:    CAF
    created:    2010-02-01
    author:     johdoe

    summary:    MAJX_CORE
                CONSTANTES
                UTILITIES
                WINDOW.ONLOAD
                PLACEHOLDER
                DATEPICKER
                MENU
                TOOLS
                SCROLL
                TABS
				CHANGECLASS
				MISC

----------------------------------------------------------------------------- */

/* =MAJX_CORE (https://code.google.com/p/majx-js/)
----------------------------------------------------------------------------- */
(function(){if(typeof majx=="undefined"){majx={};majx.init=function(){if(!majx.config){majx.config={};}}();}}());majx.set=function(){var e=arguments[0]||{};var b=null;var d=arguments.length;var c=1;if(d==c){e=majx.config;--c;}for(;c<d;c++){if((b=arguments[c])!=null){for(var a in b){var f=e[a];var g=b[a];if(e===g){continue;}else{if(g!==undefined){e[a]=g;}}}}}majx.config=e;};


/*  =CONSTANTES
----------------------------------------------------------------------------- */
jQuery.noConflict();
var d = document;
var w = window;
pm = {};
majx.set({
    tabs  : {
      tabs1 : {
        id          : '#tabs1',
        zones       : '.tab',
        menu        : '.menu-tabs',
        active      : 'on',
        container   : '.tabs',
        linkParent  : 'li',
        scrollToTop : true
      }
    }
});


/*  =UTILITIES
----------------------------------------------------------------------------- */
var log = function(x) {
    if (typeof console != 'undefined') {
        console.log(x);
    }
};




/*  =WINDOW.ONLOAD
----------------------------------------------------------------------------- */
jQuery(document).ready(function(){

    // Call Functions
    placeHolder();
    datePicker();
    menuExpand();
    printIt();
    scrollPane()
    majx.tabs(majx.config.tabs.tabs1);
	changeClass();
	//expandSelect();
	misc();

    if (jQuery.browser.msie && jQuery.browser.version == 6) {
        // IE 6 FUNCTIONS ONLY

    }

});


/*  =PLACEHOLDER
----------------------------------------------------------------------------- */

placeHolder = function(){
    jQuery('#block-search input.text, #block-search2 input.text').click(function(){
        this.value = '';
    })
}

/*  =DATEPICKER
----------------------------------------------------------------------------- */

datePicker = function(){
    jQuery(".datepicker").datepicker({
		showOn: 'button',
		buttonImage: 'img/skin/calendar.png',
		buttonImageOnly: true,
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true
	});
}


/*  =MENU
----------------------------------------------------------------------------- */

menuExpand = function(){
    jQuery("#menu li:not('.on') ul").hide();


    jQuery("#menu li.sub > a").click( function () {
        if (jQuery(this).next("#menu ul:visible").length != 0) {
            jQuery(this).next("#menu ul").slideUp("normal", function() { jQuery(this).parent().removeClass("on") });
        }
        else {
            jQuery("#menu ul").slideUp("normal", function() { jQuery(this).parent().removeClass("on") });
            jQuery(this).next("ul").slideDown("normal", openU(this));
        }
    });

    openU = function(e){
        jQuery(e).parent().addClass("on");
        /*jQuery(e).parent().animate({
            backgroundColor: '#E5EDF7'
        }, 'slow');*/
    };


};

/*  =TOOLS
----------------------------------------------------------------------------- */

printIt = function(){
    jQuery('.print').click(function(){
        window.print();
        return false;
    })
};

/*  =SCROLL
----------------------------------------------------------------------------- */

scrollPane = function(){
    jQuery('#block-faq .inner').jScrollPane();
    jQuery('#block-access ul').jScrollPane();
    /*jQuery('.block .node-bloc-acces-direct .field-name-field-bloc-liens').jScrollPane({autoReinitialise: true});*/
    jQuery('.block .node-bloc-questions-reponses .content').jScrollPane({autoReinitialise: true});

	setTimeout(
    function() {
        jQuery(function() {
          jQuery('#resume').jScrollPane();
        });
    },
    5000 // The number of milliseconds to wait
);
}

/* TABS
------------------------------------------------------------------------------*/

majx.tabs = function(config) {
    var elements   = null;
    var active     = config.active;
    var linkParent = config.linkParent;
    var scroll     = config.scrollToTop;
    var id         = jQuery(config.id);
    var zones      = id.find(config.zones);
    var menu       = id.find(config.menu);
    var container  = id.find(config.container);
    function launch() {
        var setStyles = function() {
            var containerHeight = container.css("height");
            var focus           = jQuery("." + config.focus).length;
            //zones.css('height', containerHeight);
            zones.css('overflow','auto');
            container.css('overflow','hidden');
            zones.hide();
            if(!focus) {
                id.addClass(config.focus);
            }
        }();
        var handleBehaviours = function() {

            var idExists = id.find(window.location.hash);
            var isActive   = menu.find('.' + active);
            var zoneActive = jQuery(isActive.find('a').attr('href'));
            if (window.location.hash && idExists.length) {
                menu.find(linkParent).removeClass(active);
                idExists.show();
                idExists.attr("tabindex","-1");
                //idExists.focus();
                idExists.removeAttr("tabindex");
                jQuery('a[href='+ window.location.hash +']').parents(linkParent).addClass(active);
                if (scroll) {
                    window.scrollTo(0,0);
                }

            }
            else if (isActive.length) {
                zoneActive.show();

            }
            else {
                zones.eq(0).show();
                menu.find(linkParent).eq(0).addClass(active);
            }
        }();
        var handleEvents = function() {
            var tabs = menu.find(linkParent).find('a');
            tabs.click(function(){
                jQuery("." + config.focus).removeClass(config.focus);
                id.addClass(config.focus);
                var zoneActive = jQuery(jQuery(this).attr("href"));
                menu.find(linkParent).removeClass(active);
                jQuery(this).parents(linkParent).addClass(active);
                zones.hide();
                zoneActive.show();
                zoneActive.attr("tabindex","-1");
                //zoneActive.focus();
                zoneActive.removeAttr("tabindex");
                return false;
            });
            tabs.focus(function(e) {
                jQuery("." + config.focus).removeClass(config.focus);
                id.addClass(config.focus);
            });
        }();

        var handleKeyboard = function() {
            jQuery(document).keyup(function(e) {
                var isActive = jQuery(config.id + '.' + config.focus).find(config.menu).find('.' + active);
                if (isActive.length) {
                    var zoneActive = jQuery(isActive.find('a').attr('href'));
                    if (e.keyCode == 39 || e.keyCode == 37) {
                        var position  = null;
                        var afterZone = null;
                        var action = function(position,move) {
                             if (isActive[move]().length) {
                                afterZone = jQuery(isActive[move]().children("a").attr("href"));
                                isActive[move]().addClass(active);
                            }
                            else {
                                afterZone = zones.eq(position);
                                menu.children(linkParent).eq(position).addClass(active);
                            }
                        };
                        zones.hide();
                        switch(e.keyCode)
                        {
                            case 39: // right arrow
                                var position = 0;
                                action(position,"next")
                                break;
                            case 37: //  left arrow
                                var position = zones.length - 1;
                                action(position,"prev")
                                break;
                        }
                        isActive.removeClass(active);
                        afterZone.show();
                        afterZone.attr("tabindex","-1");
                        //afterZone.focus();
                        afterZone.removeAttr("tabindex");
                    }
                }
            });
        }();
    }


    var init = function() {
        function verifyHTMLStruct() {
            var error   = false;
            var message = '\n## Error(s) on `' + config.id + '`\n\n';
            if (zones.length != menu.find('a').length) {
                if (error == false && config.debug == true) {
                    log(message);
                }
                error = true;
                if (config.debug == true) {
                    log(' - `' + config.id + '` ne comporte pas autant d\'onglets que de zones ; ');
                }
            }
            if (menu.find('.' + active).length > 1) {
                if (error == false && config.debug == true) {
                    log(message);
                }
                error = true;
                if (config.debug == true) {
                    log(' - `' + config.id + '` has more than one active tab ; ');
                }
            }
            for(var i=0 ; i<zones.length ; i++) {
                if(jQuery((menu.find('a').eq(i).attr("href"))).length != 1) {
                    if (error == false && config.debug == true) {
                        log(message);
                    }
                    error = true;
                    if (config.debug == true) {
                        log(' - `' + config.id + '` n\'associe pas correctement les onglets et les zones ; ');
                    }
                }
            }
            if(error) {
                menu.find(linkParent).removeClass(active);
                if (config.debug == true) {
                    log('\nPlease fix HTML and/or JS on `' + config.id + '`.');
                }
                return(false);
            }
            else {
                return(true);
            }
        }
        if (verifyHTMLStruct()) {
            launch();
            //window.scrollTo(0,0);
        }
    }();
};

/* CHANGECLASS
------------------------------------------------------------------------------*/

changeClass = function(){
	jQuery('ul.actulist li a.active').parent('li').addClass('active-trail');
}

/* MISC
------------------------------------------------------------------------------*/
/* expandSelect = function (id, size) {
	var select = document.getElementById(id);
	select.size = select.options.length;
} */

misc = function(){

	var sideleft = jQuery('.not-front #page').hasClass('big-cols-2');

	if(sideleft) {
		jQuery('a.logout').prependTo(jQuery('#sidebar-2'));
	};

	jQuery('select.ctools-jump-menu-select').addClass('jquery_dropdown jquery_dropdown_jump');

}


/* Si les liens des blocs ne sont plus cliquables sous IE, décommenter les lignes
------------------------------------------------------------------------------*/
/*if(isIE){
    var el = jQuery("#ac-bloc-content");
    var img = jQuery("#ac-bloc-content-img");
    img.css('height', el.height());
    el.css('background-image','none');
    el.css('margin-left','0px');
    img.css('visibility','visible');
}*/


/* Change la taille du texte
------------------------------------------------------------------------------*/
jQuery(document).ready(function(){

        var relative_url = document.location.pathname;
        var splitted_url = relative_url.split('/');

        if ( splitted_url[1] != "print" ) {
            jQuery("#plus_text").click(function() {
                if (jQuery("table#satisfaction-form").length){
                    var curFontSize = jQuery('#page-content .content').css('font-size');
                    var curLineHeight = jQuery('#page-content .content').css('line-height');
                    jQuery('#page-content .content').css('font-size', parseInt(curFontSize)+1);
                    jQuery('#page-content .content').css('line-height', parseInt(curLineHeight)+1+'px');

                    var curFontSize = jQuery('#satisfaction-form').css('font-size');
                    var curLineHeight = jQuery('#satisfaction-form').css('line-height');
                    jQuery('#satisfaction-form').css('font-size', parseInt(curFontSize)+1);
                    jQuery('#satisfaction-form').css('line-height', parseInt(curLineHeight)+1+'px');

                    var curFontSize = jQuery('#satisfaction-form .title').css('font-size');
                    var curLineHeight = jQuery('#satisfaction-form .title').css('line-height');
                    jQuery('#satisfaction-form .title').css('font-size', parseInt(curFontSize)+1);
                    jQuery('#satisfaction-form .title').css('line-height', parseInt(curLineHeight)+1+'px');

                }
                else{
                    var curFontSize = jQuery('.field-items').css('font-size');
                    var curLineHeight = jQuery('.field-items').css('line-height');
                    jQuery('.field-items').css('font-size', parseInt(curFontSize)+1);
                    jQuery('.field-items').css('line-height', parseInt(curLineHeight)+1+'px');
                }

            });

            jQuery("#minus_text").click(function() {
                if (jQuery("table#satisfaction-form").length){
                    var curFontSize = jQuery('#page-content .content').css('font-size');
                    var curLineHeight = jQuery('#page-content .content').css('line-height');
                    jQuery('#page-content .content').css('font-size', parseInt(curFontSize)-1);
                    jQuery('#page-content .content').css('line-height', parseInt(curLineHeight)-1+'px');

                    var curFontSize = jQuery('#satisfaction-form').css('font-size');
                    var curLineHeight = jQuery('#satisfaction-form').css('line-height');
                    jQuery('#satisfaction-form').css('font-size', parseInt(curFontSize)-1);
                    jQuery('#satisfaction-form').css('line-height', parseInt(curLineHeight)-1+'px');

                    var curFontSize = jQuery('#satisfaction-form .title').css('font-size');
                    var curLineHeight = jQuery('#satisfaction-form .title').css('line-height');
                    jQuery('#satisfaction-form .title').css('font-size', parseInt(curFontSize)-1);
                    jQuery('#satisfaction-form .title').css('line-height', parseInt(curLineHeight)-1+'px');
                }
                else{
                    var curFontSize = jQuery('.field-items').css('font-size');
                    var curLineHeight = jQuery('.field-items').css('line-height');
                    jQuery('.field-items').css('font-size', parseInt(curFontSize)-1);
                    jQuery('.field-items').css('line-height', parseInt(curLineHeight)-1+'px');
                }
            });
        }
        else {
            jQuery("#plus_text").hide();
            jQuery("#minus_text").hide();
            jQuery("#ui-datepicker-div").remove();
        }

});
;
// +--------------------------------------------------------------------+ \\
// � Rapha�l 2.1.0 - JavaScript Vector Library                          � \\
// +--------------------------------------------------------------------� \\
// � Copyright � 2008-2012 Dmitry Baranovskiy (https://raphaeljs.com)    � \\
// � Copyright � 2008-2012 Sencha Labs (https://sencha.com)              � \\
// +--------------------------------------------------------------------� \\
// � Licensed under the MIT (https://raphaeljs.com/license.html) license.� \\
// +--------------------------------------------------------------------+ \\
(function(t){var e,r,i="0.4.2",n="hasOwnProperty",a=/[\.\/]/,s="*",o=function(){},l=function(t,e){return t-e},h={n:{}},u=function(t,i){t+="";var n,a=r,s=Array.prototype.slice.call(arguments,2),o=u.listeners(t),h=0,c=[],f={},p=[],d=e;e=t,r=0;for(var g=0,x=o.length;x>g;g++)"zIndex"in o[g]&&(c.push(o[g].zIndex),0>o[g].zIndex&&(f[o[g].zIndex]=o[g]));for(c.sort(l);0>c[h];)if(n=f[c[h++]],p.push(n.apply(i,s)),r)return r=a,p;for(g=0;x>g;g++)if(n=o[g],"zIndex"in n)if(n.zIndex==c[h]){if(p.push(n.apply(i,s)),r)break;do if(h++,n=f[c[h]],n&&p.push(n.apply(i,s)),r)break;while(n)}else f[n.zIndex]=n;else if(p.push(n.apply(i,s)),r)break;return r=a,e=d,p.length?p:null};u._events=h,u.listeners=function(t){var e,r,i,n,o,l,u,c,f=t.split(a),p=h,d=[p],g=[];for(n=0,o=f.length;o>n;n++){for(c=[],l=0,u=d.length;u>l;l++)for(p=d[l].n,r=[p[f[n]],p[s]],i=2;i--;)e=r[i],e&&(c.push(e),g=g.concat(e.f||[]));d=c}return g},u.on=function(t,e){if(t+="","function"!=typeof e)return function(){};for(var r=t.split(a),i=h,n=0,s=r.length;s>n;n++)i=i.n,i=i.hasOwnProperty(r[n])&&i[r[n]]||(i[r[n]]={n:{}});for(i.f=i.f||[],n=0,s=i.f.length;s>n;n++)if(i.f[n]==e)return o;return i.f.push(e),function(t){+t==+t&&(e.zIndex=+t)}},u.f=function(t){var e=[].slice.call(arguments,1);return function(){u.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},u.stop=function(){r=1},u.nt=function(t){return t?RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},u.nts=function(){return e.split(a)},u.off=u.unbind=function(t,e){if(!t)return u._events=h={n:{}},void 0;var r,i,o,l,c,f,p,d=t.split(a),g=[h];for(l=0,c=d.length;c>l;l++)for(f=0;g.length>f;f+=o.length-2){if(o=[f,1],r=g[f].n,d[l]!=s)r[d[l]]&&o.push(r[d[l]]);else for(i in r)r[n](i)&&o.push(r[i]);g.splice.apply(g,o)}for(l=0,c=g.length;c>l;l++)for(r=g[l];r.n;){if(e){if(r.f){for(f=0,p=r.f.length;p>f;f++)if(r.f[f]==e){r.f.splice(f,1);break}!r.f.length&&delete r.f}for(i in r.n)if(r.n[n](i)&&r.n[i].f){var x=r.n[i].f;for(f=0,p=x.length;p>f;f++)if(x[f]==e){x.splice(f,1);break}!x.length&&delete r.n[i].f}}else{delete r.f;for(i in r.n)r.n[n](i)&&r.n[i].f&&delete r.n[i].f}r=r.n}},u.once=function(t,e){var r=function(){return u.unbind(t,r),e.apply(this,arguments)};return u.on(t,r)},u.version=i,u.toString=function(){return"You are running Eve "+i},"undefined"!=typeof module&&module.exports?module.exports=u:"undefined"!=typeof define?define("eve",[],function(){return u}):t.eve=u})(this),function(t,e){"function"==typeof define&&define.amd?define(["eve"],function(r){return e(t,r)}):e(t,t.eve)}(this,function(t,e){function r(t){if(r.is(t,"function"))return b?t():e.on("raphael.DOMload",t);if(r.is(t,H))return r._engine.create[N](r,t.splice(0,3+r.is(t[0],W))).add(t);var i=Array.prototype.slice.call(arguments,0);if(r.is(i[i.length-1],"function")){var n=i.pop();return b?n.call(r._engine.create[N](r,i)):e.on("raphael.DOMload",function(){n.call(r._engine.create[N](r,i))})}return r._engine.create[N](r,arguments)}function i(t){if(Object(t)!==t)return t;var e=new t.constructor;for(var r in t)t[B](r)&&(e[r]=i(t[r]));return e}function n(t,e){for(var r=0,i=t.length;i>r;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function a(t,e,r){function i(){var a=Array.prototype.slice.call(arguments,0),s=a.join("?"),o=i.cache=i.cache||{},l=i.count=i.count||[];return o[B](s)?(n(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[N](e,a),r?r(o[s]):o[s])}return i}function s(){return this.hex}function o(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function l(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function h(t,e,r,i,n,a,s,o,h){null==h&&(h=1),h=h>1?1:0>h?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;c>g;g++){var x=u*f[g]+u,v=l(x,t,r,n,s),y=l(x,e,i,a,o),m=v*v+y*y;d+=p[g]*q.sqrt(m)}return u*d}function u(t,e,r,i,n,a,s,o,l){if(!(0>l||l>h(t,e,r,i,n,a,s,o))){var u,c=1,f=c/2,p=c-f,d=.01;for(u=h(t,e,r,i,n,a,s,o,p);V(u-l)>d;)f/=2,p+=(l>u?1:-1)*f,u=h(t,e,r,i,n,a,s,o,p);return p}}function c(t,e,r,i,n,a,s,o){if(!(D(t,r)<O(n,s)||O(t,r)>D(n,s)||D(e,i)<O(a,o)||O(e,i)>D(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(+O(t,r).toFixed(2)>p||p>+D(t,r).toFixed(2)||+O(n,s).toFixed(2)>p||p>+D(n,s).toFixed(2)||+O(e,i).toFixed(2)>d||d>+D(e,i).toFixed(2)||+O(a,o).toFixed(2)>d||d>+D(a,o).toFixed(2)))return{x:c,y:f}}}}function f(t,e,i){var n=r.bezierBBox(t),a=r.bezierBBox(e);if(!r.isBBoxIntersect(n,a))return i?0:[];for(var s=h.apply(0,t),o=h.apply(0,e),l=~~(s/5),u=~~(o/5),f=[],p=[],d={},g=i?0:[],x=0;l+1>x;x++){var v=r.findDotsAtSegment.apply(r,t.concat(x/l));f.push({x:v.x,y:v.y,t:x/l})}for(x=0;u+1>x;x++)v=r.findDotsAtSegment.apply(r,e.concat(x/u)),p.push({x:v.x,y:v.y,t:x/u});for(x=0;l>x;x++)for(var y=0;u>y;y++){var m=f[x],b=f[x+1],_=p[y],w=p[y+1],k=.001>V(b.x-m.x)?"y":"x",C=.001>V(w.x-_.x)?"y":"x",B=c(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(B){if(d[B.x.toFixed(4)]==B.y.toFixed(4))continue;d[B.x.toFixed(4)]=B.y.toFixed(4);var S=m.t+V((B[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),T=_.t+V((B[C]-_[C])/(w[C]-_[C]))*(w.t-_.t);S>=0&&1>=S&&T>=0&&1>=T&&(i?g++:g.push({x:B.x,y:B.y,t1:S,t2:T}))}}return g}function p(t,e,i){t=r._path2curve(t),e=r._path2curve(e);for(var n,a,s,o,l,h,u,c,p,d,g=i?0:[],x=0,v=t.length;v>x;x++){var y=t[x];if("M"==y[0])n=l=y[1],a=h=y[2];else{"C"==y[0]?(p=[n,a].concat(y.slice(1)),n=p[6],a=p[7]):(p=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=e.length;b>m;m++){var _=e[m];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=f(p,d,i);if(i)g+=w;else{for(var k=0,C=w.length;C>k;k++)w[k].segment1=x,w[k].segment2=m,w[k].bez1=p,w[k].bez2=d;g=g.concat(w)}}}}}return g}function d(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function g(){return this.x+z+this.y+z+this.width+" � "+this.height}function x(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;8>l;l++){if(a=s(n)-t,e>V(a))return n;if(o=(3*c*n+2*u)*n+h,1e-6>V(o))break;n-=a/o}if(r=0,i=1,n=t,r>n)return r;if(n>i)return i;for(;i>r;){if(a=s(n),e>V(a-t))return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function v(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[B](n)&&(i[K(n)]=t[n],r.push(K(n)));r.sort(ce)}this.anim=i,this.top=r[r.length-1],this.percents=r}function y(t,i,n,a,s,o){n=K(n);var l,h,u,c,f,p,g=t.ms,v={},y={},m={};if(a)for(_=0,k=or.length;k>_;_++){var b=or[_];if(b.el.id==i.id&&b.anim==t){b.percent!=n?(or.splice(_,1),u=1):h=b,i.attr(b.totalOrigin);break}}else a=+y;for(var _=0,k=t.percents.length;k>_;_++){if(t.percents[_]==n||t.percents[_]>a*t.top){n=t.percents[_],f=t.percents[_-1]||0,g=g/t.top*(n-f),c=t.percents[_+1],l=t.anim[n];break}a&&i.attr(t.anim[t.percents[_]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var C in l)if(l[B](C)&&(ie[B](C)||i.paper.customAttributes[B](C)))switch(v[C]=i.attr(C),null==v[C]&&(v[C]=re[C]),y[C]=l[C],ie[C]){case W:m[C]=(y[C]-v[C])/g;break;case"colour":v[C]=r.getRGB(v[C]);var S=r.getRGB(y[C]);m[C]={r:(S.r-v[C].r)/g,g:(S.g-v[C].g)/g,b:(S.b-v[C].b)/g};break;case"path":var T=Re(v[C],y[C]),A=T[1];for(v[C]=T[0],m[C]=[],_=0,k=v[C].length;k>_;_++){m[C][_]=[0];for(var N=1,L=v[C][_].length;L>N;N++)m[C][_][N]=(A[_][N]-v[C][_][N])/g}break;case"transform":var M=i._,z=Oe(M[C],y[C]);if(z)for(v[C]=z.from,y[C]=z.to,m[C]=[],m[C].real=!0,_=0,k=v[C].length;k>_;_++)for(m[C][_]=[v[C][_][0]],N=1,L=v[C][_].length;L>N;N++)m[C][_][N]=(y[C][_][N]-v[C][_][N])/g;else{var R=i.matrix||new d,I={_:{transform:M.transform},getBBox:function(){return i.getBBox(1)}};v[C]=[R.a,R.b,R.c,R.d,R.e,R.f],qe(I,y[C]),y[C]=I._.transform,m[C]=[(I.matrix.a-R.a)/g,(I.matrix.b-R.b)/g,(I.matrix.c-R.c)/g,(I.matrix.d-R.d)/g,(I.matrix.e-R.e)/g,(I.matrix.f-R.f)/g]}break;case"csv":var j=F(l[C])[P](w),q=F(v[C])[P](w);if("clip-rect"==C)for(v[C]=q,m[C]=[],_=q.length;_--;)m[C][_]=(j[_]-v[C][_])/g;y[C]=j;break;default:for(j=[][E](l[C]),q=[][E](v[C]),m[C]=[],_=i.paper.customAttributes[C].length;_--;)m[C][_]=((j[_]||0)-(q[_]||0))/g}var D=l.easing,O=r.easing_formulas[D];if(!O)if(O=F(D).match(Q),O&&5==O.length){var V=O;O=function(t){return x(t,+V[1],+V[2],+V[3],+V[4],g)}}else O=pe;if(p=l.start||t.start||+new Date,b={anim:t,percent:n,timestamp:p,start:p+(t.del||0),status:0,initstatus:a||0,stop:!1,ms:g,easing:O,from:v,diff:m,to:y,el:i,callback:l.callback,prev:f,next:c,repeat:o||t.times,origin:i.attr(),totalOrigin:s},or.push(b),a&&!h&&!u&&(b.stop=!0,b.start=new Date-g*a,1==or.length))return hr();u&&(b.start=new Date-b.ms*a),1==or.length&&lr(hr)}e("raphael.anim.start."+i.id,i,t)}}function m(t){for(var e=0;or.length>e;e++)or[e].el.paper==t&&or.splice(e--,1)}r.version="2.1.0",r.eve=e;var b,_,w=/[, ]+/,k={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,B="hasOwnProperty",S={doc:document,win:t},T={was:Object.prototype[B].call(S.win,"Raphael"),is:S.win.Raphael},A=function(){this.ca=this.customAttributes={}},N="apply",E="concat",L="ontouchstart"in S.win||S.win.DocumentTouch&&S.doc instanceof DocumentTouch,M="",z=" ",F=String,P="split",R="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[P](z),I={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},j=F.prototype.toLowerCase,q=Math,D=q.max,O=q.min,V=q.abs,Y=q.pow,G=q.PI,W="number",X="string",H="array",U=Object.prototype.toString,$=(r._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Z={NaN:1,Infinity:1,"-Infinity":1},Q=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,J=q.round,K=parseFloat,te=parseInt,ee=F.prototype.toUpperCase,re=r._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"https://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},ie=r._availableAnimAttrs={blur:W,"clip-rect":"csv",cx:W,cy:W,fill:"colour","fill-opacity":W,"font-size":W,height:W,opacity:W,path:"path",r:W,rx:W,ry:W,stroke:"colour","stroke-opacity":W,"stroke-width":W,transform:"transform",width:W,x:W,y:W},ne=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,ae={hs:1,rg:1},se=/,?([achlmqrstvxz]),?/gi,oe=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,le=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,he=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,ue=(r._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ce=function(t,e){return K(t)-K(e)},fe=function(){},pe=function(t){return t},de=r._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},ge=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},xe=r._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return ge(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return ge(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return de(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return de(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return de(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return de(e.x,e.y,e.width,e.height)}},ve=r.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Re(t),n=0,s=t.length;s>n;n++)for(l=t[n],a=1,o=l.length;o>a;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(r._g=S,r.type=S.win.SVGAngle||S.doc.implementation.hasFeature("https://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==r.type){var ye,me=S.doc.createElement("div");if(me.innerHTML='<v:shape adj="1"/>',ye=me.firstChild,ye.style.behavior="url(#default#VML)",!ye||"object"!=typeof ye.adj)return r.type=M;me=null}r.svg=!(r.vml="VML"==r.type),r._Paper=A,r.fn=_=A.prototype=r.prototype,r._id=0,r._oid=0,r.is=function(t,e){return e=j.call(e),"finite"==e?!Z[B](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||U.call(t).slice(8,-1).toLowerCase()==e},r.angle=function(t,e,i,n,a,s){if(null==a){var o=t-i,l=e-n;return o||l?(180+180*q.atan2(-l,-o)/G+360)%360:0}return r.angle(t,e,a,s)-r.angle(i,n,a,s)},r.rad=function(t){return t%360*G/180},r.deg=function(t){return 180*t/G%360},r.snapTo=function(t,e,i){if(i=r.is(i,"finite")?i:10,r.is(t,H)){for(var n=t.length;n--;)if(i>=V(t[n]-e))return t[n]}else{t=+t;var a=e%t;if(i>a)return e-a;if(a>t-i)return e-a+t}return e},r.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=0|16*q.random(),r="x"==t?e:8|3&e;return r.toString(16)}),r.setWindow=function(t){e("raphael.setWindow",r,S.win,t),S.win=t,S.doc=S.win.document,r._engine.initWin&&r._engine.initWin(S.win)};var be=function(t){if(r.vml){var e,i=/^\s+|\s+$/g;try{var n=new ActiveXObject("htmlfile");n.write("<body>"),n.close(),e=n.body}catch(s){e=createPopup().document.body}var o=e.createTextRange();be=a(function(t){try{e.style.color=F(t).replace(i,M);var r=o.queryCommandValue("ForeColor");return r=(255&r)<<16|65280&r|(16711680&r)>>>16,"#"+("000000"+r.toString(16)).slice(-6)}catch(n){return"none"}})}else{var l=S.doc.createElement("i");l.title="Rapha�l Colour Picker",l.style.display="none",S.doc.body.appendChild(l),be=a(function(t){return l.style.color=t,S.doc.defaultView.getComputedStyle(l,M).getPropertyValue("color")})}return be(t)},_e=function(){return"hsb("+[this.h,this.s,this.b]+")"},we=function(){return"hsl("+[this.h,this.s,this.l]+")"},ke=function(){return this.hex},Ce=function(t,e,i){if(null==e&&r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,e=t.g,t=t.r),null==e&&r.is(t,X)){var n=r.getRGB(t);t=n.r,e=n.g,i=n.b}return(t>1||e>1||i>1)&&(t/=255,e/=255,i/=255),[t,e,i]},Be=function(t,e,i,n){t*=255,e*=255,i*=255;var a={r:t,g:e,b:i,hex:r.rgb(t,e,i),toString:ke};return r.is(n,"finite")&&(a.opacity=n),a};r.color=function(t){var e;return r.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(e=r.hsb2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):r.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(e=r.hsl2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):(r.is(t,"string")&&(t=r.getRGB(t)),r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(e=r.rgb2hsl(t),t.h=e.h,t.s=e.s,t.l=e.l,e=r.rgb2hsb(t),t.v=e.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=ke,t},r.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,t=t.h,i=t.o),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-V(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],Be(n,a,s,i)},r.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(.5>r?r:1-r),o=l*(1-V(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],Be(n,a,s,i)},r.rgb2hsb=function(t,e,r){r=Ce(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=D(t,e,r),s=a-O(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=60*((i+360)%6)/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:_e}},r.rgb2hsl=function(t,e,r){r=Ce(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=D(t,e,r),o=O(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=60*((i+360)%6)/360,a=(s+o)/2,n=0==l?0:.5>a?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:we}},r._path2string=function(){return this.join(",").replace(se,"$1")},r._preload=function(t,e){var r=S.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,S.doc.body.removeChild(this)},r.onerror=function(){S.doc.body.removeChild(this)},S.doc.body.appendChild(r),r.src=t},r.getRGB=a(function(t){if(!t||(t=F(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:s};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:s};!(ae[B](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=be(t));var e,i,n,a,o,l,h=t.match($);return h?(h[2]&&(n=te(h[2].substring(5),16),i=te(h[2].substring(3,5),16),e=te(h[2].substring(1,3),16)),h[3]&&(n=te((o=h[3].charAt(3))+o,16),i=te((o=h[3].charAt(2))+o,16),e=te((o=h[3].charAt(1))+o,16)),h[4]&&(l=h[4][P](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),"rgba"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100)),h[5]?(l=h[5][P](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"�"==l[0].slice(-1))&&(e/=360),"hsba"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsb2rgb(e,i,n,a)):h[6]?(l=h[6][P](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"�"==l[0].slice(-1))&&(e/=360),"hsla"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsl2rgb(e,i,n,a)):(h={r:e,g:i,b:n,toString:s},h.hex="#"+(16777216|n|i<<8|e<<16).toString(16).slice(1),r.is(a,"finite")&&(h.opacity=a),h)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:s}},r),r.hsb=a(function(t,e,i){return r.hsb2rgb(t,e,i).hex}),r.hsl=a(function(t,e,i){return r.hsl2rgb(t,e,i).hex}),r.rgb=a(function(t,e,r){return"#"+(16777216|r|e<<8|t<<16).toString(16).slice(1)}),r.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,0>=e.s&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},r.getColor.reset=function(){delete this.start},r.parsePathString=function(t){if(!t)return null;var e=Se(t);if(e.arr)return Ae(e.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return r.is(t,H)&&r.is(t[0],H)&&(n=Ae(t)),n.length||F(t).replace(oe,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(he,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][E](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][E](a));else for(;a.length>=i[s]&&(n.push([e][E](a.splice(0,i[s]))),i[s]););}),n.toString=r._path2string,e.arr=Ae(n),n},r.parseTransformString=a(function(t){if(!t)return null;var e=[];return r.is(t,H)&&r.is(t[0],H)&&(e=Ae(t)),e.length||F(t).replace(le,function(t,r,i){var n=[];j.call(r),i.replace(he,function(t,e){e&&n.push(+e)}),e.push([r][E](n))}),e.toString=r._path2string,e});var Se=function(t){var e=Se.ps=Se.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[B](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};r.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=Y(h,3),c=Y(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,x=t+2*l*(r-t)+f*(n-2*r+t),v=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,C=90-180*q.atan2(x-y,v-m)/G;return(x>y||m>v)&&(C+=180),{x:d,y:g,m:{x:x,y:v},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:C}},r.bezierBBox=function(t,e,i,n,a,s,o,l){r.is(t,"array")||(t=[t,e,i,n,a,s,o,l]);var h=Pe.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},r.isPointInsideBBox=function(t,e,r){return e>=t.x&&t.x2>=e&&r>=t.y&&t.y2>=r},r.isBBoxIntersect=function(t,e){var i=r.isPointInsideBBox;return i(e,t.x,t.y)||i(e,t.x2,t.y)||i(e,t.x,t.y2)||i(e,t.x2,t.y2)||i(t,e.x,e.y)||i(t,e.x2,e.y)||i(t,e.x,e.y2)||i(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)},r.pathIntersection=function(t,e){return p(t,e)},r.pathIntersectionNumber=function(t,e){return p(t,e,1)},r.isPointInsidePath=function(t,e,i){var n=r.pathBBox(t);return r.isPointInsideBBox(n,e,i)&&1==p(t,[["M",e,i],["H",n.x2+10]],1)%2},r._removedFactory=function(t){return function(){e("raphael.log",null,"Rapha�l: you are calling to method �"+t+"� of removed object",t)}};var Te=r.pathBBox=function(t){var e=Se(t);if(e.bbox)return i(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Re(t);for(var r,n=0,a=0,s=[],o=[],l=0,h=t.length;h>l;l++)if(r=t[l],"M"==r[0])n=r[1],a=r[2],s.push(n),o.push(a);else{var u=Pe(n,a,r[1],r[2],r[3],r[4],r[5],r[6]);s=s[E](u.min.x,u.max.x),o=o[E](u.min.y,u.max.y),n=r[5],a=r[6]}var c=O[N](0,s),f=O[N](0,o),p=D[N](0,s),d=D[N](0,o),g=p-c,x=d-f,v={x:c,y:f,x2:p,y2:d,width:g,height:x,cx:c+g/2,cy:f+x/2};return e.bbox=i(v),v},Ae=function(t){var e=i(t);return e.toString=r._path2string,e},Ne=r._pathToRelative=function(t){var e=Se(t);if(e.rel)return Ae(e.rel);r.is(t,H)&&r.is(t&&t[0],H)||(t=r.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));for(var h=l,u=t.length;u>h;h++){var c=i[h]=[],f=t[h];if(f[0]!=j.call(f[0]))switch(c[0]=j.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;d>p;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,x=f.length;x>g;g++)i[h][g]=f[g]}var v=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][v-1];break;case"v":a+=+i[h][v-1];break;default:n+=+i[h][v-2],a+=+i[h][v-1]}}return i.toString=r._path2string,e.rel=Ae(i),i},Ee=r._pathToAbsolute=function(t){var e=Se(t);if(e.abs)return Ae(e.abs);if(r.is(t,H)&&r.is(t&&t[0],H)||(t=r.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,s=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],s=n,l=a,h++,i[0]=["M",n,a]);for(var u,c,f=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),p=h,d=t.length;d>p;p++){if(i.push(u=[]),c=t[p],c[0]!=ee.call(c[0]))switch(u[0]=ee.call(c[0]),u[0]){case"A":u[1]=c[1],u[2]=c[2],u[3]=c[3],u[4]=c[4],u[5]=c[5],u[6]=+(c[6]+n),u[7]=+(c[7]+a);break;case"V":u[1]=+c[1]+a;break;case"H":u[1]=+c[1]+n;break;case"R":for(var g=[n,a][E](c.slice(1)),x=2,v=g.length;v>x;x++)g[x]=+g[x]+n,g[++x]=+g[x]+a;i.pop(),i=i[E](o(g,f));break;case"M":s=+c[1]+n,l=+c[2]+a;default:for(x=1,v=c.length;v>x;x++)u[x]=+c[x]+(x%2?n:a)}else if("R"==c[0])g=[n,a][E](c.slice(1)),i.pop(),i=i[E](o(g,f)),u=["R"][E](c.slice(-2));else for(var y=0,m=c.length;m>y;y++)u[y]=c[y];switch(u[0]){case"Z":n=s,a=l;break;case"H":n=u[1];break;case"V":a=u[1];break;case"M":s=u[u.length-2],l=u[u.length-1];default:n=u[u.length-2],a=u[u.length-1]}}return i.toString=r._path2string,e.abs=Ae(i),i},Le=function(t,e,r,i){return[t,e,r,i,r,i]},Me=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},ze=function(t,e,r,i,n,s,o,l,h,u){var c,f=120*G/180,p=G/180*(+n||0),d=[],g=a(function(t,e,r){var i=t*q.cos(r)-e*q.sin(r),n=t*q.sin(r)+e*q.cos(r);return{x:i,y:n}});if(u)C=u[0],B=u[1],w=u[2],k=u[3];else{c=g(t,e,-p),t=c.x,e=c.y,c=g(l,h,-p),l=c.x,h=c.y;var x=(q.cos(G/180*n),q.sin(G/180*n),(t-l)/2),v=(e-h)/2,y=x*x/(r*r)+v*v/(i*i);y>1&&(y=q.sqrt(y),r=y*r,i=y*i);var m=r*r,b=i*i,_=(s==o?-1:1)*q.sqrt(V((m*b-m*v*v-b*x*x)/(m*v*v+b*x*x))),w=_*r*v/i+(t+l)/2,k=_*-i*x/r+(e+h)/2,C=q.asin(((e-k)/i).toFixed(9)),B=q.asin(((h-k)/i).toFixed(9));C=w>t?G-C:C,B=w>l?G-B:B,0>C&&(C=2*G+C),0>B&&(B=2*G+B),o&&C>B&&(C-=2*G),!o&&B>C&&(B-=2*G)}var S=B-C;if(V(S)>f){var T=B,A=l,N=h;B=C+f*(o&&B>C?1:-1),l=w+r*q.cos(B),h=k+i*q.sin(B),d=ze(l,h,r,i,n,0,o,A,N,[B,T,w,k])}S=B-C;var L=q.cos(C),M=q.sin(C),z=q.cos(B),F=q.sin(B),R=q.tan(S/4),I=4/3*r*R,j=4/3*i*R,D=[t,e],O=[t+I*M,e-j*L],Y=[l+I*F,h-j*z],W=[l,h];if(O[0]=2*D[0]-O[0],O[1]=2*D[1]-O[1],u)return[O,Y,W][E](d);d=[O,Y,W][E](d).join()[P](",");for(var X=[],H=0,U=d.length;U>H;H++)X[H]=H%2?g(d[H-1],d[H],p).y:g(d[H],d[H+1],p).x;return X},Fe=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:Y(h,3)*t+3*Y(h,2)*l*r+3*h*l*l*n+Y(l,3)*s,y:Y(h,3)*e+3*Y(h,2)*l*i+3*h*l*l*a+Y(l,3)*o}},Pe=a(function(t,e,r,i,n,a,s,o){var l,h=n-2*r+t-(s-2*n+r),u=2*(r-t)-2*(n-r),c=t-r,f=(-u+q.sqrt(u*u-4*h*c))/2/h,p=(-u-q.sqrt(u*u-4*h*c))/2/h,d=[e,o],g=[t,s];return V(f)>"1e12"&&(f=.5),V(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=Fe(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=Fe(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),h=a-2*i+e-(o-2*a+i),u=2*(i-e)-2*(a-i),c=e-i,f=(-u+q.sqrt(u*u-4*h*c))/2/h,p=(-u-q.sqrt(u*u-4*h*c))/2/h,V(f)>"1e12"&&(f=.5),V(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=Fe(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=Fe(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),{min:{x:O[N](0,g),y:O[N](0,d)},max:{x:D[N](0,g),y:D[N](0,d)}}}),Re=r._path2curve=a(function(t,e){var r=!e&&Se(t);if(!e&&r.curve)return Ae(r.curve);for(var i=Ee(t),n=e&&Ee(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e){var r,i;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][E](ze[N](0,[e.x,e.y][E](t.slice(1))));break;case"S":r=e.x+(e.x-(e.bx||e.x)),i=e.y+(e.y-(e.by||e.y)),t=["C",r,i][E](t.slice(1));break;case"T":e.qx=e.x+(e.x-(e.qx||e.x)),e.qy=e.y+(e.y-(e.qy||e.y)),t=["C"][E](Me(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][E](Me(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][E](Le(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][E](Le(e.x,e.y,t[1],e.y));break;case"V":t=["C"][E](Le(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][E](Le(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)t.splice(e++,0,["C"][E](r.splice(0,6)));t.splice(e,1),c=D(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],c=D(i.length,n&&n.length||0))},u=0,c=D(i.length,n&&n.length||0);c>u;u++){i[u]=o(i[u],a),l(i,u),n&&(n[u]=o(n[u],s)),n&&l(n,u),h(i,n,a,s,u),h(n,i,s,a,u);var f=i[u],p=n&&n[u],d=f.length,g=n&&p.length;a.x=f[d-2],a.y=f[d-1],a.bx=K(f[d-4])||a.x,a.by=K(f[d-3])||a.y,s.bx=n&&(K(p[g-4])||s.x),s.by=n&&(K(p[g-3])||s.y),s.x=n&&p[g-2],s.y=n&&p[g-1]}return n||(r.curve=Ae(i)),n?[i,n]:i},null,Ae),Ie=(r._parseDots=a(function(t){for(var e=[],i=0,n=t.length;n>i;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=r.getRGB(s[1]),a.color.error)return null;a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),e.push(a)}for(i=1,n=e.length-1;n>i;i++)if(!e[i].offset){for(var o=K(e[i-1].offset||0),l=0,h=i+1;n>h;h++)if(e[h].offset){l=e[h].offset;break}l||(l=100,h=n),l=K(l);for(var u=(l-o)/(h-i+1);h>i;i++)o+=u,e[i].offset=o+"%"}return e}),r._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),je=(r._tofront=function(t,e){e.top!==t&&(Ie(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},r._toback=function(t,e){e.bottom!==t&&(Ie(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},r._insertafter=function(t,e,r){Ie(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},r._insertbefore=function(t,e,r){Ie(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},r.toMatrix=function(t,e){var r=Te(t),i={_:{transform:M},getBBox:function(){return r}};return qe(i,e),i.matrix}),qe=(r.transformPath=function(t,e){return ve(t,je(t,e))},r._extractTransform=function(t,e){if(null==e)return t._.transform;e=F(e).replace(/\.{3}|\u2026/g,t._.transform||M);var i=r.parseTransformString(e),n=0,a=0,s=0,o=1,l=1,h=t._,u=new d;if(h.transform=i||[],i)for(var c=0,f=i.length;f>c;c++){var p,g,x,v,y,m=i[c],b=m.length,_=F(m[0]).toLowerCase(),w=m[0]!=_,k=w?u.invert():0;"t"==_&&3==b?w?(p=k.x(0,0),g=k.y(0,0),x=k.x(m[1],m[2]),v=k.y(m[1],m[2]),u.translate(x-p,v-g)):u.translate(m[1],m[2]):"r"==_?2==b?(y=y||t.getBBox(1),u.rotate(m[1],y.x+y.width/2,y.y+y.height/2),n+=m[1]):4==b&&(w?(x=k.x(m[2],m[3]),v=k.y(m[2],m[3]),u.rotate(m[1],x,v)):u.rotate(m[1],m[2],m[3]),n+=m[1]):"s"==_?2==b||3==b?(y=y||t.getBBox(1),u.scale(m[1],m[b-1],y.x+y.width/2,y.y+y.height/2),o*=m[1],l*=m[b-1]):5==b&&(w?(x=k.x(m[3],m[4]),v=k.y(m[3],m[4]),u.scale(m[1],m[2],x,v)):u.scale(m[1],m[2],m[3],m[4]),o*=m[1],l*=m[2]):"m"==_&&7==b&&u.add(m[1],m[2],m[3],m[4],m[5],m[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1}),De=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},Oe=r._equaliseTransform=function(t,e){e=F(e).replace(/\.{3}|\u2026/g,t),t=r.parseTransformString(t)||[],e=r.parseTransformString(e)||[];for(var i,n,a,s,o=D(t.length,e.length),l=[],h=[],u=0;o>u;u++){if(a=t[u]||De(e[u]),s=e[u]||De(a),a[0]!=s[0]||"r"==a[0].toLowerCase()&&(a[2]!=s[2]||a[3]!=s[3])||"s"==a[0].toLowerCase()&&(a[3]!=s[3]||a[4]!=s[4]))return;for(l[u]=[],h[u]=[],i=0,n=D(a.length,s.length);n>i;i++)i in a&&(l[u][i]=a[i]),i in s&&(h[u][i]=s[i])}return{from:l,to:h}
};r._getContainer=function(t,e,i,n){var a;return a=null!=n||r.is(t,"object")?t:S.doc.getElementById(t),null!=a?a.tagName?null==e?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:e,height:i}:{container:1,x:t,y:e,width:i,height:n}:void 0},r.pathToRelative=Ne,r._engine={},r.path2curve=Re,r.matrix=function(t,e,r,i,n,a){return new d(t,e,r,i,n,a)},function(t){function e(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var r=q.sqrt(e(t));t[0]&&(t[0]/=r),t[1]&&(t[1]/=r)}t.add=function(t,e,r,i,n,a){var s,o,l,h,u=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,r,n],[e,i,a],[0,0,1]];for(t&&t instanceof d&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),s=0;3>s;s++)for(o=0;3>o;o++){for(h=0,l=0;3>l;l++)h+=c[s][l]*f[l][o];u[s][o]=h}this.a=u[0][0],this.b=u[1][0],this.c=u[0][1],this.d=u[1][1],this.e=u[0][2],this.f=u[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new d(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new d(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,e,i){t=r.rad(t),e=e||0,i=i||0;var n=+q.cos(t).toFixed(9),a=+q.sin(t).toFixed(9);this.add(n,a,-a,n,e,i),this.add(1,0,0,1,-e,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[F.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return r.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=q.sqrt(e(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=q.sqrt(e(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return 0>s?(t.rotate=r.deg(q.acos(s)),0>a&&(t.rotate=360-t.rotate)):t.rotate=r.deg(q.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[P]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:M)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:M)+(e.rotate?"r"+[e.rotate,0,0]:M)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(d.prototype);var Ve=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);_.safari="Apple Computer, Inc."==navigator.vendor&&(Ve&&4>Ve[1]||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Ve&&8>Ve[1]?function(){var t=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){t.remove()})}:fe;for(var Ye=function(){this.returnValue=!1},Ge=function(){return this.originalEvent.preventDefault()},We=function(){this.cancelBubble=!0},Xe=function(){return this.originalEvent.stopPropagation()},He=function(){return S.doc.addEventListener?function(t,e,r,i){var n=L&&I[e]?I[e]:e,a=function(n){var a=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,s=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,o=n.clientX+s,l=n.clientY+a;if(L&&I[B](e))for(var h=0,u=n.targetTouches&&n.targetTouches.length;u>h;h++)if(n.targetTouches[h].target==t){var c=n;n=n.targetTouches[h],n.originalEvent=c,n.preventDefault=Ge,n.stopPropagation=Xe;break}return r.call(i,n,o,l)};return t.addEventListener(n,a,!1),function(){return t.removeEventListener(n,a,!1),!0}}:S.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||S.win.event;var e=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,n=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||Ye,t.stopPropagation=t.stopPropagation||We,r.call(i,t,a,s)};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a}:void 0}(),Ue=[],$e=function(t){for(var r,i=t.clientX,n=t.clientY,a=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,s=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,o=Ue.length;o--;){if(r=Ue[o],L){for(var l,h=t.touches.length;h--;)if(l=t.touches[h],l.identifier==r.el._drag.id){i=l.clientX,n=l.clientY,(t.originalEvent?t.originalEvent:t).preventDefault();break}}else t.preventDefault();var u,c=r.el.node,f=c.nextSibling,p=c.parentNode,d=c.style.display;S.win.opera&&p.removeChild(c),c.style.display="none",u=r.el.paper.getElementByPoint(i,n),c.style.display=d,S.win.opera&&(f?p.insertBefore(c,f):p.appendChild(c)),u&&e("raphael.drag.over."+r.el.id,r.el,u),i+=s,n+=a,e("raphael.drag.move."+r.el.id,r.move_scope||r.el,i-r.el._drag.x,n-r.el._drag.y,i,n,t)}},Ze=function(t){r.unmousemove($e).unmouseup(Ze);for(var i,n=Ue.length;n--;)i=Ue[n],i.el._drag={},e("raphael.drag.end."+i.el.id,i.end_scope||i.start_scope||i.move_scope||i.el,t);Ue=[]},Qe=r.el={},Je=R.length;Je--;)(function(t){r[t]=Qe[t]=function(e,i){return r.is(e,"function")&&(this.events=this.events||[],this.events.push({name:t,f:e,unbind:He(this.shape||this.node||S.doc,t,e,i||this)})),this},r["un"+t]=Qe["un"+t]=function(e){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!r.is(e,"undefined")&&i[n].f!=e||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}})(R[Je]);Qe.data=function(t,i){var n=ue[this.id]=ue[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(r.is(t,"object")){for(var a in t)t[B](a)&&this.data(a,t[a]);return this}return e("raphael.data.get."+this.id,this,n[t],t),n[t]}return n[t]=i,e("raphael.data.set."+this.id,this,i,t),this},Qe.removeData=function(t){return null==t?ue[this.id]={}:ue[this.id]&&delete ue[this.id][t],this},Qe.getData=function(){return i(ue[this.id]||{})},Qe.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},Qe.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var Ke=[];Qe.drag=function(t,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,u=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft;this._drag.x=l.clientX+u,this._drag.y=l.clientY+h,this._drag.id=l.identifier,!Ue.length&&r.mousemove($e).mouseup(Ze),Ue.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&e.on("raphael.drag.start."+this.id,i),t&&e.on("raphael.drag.move."+this.id,t),n&&e.on("raphael.drag.end."+this.id,n),e("raphael.drag.start."+this.id,s||a||this,l.clientX+u,l.clientY+h,l)}return this._drag={},Ke.push({el:this,start:l}),this.mousedown(l),this},Qe.onDragOver=function(t){t?e.on("raphael.drag.over."+this.id,t):e.unbind("raphael.drag.over."+this.id)},Qe.undrag=function(){for(var t=Ke.length;t--;)Ke[t].el==this&&(this.unmousedown(Ke[t].start),Ke.splice(t,1),e.unbind("raphael.drag.*."+this.id));!Ke.length&&r.unmousemove($e).unmouseup(Ze),Ue=[]},_.circle=function(t,e,i){var n=r._engine.circle(this,t||0,e||0,i||0);return this.__set__&&this.__set__.push(n),n},_.rect=function(t,e,i,n,a){var s=r._engine.rect(this,t||0,e||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},_.ellipse=function(t,e,i,n){var a=r._engine.ellipse(this,t||0,e||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},_.path=function(t){t&&!r.is(t,X)&&!r.is(t[0],H)&&(t+=M);var e=r._engine.path(r.format[N](r,arguments),this);return this.__set__&&this.__set__.push(e),e},_.image=function(t,e,i,n,a){var s=r._engine.image(this,t||"about:blank",e||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},_.text=function(t,e,i){var n=r._engine.text(this,t||0,e||0,F(i));return this.__set__&&this.__set__.push(n),n},_.set=function(t){!r.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var e=new cr(t);return this.__set__&&this.__set__.push(e),e.paper=this,e.type="set",e},_.setStart=function(t){this.__set__=t||this.set()},_.setFinish=function(){var t=this.__set__;return delete this.__set__,t},_.setSize=function(t,e){return r._engine.setSize.call(this,t,e)},_.setViewBox=function(t,e,i,n,a){return r._engine.setViewBox.call(this,t,e,i,n,a)},_.top=_.bottom=null,_.raphael=r;var tr=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(S.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(S.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};_.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=S.doc.elementFromPoint(t,e);if(S.win.opera&&"svg"==n.tagName){var a=tr(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},_.getElementsByBBox=function(t){var e=this.set();return this.forEach(function(i){r.isBBoxIntersect(i.getBBox(),t)&&e.push(i)}),e},_.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},_.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},_.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},Qe.isPointInside=function(t,e){var i=this.realPath=this.realPath||xe[this.type](this);return r.isPointInsidePath(i,t,e)},Qe.getBBox=function(t){if(this.removed)return{};var e=this._;return t?((e.dirty||!e.bboxwt)&&(this.realPath=xe[this.type](this),e.bboxwt=Te(this.realPath),e.bboxwt.toString=g,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&((e.dirty||!this.realPath)&&(e.bboxwt=0,this.realPath=xe[this.type](this)),e.bbox=Te(ve(this.realPath,this.matrix)),e.bbox.toString=g,e.dirty=e.dirtyT=0),e.bbox)},Qe.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},Qe.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:t.opacity||.5,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||xe[this.type](this);a=this.matrix?ve(a,this.matrix):a;for(var s=1;r+1>s;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var er=function(t,e,i,n,a,s,o,l,c){return null==c?h(t,e,i,n,a,s,o,l):r.findDotsAtSegment(t,e,i,n,a,s,o,l,u(t,e,i,n,a,s,o,l,c))},rr=function(t,e){return function(i,n,a){i=Re(i);for(var s,o,l,h,u,c="",f={},p=0,d=0,g=i.length;g>d;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];else{if(h=er(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(e&&!f.start){if(u=er(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),c+=["C"+u.start.x,u.start.y,u.m.x,u.m.y,u.x,u.y],a)return c;f.start=c,c=["M"+u.x,u.y+"C"+u.n.x,u.n.y,u.end.x,u.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!e)return u=er(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:u.x,y:u.y,alpha:u.alpha}}p+=h,s=+l[5],o=+l[6]}c+=l.shift()+l}return f.end=c,u=t?p:e?f:r.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),u.alpha&&(u={x:u.x,y:u.y,alpha:u.alpha}),u}},ir=rr(1),nr=rr(),ar=rr(0,1);r.getTotalLength=ir,r.getPointAtLength=nr,r.getSubpath=function(t,e,r){if(1e-6>this.getTotalLength(t)-r)return ar(t,e).end;var i=ar(t,r,1);return e?ar(i,e).end:i},Qe.getTotalLength=function(){return"path"==this.type?this.node.getTotalLength?this.node.getTotalLength():ir(this.attrs.path):void 0},Qe.getPointAtLength=function(t){return"path"==this.type?nr(this.attrs.path,t):void 0},Qe.getSubpath=function(t,e){return"path"==this.type?r.getSubpath(this.attrs.path,t,e):void 0};var sr=r.easing_formulas={linear:function(t){return t},"<":function(t){return Y(t,1.7)},">":function(t){return Y(t,.48)},"<>":function(t){var e=.48-t/1.04,r=q.sqrt(.1734+e*e),i=r-e,n=Y(V(i),1/3)*(0>i?-1:1),a=-r-e,s=Y(V(a),1/3)*(0>a?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:Y(2,-10*t)*q.sin((t-.075)*2*G/.3)+1},bounce:function(t){var e,r=7.5625,i=2.75;return 1/i>t?e=r*t*t:2/i>t?(t-=1.5/i,e=r*t*t+.75):2.5/i>t?(t-=2.25/i,e=r*t*t+.9375):(t-=2.625/i,e=r*t*t+.984375),e}};sr.easeIn=sr["ease-in"]=sr["<"],sr.easeOut=sr["ease-out"]=sr[">"],sr.easeInOut=sr["ease-in-out"]=sr["<>"],sr["back-in"]=sr.backIn,sr["back-out"]=sr.backOut;var or=[],lr=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(t){setTimeout(t,16)},hr=function(){for(var t=+new Date,i=0;or.length>i;i++){var n=or[i];if(!n.el.removed&&!n.paused){var a,s,o=t-n.start,l=n.ms,h=n.easing,u=n.from,c=n.diff,f=n.to,p=(n.t,n.el),d={},g={};if(n.initstatus?(o=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*l,n.status=n.initstatus,delete n.initstatus,n.stop&&or.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(o/l))/n.anim.top,!(0>o))if(l>o){var x=h(o/l);for(var v in u)if(u[B](v)){switch(ie[v]){case W:a=+u[v]+x*l*c[v];break;case"colour":a="rgb("+[ur(J(u[v].r+x*l*c[v].r)),ur(J(u[v].g+x*l*c[v].g)),ur(J(u[v].b+x*l*c[v].b))].join(",")+")";break;case"path":a=[];for(var m=0,b=u[v].length;b>m;m++){a[m]=[u[v][m][0]];for(var _=1,w=u[v][m].length;w>_;_++)a[m][_]=+u[v][m][_]+x*l*c[v][m][_];a[m]=a[m].join(z)}a=a.join(z);break;case"transform":if(c[v].real)for(a=[],m=0,b=u[v].length;b>m;m++)for(a[m]=[u[v][m][0]],_=1,w=u[v][m].length;w>_;_++)a[m][_]=u[v][m][_]+x*l*c[v][m][_];else{var k=function(t){return+u[v][t]+x*l*c[v][t]};a=[["m",k(0),k(1),k(2),k(3),k(4),k(5)]]}break;case"csv":if("clip-rect"==v)for(a=[],m=4;m--;)a[m]=+u[v][m]+x*l*c[v][m];break;default:var C=[][E](u[v]);for(a=[],m=p.paper.customAttributes[v].length;m--;)a[m]=+C[m]+x*l*c[v][m]}d[v]=a}p.attr(d),function(t,r,i){setTimeout(function(){e("raphael.anim.frame."+t,r,i)})}(p.id,p,n.anim)}else{if(function(t,i,n){setTimeout(function(){e("raphael.anim.frame."+i.id,i,n),e("raphael.anim.finish."+i.id,i,n),r.is(t,"function")&&t.call(i)})}(n.callback,p,n.anim),p.attr(f),or.splice(i--,1),n.repeat>1&&!n.next){for(s in f)f[B](s)&&(g[s]=n.totalOrigin[s]);n.el.attr(g),y(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&y(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}r.svg&&p&&p.paper&&p.paper.safari(),or.length&&lr(hr)},ur=function(t){return t>255?255:0>t?0:t};Qe.animateWith=function(t,e,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var l=i instanceof v?i:r.animation(i,n,a,s);y(l,o,l.percents[0],null,o.attr());for(var h=0,u=or.length;u>h;h++)if(or[h].anim==e&&or[h].el==t){or[u-1].start=or[h].start;break}return o},Qe.onAnimation=function(t){return t?e.on("raphael.anim.frame."+this.id,t):e.unbind("raphael.anim.frame."+this.id),this},v.prototype.delay=function(t){var e=new v(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},v.prototype.repeat=function(t){var e=new v(this.anim,this.ms);return e.del=this.del,e.times=q.floor(D(t,0))||1,e},r.animation=function(t,e,i,n){if(t instanceof v)return t;(r.is(i,"function")||!i)&&(n=n||i||null,i=null),t=Object(t),e=+e||0;var a,s,o={};for(s in t)t[B](s)&&K(s)!=s&&K(s)+"%"!=s&&(a=!0,o[s]=t[s]);return a?(i&&(o.easing=i),n&&(o.callback=n),new v({100:o},e)):new v(t,e)},Qe.animate=function(t,e,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof v?t:r.animation(t,e,i,n);return y(s,a,s.percents[0],null,a.attr()),a},Qe.setTime=function(t,e){return t&&null!=e&&this.status(t,O(e,t.ms)/t.ms),this},Qe.status=function(t,e){var r,i,n=[],a=0;if(null!=e)return y(t,this,-1,O(e,1)),this;for(r=or.length;r>a;a++)if(i=or[a],i.el.id==this.id&&(!t||i.anim==t)){if(t)return i.status;n.push({anim:i.anim,status:i.status})}return t?0:n},Qe.pause=function(t){for(var r=0;or.length>r;r++)or[r].el.id!=this.id||t&&or[r].anim!=t||e("raphael.anim.pause."+this.id,this,or[r].anim)!==!1&&(or[r].paused=!0);return this},Qe.resume=function(t){for(var r=0;or.length>r;r++)if(or[r].el.id==this.id&&(!t||or[r].anim==t)){var i=or[r];e("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))}return this},Qe.stop=function(t){for(var r=0;or.length>r;r++)or[r].el.id!=this.id||t&&or[r].anim!=t||e("raphael.anim.stop."+this.id,this,or[r].anim)!==!1&&or.splice(r--,1);return this},e.on("raphael.remove",m),e.on("raphael.clear",m),Qe.toString=function(){return"Rapha�l�s object"};var cr=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;r>e;e++)!t[e]||t[e].constructor!=Qe.constructor&&t[e].constructor!=cr||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},fr=cr.prototype;fr.push=function(){for(var t,e,r=0,i=arguments.length;i>r;r++)t=arguments[r],!t||t.constructor!=Qe.constructor&&t.constructor!=cr||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},fr.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},fr.forEach=function(t,e){for(var r=0,i=this.items.length;i>r;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var pr in Qe)Qe[B](pr)&&(fr[pr]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][N](r,e)})}}(pr));return fr.attr=function(t,e){if(t&&r.is(t,H)&&r.is(t[0],"object"))for(var i=0,n=t.length;n>i;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;s>a;a++)this.items[a].attr(t,e);return this},fr.clear=function(){for(;this.length;)this.pop()},fr.splice=function(t,e){t=0>t?D(this.length+t,0):t,e=D(0,O(this.length-t,e));var r,i=[],n=[],a=[];for(r=2;arguments.length>r;r++)a.push(arguments[r]);for(r=0;e>r;r++)n.push(this[t+r]);for(;this.length-t>r;r++)i.push(this[t+r]);var s=a.length;for(r=0;s+i.length>r;r++)this.items[t+r]=this[t+r]=s>r?a[r]:i[r-s];for(r=this.items.length=this.length-=e-s;this[r];)delete this[r++];return new cr(n)},fr.exclude=function(t){for(var e=0,r=this.length;r>e;e++)if(this[e]==t)return this.splice(e,1),!0},fr.animate=function(t,e,i,n){(r.is(i,"function")||!i)&&(n=i||null);var a,s,o=this.items.length,l=o,h=this;if(!o)return this;n&&(s=function(){!--o&&n.call(h)}),i=r.is(i,X)?i:s;var u=r.animation(t,e,i,s);for(a=this.items[--l].animate(u);l--;)this.items[l]&&!this.items[l].removed&&this.items[l].animateWith(a,u,u),this.items[l]&&!this.items[l].removed||o--;return this},fr.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},fr.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=O[N](0,t),e=O[N](0,e),r=D[N](0,r),i=D[N](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},fr.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;r>e;e++)t.push(this.items[e].clone());return t},fr.toString=function(){return"Rapha�l�s set"},fr.glow=function(t){var e=this.paper.set();return this.forEach(function(r){var i=r.glow(t);null!=i&&i.forEach(function(t){e.push(t)})}),e},fr.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){return i.isPointInside(t,e)?(console.log("runned"),r=!0,!1):void 0}),r},r.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[B](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=te(t.face["units-per-em"],10);for(var n in t.glyphs)if(t.glyphs[B](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[B](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},_.getFont=function(t,e,i,n){if(n=n||"normal",i=i||"normal",e=+e||{normal:400,bold:700,lighter:300,bolder:800}[e]||400,r.fonts){var a=r.fonts[t];if(!a){var s=RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,M)+"(\\s|$)","i");for(var o in r.fonts)if(r.fonts[B](o)&&s.test(o)){a=r.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;u>h&&(l=a[h],l.face["font-weight"]!=e||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l}},_.print=function(t,e,i,n,a,s,o,l){s=s||"middle",o=D(O(o||0,1),-1),l=D(O(l||1,3),1);var h,u=F(i)[P](M),c=0,f=0,p=M;if(r.is(n,"string")&&(n=this.getFont(n)),n){h=(a||16)/n.face["units-per-em"];for(var d=n.face.bbox[P](w),g=+d[0],x=d[3]-d[1],v=0,y=+d[1]+("baseline"==s?x+ +n.face.descent:x/2),m=0,b=u.length;b>m;m++){if("\n"==u[m])c=0,k=0,f=0,v+=x*l;else{var _=f&&n.glyphs[u[m-1]]||{},k=n.glyphs[u[m]];c+=f?(_.w||n.w)+(_.k&&_.k[u[m]]||0)+n.w*o:0,f=1}k&&k.d&&(p+=r.transformPath(k.d,["t",c*h,v*h,"s",h,h,g,y,"t",(t-g)/h,(e-y)/h]))}}return this.path(p).attr({fill:"#000",stroke:"none"})},_.add=function(t){if(r.is(t,"array"))for(var e,i=this.set(),n=0,a=t.length;a>n;n++)e=t[n]||{},k[B](e.type)&&i.push(this[e.type]().attr(e));return i},r.format=function(t,e){var i=r.is(e,H)?[0][E](e):arguments;return t&&r.is(t,X)&&i.length-1&&(t=t.replace(C,function(t,e){return null==i[++e]?M:i[e]})),t||M},r.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""};return function(e,i){return(e+"").replace(t,function(t,e){return r(t,e,i)})}}(),r.ninja=function(){return T.was?S.win.Raphael=T.is:delete Raphael,r},r.st=fr,function(t,e,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):r.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(e,i=function(){t.removeEventListener(e,i,!1),t.readyState="complete"},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),e.on("raphael.DOMload",function(){b=!0}),function(){if(r.svg){var t="hasOwnProperty",e=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=r.eve,c="",f=" ",p="https://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};r.toString=function(){return"Your browser supports SVG.\nYou are running Rapha�l "+this.version};var x=function(i,n){if(n){"string"==typeof i&&(i=x(i));for(var a in n)n[t](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),e(n[a])):i.setAttribute(a,e(n[a])))}else i=r._g.doc.createElementNS("https://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},v=function(t,n){var h="linear",u=t.id+n,f=.5,p=.5,d=t.node,g=t.paper,v=d.style,y=r._g.doc.getElementById(u);if(!y){if(n=e(n).replace(r._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var m=n.shift();if(m=-i(m),isNaN(m))return null;var b=[0,0,a.cos(r.rad(m)),a.sin(r.rad(m))],_=1/(s(o(b[2]),o(b[3]))||1);b[2]*=_,b[3]*=_,0>b[2]&&(b[0]=-b[2],b[2]=0),0>b[3]&&(b[1]=-b[3],b[3]=0)}var w=r._parseDots(n);if(!w)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),t.gradient&&u!=t.gradient.id&&(g.defs.removeChild(t.gradient),delete t.gradient),!t.gradient){y=x(h+"Gradient",{id:u}),t.gradient=y,x(y,"radial"==h?{fx:f,fy:p}:{x1:b[0],y1:b[1],x2:b[2],y2:b[3],gradientTransform:t.matrix.invert()}),g.defs.appendChild(y);for(var k=0,C=w.length;C>k;k++)y.appendChild(x("stop",{offset:w[k].offset?w[k].offset:k?"100%":"0%","stop-color":w[k].color||"#fff"}))}}return x(d,{fill:"url(#"+u+")",opacity:1,"fill-opacity":1}),v.fill=c,v.opacity=1,v.fillOpacity=1,1},y=function(t){var e=t.getBBox(1);x(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},m=function(i,n,a){if("path"==i.type){for(var s,o,l,h,u,f=e(n).toLowerCase().split("-"),p=i.paper,v=a?"end":"start",y=i.node,m=i.attrs,b=m["stroke-width"],_=f.length,w="classic",k=3,C=3,B=5;_--;)switch(f[_]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=f[_];break;case"wide":C=5;break;case"narrow":C=2;break;case"long":k=5;break;case"short":k=2}if("open"==w?(k+=2,C+=2,B+=2,l=1,h=a?4:1,u={fill:"none",stroke:m.stroke}):(h=l=k/2,u={fill:m.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=w){var S="raphael-marker-"+w,T="raphael-marker-"+v+w+k+C;r._g.doc.getElementById(S)?g[S]++:(p.defs.appendChild(x(x("path"),{"stroke-linecap":"round",d:d[w],id:S})),g[S]=1);var A,N=r._g.doc.getElementById(T);N?(g[T]++,A=N.getElementsByTagName("use")[0]):(N=x(x("marker"),{id:T,markerHeight:C,markerWidth:k,orient:"auto",refX:h,refY:C/2}),A=x(x("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+C/2+") ":c)+"scale("+k/B+","+C/B+")","stroke-width":(1/((k/B+C/B)/2)).toFixed(4)}),N.appendChild(A),p.defs.appendChild(N),g[T]=1),x(A,u);var E=l*("diamond"!=w&&"oval"!=w);a?(s=i._.arrows.startdx*b||0,o=r.getTotalLength(m.path)-E*b):(s=E*b,o=r.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),u={},u["marker-"+v]="url(#"+T+")",(o||s)&&(u.d=r.getSubpath(m.path,s,o)),x(y,u),i._.arrows[v+"Path"]=S,i._.arrows[v+"Marker"]=T,i._.arrows[v+"dx"]=E,i._.arrows[v+"Type"]=w,i._.arrows[v+"String"]=n}else a?(s=i._.arrows.startdx*b||0,o=r.getTotalLength(m.path)-s):(s=0,o=r.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),i._.arrows[v+"Path"]&&x(y,{d:r.getSubpath(m.path,s,o)}),delete i._.arrows[v+"Path"],delete i._.arrows[v+"Marker"],delete i._.arrows[v+"dx"],delete i._.arrows[v+"Type"],delete i._.arrows[v+"String"];for(u in g)if(g[t](u)&&!g[u]){var L=r._g.doc.getElementById(u);L&&L.parentNode.removeChild(L)}}},b={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},_=function(t,r,i){if(r=b[e(r).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=r.length;o--;)s[o]=r[o]*n+(o%2?1:-1)*a;x(t.node,{"stroke-dasharray":s.join(",")})}},w=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[t](d)){if(!r._availableAttrs[t](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"href":case"title":case"target":var b=l.parentNode;if("a"!=b.tagName.toLowerCase()){var w=x("a");b.insertBefore(w,l),w.appendChild(l),b=w}"target"==d?b.setAttributeNS(p,"show","blank"==g?"new":g):b.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":m(i,g);break;case"arrow-end":m(i,g,1);break;case"clip-rect":var k=e(g).split(h);if(4==k.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var B=x("clipPath"),S=x("rect");B.id=r.createUUID(),x(S,{x:k[0],y:k[1],width:k[2],height:k[3]}),B.appendChild(S),i.paper.defs.appendChild(B),x(l,{"clip-path":"url(#"+B.id+")"}),i.clip=S}if(!g){var T=l.getAttribute("clip-path");if(T){var A=r._g.doc.getElementById(T.replace(/(^url\(#|\)$)/g,c));A&&A.parentNode.removeChild(A),x(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(x(l,{d:g?u.path=r._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&y(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&y(i),i._.dirty=1;break;case"r":"rect"==i.type?x(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":(1!=i._.sx||1!=i._.sy)&&(g/=s(o(i._.sx),o(i._.sy))||1),i.paper._vbSize&&(g*=i.paper._vbSize),l.setAttribute(d,g),u["stroke-dasharray"]&&_(i,u["stroke-dasharray"],a),i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1));break;case"stroke-dasharray":_(i,g,a);break;case"fill":var N=e(g).match(r._ISURL);if(N){B=x("pattern");var E=x("image");B.id=r.createUUID(),x(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),x(E,{x:0,y:0,"xlink:href":N[1]}),B.appendChild(E),function(t){r._preload(N[1],function(){var e=this.offsetWidth,r=this.offsetHeight;x(t,{width:e,height:r}),x(E,{width:e,height:r}),i.paper.safari()})}(B),i.paper.defs.appendChild(B),x(l,{fill:"url(#"+B.id+")"}),i.pattern=B,i.pattern&&y(i);break}var L=r.getRGB(g);if(L.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=e(g).charAt())&&v(i,g)){if("opacity"in u||"fill-opacity"in u){var M=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(M){var z=M.getElementsByTagName("stop");x(z[z.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!r.is(u.opacity,"undefined")&&r.is(a.opacity,"undefined")&&x(l,{opacity:u.opacity}),!r.is(u["fill-opacity"],"undefined")&&r.is(a["fill-opacity"],"undefined")&&x(l,{"fill-opacity":u["fill-opacity"]});L[t]("opacity")&&x(l,{"fill-opacity":L.opacity>1?L.opacity/100:L.opacity});case"stroke":L=r.getRGB(g),l.setAttribute(d,L.hex),"stroke"==d&&L[t]("opacity")&&x(l,{"stroke-opacity":L.opacity>1?L.opacity/100:L.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=e(g).charAt())&&v(i,g);break;case"opacity":u.gradient&&!u[t]("stroke-opacity")&&x(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){M=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),M&&(z=M.getElementsByTagName("stop"),x(z[z.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var F=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[F]=g,i._.dirty=1,l.setAttribute(d,g)}}C(i,a),l.style.visibility=f},k=1.2,C=function(i,a){if("text"==i.type&&(a[t]("text")||a[t]("font")||a[t]("font-size")||a[t]("x")||a[t]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(r._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[t]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h,u=e(a.text).split("\n"),f=[],p=0,d=u.length;d>p;p++)h=x("tspan"),p&&x(h,{dy:l*k,x:s.x}),h.appendChild(r._g.doc.createTextNode(u[p])),o.appendChild(h),f[p]=h}else for(f=o.getElementsByTagName("tspan"),p=0,d=f.length;d>p;p++)p?x(f[p],{dy:l*k,x:s.x}):x(f[0],{dy:0});x(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),v=s.y-(g.y+g.height/2);v&&r.is(v,"finite")&&x(f[0],{dy:v})}},B=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.matrix=r.matrix(),this.realPath=null,this.paper=e,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null
},S=r.el;B.prototype=S,S.constructor=B,r._engine.path=function(t,e){var r=x("path");e.canvas&&e.canvas.appendChild(r);var i=new B(r,e);return i.type="path",w(i,{fill:"none",stroke:"#000",path:t}),i},S.rotate=function(t,r,n){if(this.removed)return this;if(t=e(t).split(h),t.length-1&&(r=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(r=n),null==r||null==n){var a=this.getBBox(1);r=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,r,n]])),this},S.scale=function(t,r,n,a){if(this.removed)return this;if(t=e(t).split(h),t.length-1&&(r=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==r&&(r=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,r,n,a]])),this},S.translate=function(t,r){return this.removed?this:(t=e(t).split(h),t.length-1&&(r=i(t[1])),t=i(t[0])||0,r=+r||0,this.transform(this._.transform.concat([["t",t,r]])),this)},S.transform=function(e){var i=this._;if(null==e)return i.transform;if(r._extractTransform(this,e),this.clip&&x(this.clip,{transform:this.matrix.invert()}),this.pattern&&y(this),this.node&&x(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[t]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},S.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},S.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},S.remove=function(){if(!this.removed&&this.node.parentNode){var t=this.paper;t.__set__&&t.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&t.defs.removeChild(this.gradient),r._tear(this,t),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var e in this)this[e]="function"==typeof this[e]?r._removedFactory(e):null;this.removed=!0}},S._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e={};try{e=this.node.getBBox()}catch(r){}finally{e=e||{}}return t&&this.hide(),e},S.attr=function(e,i){if(this.removed)return this;if(null==e){var n={};for(var a in this.attrs)this.attrs[t](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&r.is(e,"string")){if("fill"==e&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==e)return this._.transform;for(var s=e.split(h),o={},l=0,c=s.length;c>l;l++)e=s[l],o[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];return c-1?o:o[s[0]]}if(null==i&&r.is(e,"array")){for(o={},l=0,c=e.length;c>l;l++)o[e[l]]=this.attr(e[l]);return o}if(null!=i){var f={};f[e]=i}else null!=e&&r.is(e,"object")&&(f=e);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[t](p)&&f[t](p)&&r.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[t](g)&&(f[g]=d[g])}return w(this,f),this},S.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var t=this.paper;return t.top!=this&&r._tofront(this,t),this},S.toBack=function(){if(this.removed)return this;var t=this.node.parentNode;return"a"==t.tagName.toLowerCase()?t.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):t.firstChild!=this.node&&t.insertBefore(this.node,this.node.parentNode.firstChild),r._toback(this,this.paper),this.paper,this},S.insertAfter=function(t){if(this.removed)return this;var e=t.node||t[t.length-1].node;return e.nextSibling?e.parentNode.insertBefore(this.node,e.nextSibling):e.parentNode.appendChild(this.node),r._insertafter(this,t,this.paper),this},S.insertBefore=function(t){if(this.removed)return this;var e=t.node||t[0].node;return e.parentNode.insertBefore(this.node,e),r._insertbefore(this,t,this.paper),this},S.blur=function(t){var e=this;if(0!==+t){var i=x("filter"),n=x("feGaussianBlur");e.attrs.blur=t,i.id=r.createUUID(),x(n,{stdDeviation:+t||1.5}),i.appendChild(n),e.paper.defs.appendChild(i),e._blur=i,x(e.node,{filter:"url(#"+i.id+")"})}else e._blur&&(e._blur.parentNode.removeChild(e._blur),delete e._blur,delete e.attrs.blur),e.node.removeAttribute("filter");return e},r._engine.circle=function(t,e,r,i){var n=x("circle");t.canvas&&t.canvas.appendChild(n);var a=new B(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",x(n,a.attrs),a},r._engine.rect=function(t,e,r,i,n,a){var s=x("rect");t.canvas&&t.canvas.appendChild(s);var o=new B(s,t);return o.attrs={x:e,y:r,width:i,height:n,r:a||0,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",x(s,o.attrs),o},r._engine.ellipse=function(t,e,r,i,n){var a=x("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new B(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",x(a,s.attrs),s},r._engine.image=function(t,e,r,i,n,a){var s=x("image");x(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new B(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},r._engine.text=function(t,e,i,n){var a=x("text");t.canvas&&t.canvas.appendChild(a);var s=new B(a,t);return s.attrs={x:e,y:i,"text-anchor":"middle",text:n,font:r._availableAttrs.font,stroke:"none",fill:"#000"},s.type="text",w(s,s.attrs),s},r._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t&&t.container,i=t.x,n=t.y,a=t.width,s=t.height;if(!e)throw Error("SVG container not found.");var o,l=x("svg"),h="overflow:hidden;";return i=i||0,n=n||0,a=a||512,s=s||342,x(l,{height:s,version:1.1,width:a,xmlns:"https://www.w3.org/2000/svg"}),1==e?(l.style.cssText=h+"position:absolute;left:"+i+"px;top:"+n+"px",r._g.doc.body.appendChild(l),o=1):(l.style.cssText=h+"position:relative",e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l)),e=new r._Paper,e.width=a,e.height=s,e.canvas=l,e.clear(),e._left=e._top=0,o&&(e.renderfix=function(){}),e.renderfix(),e},r._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a,o,l=s(r/this.width,i/this.height),h=this.top,c=n?"meet":"xMinYMin";for(null==t?(this._vbSize&&(l=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=l,a=t+f+e+f+r+f+i),x(this.canvas,{viewBox:a,preserveAspectRatio:c});l&&h;)o="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":o}),h._.dirty=1,h._.dirtyT=1,h=h.prev;return this._viewBox=[t,e,r,i,!!n],this},r.prototype.renderfix=function(){var t,e=this.canvas,r=e.style;try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(i){t=e.createSVGMatrix()}var n=-t.e%1,a=-t.f%1;(n||a)&&(n&&(this._left=(this._left+n)%1,r.left=this._left+"px"),a&&(this._top=(this._top+a)%1,r.top=this._top+"px"))},r.prototype.clear=function(){r.eve("raphael.clear",this);for(var t=this.canvas;t.firstChild;)t.removeChild(t.firstChild);this.bottom=this.top=null,(this.desc=x("desc")).appendChild(r._g.doc.createTextNode("Created with Rapha�l "+r.version)),t.appendChild(this.desc),t.appendChild(this.defs=x("defs"))},r.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null};var T=r.st;for(var A in S)S[t](A)&&!T[t](A)&&(T[A]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(A))}}(),function(){if(r.vml){var t="hasOwnProperty",e=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=r.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},x=/([clmz]),?([^clmz]*)/gi,v=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(t){var i=/[ahqstv]/gi,n=r._pathToAbsolute;if(e(t).match(i)&&(n=r._path2curve),i=/[clmz]/g,n==r._pathToAbsolute&&!e(t).match(i)){var s=e(t).replace(x,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o,l,h=n(t);s=[];for(var u=0,c=h.length;c>u;u++){o=h[u],l=h[u][0].toLowerCase(),"z"==l&&(l="x");for(var f=1,v=o.length;v>f;f++)l+=a(o[f]*b)+(f!=v-1?",":d);s.push(l)}return s.join(p)},C=function(t,e,i){var n=r.matrix();return n.rotate(-t,.5,.5),{dx:n.x(e,i),dy:n.y(e,i)}},B=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",x=b/e,v=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(x)+p+l(v),f.rotation=a*(0>e*r?-1:1),a){var y=C(a,i,n);i=y.dx,n=y.dy}if(0>e&&(g+="x"),0>r&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-v,u||s.fillsize){var m=c.getElementsByTagName(h);m=m&&m[0],c.removeChild(m),u&&(y=C(a,o.x(u[0],u[1]),o.y(u[0],u[1])),m.position=y.dx*d+p+y.dy*d),s.fillsize&&(m.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(m)}f.visibility="visible"}};r.toString=function(){return"Your browser doesn�t support SVG. Falling down to VML.\nYou are running Rapha�l "+this.version};var S=function(t,r,i){for(var n=e(r).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},T=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,x=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),v=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),y=n;for(var m in l)l[t](m)&&(f[m]=l[m]);if(x&&(f.path=r._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||x)&&(c.path=k(~e(f.path).toLowerCase().indexOf("r")?r._pathToAbsolute(f.path):f.path),"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],B(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),v){var C=+f.cx,T=+f.cy,N=+f.rx||+f.r||0,E=+f.ry||+f.r||0;c.path=r.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((C-N)*b),a((T-E)*b),a((C+N)*b),a((T+E)*b),a(C*b)),n._.dirty=1}if("clip-rect"in l){var M=e(l["clip-rect"]).split(u);if(4==M.length){M[2]=+M[2]+ +M[0],M[3]=+M[3]+ +M[1];var z=c.clipRect||r._g.doc.createElement("div"),F=z.style;F.clip=r.format("rect({1}px {2}px {3}px {0}px)",M),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(z,c),z.appendChild(c),c.clipRect=z)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var P=n.textpath.style;l.font&&(P.font=l.font),l["font-family"]&&(P.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(P.fontSize=l["font-size"]),l["font-weight"]&&(P.fontWeight=l["font-weight"]),l["font-style"]&&(P.fontStyle=l["font-style"])}if("arrow-start"in l&&S(y,l["arrow-start"]),"arrow-end"in l&&S(y,l["arrow-end"],1),null!=l.opacity||null!=l["stroke-width"]||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var R=c.getElementsByTagName(h),I=!1;if(R=R&&R[0],!R&&(I=R=L(h)),"image"==n.type&&l.src&&(R.src=l.src),l.fill&&(R.on=!0),(null==R.on||"none"==l.fill||null===l.fill)&&(R.on=!1),R.on&&l.fill){var j=e(l.fill).match(r._ISURL);if(j){R.parentNode==c&&c.removeChild(R),R.rotate=!0,R.src=j[1],R.type="tile";var q=n.getBBox(1);R.position=q.x+p+q.y,n._.fillpos=[q.x,q.y],r._preload(j[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else R.color=r.getRGB(l.fill).hex,R.src=d,R.type="solid",r.getRGB(l.fill).error&&(y.type in{circle:1,ellipse:1}||"r"!=e(l.fill).charAt())&&A(y,l.fill,R)&&(f.fill="none",f.gradient=l.fill,R.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var D=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+r.getRGB(l.fill).o+1||2)-1);D=o(s(D,0),1),R.opacity=D,R.src&&(R.color="none")}c.appendChild(R);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],V=!1;!O&&(V=O=L("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var Y=r.getRGB(l.stroke);O.on&&l.stroke&&(O.color=Y.hex),D=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+Y.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(D=o(s(D,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&1>G&&(D*=G)&&(O.weight=1),O.opacity=D,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),l["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=W[t](l["stroke-dasharray"])?W[l["stroke-dasharray"]]:d}V&&c.appendChild(O)}if("text"==y.type){y.paper.canvas.style.display=d;var X=y.paper.span,H=100,U=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),U=i(f["font-size"]||U&&U[0])||10,g.fontSize=U*H+"px",y.textpath.string&&(X.innerHTML=e(y.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();y.W=f.w=($.right-$.left)/H,y.H=f.h=($.bottom-$.top)/H,y.X=f.x,y.Y=f.y+y.H/2,("x"in l||"y"in l)&&(y.path.v=r.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Z=["x","y","text","font","font-family","font-weight","font-style","font-size"],Q=0,J=Z.length;J>Q;Q++)if(Z[Q]in l){y._.dirty=1;break}switch(f["text-anchor"]){case"start":y.textpath.style["v-text-align"]="left",y.bbx=y.W/2;break;case"end":y.textpath.style["v-text-align"]="right",y.bbx=-y.W/2;break;default:y.textpath.style["v-text-align"]="center",y.bbx=0}y.textpath.style["v-text-kern"]=!0}},A=function(t,a,s){t.attrs=t.attrs||{};var o=(t.attrs,Math.pow),l="linear",h=".5 .5";if(t.attrs.gradient=a,a=e(a).replace(r._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),h=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==l){var u=a.shift();if(u=-i(u),isNaN(u))return null}var c=r._parseDots(a);if(!c)return null;if(t=t.shape||t.node,c.length){t.removeChild(s),s.on=!0,s.method="none",s.color=c[0].color,s.color2=c[c.length-1].color;for(var f=[],g=0,x=c.length;x>g;g++)c[g].offset&&f.push(c[g].offset+p+c[g].color);s.colors=f.length?f.join():"0% "+s.color,"radial"==l?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=h,s.angle=0):(s.type="gradient",s.angle=(270-u)%360),t.appendChild(s)}return 1},N=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=e,this.matrix=r.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null},E=r.el;N.prototype=E,E.constructor=N,E.transform=function(t){if(null==t)return this._.transform;var i,n=this.paper._viewBoxShift,a=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:d;n&&(i=t=e(t).replace(/\.{3}|\u2026/g,this._.transform||d)),r._extractTransform(this,a+t);var s,o=this.matrix.clone(),l=this.skew,h=this.node,u=~e(this.attrs.fill).indexOf("-"),c=!e(this.attrs.fill).indexOf("url(");if(o.translate(-.5,-.5),c||u||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",s=o.split(),u&&s.noRotation||!s.isSimple){h.style.filter=o.toFilter();var f=this.getBBox(),g=this.getBBox(1),x=f.x-g.x,v=f.y-g.y;h.coordorigin=x*-b+p+v*-b,B(this,1,1,x,v,0)}else h.style.filter=d,B(this,s.scalex,s.scaley,s.dx,s.dy,s.rotate);else h.style.filter=d,l.matrix=e(o),l.offset=o.offset();return i&&(this._.transform=i),this},E.rotate=function(t,r,n){if(this.removed)return this;if(null!=t){if(t=e(t).split(u),t.length-1&&(r=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(r=n),null==r||null==n){var a=this.getBBox(1);r=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,r,n]])),this}},E.translate=function(t,r){return this.removed?this:(t=e(t).split(u),t.length-1&&(r=i(t[1])),t=i(t[0])||0,r=+r||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=r),this.transform(this._.transform.concat([["t",t,r]])),this)},E.scale=function(t,r,n,a){if(this.removed)return this;if(t=e(t).split(u),t.length-1&&(r=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==r&&(r=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,r,n,a]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=d),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),r.eve.unbind("raphael.*.*."+this.id),r._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;this.removed=!0}},E.attr=function(e,i){if(this.removed)return this;if(null==e){var n={};for(var a in this.attrs)this.attrs[t](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&r.is(e,"string")){if(e==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=e.split(u),o={},l=0,f=s.length;f>l;l++)e=s[l],o[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&r.is(e,"array")){for(o={},l=0,f=e.length;f>l;l++)o[e[l]]=this.attr(e[l]);return o}var p;null!=i&&(p={},p[e]=i),null==i&&r.is(e,"object")&&(p=e);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[t](d)&&p[t](d)&&r.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var x in g)g[t](x)&&(p[x]=g[x])}p.text&&"text"==this.type&&(this.textpath.string=p.text),T(this,p)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&r._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),r._toback(this,this.paper)),this)},E.insertAfter=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[t.length-1]),t.node.nextSibling?t.node.parentNode.insertBefore(this.node,t.node.nextSibling):t.node.parentNode.appendChild(this.node),r._insertafter(this,t,this.paper),this)},E.insertBefore=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[0]),t.node.parentNode.insertBefore(this.node,t.node),r._insertbefore(this,t,this.paper),this)},E.blur=function(t){var e=this.node.runtimeStyle,i=e.filter;return i=i.replace(v,d),0!==+t?(this.attrs.blur=t,e.filter=i+p+f+".Blur(pixelradius="+(+t||1.5)+")",e.margin=r.format("-{0}px 0 0 -{0}px",a(+t||1.5))):(e.filter=i,e.margin=0,delete this.attrs.blur),this},r._engine.path=function(t,e){var r=L("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new N(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,T(i,n),e.canvas.appendChild(r);var a=L("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},r._engine.rect=function(t,e,i,n,a,s){var o=r._rectPath(e,i,n,a,s),l=t.path(o),h=l.attrs;return l.X=h.x=e,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},r._engine.ellipse=function(t,e,r,i,n){var a=t.path();return a.attrs,a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",T(a,{cx:e,cy:r,rx:i,ry:n}),a},r._engine.circle=function(t,e,r,i){var n=t.path();return n.attrs,n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",T(n,{cx:e,cy:r,r:i}),n},r._engine.image=function(t,e,i,n,a,s){var o=r._rectPath(i,n,a,s),l=t.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=e,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=e,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),B(l,1,1,0,0,0),l},r._engine.text=function(t,i,n,s){var o=L("shape"),l=L("path"),h=L("textpath");i=i||0,n=n||0,s=s||"",l.v=r.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=e(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new N(o,t),c={fill:"#000",stroke:"none",font:r._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=e(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,T(u,c),o.appendChild(h),o.appendChild(l),t.canvas.appendChild(o);var f=L("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},r._engine.setSize=function(t,e){var i=this.canvas.style;return this.width=t,this.height=e,t==+t&&(t+="px"),e==+e&&(e+="px"),i.width=t,i.height=e,i.clip="rect(0 "+t+" "+e+" 0)",this._viewBox&&r._engine.setViewBox.apply(this,this._viewBox),this},r._engine.setViewBox=function(t,e,i,n,a){r.eve("raphael.setViewBox",this,this._viewBox,[t,e,i,n,a]);var o,l,h=this.width,u=this.height,c=1/s(i/h,n/u);return a&&(o=u/n,l=h/i,h>i*o&&(t-=(h-i*o)/2/o),u>n*l&&(e-=(u-n*l)/2/l)),this._viewBox=[t,e,i,n,!!a],this._viewBoxShift={dx:-t,dy:-e,scale:c},this.forEach(function(t){t.transform("...")}),this};var L;r._engine.initWin=function(t){var e=t.document;e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),L=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){L=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},r._engine.initWin(r._g.win),r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t.container,i=t.height,n=t.width,a=t.x,s=t.y;if(!e)throw Error("VML container not found.");var o=new r._Paper,l=o.canvas=r._g.doc.createElement("div"),h=l.style;return a=a||0,s=s||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),o.coordsize=1e3*b+p+1e3*b,o.coordorigin="0 0",o.span=r._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(o.span),h.cssText=r.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),1==e?(r._g.doc.body.appendChild(l),h.left=a+"px",h.top=s+"px",h.position="absolute"):e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l),o.renderfix=function(){},o},r.prototype.clear=function(){r.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=r._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},r.prototype.remove=function(){r.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;return!0};var M=r.st;for(var z in E)E[t](z)&&!M[t](z)&&(M[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}(),T.was?S.win.Raphael=r:Raphael=r,r});;
// Generated by CoffeeScript 1.4.0

/* 
jQuery Open Carousel

Copyright (c) 2013 Justin McCandless (justinmccandless.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


/*
This is the main coffeescript file
Include jquery.openCarousel.js and jquery.openCarousel.css in your projects
*/


jQuery(function($) {
(function() {
  var Ocarousel;


  Ocarousel = (function() {
    /* Initialize
    */

    Ocarousel.prototype.ocarousel = null;

    Ocarousel.prototype.ocarousel_window = null;

    Ocarousel.prototype.ocarousel_container = null;

    Ocarousel.prototype.frames = null;

    Ocarousel.prototype.indicators = null;

    Ocarousel.prototype.timer = null;

    Ocarousel.prototype.active = 0;
    
    Ocarousel.prototype.circles = null; // Hack : ajout d'une nouvelle propriété "circles" pour les ronds

    /* Default Settings
    */


    Ocarousel.settings = {
      speed: .5 * 1000,
      period: 4 * 1000,
      transition: "scroll",
      perscroll: 1,
      wrapearly: 0,
      shuffle: false,
      //indicator_fill: "#ffffff",
      //indicator_fill: "#D41A63l",
      indicator_fill: "#afafaf",
      indicator_r: 6,
      indicator_spacing: 6,
      indicator_cy: 22,
      indicator_stroke: "#394e5f",
      indicator_strokewidth: "2"
    };

    function Ocarousel(ocarousel) {
      var cx, i, indicator, indicators_container, indicators_svg, me, _i, _ref, _ref1, _ref10, _ref11, _ref12, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      me = this;
      this.ocarousel = $(ocarousel);
      this.ocarousel_window = $(this.ocarousel).find(".ocarousel_window");
      this.frames = $(this.ocarousel_window).children();
      indicators_container = $(this.ocarousel).find(".ocarousel_indicators");
      this.pagination_current = $(this.ocarousel).find(".ocarousel_pagination_current");
      this.pagination_total = $(this.ocarousel).find(".ocarousel_pagination_total");
      if (this.frames.length > 1) {
        this.settings = {};
        this.settings.speed = (_ref = $(this.ocarousel).data('ocarousel-speed')) != null ? _ref : Ocarousel.settings.speed;
        this.settings.period = (_ref1 = $(this.ocarousel).data('ocarousel-period')) != null ? _ref1 : Ocarousel.settings.period;
        this.settings.transition = (_ref2 = $(this.ocarousel).data('ocarousel-transition')) != null ? _ref2 : Ocarousel.settings.transition;
        this.settings.perscroll = (_ref3 = $(this.ocarousel).data('ocarousel-perscroll')) != null ? _ref3 : Ocarousel.settings.perscroll;
        this.settings.wrapearly = (_ref4 = $(this.ocarousel).data('ocarousel-wrapearly')) != null ? _ref4 : Ocarousel.settings.wrapearly;
        this.settings.shuffle = (_ref5 = $(this.ocarousel).data('ocarousel-shuffle')) != null ? _ref5 : Ocarousel.settings.shuffle;
        this.settings.indicator_fill = (_ref6 = $(this.ocarousel).data('ocarousel-indicator-fill')) != null ? _ref6 : Ocarousel.settings.indicator_fill;
        this.settings.indicator_r = (_ref7 = $(this.ocarousel).data('ocarousel-indicator-r')) != null ? _ref7 : Ocarousel.settings.indicator_r;
        this.settings.indicator_spacing = (_ref8 = $(this.ocarousel).data('ocarousel-indicator-spacing')) != null ? _ref8 : Ocarousel.settings.indicator_spacing;
        this.settings.indicator_cy = (_ref9 = $(this.ocarousel).data('ocarousel-indicator-cy')) != null ? _ref9 : Ocarousel.settings.indicator_cy;
        this.settings.indicator_stroke = (_ref10 = $(this.ocarousel).data('ocarousel-indicator-stroke')) != null ? _ref10 : Ocarousel.settings.indicator_stroke;
        this.settings.indicator_strokewidth = (_ref11 = $(this.ocarousel).data('ocarousel-indicator-strokewidth')) != null ? _ref11 : Ocarousel.settings.indicator_strokewidth;
        this.ocarousel_container = document.createElement("div");
        this.ocarousel_container.className = "ocarousel_window_slides";
        if (this.settings.shuffle === true) {
          this.frames.sort(function() {
            return Math.round(Math.random()) - 0.5;
          });
        }
        $(this.frames).each(function(i) {
          return me.ocarousel_container.appendChild(this);
        });
        this.ocarousel_window.html("");
        $(this.ocarousel_window).get(0).appendChild(this.ocarousel_container);
        $(this.ocarousel).show();     
        if (indicators_container.length && document.implementation.hasFeature("https://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) {
          indicators_svg = document.createElementNS("https://www.w3.org/2000/svg", "svg");
          indicators_svg.setAttribute("version", "1.1");
          $(indicators_container).get(0).appendChild(indicators_svg);
          this.indicators = [];
	
          cx = $(indicators_container).width() / 2 - this.settings.indicator_r * this.frames.length - this.settings.indicator_spacing * this.frames.length / 2;
          for (i = _i = 0, _ref12 = this.frames.length - 1; 0 <= _ref12 ? _i <= _ref12 : _i >= _ref12; i = 0 <= _ref12 ? ++_i : --_i) {
            indicator = document.createElementNS("https://www.w3.org/2000/svg", "circle");
            //indicator.className = "ocarousel_link"; /*ne focntionne pas sur ff3.6"
            indicator.setAttribute("stroke-width", this.settings.indicator_strokewidth);
			indicator.setAttribute('class','ocarousel_link'); /*fonctionne sur ff3.6 aussi*/
            indicator.setAttribute("data-ocarousel-link", i);
            indicator.setAttribute("cx", cx);
            indicator.setAttribute("cy", this.settings.indicator_cy);
            indicator.setAttribute("r", this.settings.indicator_r);
            indicator.setAttribute("stroke", this.settings.indicator_stroke);
            indicator.setAttribute("fill", i === 0 ? this.settings.indicator_stroke : this.settings.indicator_fill);
            indicator.setAttribute("id", "indicator");
            indicators_svg.appendChild(indicator);
            this.indicators.push(indicator);
            $(indicator).data("ocarousel_index", i);
            cx = cx + this.settings.indicator_r * 2 + this.settings.indicator_spacing;
          }
        }

        /* Hack pour IE < 9 */
        ////////////////////////////////////////////////////////////////////////////////////////////////
    	re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    	if (re.exec(navigator.userAgent) != null) { 
    	  rv = parseInt( RegExp.$1 );
    	  isIE6 = (rv == 6);
    	  isIE7 = (rv == 7);
    	  isIE8 = (rv == 8);
    	}
    	else {
    		isIE6 = false;
    		isIE7 = false;
    		isIE8 = false;
    	}
      var nbRond=this.frames.length;
    	// si le navigateur est IE6 ou IE7 ou IE8
    	// utilise la librairie "raphael.js" pour afficher VML sous IE
    	if (isIE6 | isIE7 | isIE8) {
    		// constructeur de Raphael
		
    		var r = Raphael("holder", 50, 14);
    		this.circles = [];
    		switch(nbRond){
          case 2:
            cx = 23;
            break;
          case 3:
            cx = 5;
            break;
          case 4:
            cx = -14;            
            break;
          case 5:
            cx = -33;
            break;

        }
		
            for (i = _i = 0, _ref12 = this.frames.length - 1; 0 <= _ref12 ? _i <= _ref12 : _i >= _ref12; i = 0 <= _ref12 ? ++_i : --_i) {
            	if (i === 0) {
    				var circle = r.circle(cx, 22, 6)
    							  .attr({"fill": me.settings.indicator_stroke, "stroke": me.settings.indicator_stroke, "stroke-width": me.settings.indicator_strokewidth, "cursor": "pointer"})
    							  .data("ocarousel-link", i)
    							  .click(function(event) {
    								  me.scrollTo(this.id);
    							  });
    				circle.className = "ocarousel_link";
    				this.circles.push(circle);
    			} else {
    				var circle = r.circle(cx, 22, 6)
    							  .attr({"fill": me.settings.indicator_fill, "stroke": me.settings.indicator_stroke, "stroke-width": me.settings.indicator_strokewidth, "cursor": "pointer"})
    							  .data("ocarousel-link", i)
    							  .click(function(event) {
    								  me.scrollTo(this.id);
    							  });
    				circle.className = "ocarousel_link";
    				this.circles.push(circle);
    			}
            	cx = cx + this.settings.indicator_r * 2 + this.settings.indicator_spacing;
    		}
            // mettre les indicateurs visibles
    		jQuery("#holder").children("div").css("overflow", "visible");
    		jQuery("#holder").children("div").css("left", "");
    		if (isIE8) {
    			jQuery("#holder").children("div").css("top", "30px");
    		}
    		
    		//$(window).bind('resize', function() { me.resizeCircles(); }); // band resize

    	}    	
        
	
	window.onload = function(event) {
		
		jQuery("svg").css("visibility", "visible");
    switch(nbRond){
          case 2:
            jQuery("svg").css("width", "91.5%");
            break;
          case 3:
            jQuery("svg").css("width", "92.5%");
            break;
          case 4:
            jQuery("svg").css("width", "93.8%");
            break;
          case 5:
            jQuery("svg").css("width", "95%");
          break;

        }
    
	};


    	/////////////////////////////////////////////////////////////////////////////////////////
        
        
        if (this.pagination_current.length) {
          $(this.pagination_current).html("1");
        }
        if (this.pagination_total.length) {
          $(this.pagination_total).html(this.frames.length);
        }
        $(this.ocarousel).find("[data-ocarousel-link]").click(function(event) {
          var goHere;
          event.preventDefault();
          goHere = $(this).data("ocarousel-link");
          if (goHere != null) {
            if (goHere === "left" || goHere === "Left" || goHere === "l" || goHere === "L") {
              goHere = me.getPrev();
            } else if (goHere === "right" || goHere === "Right" || goHere === "r" || goHere === "R") {
              goHere = me.getNext();
            } else if (goHere === "first" || goHere === "First" || goHere === "beginning" || goHere === "Beginning") {
              goHere = 0;
            } else if (goHere === "last" || goHere === "Last" || goHere === "end" || goHere === "End") {
              goHere = me.frames.length - 1;
            }
            return me.scrollTo(goHere);
          }
        });
        this.timerStart();
      }
    }

    /*
     * Changer le couleur quand on clique sur un rond sous IE < 9
     */
    Ocarousel.prototype.changeIEColor = function(circle_id) {
    	for (i = 0; i < this.circles.length; i++) {
    		if (i === circle_id){
    			this.circles[i].attr("fill", this.settings.indicator_stroke);
    		}
    		else {
    			this.circles[i].attr("fill", this.settings.indicator_fill);
    		}
    	}
    };
    
    /*
     * Resize le taille des indicateurs pour IE < 9
     */
    Ocarousel.prototype.resizeCircles = function() {
    	var W = $(".ocarousel").width();
    	var indicators_container = $(".ocarousel_indicators");
    	var nbr_circle = this.circles.length; // calcul de nombre des indicateurs
    	if (nbr_circle > 1) {
    		var cx = $(indicators_container).width() / 2 - this.settings.indicator_r * nbr_circle - this.settings.indicator_spacing * nbr_circle / 2;
        	if (W >= 512) {
    			for (var i=0; i < nbr_circle; i++) {
    				this.circles[i].attr("r", 6);
    				this.circles[i].attr("cx", cx);
    				cx = cx + this.settings.indicator_r * 2 + this.settings.indicator_spacing;
    			}
    		} else if (W > 346 && W < 512) {
    			for (var i=0; i < nbr_circle; i++) {
    				this.circles[i].attr("r", 5);
    				this.circles[i].attr("cx", cx);
    				cx = cx + this.settings.indicator_r * 2 + this.settings.indicator_spacing;
    			}
    	    } else {
    	    	for (var i=0; i < nbr_circle; i++) {
    	    		this.circles[i].attr("r", 4);
    				this.circles[i].attr("cx", cx);
    				cx = cx + this.settings.indicator_r * 2 + this.settings.indicator_spacing;
    			}
    	    }
    	}
    	
    }
    
    
    /* Animate a transition to the given position
    */
    Ocarousel.prototype.scrollTo = function(i) {
      var me, nextPos, perEnd, wrapEnd;
      me = this;
      if (i != null) {

        clearInterval(this.timer);
        if (i >= (this.frames.length - this.settings.wrapearly)) {
          i = 0;
        } else if (i >= (this.frames.length - this.settings.perscroll)) {
          i = this.frames.length - this.settings.perscroll;
        } else if (i < 0) {
          perEnd = this.frames.length - this.settings.perscroll;
          wrapEnd = this.frames.length - 1 - this.settings.wrapearly;
          i = Math.min(perEnd, wrapEnd);
        }
        $(this.ocarousel_container).stop();
        if (this.settings.transition === "fade") {
          nextPos = me.getPos(i);
          $(this.ocarousel_container).fadeOut(this.settings.speed, null).animate({
            right: nextPos + "px"
          }, 0).fadeIn(me.settings.speed);
        } else {
          $(this.ocarousel_container).animate({
            right: (this.getPos(i)) + "px"
          }, this.settings.speed);
        }
        if (this.indicators != null) {
          $(this.indicators[this.active]).attr("fill", this.settings.indicator_fill);
          $(this.indicators[i]).attr("fill", this.settings.indicator_stroke);
        }
        
        // Hack
        // si le navigateur est IE6, IE7 ou IE8, on utilise la fonction changeIEColor sous IE < 9
        re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    	if (re.exec(navigator.userAgent) != null) { 
    	  rv = parseInt( RegExp.$1 );
    	  isIE6 = (rv == 6);
    	  isIE7 = (rv == 7);
    	  isIE8 = (rv == 8);
    	}
    	else {
    		isIE6 = false;
    		isIE7 = false;
    		isIE8 = false;
    	}
    	if (isIE6 | isIE7 | isIE8) {
    		 me.changeIEColor(i);
    	}
        
    	///////////////////////////////////////////////////////////////////////////////////////
        
        this.active = i;
        if (this.pagination_current.length) {
          $(this.pagination_current).html(this.active + 1);
        }

        if ( isIE6 | isIE7 | isIE8 ) {
            return this.timerStart();
        }
        if ( ! $(".ocarousel").is(':hover') ) {
           return this.timerStart();
        }
        else {
           return false;
        }
      }
    };

    /* Returns the distance of a frame from the left edge of its container
    */


    Ocarousel.prototype.getPos = function(which) {
      return $(this.frames[which]).position().left;
    };

    /* Returns the index of the next slide that should be shown
    */


    Ocarousel.prototype.getNext = function() {
      var next;
      next = this.active + this.settings.perscroll;
      if (next > (this.frames.length - this.settings.perscroll) && next < this.frames.length) {
        next = this.frames.length - this.settings.perscroll;
      }
      return next;
    };

    /* Returns the index of the next slide that should be shown before the current position
    */


    Ocarousel.prototype.getPrev = function() {
      var prev;
      prev = this.active - this.settings.perscroll;
      if (prev < 0 && this.active !== 0) {
        prev = 0;
      }
      return prev;
    };

    /* Starts or resumes the scroll timer
    */


  Ocarousel.prototype.timerStart = function() {
	 var me; 
	 me = this;

     if (this.settings.period !== Infinity) {
        return this.timer = setInterval((function() {
          return me.scrollTo(me.getNext());
        }), this.settings.period);
     }		
	
  };

    /* Stops the scroll timer
    */


    Ocarousel.prototype.timerStop = function() {
      if (this.timer != null) {
        clearInterval(this.timer);
        return this.timer = null;
      }
    };

    /* Starts the timer if it is stopped, stops the timer if it is running
    */


    Ocarousel.prototype.timerToggle = function() {
      if (this.timer != null) {
        return this.timerStop();
      } else {
        return this.timerStart();
      }
    };
		
    return Ocarousel;

  })();

  /*$(document).ready(function() {	
     return $(".ocarousel").each(function() {
      return new Ocarousel(this);
    });
  });*/

  $(document).ready(function() {
          
    var custom_carousel;
    custom_carousel = new Ocarousel($(".ocarousel"));
    $(".ocarousel").mouseenter(function(){
            return custom_carousel.timerStop();
        }).mouseleave(function(){
            return custom_carousel.timerStart();
        });
    return true;
  });

}).call(this);
});
;
jQuery(document).ready(function() {
  // Page accueil, combobox s'informer sur les aides
  if(jQuery('#informer-aides-combobox').length) {
    jQuery(document).click(function(event) {
      if(!jQuery(event.target).closest('#informer-aides-combobox').length && !jQuery(event.target).closest('div#liste-aides').length) {
        if(jQuery('div#liste-aides').is(":visible")) {
            jQuery('div#liste-aides').hide();
        }
      }
    });
    jQuery('#informer-aides-combobox').click(function(e) {
      if(jQuery('div#liste-aides').is(":visible")) {
        jQuery('div#liste-aides').hide();
      } else {
        jQuery('div#liste-aides').slideDown();
      }
    });
  }

	//alert('ok');
	jQuery("#footer-inside a[href='aide']").attr('tabindex', '1');
	jQuery("#footer-inside a[href='plan-du-site']").attr('tabindex', '2');
	jQuery(".bouton.bleu a[href='redirect/s/Redirect?page=monCompte']").attr('tabindex', '4');
	jQuery("#block-zipcode #zipcode").attr('tabindex', '5');
	jQuery("#block-zipcode .submit").attr('tabindex', '6');


		// détection de la version IE6
	var isIE6 = true;
	re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	if (re.exec(navigator.userAgent) != null) {
	  rv = parseInt( RegExp.$1 );
	  isIE6 = (rv == 6);
	}
	else {
		isIE6 = false;
	}
	// appliquer le patch des PNG transparent pour IE6
	if (isIE6){
		DD_belatedPNG.fix("a.logo img, #sidebar-2, .block .node-bloc-liens-utiles, .block .node-bloc-publications, .block .view-slide-stats, .block .node-bloc-acces-direct, .block .node-bloc-acces-direct h2 img, #block-access, #block-access div h2 img, .node-bloc-zoom, .block .field-name-field-bloc-zoom-liens, .block .node-bloc-questions-reponses, #block-faq, input#edit-submit--2");
	}

    getCafUrl();
	setTimeout(function() {
	  if (location.hash) {
		window.scrollTo(0, 0);
	  }
	}, 1);
	equalSize();

	miseEnFormeAccesDirectSidoc();

	initTargetBlank();

	adaptScroll();

	// forcer le lien externe de déconnexion en target _self
	jQuery("a.logout").attr('target', '_self');

	// mettre à jour la largeur des tableaux de contenu
	updateWidthTable();
	resize_img();
	imgsize();

	adapatBlockFrontPageTablet();

	resizeTabHeight();

    var url = window.location.pathname;
    if (url == "/advanced-search") {
        jQuery("#sidebar").css('width', '160px');
    }

    // Formattage des liens email dans un contenu (mailto:foo@bar.fr?subject=...&body=...)
    formatMailTo();

    /**
     * Handler for the form redirection error.
     */
    Drupal.ajax.prototype.error = function (response, uri) {

      // Remove the progress element.
      if (this.progress.element) {
        jQuery(this.progress.element).remove();
      }
      if (this.progress.object) {
        this.progress.object.stopMonitoring();
      }
      // Undo hide.
      jQuery(this.wrapper).show();
      // Re-enable the element.
      jQuery(this.element).removeClass('progress-disabled').removeAttr('disabled');
      // Reattach behaviors, if they were detached in beforeSerialize().
      if (this.form) {
        var settings = response.settings || this.settings || Drupal.settings;
        Drupal.attachBehaviors(this.form, settings);
      }

      if(jQuery("#modalContent").length > 0) {
        jQuery("#modalContent #modal-title").text("Erreur");
        jQuery("#modalContent #modal-content").html("Une erreur s'est produite.");
      }


    };



/* redimensionnement des images sous ie6*/
function resize_img(){
	if (jQuery.browser.msie && jQuery.browser.version == 6 ) {
		var i = 0;
		var line = 0;

		jQuery("#page-inner #page-content .field img").each(function(index) {
			line++;
			jQuery(this).addClass('line' + line)
			i++;
		});
		for (i = 1; i <= line; i++) {
			jQuery('.line' + i).each(function(index) {
				if (jQuery(this).width() > 713)/*la largeur de page-content*/
				{
					jQuery('.line' + i).css('width', '100%');
				}
			});
		}
	}
}

/**
 * mise à jour des largeurs de tableaux insérés par wysiswyg
 */
function updateWidthTable(){
	jQuery('table').each(function() {
		if( jQuery(this).attr("title") == "Lorem Ipsum" ){
			jQuery(this).css("width","99%");
		}
	});

	// adapter les grandes images aux ecrans mobile si leurs largeurs dépassennt celle du page-content
	/*var page_width = jQuery('#page-content').css('width');
	page_width = page_width.replace('px','');*/

	jQuery('#page-content').find('img').each( function(){
		var img_width = jQuery(this).attr('width');
	});

}

/**
 * Rajoute en jQuery les class et id sur les elements li et ul d'un bloc zoom
 * associé à un contenu Sidoc. En effet, le contenu est affiché directement via
 * print $content dans le template caf-access_direct-bloc.tpl.php.
 * On a donc aucun autre moyen d'accéder aux elements ul et li.
 * Ceci permet de garder la bonne mise en forme CSS
 */
function miseEnFormeAccesDirectSidoc() {
	if (jQuery.find("#bloc-acces-direct-sidoc").length > 0) {
		var bloc_content_ul = jQuery("#bloc-acces-direct-sidoc .bloc-content ul");
		bloc_content_ul.each(function() {
			jQuery(this).attr("id", "acces-direct-links");
		})

		var bloc_content_li = jQuery("#bloc-acces-direct-sidoc .bloc-content ul li");
		bloc_content_li.each(function() {
			jQuery(this).attr("class", "acces-direct-item");
		})
	}
}

/*
    Adapte la hauteur du bloc trois avec la barre de scroll sur la page d'accueil par rapport aux deux autres blocs
*/

function adaptScroll() {
	if(!(jQuery('.msie7').length || jQuery('.msie7').length ||  jQuery('.msie7').length))
    if(jQuery('#trois').length > 0 && !jQuery('.msie6').length > 0) {
        if(jQuery('#secondary div.item-list').height() > jQuery('#primary div.item-list').height()) {
            jQuery('#trois div.item-list').css('height', jQuery('#secondary div.item-list').height() - 10);
        }
        else {
            jQuery('#trois div.item-list').css('height', jQuery('#primary div.item-list').height() - 10);
        }
    }
}

function equalSize() {
/* jQuery('.block-container-01').masonry({
  }); */
}

/**
 * appel Ajax getSessionData
 */
function getCafUrl() {
   var url = window.location.href;
   var url_splitted = url.split("/");
   var last = url_splitted[url_splitted.length-1];

   if ( last != 'contacter-ma-caf-p2' ) {
       jQuery.ajax({
        url: '/wps/s/GetSessionData',
        success: function(data) {
          var dataLog = data.split(';');
          if (dataLog[0] != '0') {

            //Lien premiere visite caché si l'utilisateur est connecté
            jQuery("#first_visite a").hide();
            jQuery("#first_visite img").hide();

            jQuery("a.logout").show().css('display', 'block');
            jQuery(".anon").hide();
            jQuery(".servline").hide();

            // le href est renseigné dans caf_theme.module pour le lien de déconnexion
            //jQuery("a.logout").attr('href',dataLog[0]);
          }

          else {
        	 // Si pas connecté mais présence du cookie LtpaToken2
        	 // cas d'une inactivité => suppression du cookie
        	 if (document.cookie.indexOf("LtpaToken2") >= 0) {
        		 document.cookie = 'LtpaToken2=valeur_cookie; expires=Fri, 1 Jan 1960 00:00:01 UTC; path=/'
        	 }
          }
          // l'appel AJAX afin d'afficher la nom de la dernière CAF recherchée
          // ou suite à un retour depuis l'espace mon-service-public
          //maCafGetCafId();
        }
      });
  }

   else {
	   //Si connecté à websphere => Affichage du lien se deconnecter
	   if (document.cookie.indexOf("LtpaToken2") >= 0) {
		 //Lien premiere visite caché si l'utilisateur est connecté
           jQuery("#first_visite a").hide();
           jQuery("#first_visite img").hide();

           jQuery("a.logout").show().css('display', 'block');
           jQuery("a.logout").attr('target', '_self');
           jQuery(".anon").hide();
           jQuery(".servline").hide();
       }
   }
}

function cleanIframeKeepSession(){
	if (jQuery('#hidden-keep-session-html').length){
		var str = jQuery('#hidden-keep-session-html').html();
		str = str.replace('<head>','');
		str = str.replace('</head>','');
		str = str.replace('<body>','');
		str = str.replace('</body>','');
		jQuery('#hidden-keep-session-html').html(str);
	}
}

/**
 * Afficher le nom de la caf dans le bloc MA CAF sur la homepage, à partir du cookie
 */
function maCafGetCafId(){
        var _cookies = document.cookie.split(";");
        var made=false;

        for (i in _cookies){
        	// Test pour IE7 et IE8 sinon erreur SCRIPT438
        	if (i !== 'indexOf') {
	            if (made) return;
	            var c = _cookies[i];
	            c = c.split("=");

	            var n = c[0].replace(" ", "");
	            var val = c[1].replace(" ", "");
	            var caf=false;

	            if (n == "session_caf_search") {
	                caf=val;
	            }
	            if (n == "session_caf") {
	                caf=val;
	            }

	            jQuery(".bloc-custom.ma-caf .intro").html('Actualités, informations pratiques sur ma Caf...<div><label for="zipcode"></label></div>');

	            if (caf){
	                made = true;
	                jQuery(".bloc-custom.ma-caf .intro").html('Actualités, informations sur la <a href="/ma-caf" id="ma-caf-id"></a><br /><span class="intro last">Choisir une autre Caf</span>');
	                var req = jQuery.ajax({
	                    type: "GET",
	                    url: "/ma-caf/getcaf/"+val,
	                    complete : function (data){
	                	jQuery("#ma-caf-id").text(data.responseText);
	                    }
	                });
	            }
        	}
        }
}

/* Fonction permettant d'ouvrir les liens de document dans une autre fenêtre */
function  initTargetBlank() {
  jQuery("a[href*='.pdf']").attr('target', '_blank');
  jQuery("a[href*='.doc']").attr('target', '_blank');
  jQuery("a[href*='.docx']").attr('target', '_blank');
  jQuery("a[href*='.xls']").attr('target', '_blank');
  jQuery("a[href*='.xlsx']").attr('target', '_blank');
  jQuery("a[href*='.ppt']").attr('target', '_blank');
  jQuery("a[href*='.pptx']").attr('target', '_blank');
  jQuery("a[href*='.jpg']").attr('target', '_blank');
  jQuery("a[href*='.png']").attr('target', '_blank');
  jQuery("a[href*='.gif']").attr('target', '_blank');
  jQuery("a[href*='.tiff']").attr('target', '_blank');
}

function getUrlByHostName(){
	var host = window.location.host;
	var remote_url = '';
	switch (host) {
	    case 'www-i.caf.fr': default:
	    	remote_url = 'https://wwwd-i.caf.fr/msp/s/ActionMspIncludePublic?action=sessionMaintien';
	    break;
	    case 'www-r.caf.fr':
	    	remote_url = 'https://wwwd-r.caf.fr/msp/s/ActionMspIncludePublic?action=sessionMaintien';
	    break;
	    case 'www-v.caf.fr':
	    	remote_url = 'https://wwwd-v.caf.fr/msp/s/ActionMspIncludePublic?action=sessionMaintien';
	    break;
	    case 'www3.caf.fr':
	    	remote_url = 'https://wwwd.caf.fr/msp/s/ActionMspIncludePublic?action=sessionMaintien';
	    break;
	    case 'www.caf.fr':
	    	remote_url = 'https://wwwd.caf.fr/msp/s/ActionMspIncludePublic?action=sessionMaintien';
	    break;
	}

	return remote_url;
}

function add_google_adwords_tag(){
  	var ebRand = Math.random()+'';
	ebRand = ebRand * 1000000;
	var track_url = "HTTP://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&amp;ActivityID=219809&amp;rnd=" + ebRand;
	document.write("<script src='" + track_url + "' defer ></script>");
	//jQuery('#footer').html('<iframe src = "tracking.html" style = "border:none; width:1px; height:1px;" marginheight="0" marginwidth="0" frameborder="0"></ iframe>');
	setTimeout(window.location.replace('/redirect/s/Redirect?page=monCompte'), 2000);
}

/*
 * Fonction permet de resize les images du carousel et les indicateurs de type SVG
 */
function imgsize() {
	// récupere le largeur du carousel
	var W = jQuery(".ocarousel").width();
	var largeur_fenetre = jQuery(document).width();//Format PC

	if (jQuery(".msie8").length > 0) {
		seuil = 1111;
	}
	else if (jQuery(".msie6").length > 0 || jQuery(".msie7").length > 0) {
		seuil = 1090;
	}
	else {
		seuil = 1075;
	}

	if (largeur_fenetre <= seuil ) {
		var H = (90*W)/768;
	}
	else{
		var H = 90;
	}

	if (jQuery(".ocarousel_window").find(".ocarousel_window_slides").length == 0) {
		// s'il y a qu'une image sur carousel
		jQuery(".ocarousel_window").children("div").width(W);
		jQuery(".ocarousel_window").children("div").height(H);
	} else {
		// s'il y a plusieurs images sur carousel
		jQuery(".ocarousel_window_slides").children("div").width(W);
		jQuery(".ocarousel_window_slides").children("div").height(H);
	}

	if (typeof Raphael !== 'undefined') {
        if (Raphael.svg) {
		    // le navigateur supporte svg
		    var svg = jQuery(".ocarousel_indicators").find("svg")[0];
		    var indicators_container = jQuery(".ocarousel_indicators");

    		if(typeof svg != 'undefined') {
    			var svg_length = svg.childNodes.length;
	    		var indicator_r = 6;
		    	var indicator_spacing = 6;
    			if (svg_length > 1) {
	    			// pour le nbr d'images > 1, on redimensionne le taille et le coord d'indicateurs
		    		var cx = jQuery(indicators_container).width() * 0.90 - indicator_r * svg_length - indicator_spacing * svg_length / 2;
			    	if (W >= 512) {
				    	for (var i=0; i < svg_length; i++) {
    						svg.childNodes[i].setAttribute("r", "6");
	    					svg.childNodes[i].setAttribute("cx", cx);
		    				cx = cx + indicator_r * 2 + indicator_spacing;
			    		}
    				} else if (W > 346 && W < 512) {
	    				for (var i=0; i < svg_length; i++) {
		    				svg.childNodes[i].setAttribute("r", "5");
			    			svg.childNodes[i].setAttribute("cx", cx);
				    		cx = cx + indicator_r * 2 + indicator_spacing;
					    }
    			    } else {
	    		    	for (var i=0; i < svg_length; i++) {
		    				svg.childNodes[i].setAttribute("r", "4");
			    			svg.childNodes[i].setAttribute("cx", cx);
				    		cx = cx + indicator_r * 2 + indicator_spacing;
					    }
    			    }
	    		}
		    }

	    }
    }

	if (W > 346 && W < 512) {
    	jQuery("#img_left").width("25px").height("25px");
    	jQuery("#img_right").width("25px").height("25px");
    }
    if (W <= 346) {
    	jQuery("#img_left").width("20px").height("20px");
    	jQuery("#img_right").width("20px").height("20px");
    }
}


//Taille dynamique du message info en fonction de la taille de la fenetre
function filInfoSize() {

    var largeur_fenetre = jQuery(window).width();

	if (largeur_fenetre < 1074) {
		var ratio = 0.55
		jQuery(".field-content").css("width", largeur_fenetre*ratio);
	}
	if (largeur_fenetre >= 1074) {
		jQuery(".field-content").css("width", "800px");
	}

}

// Redimensionnement de la popup commentaire
// en fonction de la taille de la fenetre
function resizePopUp() {

	var largeur_fenetre = jQuery(window).width();
	if (jQuery("#colorbox").length) {

        if (largeur_fenetre < 1074) {
            var ratioWidth = 0.75;
        }
        else {
            var ratioWidth = 0.55;
        }

		var newSizeWidth = largeur_fenetre*ratioWidth;
		var ratioLeft = 0.13;
		var newSizeLeft = largeur_fenetre*ratioLeft;

		jQuery("#colorbox").width(newSizeWidth);
		jQuery("#colorbox").css("left", newSizeLeft);
		jQuery("#cboxWrapper").width(newSizeWidth);
		jQuery("#cboxContent").width(newSizeWidth);
		jQuery("#cboxLoadedContent").width(newSizeWidth);
	}
}

/**
 * Centre les blocs de la page d'accueil en format tablette
 */
function adapatBlockFrontPageTablet() {

	var largeur_fenetre = jQuery(window).width();

	//Format tablette
	if (largeur_fenetre < 1074 && largeur_fenetre >=624 && jQuery('#sidebar-2').css('display') != 'none') {

		var nb_bloc = jQuery('#sidebar-2 .content').children().size();

		if (nb_bloc == 0) {
			jQuery( "#sidebar_PC").find("#front_placement_bloc").each(function() {
				jQuery(this).width('49%');
			});
		}

		// nb_bloc = 2 mais il y a reellement qu'un seul bloc
		// Présence d'une div à la fin <div style="clear:both"></div>
		else if (nb_bloc == 2) {
			jQuery( "#sidebar_PC").find("#front_placement_bloc").each(function() {
				jQuery(this).width('33%');
			});

			jQuery( "#sidebar-2" ).find('#affiche').each(function() {
				jQuery(this).width('33%');
			});
		}

		// nb_bloc = 3 mais il y a reellement au moins 2 blocs
		// Présence d'une div à la fin <div style="clear:both"></div>
		else if (nb_bloc >= 3) {
			jQuery( "#sidebar_PC").find("#front_placement_bloc").each(function(index) {
				//Bloc ma caf
				if (index == 0) {
					var bloc_ma_caf = jQuery("#front_placement_bloc .bloc-custom.ma-caf");
					bloc_ma_caf.css("margin-left", "7px");
				}

				//Bloc mon compte
				else if (index == 1) {
					var bloc_mon_compte = jQuery("#front_placement_bloc .bloc-custom.mon-compte");
					bloc_mon_compte.css("margin", "0");
				}

				jQuery(this).width('25%');
			});

			jQuery( "#sidebar-2" ).find('#affiche').each(function(index) {
				//Bloc le plus à droite => 1er bloc
				if (index == 0) {
					var bloc_droite = jQuery(this).children();
					jQuery(this).css("float", "right");
					bloc_droite.css("margin-right", "7px");
					bloc_droite.css("margin-left", "auto");
				}
				jQuery(this).width('24%');
			});
		}
	}

	//Autre format => on remet comme c'était
	else {
		jQuery('#sidebar_PC #front_placement_bloc').width('');
		jQuery('#front_placement_bloc .bloc-custom.ma-caf').css('margin-left', '');
		jQuery("#front_placement_bloc .bloc-custom.mon-compte").css("margin", '');
		jQuery( "#sidebar-2" ).find('#affiche').each(function(index) {
			var bloc_droite = jQuery(this).children();
			jQuery(this).css("float", "");
			bloc_droite.css("margin-right", "");
			bloc_droite.css("margin-left", "");
		});

		jQuery( "#sidebar_PC").find("#front_placement_bloc").each(function(index) {
			jQuery(this).width('');
		});
	}
}

/**
 * Modification de la hauteur des onglets dans les pages
 * aides et services (Métropole, Dom et Question/Réponse)
 */
function resizeTabHeight() {
	var largeur_fenetre = jQuery(window).width();

	// Si les onglets sont présents dans la page et qu'ils sont au nombre de 3
	if (jQuery('#page-content ul.menu-tabs li').length == 3) {

		// Si la largeur de la fenetre est en dessous de 462px
		if (largeur_fenetre < 462) {
			//On fixe la hauteur des onglets
			jQuery('#page-content ul.menu-tabs li').each(function(index) {
					jQuery(this).find("a").height("34px");
			});
		}
		// Sinon on laisse par défaut
		else {
			jQuery('#page-content ul.menu-tabs li').each(function(index) {
					jQuery(this).find("a").css('height', '');
				//}
			});
		}
	}
}

jQuery(window).bind('resize', function() { imgsize(); filInfoSize(); resizePopUp(); adapatBlockFrontPageTablet(); resizeTabHeight();});


/**
 * Centre verticalement le message du fil info en fonction du nombre de caractères
 * (une ou deux lignes)
 * @param curr : texte courant
 * @param next : texte d'après
 * @param opts
 */
function updateHeightFilInfo(curr,next,opts) {

	var index;
	var largeur_fenetre = jQuery(window).width();

	index = jQuery(next).index();

	var nb_car = jQuery('#views_slideshow_cycle_div_message_infos-block_'+index).text().length;
	var hauteur_div = jQuery('#views_slideshow_cycle_div_message_infos-block_'+index+' .field-content').height();

	// Pour 1073px en largeur de fenetre => 98 caractères d'afficher
	// Produit en croix pour savoir si le nombre de caractères passe sur 2 lignes
	var formule = (nb_car*1073)/98;

	if (formule >= largeur_fenetre) {
		jQuery('#views_slideshow_cycle_div_message_infos-block_'+index+' .field-content').css("margin-top", "-7px");
	}
	else {
		jQuery('#views_slideshow_cycle_div_message_infos-block_'+index+' .field-content').css("margin-top", "2px");
	}
}

jQuery('#views_slideshow_cycle_teaser_section_message_infos-block').cycle({
	before: updateHeightFilInfo
});

/**
 * Formatte un lien email pour que le body et les retours à la ligne
 * soient pris en compte
 */
function formatMailTo() {
	var regexBody = /(mailto:.*)&%3B(body=.*)/g;
	var regexNewLine = /\_/g;
	jQuery('a[href^=mailto]').each(function() {
		this.href = this.href.replace(regexBody, '$1&$2');
		this.href = this.href.replace(regexNewLine, '%0D%0A');
	});
}

/**
  *****************
  * PUSHMAIL
  *****************
  */
  if(jQuery('#pushmail-form').length ) {

      jQuery('div.pushmail_subscribe_btn a').click(function(e) {
          // On empêche l'action par défaut du lien
          e.preventDefault();

          // On récupère le lien
          var lien = jQuery(this).attr("href");

          // On extrait l'id de la rubrique ciblée
          var elements = lien.split('/');
          var id_rubrique = elements[elements.length - 1];

          // Appel Ajax vers le module Pushmail
          jQuery.ajax({
              type: 'GET',
              url: '/pushmail/list_themes/' + id_rubrique,
              success: function(themes) {
                // Affichage du formulaire dans une popup
                afficherFormulaire(themes);
              }
          });
      });

      /*
      Fonction dédiée à l'affichage du formulaire et la génération des souscriptions aux thèmes
      */
      function afficherFormulaire(themes) {
          // Vider la div
          jQuery("#pushmail-themes").empty();
          jQuery("div.error").hide();
          jQuery("div.status").remove();

          // Recharger le contenu
          jQuery("div#pushmail-content").show();

          // On génère une popup contenant le formulaire
          jQuery.colorbox({
              inline: true,
              href: '#pushmail-form',
              open: true,
              innerWidth: '400px',
              maxWidth: '400px',
              reposition: false,
              fixed: true,
              overlayClose : false
          });

          // On parcourt les thèmes retournés
          for(key in themes) {
              var theme = themes[key];

              jQuery("#pushmail-themes").append("<div class='pushmail-theme' id='theme-"+theme['nid']+"'></div>");
              jQuery("div#theme-"+theme['nid']).append("<p>"+ theme['nom'] +":</p>");
              jQuery("div#theme-"+theme['nid']).append("<label><input type='checkbox' class='check_pushmail' name='"+ theme['nid'] +"' value='"+ theme['nom'] + "-national'>Articles nationaux</label>");
              jQuery("div#theme-"+theme['nid']).append("<label><input type='checkbox' class='check_pushmail' name='"+ theme['nid'] +"' value='"+ theme['nom'] + "-regional'>Articles de ma Caf</label>");
          }

          // Redimensionnement colorbox
          jQuery.colorbox.resize();

          // Soumission du formulaire
          // FIX : double submission du submit
          jQuery("#pushmail-formulaire").unbind("submit");
          jQuery("#pushmail-formulaire").submit(verifierFormulaire);
      }

      /*
      Fonction dédiée à la vérification du formulaire
      */
      function verifierFormulaire() {
          // Vider les messages d'erreur et cacher les div
          jQuery("p.error-msg").empty();
          jQuery("div.error").hide();

          // Vérifier les erreurs
          var erreurs = false;

          // Vérification adresse e-mail
          var email = jQuery("input#email").val();
          if(!email) {
              jQuery("#error-mail").html("Veuillez entrer une adresse mél valide");
              jQuery("div#error-div-mail").show();
              erreurs = true;
          }
          else {
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if(!re.test(email)) {
                  jQuery("#error-mail").html("Le format de votre adresse mél est invalide, merci de le modifier.");
                  jQuery("div#error-div-mail").show();
                  erreurs = true;
              }
          }

          // Vérification code postal
          var cpostal = jQuery("input#cpostal").val();
          if(!cpostal) {
              jQuery("#error-cpostal").html("Veuillez entrer un code postal");
              jQuery("div#error-div-cpostal").show();
              erreurs = true;
          }
          else {
              var re = /^[0-9]{5,6}$/;
              if(!re.test(cpostal)) {
                  jQuery("#error-cpostal").html("Le code postal saisi est incorrect, veuillez le saisir à nouveau.");
                  jQuery("div#error-div-cpostal").show();
                  erreurs = true;
              }
          }

          // Vérification des thèmes
          var nb_coches = jQuery(this).find('input[type="checkbox"]:checked').length;
          if(nb_coches == 0) {
              jQuery("#error-themes").html("Veuillez sélectionner au moins un abonnement dans la liste proposée ci-dessous.");
              jQuery("div#error-div-themes").show();
              erreurs = true;
          }

          // Redimensionnement colorbox
          jQuery.colorbox.resize();

          // Si pas d'erreurs, on envoie les données
          if(!erreurs) {
              envoiFormulaire(email, cpostal);
          }

          // Empêcher le comportement par défaut du navigateur
          return false;
      }

      /*
      Fonction dédiée à la soumission du formulaire
      */
      function envoiFormulaire(email, cpostal) {
          // On récupère encore une fois l'id de la rubrique cible
          var elements = jQuery('div.pushmail_subscribe_btn a').attr("href").split('/');
          var id_rubrique = elements[elements.length - 1];

          // On récupère tous les thèmes
          var themes = jQuery("div.pushmail-theme");

          var themes_json = {};

          // On boucle sur ces thèmes
          themes.each(function() {
              // On prend les checkboxes cochées
              var checkboxes = jQuery(this).find('input[type="checkbox"]:checked');
              // Aucun
              if(checkboxes.length == 0) {
                  return;
              }

              var checkbox = checkboxes.get(0);
              var value = jQuery(checkbox).val().split('-');
              var theme_id = jQuery(checkbox).attr('name');

              // Cas national et régional
              if(checkboxes.length == 2) {
                  themes_json[theme_id] = {
                    'nom': value[0],
                    'national': true,
                    'regional': true
                  };
              }
              // Une seule case cochée
              else {
                  themes_json[theme_id] = {
                    'nom': value[0],
                    'national': ((value[1] == 'national') ? true : false),
                    'regional': ((value[1] == 'regional') ? true : false),
                  };
              }
          });

          // Appel Ajax vers le module Pushmail
          jQuery.ajax({
              type: 'POST',
              url: '/pushmail/subscribe/' + id_rubrique,
              data: {
              "email" : email,
              "code_postal" : cpostal,
              "subscriptions" : JSON.stringify(themes_json)
              },
              success: function(message) {
                  // Afficher message retourné dans la pop-up
                  jQuery("div#pushmail-content").hide();
                  jQuery("div#pushmail-content").after("<div class='messages status'>"+ message['resultat'] +"</div>");
              }
          });
      }
  }

/**
* FIL d'info pour les pages VDF
* Recuperation du cookie via du javascript (pb de cache)
* Appel Ajax pour récupérer le nom de la caf
*/

  var _cookies = document.cookie.split(";");
  var made=false;
  var caf_id_cookie = "cnaf";

  for (i in _cookies){
    if (i !== "indexOf") {
      if (made) break;
      var cook = _cookies[i];

      var c = cook.split("=");
      if(c.length > 1) {
        var n = c[0].replace(" ", "");
        var val = c[1].replace(" ", "");
        caf_id_cookie="cnaf";

        if (n == "session_caf_search") {
          caf_id_cookie=val;
          made=true;
        }
        if (n == "session_caf") {
          caf_id_cookie=val;
          made=true;
        }
      }
    }
  }

  if (jQuery("#home-fil-infos").length > 0) {
    if (caf_id_cookie != "cnaf") {
      jQuery.ajax({
        type: 'GET',
        url: '/get/ajax/get-caf-name',
        dataType: 'json',
        data: {'caf_id': caf_id_cookie},
        success: function(result) {

          if (typeof(result.caf_name) != "undefined") {
            var caf_name = result.caf_name.short_name + " " +result.caf_name.short_name_2;
            //add class
            jQuery("#heading").addClass("geoloc_vdf");
            jQuery("#home-heading-inner").addClass("home-heading-inner_geoloc_vdf");
            jQuery("#home-fil-infos .point_caf").show();
            jQuery("#home-fil-infos .titre_caf_vdf").html(caf_name).show();
          }

        },
        error: function(error) {
        }
      });
    }else {
      jQuery("#heading").removeClass("geoloc_vdf");
      jQuery("#home-heading-inner").removeClass("home-heading-inner_geoloc_vdf");
      jQuery("#home-fil-infos .point_caf").hide();
      jQuery("#home-fil-infos .titre_caf_vdf").hide();
    }
  }

/**
* JavaScript pour le bloc VDF "derniere actus"
*/
if (jQuery('.bloc-vdf-dernieres-actus').length > 0 && caf_id_cookie.length > 0) {

  jQuery.ajax({
    type: 'GET',
    url: '/get/ajax/get-last-actus',
    dataType: 'json',
    data: {
      'caf_id': caf_id_cookie
    },
    success: function(result) {

      //caché si vide
      if(typeof(result.vdf_pave_actu_importante) == "undefined" && typeof(result.vdf_pave_actu) == "undefined") {
        jQuery(".bloc-vdf-dernieres-actus").hide();
      }else {

        var output = "";

        if(typeof(result.vdf_pave_actu_importante) != "undefined" && result.vdf_pave_actu_importante.length > 0) {

          output += '<div class="vdf_btn_important">'
                    + '<span class="vdf_btn_important_title" style="padding:5px 8px">IMPORTANT</span>'
                  + '</div>';

          output += '<div class="lien_date">'
                    + '<span>' + result.vdf_pave_actu_importante[0].changed + '</span>'
                    + '<span>'
                      + '<a class="lien_desc" href="'+ result.vdf_pave_actu_importante[0].url +'"> '+result.vdf_pave_actu_importante[0].title+'</a>'
                    + '</span>'
                  + '</div>';

        }
        if (typeof(result.vdf_pave_actu) != "undefined" && result.vdf_pave_actu.length > 0) {
          for (var i=0; i < result.vdf_pave_actu.length; i++) {

            output += '<div class="vdf_actu_content">'
                      + '<span >' + result.vdf_pave_actu[i].changed + '</span>'
                      + '<span>'
                        + '<a class="lien_desc" href="' + result.vdf_pave_actu[i].url + '"> ' + result.vdf_pave_actu[i].title + '</a>'
                      + '</span>'
                    + '</div>';

          }
        }

        output += '<div class="vdf-btn-actualite"><a href="'+ result.vdf_pave_actu_plus +'" class="btn-type-02">+ d\'actualités</a></div>';

        jQuery(".bloc-vdf-dernieres-actus .bloc-vdf-dernieres-actus-content").html(output);
      }

      //Si on est sur la page d'acceuil on remplit le pavé "dernieres actus"
      var output = "";
      if (jQuery(".vdf_accueil_droit_contenu .vdf_pave_actualites").length > 0) {

        //caché si vide
        if(typeof(result.vdf_pave_actu_importante) == "undefined" && typeof(result.vdf_pave_actu) == "undefined") {
          jQuery(".vdf_accueil_droit_contenu").hide();
        }else {

          if(typeof(result.vdf_pave_actu_importante) != "undefined" && result.vdf_pave_actu_importante.length > 0) {

            output += '<div class="vdf_btn_important"><span class="vdf_btn_important_title">IMPORTANT</span></div>';

            output += '<div class="vdf_pave_actualite">'
                      + '<span>' + result.vdf_pave_actu_importante[0].changed + '</span>'
                      + '<span>'
                        + '<a class="vdf_actualite_link" href="'+ result.vdf_pave_actu_importante[0].url +'"> '+result.vdf_pave_actu_importante[0].title+'</a>'
                      + '</span>'
                      + '<div>' + result.vdf_pave_actu_importante[0].resume
                        + '<span><a href="'+ result.vdf_pave_actu_importante[0].url +'"> Lire</a></span>'
                      +'</div>'
                    + '</div>';

          }
          if (typeof(result.vdf_pave_actu) != "undefined" && result.vdf_pave_actu.length > 0) {
            for (var i=0; i < result.vdf_pave_actu.length; i++) {

              output += '<div class="vdf_pave_actualite">'
                    + '<span>' + result.vdf_pave_actu[i].changed + '</span>'
                    + '<span>'
                      + '<a class="vdf_actualite_link" href="' + result.vdf_pave_actu[i].url + '"> ' + result.vdf_pave_actu[i].title + '</a>'
                    + '</span>'
                    + '<div>' + result.vdf_pave_actu[i].resume
                      + '<span><a href="' + result.vdf_pave_actu[i].url + '"> Lire</a></span>'
                    + '</div>'
                  + '</div>';

            }
          }

          output += '<div class="vdf-btn-actualite"><a href="'+ result.vdf_pave_actu_plus +'" class="btn-type-02">+ d\'actualités</a></div>';
          jQuery(".vdf_accueil_droit_contenu .vdf_pave_actualites").html(output);
        }
      }
    }
  });

}

/**
* JavaScript pour le pavé "derniere actus" de la page d'accueil VDF
*/
if (jQuery('.vdf_accueil_container_bloc_droite .vdf_accueil_droit_contenu').length > 0 && caf_id_cookie.length > 0) {

  //Si il y a un bloc "dernières actus", on ne fait pas la requête ajax
  if (jQuery('#sidebar_caf .bloc-vdf-dernieres-actus').length == 0) {

    jQuery.ajax({
      type: 'GET',
      url: '/get/ajax/get-last-actus',
      dataType: 'json',
      data: {
        'caf_id': caf_id_cookie
      },
      success: function(result) {

        //caché si vide
        if(typeof(result.vdf_pave_actu_importante) == "undefined" && typeof(result.vdf_pave_actu) == "undefined") {
          jQuery(".vdf_accueil_droit_contenu").hide();
        }else {

          var output = "";

          if(typeof(result.vdf_pave_actu_importante) != "undefined" && result.vdf_pave_actu_importante.length > 0) {

            output += '<div class="vdf_btn_important"><span class="vdf_btn_important_title">IMPORTANT</span></div>';

            output += '<div class="vdf_pave_actualite">'
                      + '<span>' + result.vdf_pave_actu_importante[0].changed + '</span>'
                      + '<span>'
                        + '<a class="vdf_actualite_link" href="'+ result.vdf_pave_actu_importante[0].url +'"> '+result.vdf_pave_actu_importante[0].title+'</a>'
                      + '</span>'
                      + '<div>' + result.vdf_pave_actu_importante[0].resume
                        + '<span><a href="'+ result.vdf_pave_actu_importante[0].url +'"> Lire</a></span>'
                      +'</div>'
                    + '</div>';

          }
          if (typeof(result.vdf_pave_actu) != "undefined" && result.vdf_pave_actu.length > 0) {
            for (var i=0; i < result.vdf_pave_actu.length; i++) {

              output += '<div class="vdf_pave_actualite">'
                    + '<span>' + result.vdf_pave_actu[i].changed + '</span>'
                    + '<span>'
                      + '<a class="vdf_actualite_link" href="' + result.vdf_pave_actu[i].url + '"> ' + result.vdf_pave_actu[i].title + '</a>'
                    + '</span>'
                    + '<div>' + result.vdf_pave_actu[i].resume
                      + '<span><a href="' + result.vdf_pave_actu[i].url + '"> Lire</a></span>'
                    + '</div>'
                  + '</div>';

            }
          }

          output += '<div class="vdf-btn-actualite"><a href="'+ result.vdf_pave_actu_plus +'" class="btn-type-02">+ d\'actualités</a></div>';

          jQuery(".vdf_accueil_droit_contenu .vdf_pave_actualites").html(output);

        }
      }
    });
  }
}

/**
* JavaScript pour l'edito CAF de la page d'accueil VDF
*/
if (jQuery('.vdf_accueil_edito').length > 0 && caf_id_cookie.length > 0 && caf_id_cookie != "cnaf") {

  jQuery.ajax({
    type: 'GET',
    url: '/get/ajax/get-edito-caf',
    dataType: 'json',
    data: {
      'caf_id': caf_id_cookie
    },
    success: function(result) {
      var output = "";
      output = result.edito_vdf;
      jQuery(".vdf_accueil_edito").html(output);
    }
  });

}

/**
* JavaScript pour le pavé "articles les plus lus" de la page d'accueil VDF
*/
if (jQuery('.vdf_accueil_gauche_contenu .vdf_accueil_article_plus_lus').length > 0 && caf_id_cookie.length > 0) {

  //Si il n'y a pas un bloc "articles les plus lus", on fait la requête ajax
  if(jQuery('.bloc-vdf-articles-les-plus-lus .bloc-vdf-articles-les-plus-lus-content').length == 0) {

    jQuery.ajax({
      type: 'GET',
      url: '/get/ajax/get-articles-most-view',
      dataType: 'json',
      data: {
        'caf_id': caf_id_cookie
      },
      success: function(result) {

        //cacher le bloc si vide
        if(typeof(result.vdf_art_plus_lus) == "undefined" ||result.vdf_art_plus_lus.length == 0) {
          jQuery(".vdf_accueil_gauche_contenu").hide();
        }else {

          var output = "";

          if(typeof(result.vdf_art_plus_lus) != "undefined" && result.vdf_art_plus_lus.length > 0) {

            output += '<ul>';

            for (var i=0; i < result.vdf_art_plus_lus.length; i++) {

              output += '<li class="pucebleu">'
                      + '<a href="/' + result.vdf_art_plus_lus[i].alias + '">' + result.vdf_art_plus_lus[i].title +'</a>'
                      + '</li>';

            }
            output += '</ul>';
          }

          jQuery(".vdf_accueil_gauche_contenu .vdf_accueil_article_plus_lus").html(output);
        }
      }
    });
  }
}

/**
* JavaScript pour le bloc VDF "articles les plus lus"
*/
if (jQuery('.bloc-vdf-articles-les-plus-lus .bloc-vdf-articles-les-plus-lus-content').length > 0 && caf_id_cookie.length > 0) {

  jQuery.ajax({
    type: 'GET',
    url: '/get/ajax/get-articles-most-view',
    dataType: 'json',
    data: {
      'caf_id': caf_id_cookie
    },
    success: function(result) {

      //cacher le bloc si vide
      if(typeof(result.vdf_art_plus_lus) == "undefined" ||result.vdf_art_plus_lus.length == 0) {
          jQuery(".bloc-vdf-articles-les-plus-lus").hide();
      }else {

        var output = "";

        if(typeof(result.vdf_art_plus_lus) != "undefined" && result.vdf_art_plus_lus.length > 0) {

          output += '<ul>';
          for (var i=0; i < 2; i++) {
            if (typeof(result.vdf_art_plus_lus[i]) != "undefined") {
              output += '<li>'
                        + '<a class="lien_desc" href="/' + result.vdf_art_plus_lus[i].alias + '">' + result.vdf_art_plus_lus[i].title +'</a>'
                      + '</li>';
            }
          }
          output += '</ul>';
        }

        jQuery(".bloc-vdf-articles-les-plus-lus .bloc-vdf-articles-les-plus-lus-content").html(output);

      }

      var output = "";
      //cacher le pavé si vide
      if(typeof(result.vdf_art_plus_lus) == "undefined" ||result.vdf_art_plus_lus.length == 0) {
          jQuery(".vdf_accueil_gauche_contenu").hide();
      }else {

        if(jQuery(".vdf_accueil_gauche_contenu .vdf_accueil_article_plus_lus").length > 0) {
          if(typeof(result.vdf_art_plus_lus) != "undefined" && result.vdf_art_plus_lus.length > 0) {

            output += '<ul>';
            for (var i=0; i < result.vdf_art_plus_lus.length; i++) {
              output += '<li class="pucebleu">'
                      + '<a href="/' + result.vdf_art_plus_lus[i].alias + '">' + result.vdf_art_plus_lus[i].title +'</a>'
                      + '</li>';

            }
            output += '</ul>';
          }

          jQuery(".vdf_accueil_gauche_contenu .vdf_accueil_article_plus_lus").html(output);
        }
      }
    }
  });

}

/**
* JavaScript pour les pages rubriques
*/
jQuery(".filter-by-themes .filter-by-content-input .css-checkbox").each(function() {
  // IE 7&8 : cases cochées lors d'une redirection
	if( jQuery("html").hasClass("msie8") || jQuery("html").hasClass("msie7")) {
		if (jQuery(this).attr('checked') == true) {
      jQuery(this).parent().children('label').css({"background-position":"0 -15px"});
    }else{
      jQuery(this).parent().children('label').css({"background-position":"0 0"});
    }
	}
});

jQuery(".filter-by-themes .filter-by-content-input .css-checkbox").click(function() {
	if( jQuery("html").hasClass("msie8") || jQuery("html").hasClass("msie7")) {
		if (jQuery(this).attr('checked') == true) {
      jQuery(this).parent().children('label').css({"background-position":"0 -15px"});
    }else {
      jQuery(this).parent().children('label').css({"background-position":"0 0"});
    }
	}
  ajax_get_listing_articles();
});

/**
* JavaScript pour les pages articles : article suivant/precedent
*/
if (jQuery('.article-vdf-precsuiv').length > 0) {

  if (caf_id_cookie.length > 0) {

    var current_url = (document.URL.match(/vies-de-famille/g)) ? document.URL : window.location;

    jQuery.ajax({
      type: 'GET',
      url: '/get/ajax/get-nextprev-article',
      dataType: 'json',
      data: {
        'caf_id': caf_id_cookie,
        'alias': current_url
      },
      success: function(result) {

        if (typeof(result.next_article) != "undefined" && result.next_article != false) {
          jQuery(".article-vdf-precsuiv #articlesuivant").html(result.next_article).show();
        }else {
          jQuery(".article-vdf-precsuiv #articlesuivant").html('').hide();
        }

        if (typeof(result.prev_article) != "undefined" && result.prev_article != false) {
          jQuery(".article-vdf-precsuiv #articleprecedent").html(result.prev_article).show();
        }else {
          jQuery(".article-vdf-precsuiv #articleprecedent").html('').hide();
        }

      },
      error: function(error) {
      }
    });

  }else {
  }

}


function resize_miniature_img() {
  jQuery(".vdf-listing-articles .article-miniature img").css({
    'width' : '100% ',
    'height' : '120px '
  });
}

function ajax_get_listing_articles(page_active) {

  jQuery(".vdf-rubriques-filter-by .vdf-ajax-loading").show();

  var selected_themes = "";
  jQuery(".filter-by-themes .filter-by-content-input .css-checkbox:checked").each(function() {
    var nid = jQuery(this).attr("id").split("_")[1];
    selected_themes += nid + "_";
  });

  var page_number = page_active;
  if(page_active == "undefined") {
    page_number = 1;
  }

  jQuery.ajax({
    type: 'GET',
    url: '/get/ajax/vdf-listing-articles',
    dataType: 'json',
    data: {
      'selected_themes': selected_themes,
      'rubrique_nid': jQuery("#vdf_listing_article_rubrique_nid").text(),
      'page_number': page_number,
      'caf_id': caf_id_cookie
    },
    success: function(result) {

      var output_articles = "";
      var output_pagination = "";

      if(result.no_theme == 1) {
        output_articles = "Vous devez selectionner au moins 1 thème.";
      }else if(result.listing_articles == "no_article") {
        output_articles = "Aucun article trouvé.";
      }else if(result.listing_articles.length != 0){
        for (var i=0; i < result.listing_articles.length; i++) {
          var article = result.listing_articles[i];
          var class_content = "article-content";
          if((i-1)%3 == 0)
            class_content = "article-content middle";
          output_articles += '<div class="'+class_content+' theme-'+article.field_vdf_articles_theme_value+'">';
          output_articles += '<div class="article-miniature"><a href="/' + article.link +'"><img src="'+article.miniature+'" alt="" /></a></div>';
          output_articles += '<div class="article-title"><a href="/' + article.link +'">'+article.title+'</a></div>';
          output_articles += '<div class="article-resume">'+article.field_vdf_articles_resume_value.substr(0, 200)+'... ';
          output_articles += '<a class="article-link" href="/' + article.link +'">Lire </a></div>';
          output_articles += '</div>';
        }

        output_pagination += '<div class="page first">Première</div>';
        output_pagination += '<div class="page prev" title="page précédente">&laquo;</div>';
        //si pagination supérieur à 7
        if (result.pagination > 6) {
          var between_is_on = false;
          if (result.page_active <= 3 ) {
            for (var i=1; i <= result.pagination; i++) {
              if(result.page_active == i) {
                output_pagination += '<div class="page active">'+ i + '</div>';
              } else if (i <= parseInt(result.page_active)+(5-parseInt(result.page_active))) {
                output_pagination += '<div class="page not-active">'+ i + '</div>';
              }
            }
            output_pagination += '<div class="page">...</div>';
          } else if (result.page_active <= parseInt(result.pagination)-3) {
            output_pagination += '<div class="page">...</div>';
            output_pagination += '<div class="page not-active">'+ (parseInt(result.page_active)-2) + '</div>';
            output_pagination += '<div class="page not-active">'+ (parseInt(result.page_active)-1) + '</div>';
            output_pagination += '<div class="page active">'+ result.page_active + '</div>';
            output_pagination += '<div class="page not-active">'+ (parseInt(result.page_active)+1) + '</div>';
            output_pagination += '<div class="page not-active">'+ (parseInt(result.page_active)+2) + '</div>';
            output_pagination += '<div class="page">...</div>';
          } else {
            output_pagination += '<div class="page">...</div>';
            for (var i=1; i <= result.pagination; i++) {
              if(result.page_active == i) {
                output_pagination += '<div class="page active">'+ i + '</div>';
              } else if (i >= parseInt(result.pagination)-3) {
                output_pagination += '<div class="page not-active">'+ i + '</div>';
              }
            }
          }

        }else {
          for (var i=1; i <= result.pagination; i++) {
            if(result.page_active == i) {
              output_pagination += '<div class="page active">'+ i + '</div>';
            } else {
              output_pagination += '<div class="page not-active">'+ i + '</div>';
            }
          }
        }
        output_pagination += '<div class="page next" title="page suivante">&raquo;</div>';
        output_pagination += '<div class="page last">Dernière</div><input type="hidden" value="'+result.pagination+'" />';
      }else if (result.page_active <= 1) {
        output_articles = "Aucun article trouvé !";
      }

      jQuery(".vdf-listing-articles").html(output_articles);
      jQuery(".vdf-pagination").html(output_pagination);
      resize_miniature_img();
      jQuery(".vdf-rubriques-filter-by .vdf-ajax-loading").hide();

      jQuery(".vdf-pagination .page.not-active").click(function() {
        var page_active = jQuery(this).text();
        ajax_get_listing_articles(page_active);
      });

      jQuery(".vdf-pagination .page.next").click(function() {
        var page_active = jQuery(".vdf-pagination .page.active").text();
        if(jQuery(".vdf-pagination .page.active").next().text() != jQuery(this).text()) {
          ajax_get_listing_articles(parseInt(page_active)+1);
        }

      });

      jQuery(".vdf-pagination .page.prev").click(function() {
        var page_active = jQuery(".vdf-pagination .page.active").text();
        if(jQuery(".vdf-pagination .page.active").prev().text() != jQuery(this).text()) {
          ajax_get_listing_articles(parseInt(page_active)-1);
        }
      });

      jQuery(".vdf-pagination .page.first").click(function() {
        ajax_get_listing_articles(1);
      });

      jQuery(".vdf-pagination .page.last").click(function() {
        ajax_get_listing_articles(jQuery(this).next().val());
      });

    },
    error: function() {
    }
  });

}

//fonction pour mettre à jour le nombre d'articles par thème
function ajax_nb_articles_by_theme() {

  //_pages_vies_de_famille_ajax_nb_articles_by_theme
  jQuery.ajax({
    type: 'GET',
    url: '/get/ajax/vdf-nb-articles-by-theme',
    dataType: 'json',
    data: {
      'rubrique_nid': jQuery("#vdf_listing_article_rubrique_nid").text(),
      'caf_id': caf_id_cookie
    },
    success: function(result) {
      if(result.length > 0) {
        for (var i=0; i < result.length; i++) {
          jQuery('.filter-by-content-input label[for="theme_' + result[i][0] + '"] .content-nb-articles').html("(" + result[i][1] + ")");
        }
      }
    },
    error: function() {
    }
  });
}

if (jQuery(".vdf-rubriques-filter-by").length > 0) {
  ajax_get_listing_articles(1);
  ajax_nb_articles_by_theme();
}

});
/***********************************************************************
**  FO-E21 RECHERCHE PAR MOT CLE
************************************************************************/

//chargement d'une autre page
function ajax_load_articles(current_page, nb_article, nb_article_par_page, mot_cle) {
	//mettre à jour la pagination
  showPagination(current_page, nb_article, nb_article_par_page, mot_cle)

  //affiche ajax loader
  showLoader('vdf-listing-articles', 'vdf-pagination');

  //envoie le numero de page et le mot de cle
  //status: "success", "notmodified", "error", "timeout", or "parsererror"
  jQuery(".vdf-listing-articles").load("/get/ajax/vdf-listing-articles-par-mot-cle/"
      + current_page + "/"
      + nb_article_par_page + "/"
      + encodeURIComponent(mot_cle), function(response, status, xhr){
        if(status != 'success'){
          jQuery('.vdf-pagination div').removeClass('active');
        }
        //ferme ajax loader
       hideLoader();
      });

}

/*
 * clickedNumber: le numero de page cliquee. Le numero qu'on voit sur la page, c'est toujours -1
 */
function showPagination(clickedNumber, nb_article, nb_article_par_page, mot_cle){

	  var divPagination = jQuery('.vdf-pagination');
	  //delete old
	  divPagination.html('');

	  //1 CALCULE DEBUT
	  var maxNbPaginationShow = 6; //ex: 1 2 3 . . . 7 8 9
	  var nbPagination = Math.ceil(nb_article / nb_article_par_page); //ex: 81 / 9 = 9 pagination
	  var page = 0;

	  //Calculer le numero de depart de la page ex: 1 2 3 4 5 6 7 8 9
	  //si je clique sur 4 il n'y a pas de point (ecart <= maxNbPagination)
	  //si je clique sur 2 il il y'aura des point (ecart > maxNbPagination)
	  if(clickedNumber == 0){
		  page = 0;
	  }
	  else if(nbPagination > maxNbPaginationShow){
		  var ecart = nbPagination - clickedNumber; //9-0:9, 9-5:4

		  if(ecart < maxNbPaginationShow){
			//Si le nombre cliquee est <6 on affiche sans point
			  page = nbPagination - maxNbPaginationShow;
		  }
		  else{
			//S'il est <6 on affiche avec les point
			  page = clickedNumber;
		  }
	  }
	  else{
		//Si le nombre pagination est egale au max
		  page = 0;
	  }

	  //2 AJOUT DE LA PAGINATIOIN
	  var pointVide = '<div class="pointVide">...</div>';
	  var linkString = '<div class="{0}" onclick="ajax_load_articles({1}, '+nb_article+', '+nb_article_par_page+', \'' + mot_cle + '\')">{2}</div>';
	  var linkPrev = '<div class="page prev" onclick="clickPrev('+nb_article+', '+nb_article_par_page+', \'' + mot_cle + '\')">«</div>';
	  var linkSuiv = '<div class="page next" onclick="clickNext('+nb_article+', '+nb_article_par_page+', \'' + mot_cle + '\')">»</div>';
	  var comptDebut = 1;
	  var link;

	  if(clickedNumber > 0){
    	  //Affiche 3 chiffre ... 3 chiffre
    	  //First part premiere et prev toujours à la page 0
    	  link = String.format(linkString, 'page first', 0, 'Première');
    	  divPagination.append(link);
    	  divPagination.append(linkPrev);
	  }

	  //page cliquee = 1 donc 1-1=0,  0*3 = 0. Donc du 0 ajoute 3 dans sql limit
      //page cliquee = 2 donc 2-1=1,  1*3 = 0. Donc du 3 ajoute 3 dans sql limit
	  for(pager=(page * nb_article_par_page); pager < nb_article; pager += nb_article_par_page){

		  if(comptDebut <=3 || page >= (nbPagination - 3) ){
			  //affiche les 3 premieres et 3 dernieres chiffre
			  if(page == clickedNumber){
				  link = String.format(linkString, 'page active', page, page+1);
			  }
			  else{
				  link = String.format(linkString, 'page', page, page+1);
			  }

    		  divPagination.append(link);
		  }
		  else{
			  //seulement le 4ieme est les point
			  if(comptDebut == 4){
				  divPagination.append(pointVide);
			  }
		  }

		  page++;
		  comptDebut++;
	  }

	  if(clickedNumber < nbPagination-1){
    	  //third part derniere et next
    	  divPagination.append(linkSuiv);
    	  link = String.format(linkString, 'page last', nbPagination-1, 'Dernière');
    	  divPagination.append(link);
	  }

}

//Quand on clique on envoie toujours -1 à ajax_load
function clickNext(nb_article, nb_article_par_page, mot_cle){
	var activeItem = jQuery('.vdf-pagination .active');
	var activeItemNum = parseInt(activeItem.text());
	var nbPagination = nb_article / nb_article_par_page;

	if(activeItemNum < nbPagination){
		ajax_load_articles(activeItemNum, nb_article, nb_article_par_page, mot_cle)
	}
}

//Quand on clique on envoie toujours -1 à ajax_load
function clickPrev(nb_article, nb_article_par_page, mot_cle){
	var activeItem = jQuery('.vdf-pagination .active');
	var activeItemNum = parseInt(activeItem.text());
	var nbPagination = nb_article / nb_article_par_page;

	if(activeItemNum > 1){
		ajax_load_articles(activeItemNum-2, nb_article, nb_article_par_page, mot_cle)
	}
}


//Afficher le loader dans le cadre du div passé en paramètre
//From rangeY1 to rangeY2
function showLoader(rangeY1, rangeY2){
  var rangeY1 = jQuery('.' + rangeY1);
  var rangeY2 = jQuery('.' + rangeY2);

  //calcule la taille de la fenetre ajax
  var topY1 = rangeY1.offset().top;
  var topY2 = rangeY2.offset().top;

  var widthAjaxLoader = rangeY1.width();
  var heightAjaxLoader = topY2 - topY1 + rangeY2.height() + 20;

  //calcule l'endroit de l'image loader
  var marginTopImage = (heightAjaxLoader - 40) / 2;

  if(heightAjaxLoader < 150)
    marginTopImage = 2;


  //sites/all/themes/caf/img/ajax_loading_vdf.gif
  //sites/all/themes/caf/img/data/new_logo.jpg
  rangeY1.prepend('<div class="vdf_ajax_loading"> <img class="vdf_ajax_loading_img" /> </div>');

  //css du loader
  var ajaxLoader = jQuery('.vdf_ajax_loading');
  ajaxLoader.css("position", "absolute");
  ajaxLoader.css("background-color", "rgba(202, 202, 202, 0.5)");
  ajaxLoader.css("text-align", "center");
  ajaxLoader.css("margin", "-10px 0 0 -15px");
  ajaxLoader.css("width", widthAjaxLoader + 30);
  ajaxLoader.css("height", heightAjaxLoader);

  //css de l'image loader
  var ajaxImg = jQuery('.vdf_ajax_loading_img');
  ajaxImg.attr("src", "/sites/all/themes/caf/img/ajax_loading_vdf.gif");
  ajaxImg.attr("alt", "");
  ajaxImg.css("margin-top", marginTopImage);
  ajaxImg.css("max-height", 60);
  ajaxImg.css("min-height", 60);

  ajaxLoader.show();
}

//Fermer la page du
function hideLoader(){
  jQuery('.vdf_ajax_loading').remove();
}

/*********************END RECHERCHE PAR MOT CLE*********************************/


/***********************************************************************
**  LIBRARY COMMUNE
************************************************************************/


String.format = function() {
    // la chaine est toujours le premier arg
    var theString = arguments[0];
    if(theString != undefined ){
	    for (var i = 1; i < arguments.length; i++) {
	        // "gm" = cherche global avec multiligne
	        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
	        theString = theString.replace(regEx, arguments[i]);
	    }
    }
    return theString;
}


/*********************END LIBRARY COMMUNE*********************************/

/********** NEWSLETTER *****************/

function ajax_subscription_newsletter(acc) {

	// La newsletter peut apparaitre, dans un cas, deux fois  sur la même page.
	// Il faut donc faire la distinction grace à un booleen pour savoir quelle valeur récupérer.
	  if (acc)  {
      var email = jQuery('input.text.pave').val();
      jQuery('div.pave_newsletter_waiting').show();
      jQuery('.vdf_pave_newsletter').css("height","85px");
	  }
	  else {
      var email = jQuery('input.text.bloc').val();
      jQuery('div.bloc_newsletter_waiting').show();
	  }

      jQuery.ajax({
        type: 'GET',
        url: '/vies-de-famille/newsletter',
        dataType: 'json',
        data: {
          'email': email
        },
        success: function(result) {

         // Pop-up OK
        alert(result['resultat']);
        css_ajax_subscription_newsletter_ended();
        },
        error: function() {

		// Pop-up NON
		alert("Un problème est survenu");
    css_ajax_subscription_newsletter_ended();
        }
      });
}

function css_ajax_subscription_newsletter_ended() {
  jQuery('.pave_newsletter_waiting').hide();
  jQuery('.vdf_pave_newsletter').css("height","60px");
  jQuery('.bloc_newsletter_waiting').hide();
}

/********** </NEWSLETTER> **************/

// Simulateur AF
(function($) {

  $(document).ready(function() {

    function _calculateAge(birthday) { // birthday is a date

      var incIfJuilletPass = 0;
      if (parseInt(birthday.getMonth()) > 5 ) {
        incIfJuilletPass = 1;
      }

      return (2015 - (parseInt(birthday.getFullYear()) - parseInt(incIfJuilletPass)));
    }

    function isNumeric(obj) {
      return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
    }

    if ($("#simu-af-all-content").length > 0) {

      $('#simu-af-all-content .simu-af-faq').tipsy({
        gravity: 'se',
        delayIn: 200,
        live: true,
        offset: -25,
        //delayOut: 1000,
        html: true,
        opacity: 1});

      $('#simu-af-all-content .simu-af-faq').click(function() {
        var text = $(this).text();
        if (text.length > 0)
          alert(text);
      });

      $('#simu-af-nb-enfant').keydown(function(e) {
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
          } else {
            e.preventDefault();
          }
        }
      });

      $('#simu-af-nb-enfant').keyup(function(e) {
        if($('#simu-af-nb-enfant').val() > 8)
          $('#simu-af-nb-enfant').val(8);
        else if($('#simu-af-nb-enfant').val() < 0)
          $('#simu-af-nb-enfant').val(0);
        _simu_nb_enfants_changed($('#simu-af-nb-enfant').val());
      });

      $('#simu-af-nb-enfant').change(function(e) {
        if($('#simu-af-nb-enfant').val() > 8)
          $('#simu-af-nb-enfant').val(8);
        else if($('#simu-af-nb-enfant').val() < 0)
          $('#simu-af-nb-enfant').val(0);
        _simu_nb_enfants_changed($('#simu-af-nb-enfant').val());
      });

      $("#simu-af-btn-submit").click(function() {
        // Chargement
        $(".simu-af-ajax-loading").show();
        $(this).hide();

        //check montant ressources
        var simuAfMontant = $("#simu-af-ressources-imposables").val().replace(/ /g, '').replace(",", ".");

        if (simuAfMontant.length <= 0 || !isNumeric(simuAfMontant) || (isNumeric(simuAfMontant) && parseInt(simuAfMontant) < 0)) {
          //erreur montant
          $("#simu-af-ressources-imposables").addClass('has-error');
          $("#simu-af-ressources-imposables-error").show();
          simuAfMontant = false;
        }else {
          $("#simu-af-ressources-imposables").removeClass('has-error');
          $("#simu-af-ressources-imposables-error").hide();
        }

        var simuAgeEnfantError = true;
        var simuAgeList = [];
        //check date enfant + calcul de l'age à partir du 1er juillet
        $("#simu-af-list-enfant .simu-af-enfant-date-content").each(function() {

          var enfantNum = $(this).attr("id").replace("simu-af-enfant-num-", "");

          var date_born_val = $(this).find("#simu-af-enfant-num-" + enfantNum + "-date").val();
          var date_born = date_born_val.split("/");

          //1ere verif date : ok
          if (typeof(date_born[0]) != "undefined" && typeof(date_born[1]) != "undefined" && typeof(date_born[2]) != "undefined"
             && date_born_val.length == 10) {

            var date_check = new Date(date_born[2], (date_born[1]-1), date_born[0]);

            //2ere verif date : ok
            if (parseInt(date_check.getDate()) == parseInt(date_born[0], 10)
                && (parseInt(date_check.getMonth())+1) == parseInt(date_born[1], 10)
                && parseInt(date_check.getFullYear()) == parseInt(date_born[2])) {

              $("#simu-af-enfant-num-" + enfantNum + "-date-error").hide();
              $("#simu-af-enfant-num-" + enfantNum + "-date").removeClass('has-error');

              //check l'age de l'enfant
              simuAgeList.push(date_born[0] + "/" + date_born[1] + "/" + date_born[2]);
              simuAgeEnfantError = false;

            }else {
              $("#simu-af-enfant-num-" + enfantNum + "-date").addClass('has-error');
              $("#simu-af-enfant-num-" + enfantNum + "-date-error").show();
              simuAgeEnfantError = true;
            }
          }else {
            $("#simu-af-enfant-num-" + enfantNum + "-date").addClass('has-error');
            $("#simu-af-enfant-num-"+enfantNum+"-date-error").show();
            simuAgeEnfantError = true;
          }

        });

        //check DOM/METROPOLE
        var isDom = ($('#simu-af-lieu-metropole:checked').val() == "Res") ? "R" : "D";

        if ((simuAfMontant == 0 || simuAfMontant != false) && simuAgeEnfantError == false) {
          $.ajax({
            url: '/get/ajax/caf-simu-af-result',
            type: 'GET',
            dataType: 'json',
            data: {simuAfMontant: simuAfMontant, simuAgeList: simuAgeList, isDom: isDom},
            success: function(result) {
              if (typeof(result.result) != "undefined") {
                $(".simu-af-result-content #simu-af-result").html(result.result);
                $(".simu-af-ajax-loading").hide();
                $(".simu-af-result-content").show();
                $("#simu-af-btn-submit").show();
              }else {
                $(".simu-af-result-content #simu-af-result").html()
                $(".simu-af-ajax-loading").hide();
                $(".simu-af-result-content").hide();
                $("#simu-af-btn-submit").show();
              }
            },
            error: function() {
              console.log("error");
              $(".simu-af-ajax-loading").hide();
              $(".simu-af-result-content #simu-af-result").html();
              $(".simu-af-result-content").hide();
              $("#simu-af-btn-submit").show();
            }
          });

        }else {
          $(this).show();
          $(".simu-af-ajax-loading").hide();
        }


      $('#simu-af-content-form .has-error').focus(function() {
        var id = $(this).attr("id");
        $("#"+id+"-error").slideUp('400');
        $(this).removeClass('has-error');
      });
    });

	  function _simu_nb_enfants_changed(enfants) {
        var html = "";
        var nb_enfant = parseInt(enfants);
        $('#simu-af-nb-enfant-error').hide();
        if(!isNumeric(enfants)) {
          $('#simu-af-list-enfant').empty();
          $('#simu-af-nb-enfant-error').show();
          return;
        }
        var nb_enfant = parseInt(enfants);
        if(nb_enfant > 8) nb_enfant = 8;
        else if (nb_enfant < 0) nb_enfant = 0;
        if (parseInt(nb_enfant) > 0) {
          for(var i=1 ; i <= nb_enfant; i++) {

            var str_ieme = (i == 1) ? 'er' : 'ème';

            html += '<div class="simu-af-enfant-date-content" id="simu-af-enfant-num-' + i + '">'
                  + '<label class="simu-af-label-nb-enfant" for="simu-nb-enfant">'
                  +   'Date de naissance du ' + i + str_ieme + ' enfant  : '
                  + '<span class="form-required" title="Ce champ est obligatoire.">*</span></label>';

            //jour
            html += '<div class="simu-af-enfant-date-picker-content">'
                    + '<input type="text" id="simu-af-enfant-num-' + i + '-date" name="simu-af-enfant-num-' + i + '-date" value="" placeholder="JJ/MM/AAAA" maxlength="10" class="date-pick form-text">'

                 + '</div>';

            //message d'erreur
            html += '<div class="messages error" id="simu-af-enfant-num-'+i+'-date-error" style="display: none">'
                  +   'La date saisie n\'est pas correcte.'
                  + '</div>';


            html += '</div>';

          }

          html += '</div>';


          $('#simu-af-list-enfant').html(html);
          $('#simu-af-list-enfant').show('fast');

		  $('#simu-af-btn-submit').show();

          $('.simu-af-enfant-date-picker-content .date-pick').datepicker({
            minDate: "-22Y",
            maxDate: "0Y",
            yearRange: "-21:+0",
            showOn: "both",
            buttonImage: "/sites/all/themes/caf/img/skin/calendar1.png",
            buttonImageOnly: false,
            buttonText: "Choisir une date",
            changeMonth: true,
            changeYear: true,
            showAnim: "slideDown",
            dateFormat: "dd/mm/yy"
          });
        }else if(parseInt(nb_enfant) == 0) {
          $('#simu-af-list-enfant').empty();
          $('#simu-af-btn-submit').hide();
        }else {
          $('#simu-af-btn-submit').hide();
          $('#simu-af-list-enfant').hide();
          $('#simu-af-list-enfant').html('');
        }
      }
    }
  });
})(jQuery);

;
/*-------------------------------------------------------------------- 
 * JQuery Plugin: "EqualHeights" & "EqualWidths"
 * by:	Scott Jehl, Todd Parker, Maggie Costello Wachs (https://www.filamentgroup.com)
 *
 * Copyright (c) 2007 Filament Group
 * Licensed under GPL (https://www.opensource.org/licenses/gpl-license.php)
 *
 * Description: Compares the heights or widths of the top-level children of a provided element 
 		and sets their min-height to the tallest height (or width to widest width). Sets in em units 
 		by default if pxToEm() method is available.
 * Dependencies: jQuery library, pxToEm method	(article: https://www.filamentgroup.com/lab/retaining_scalable_interfaces_with_pixel_to_em_conversion/)							  
 * Usage Example: jQuery(element).equalHeights();
   						      Optional: to set min-height in px, pass a true argument: jQuery(element).equalHeights(true);
 * Version: 2.0, 07.24.2008
 * Changelog:
 *  08.02.2007 initial Version 1.0
 *  07.24.2008 v 2.0 - added support for widths
--------------------------------------------------------------------*/

jQuery.fn.equalHeights = function(px) {
	jQuery(this).each(function(){
		var currentTallest = 0;
		jQuery(this).children().each(function(i){
			if (jQuery(this).height() > currentTallest) { currentTallest = jQuery(this).height(); }
		});
		if (!px || !Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
		// for ie6, set height since min-height isn't supported
		if (jQuery.browser.msie && jQuery.browser.version == 6.0) { jQuery(this).children().css({'height': currentTallest}); }
		jQuery(this).children().css({'min-height': currentTallest}); 
	});
	return this;
};

// just in case you need it...
jQuery.fn.equalWidths = function(px) {
	jQuery(this).each(function(){
		var currentWidest = 0;
		jQuery(this).children().each(function(i){
				if(jQuery(this).width() > currentWidest) { currentWidest = jQuery(this).width(); }
		});
		if(!px || !Number.prototype.pxToEm) currentWidest = currentWidest.pxToEm(); //use ems unless px is specified
		// for ie6, set width since min-width isn't supported
		if (jQuery.browser.msie && jQuery.browser.version == 6.0) { jQuery(this).children().css({'width': currentWidest}); }
		jQuery(this).children().css({'min-width': currentWidest}); 
	});
	return this;
};


/*-------------------------------------------------------------------- 
 * javascript method: "pxToEm"
 * by:
   Scott Jehl (scott@filamentgroup.com) 
   Maggie Wachs (maggie@filamentgroup.com)
   https://www.filamentgroup.com
 *
 * Copyright (c) 2008 Filament Group
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 *
 * Description: Extends the native Number and String objects with pxToEm method. pxToEm converts a pixel value to ems depending on inherited font size.  
 * Article: https://www.filamentgroup.com/lab/retaining_scalable_interfaces_with_pixel_to_em_conversion/
 * Demo: https://www.filamentgroup.com/examples/pxToEm/	 	
 *							
 * Options:  	 								
 		scope: string or jQuery selector for font-size scoping
 		reverse: Boolean, true reverses the conversion to em-px
 * Dependencies: jQuery library						  
 * Usage Example: myPixelValue.pxToEm(); or myPixelValue.pxToEm({'scope':'#navigation', reverse: true});
 *
 * Version: 2.0, 08.01.2008 
 * Changelog:
 *		08.02.2007 initial Version 1.0
 *		08.01.2008 - fixed font-size calculation for IE
--------------------------------------------------------------------*/

Number.prototype.pxToEm = String.prototype.pxToEm = function(settings){
	//set defaults
	settings = jQuery.extend({
		scope: 'body',
		reverse: false
	}, settings);
	
	var pxVal = (this == '') ? 0 : parseFloat(this);
	var scopeVal;
	var getWindowWidth = function(){
		var de = document.documentElement;
		return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
	};	
	
	/* When a percentage-based font-size is set on the body, IE returns that percent of the window width as the font-size. 
		For example, if the body font-size is 62.5% and the window width is 1000px, IE will return 625px as the font-size. 	
		When this happens, we calculate the correct body font-size (%) and multiply it by 16 (the standard browser font size) 
		to get an accurate em value. */
				
	if (settings.scope == 'body' && jQuery.browser.msie && (parseFloat(jQuery('body').css('font-size')) / getWindowWidth()).toFixed(1) > 0.0) {
		var calcFontSize = function(){		
			return (parseFloat(jQuery('body').css('font-size'))/getWindowWidth()).toFixed(3) * 16;
		};
		scopeVal = calcFontSize();
	}
	else { scopeVal = parseFloat(jQuery(settings.scope).css("font-size")); };
			
	var result = (settings.reverse == true) ? (pxVal * scopeVal).toFixed(2) + 'px' : (pxVal / scopeVal).toFixed(2) + 'em';
	return result;
};;
/**
 * jQuery Masonry v2.0.110927
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * https://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2011 David DeSandro
 */
(function(a,b,c){var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()};var f=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[],this.reloadItems();var d=this.element[0].style;this.originalStyle={};for(var e=0,g=f.length;e<g;e++){var h=f[e];this.originalStyle[h]=d[h]||""}this.element.css({position:"relative"}),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={};var i=b(document.createElement("div"));this.element.prepend(i),this.offset.y=Math.round(i.position().top),this.options.isRTL?(i.css({"float":"right",display:"inline-block"}),this.offset.x=Math.round(this.element.outerWidth()-i.position().left)):this.offset.x=Math.round(i.position().left),i.remove();var j=this;setTimeout(function(){j.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){j.resize()})},_init:function(a){this._getColumns("masonry"),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,c){var d,e,f,g,h,i;for(var j=0,k=a.length;j<k;j++){d=b(a[j]),e=Math.ceil(d.outerWidth(!0)/this.columnWidth),e=Math.min(e,this.cols);if(e===1)this._placeBrick(d,this.colYs);else{f=this.cols+1-e,g=[];for(i=0;i<f;i++)h=this.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);this._placeBrick(d,g)}}var l={};l.height=Math.max.apply(Math,this.colYs)-this.offset.y;if(this.options.isFitWidth){var m=0,j=this.cols;while(--j){if(this.colYs[j]!==this.offset.y)break;m++}l.width=(this.cols-m)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:l});var n=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",o=this.options.animationOptions,p;for(j=0,k=this.styleQueue.length;j<k;j++)p=this.styleQueue[j],p.$el[n](p.style,o);this.styleQueue=[],c&&c.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g={top:c};g[this.horizontalDirection]=this.columnWidth*d+this.offset.x,this.styleQueue.push({$el:a,style:g});var h=c+a.outerHeight(!0),i=this.cols+1-f;for(e=0;e<i;e++)this.colYs[d+e]=h},resize:function(){var a=this.cols;this._getColumns("masonry"),this.cols!==a&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(this.offset.y);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d=0,e=f.length;d<e;d++){var g=f[d];c[g]=this.originalStyle[g]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){--e<=0&&this.src!==f&&(setTimeout(g),d.unbind("load error",h))}function g(){a.call(b,d)}var b=this,d=b.find("img").add(b.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e||g(),d.bind("load error",h).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=f,this.src=a}});return b};var g=function(a){this.console&&console.error(a)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d)g("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(d[a])||a.charAt(0)==="_"){g("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)}})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);
;
/**
 * Centre les blocs prestations lorsque la fenetre du naviagateur
 * devient trop petite pour en afficher 2 sur une même ligne
 */
function block_presation_adaptable() {
	var windowWidth = jQuery(window).width()
	
	// Centrage des blocs en mobile et tablette lorsque 2 blocs ne tiennent plus
	// sur une ligne
	if (windowWidth < 862) {
		jQuery('div.block-type-03').height('100%');
		jQuery('div.block-type-03').width('75%');
		jQuery('div.block-type-03').css('margin', '');
		jQuery('div.block-type-03').css('margin-left', 'auto');
		jQuery('div.block-type-03').css('margin-right', 'auto');
		jQuery('div.block-type-03').css('float', 'none');
	}
	else {
		jQuery('div.block-type-03').width('48%');
		jQuery('div.block-type-03').height('auto');
		jQuery('div.block-type-03').css('margin-left', '');
		jQuery('div.block-type-03').css('margin-right', '');
		jQuery('div.block-type-03').css('float', 'left');
		adjustHeightOfAllPrestations();
	}
}

/**
 * Ajuste la hauteur des blocs
 * Sur une même ligne, les 2 blocs doivent avoir la même hauteur
 */
function adjustHeightOfAllPrestations() {
	var j = 0;
	var line = 0;
	
	jQuery('div.block-type-03').each(function(index) {
		if (j % 2 == 0) {
			line++;
	    }
		jQuery(this).addClass('line' + line)
		j++;
	});
	
	for (i = 1; i <= line; i++) {
		var maxHeight = 0;
		jQuery('div.line' + i).each(function(index) {
			
			// Récupération de la hauteur du texte pour ensuite baser
			// la hauteur de la div sur celle ci
			var currentHeight = jQuery(this).find('div.inner').height();
			if (currentHeight > maxHeight) {
				maxHeight = currentHeight;
			}
		});
		if (!(jQuery.browser.msie && jQuery.browser.version == 8))
		jQuery('div.line' + i).height(maxHeight + 20);
	}
}

if (jQuery.browser.msie && jQuery.browser.version == 8 || jQuery.browser.version == 7  ) {
    jQuery(window).bind('load',function() {
		block_presation_adaptable();
	});
}
else{
	jQuery(document).ready(function() {
		block_presation_adaptable();
	});	

}

jQuery(window).bind('resize', function() { 
	block_presation_adaptable(); 
}); 
;
/**
 * Steps:
 *
 * 1. Output a drupal select box by default so that if js is turned off the user would have a normal dropdown + submit form
 * 2. Give drupal a class of "jquery_dropdown"  
 * 3. Have jquery convert it to a hidden input and hide the submit
 * 4. Have jquery grab all the key/values from the select build the css/html markup that 'looks' like a dropdown
 * 5. Add a listener so when an item gets selected and populate the hidden value and submit the form to achieve the same functionality
 *
 **/
(function ($) { 
$(document).ready(function() {
  //this does the actual css/html replacement of the select dropdown
  $("select.jquery_dropdown").each(function(){
    $(this).load_jquery_dropdown();//load jquery dropdowns
  });
});

/**
 * Load jquery dropdown for a select
 *
 * This is a re-usable function for select elements that don't have the .jquery_dropdown class
 */
$.fn.load_jquery_dropdown = function(options) {
  if (!$(this).html()) return;
    
  $(this).hide();//hide this select

  //hide elements with jquery_dropdown class (in case you want to hide the submit button for instance)
  //for a better hide we have included .jquery_dropdown { display: none; } in the default css which keeps
  //the select from "flashing" on and off, the noscript tag inserted in hook_footer() keeps it from hiding
  //those elements when javascript is disabled to make it degrade gracefully
  $(".jquery_dropdown").hide();
  
  var select_id = $(this).attr('id');  
  var select_name = $(this).attr('name');
  var select_name_nice = select_name.replace(/\[[^\"]+/,'');//strip out []
  var select_default_value = $(this).val();
  var select_default_text = $(this).find('option[value='+select_default_value+']').text();
  
  var select_values = new Array();
  var c = 0;
  
  var output = '<div class="jquery_dropdown_container jquery_dropdown_'+select_id+'">';
  
  var is_jumpdown = ($(this).attr('class').match("jquery_dropdown_jump")) ? 1 : 0;//for adding jump class if applicable
    
  //start with the first option
  output += '<div class="jquery_dropdown_header jquery_dropdown_header_'+select_id+'">'+$(this).find("option:first").text()+'</div>';
  output += '<ul class="jquery_dropdown_list '+((is_jumpdown) ? 'jquery_dropdown_jump' : '') +'">';//start unordered list
  
  // Ajouter l'option télécharger un formulaire
  $('#edit-jump').append($("<option></option>").attr("value","/aides-et-services/les-services-en-ligne/telecharger-un-formulaire").text("Télécharger un formulaire")); 
  //build <ul> list here
  $(this).find("option").each(function(){
    output += '<li><a href="#" class="'+select_id+'" rel="'+$(this).val()+'">'+$(this).text()+'</a></li>';
      
    c++;
  });
    
  output += '</ul></div>';
    
  $(this).after(output);
  
  //this is the click event for when you click the fake select, it shows the options below
  $("div.jquery_dropdown_header_"+select_id).click(function(){
    if ($(this).parent("div.jquery_dropdown_container").find("ul.jquery_dropdown_list").css('display') == 'block') {
      $(this).parent("div.jquery_dropdown_container").find("ul.jquery_dropdown_list").attr('style', 'display:hidden');
    }
    else {
    	  $(this).parent("div.jquery_dropdown_container").find("ul.jquery_dropdown_list").attr('style', 'display:block');	
	      var first_value = $(this).parent("div.jquery_dropdown_container").find("ul.jquery_dropdown_list").find('li:first').text();
	      if ( ((first_value == '- Choisir -' || first_value == '') && $(this).text() == '- Choisir -') || ((first_value == '- Choisir -' || first_value == '')  && $(this).text() == '- Choisir -' ) ){
	    	$(this).parent("div.jquery_dropdown_container").find("ul.jquery_dropdown_list").find('li:first').text('');
	  	  }else{
	  		  var first_li = select_id == 'edit-jump' ? '- Choisir -' : '- Choisir -';
	  		  $(this).parent("div.jquery_dropdown_container").find("ul.jquery_dropdown_list").find('li:first').text(first_li);
	  	  }
	     	      
    }

  
  });
  
  //this is the event for when you select a fake option
  $("ul.jquery_dropdown_list li a").click(function(){
    $(this).parent("li").parent('ul').parent("div.jquery_dropdown_container").find("div.jquery_dropdown_header").text($(this).text());
    $(this).parent("li").parent('ul').parent("div.jquery_dropdown_container").find("ul.jquery_dropdown_list").hide();

    $("#"+$(this).attr('class')).val($(this).attr('rel'));//set value to select
   
    $(this).trigger("jquery_dropdown_list_refreshed");//trigger the onchange event of our drop down when we click a fake option
    $('#'+select_id).trigger("onchange");    
 
    return false;
  });
 
  //hide when mouse out
  $("ul.jquery_dropdown_list").hover(function(){$(this).show();}, function(){
    $(this).hide();
  });
  
  $("div.jquery_dropdown_header_"+select_id).hover(function(){}, function(){
	 $(this).parent("div.jquery_dropdown_container").find("ul.jquery_dropdown_list").hide();
  });

  //set initial header value
 // $("div.jquery_dropdown_header_"+select_id).text(select_default_text);

};

}(jQuery));
;
/**
 * This uses some clever logic to find the parent form of the select and submit the button
 */

(function ($) { 

$(document).ready(function() {
  
  $("ul.jquery_dropdown_jump li a").click(function(){
    if ($(this).attr('rel') == '')
    	return;//don't jump if no value
    
    //find the parent form of this jump menu
    var parent_form = $(this).parents().filter("form");
   
    //submit the form by clicking the submit button 
    parent_form.find("input.form-submit").click();
  });

});
}(jQuery));;
/**
* DD_belatedPNG: Adds IE6 support: PNG images for CSS background-image and HTML <IMG/>.
* Author: Drew Diller
* Email: drew.diller@gmail.com
* URL: https://www.dillerdesign.com/experiment/DD_belatedPNG/
* Version: 0.0.8a
* Licensed under the MIT License: https://dillerdesign.com/experiment/DD_belatedPNG/#license
*
* Example usage:
* DD_belatedPNG.fix('.png_bg'); // argument is a CSS selector
* DD_belatedPNG.fixPng( someNode ); // argument is an HTMLDomElement
**/
var DD_belatedPNG={ns:"DD_belatedPNG",imgSize:{},delay:10,nodesFixed:0,createVmlNameSpace:function(){if(document.namespaces&&!document.namespaces[this.ns]){document.namespaces.add(this.ns,"urn:schemas-microsoft-com:vml")}},createVmlStyleSheet:function(){var b,a;b=document.createElement("style");b.setAttribute("media","screen");doc = document.documentElement.firstElementChild || document.documentElement.firstChild; doc.insertBefore(b,document.documentElement.firstChild.firstChild);if(b.styleSheet){try{b=b.styleSheet;b.addRule(this.ns+"\\:*","{behavior:url(#default#VML)}");b.addRule(this.ns+"\\:shape","position:absolute;");b.addRule("img."+this.ns+"_sizeFinder","behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;");this.screenStyleSheet=b;a=document.createElement("style");a.setAttribute("media","print");doc = document.documentElement.firstElementChild || document.documentElement.firstChild; doc.insertBefore(a,document.documentElement.firstChild.firstChild);a=a.styleSheet;a.addRule(this.ns+"\\:*","{display: none !important;}");a.addRule("img."+this.ns+"_sizeFinder","{display: none !important;}")}catch(err){}}},readPropertyChange:function(){var b,c,a;b=event.srcElement;if(!b.vmlInitiated){return}if(event.propertyName.search("background")!=-1||event.propertyName.search("border")!=-1){DD_belatedPNG.applyVML(b)}if(event.propertyName=="style.display"){c=(b.currentStyle.display=="none")?"none":"block";for(a in b.vml){if(b.vml.hasOwnProperty(a)){b.vml[a].shape.style.display=c}}}if(event.propertyName.search("filter")!=-1){DD_belatedPNG.vmlOpacity(b)}},vmlOpacity:function(b){if(b.currentStyle.filter.search("lpha")!=-1){var a=b.currentStyle.filter;a=parseInt(a.substring(a.lastIndexOf("=")+1,a.lastIndexOf(")")),10)/100;b.vml.color.shape.style.filter=b.currentStyle.filter;b.vml.image.fill.opacity=a}},handlePseudoHover:function(a){setTimeout(function(){DD_belatedPNG.applyVML(a)},1)},fix:function(a){if(this.screenStyleSheet){var c,b;c=a.split(",");for(b=0;b<c.length;b++){this.screenStyleSheet.addRule(c[b],"behavior:expression(DD_belatedPNG.fixPng(this))")}}},applyVML:function(a){a.runtimeStyle.cssText="";this.vmlFill(a);this.vmlOffsets(a);this.vmlOpacity(a);if(a.isImg){this.copyImageBorders(a)}},attachHandlers:function(i){var d,c,g,e,b,f;d=this;c={resize:"vmlOffsets",move:"vmlOffsets"};if(i.nodeName=="A"){e={mouseleave:"handlePseudoHover",mouseenter:"handlePseudoHover",focus:"handlePseudoHover",blur:"handlePseudoHover"};for(b in e){if(e.hasOwnProperty(b)){c[b]=e[b]}}}for(f in c){if(c.hasOwnProperty(f)){g=function(){d[c[f]](i)};i.attachEvent("on"+f,g)}}i.attachEvent("onpropertychange",this.readPropertyChange)},giveLayout:function(a){a.style.zoom=1;if(a.currentStyle.position=="static"){a.style.position="relative"}},copyImageBorders:function(b){var c,a;c={borderStyle:true,borderWidth:true,borderColor:true};for(a in c){if(c.hasOwnProperty(a)){b.vml.color.shape.style[a]=b.currentStyle[a]}}},vmlFill:function(e){if(!e.currentStyle){return}else{var d,f,g,b,a,c;d=e.currentStyle}for(b in e.vml){if(e.vml.hasOwnProperty(b)){e.vml[b].shape.style.zIndex=d.zIndex}}e.runtimeStyle.backgroundColor="";e.runtimeStyle.backgroundImage="";f=true;if(d.backgroundImage!="none"||e.isImg){if(!e.isImg){e.vmlBg=d.backgroundImage;e.vmlBg=e.vmlBg.substr(5,e.vmlBg.lastIndexOf('")')-5)}else{e.vmlBg=e.src}g=this;if(!g.imgSize[e.vmlBg]){a=document.createElement("img");g.imgSize[e.vmlBg]=a;a.className=g.ns+"_sizeFinder";a.runtimeStyle.cssText="behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;";c=function(){this.width=this.offsetWidth;this.height=this.offsetHeight;g.vmlOffsets(e)};a.attachEvent("onload",c);a.src=e.vmlBg;a.removeAttribute("width");a.removeAttribute("height");document.body.insertBefore(a,document.body.firstChild)}e.vml.image.fill.src=e.vmlBg;f=false}e.vml.image.fill.on=!f;e.vml.image.fill.color="none";e.vml.color.shape.style.backgroundColor=d.backgroundColor;e.runtimeStyle.backgroundImage="none";e.runtimeStyle.backgroundColor="transparent"},vmlOffsets:function(d){var h,n,a,e,g,m,f,l,j,i,k;h=d.currentStyle;n={W:d.clientWidth+1,H:d.clientHeight+1,w:this.imgSize[d.vmlBg].width,h:this.imgSize[d.vmlBg].height,L:d.offsetLeft,T:d.offsetTop,bLW:d.clientLeft,bTW:d.clientTop};a=(n.L+n.bLW==1)?1:0;e=function(b,p,q,c,s,u){b.coordsize=c+","+s;b.coordorigin=u+","+u;b.path="m0,0l"+c+",0l"+c+","+s+"l0,"+s+" xe";b.style.width=c+"px";b.style.height=s+"px";b.style.left=p+"px";b.style.top=q+"px"};e(d.vml.color.shape,(n.L+(d.isImg?0:n.bLW)),(n.T+(d.isImg?0:n.bTW)),(n.W-1),(n.H-1),0);e(d.vml.image.shape,(n.L+n.bLW),(n.T+n.bTW),(n.W),(n.H),1);g={X:0,Y:0};if(d.isImg){g.X=parseInt(h.paddingLeft,10)+1;g.Y=parseInt(h.paddingTop,10)+1}else{for(j in g){if(g.hasOwnProperty(j)){this.figurePercentage(g,n,j,h["backgroundPosition"+j])}}}d.vml.image.fill.position=(g.X/n.W)+","+(g.Y/n.H);m=h.backgroundRepeat;f={T:1,R:n.W+a,B:n.H,L:1+a};l={X:{b1:"L",b2:"R",d:"W"},Y:{b1:"T",b2:"B",d:"H"}};if(m!="repeat"||d.isImg){i={T:(g.Y),R:(g.X+n.w),B:(g.Y+n.h),L:(g.X)};if(m.search("repeat-")!=-1){k=m.split("repeat-")[1].toUpperCase();i[l[k].b1]=1;i[l[k].b2]=n[l[k].d]}if(i.B>n.H){i.B=n.H}d.vml.image.shape.style.clip="rect("+i.T+"px "+(i.R+a)+"px "+i.B+"px "+(i.L+a)+"px)"}else{d.vml.image.shape.style.clip="rect("+f.T+"px "+f.R+"px "+f.B+"px "+f.L+"px)"}},figurePercentage:function(d,c,f,a){var b,e;e=true;b=(f=="X");switch(a){case"left":case"top":d[f]=0;break;case"center":d[f]=0.5;break;case"right":case"bottom":d[f]=1;break;default:if(a.search("%")!=-1){d[f]=parseInt(a,10)/100}else{e=false}}d[f]=Math.ceil(e?((c[b?"W":"H"]*d[f])-(c[b?"w":"h"]*d[f])):parseInt(a,10));if(d[f]%2===0){d[f]++}return d[f]},fixPng:function(c){c.style.behavior="none";var g,b,f,a,d;if(c.nodeName=="BODY"||c.nodeName=="TD"||c.nodeName=="TR"){return}c.isImg=false;if(c.nodeName=="IMG"){if(c.src.toLowerCase().search(/\.png$/)!=-1){c.isImg=true;c.style.visibility="hidden"}else{return}}else{if(c.currentStyle.backgroundImage.toLowerCase().search(".png")==-1){return}}g=DD_belatedPNG;c.vml={color:{},image:{}};b={shape:{},fill:{}};for(a in c.vml){if(c.vml.hasOwnProperty(a)){for(d in b){if(b.hasOwnProperty(d)){f=g.ns+":"+d;c.vml[a][d]=document.createElement(f)}}c.vml[a].shape.stroked=false;c.vml[a].shape.appendChild(c.vml[a].fill);c.parentNode.insertBefore(c.vml[a].shape,c)}}c.vml.image.shape.fillcolor="none";c.vml.image.fill.type="tile";c.vml.color.fill.on=false;g.attachHandlers(c);g.giveLayout(c);g.giveLayout(c.offsetParent);c.vmlInitiated=true;g.applyVML(c)}};try{document.execCommand("BackgroundImageCache",false,true)}catch(r){}DD_belatedPNG.createVmlNameSpace();DD_belatedPNG.createVmlStyleSheet();;
var MRC = {

onReady: function() {

		jQuery('#mrc_content').delegate('#i_commune','keyup', function() {
		    var value = jQuery('#i_commune').val().toLowerCase();
		    var elements = jQuery('#accueilTable .toggle_title');
		    if(value == ''){
		    	for(var i=0;i<elements.length;i++){
		    		var element = jQuery(elements[i]);
		    		element.parent().parent().parent().parent().show();
		    	}
		    }
		    else{
		    	for(var i=0;i<elements.length;i++){
		    		var element = jQuery(elements[i]);
						var currentValue= element.text().toLowerCase();
						var accent = [
						/[\340-\346]/g,/[\350-\353]/g,/[\354-\357]/g,/[\362-\370]/g,/[\371-\374]/g,/[\361]/g,/[\347]/g
						];
						var noaccent = ['a','e','i','o','u','n','c'];
						for(var j= 0; j < accent.length; j++){
							currentValue=currentValue.replace(accent[j],noaccent[j]);
							value=value.replace(accent[j],noaccent[j]);
						}
						if(currentValue.match('^'+value+'(.*)$')){
							element.parent().parent().parent().parent().show();
						}
						else{
							element.parent().parent().parent().parent().hide();
						}
					}
		    }
		});

}};

jQuery(document).ready(MRC.onReady);
;
//-- AT Ergonomics A 3.3.0 -- Copyright 2014 AT INTERNET, All Rights Reserved.
//-- (to be used with AT Tag 4.6.1 or later)
var scriptOnClickZone=2,xtautoredir=true,xtczv='3.3.0',xtdtmp=0,xtdt2=new Date(),xtel=new xtE(xtdt2.getTime()),xtn=navigator,un=undefined,nu=null,cZ='xtcz',oC='onclick',cT='xtcltype',cL='xtclib',tR=true,fA=false,isI=(/MSIE/.test(xtn.userAgent))?tR:fA,isOP=(/Opera/.test(xtn.userAgent))?tR:fA,isS=(/Safari/.test(xtn.userAgent))?tR:fA,isM=(xtn.appVersion.indexOf('Mac',0)>=0)?tR:fA,xtczdom;
function xtIdxOf(tab,v,n){n=(n==null)?0:n;var m=tab.length;for(var i=n;i<m;i++)if(tab[i]==v)return i;return-1}
function xtT(xl){if(xl.innerHTML){var xtx=xl.innerHTML,r=new RegExp('<script[^>]*>','gi');if(r.test(xtx.toString()))return fA;xtx=(xtx.toString()).replace(/<\/?[^>]+>/gi,'');var regex=new RegExp('(&nbsp;)','g');xtx=(xtx.toString()).replace(regex,'');xtx=xtEn(xtx);var regex2=new RegExp('(%C2%A0)','g');xtx=(xtx.toString()).replace(regex2,'');try{xtx=xtDe(xtx)}catch(e){}xtx=(xtx.toString()).replace(/[\s]/gm,'');if((xtx.length==0)||(xtx==un)||(xtx==nu))return fA;return xtx}return fA}
function xtE(st){this.xttab=new Array();this.xst=st;this.xc=0;this.yc=0;this.sx=0;this.sy=0;this.px=0;this.py=0;this.xr=0;this.yr=0;this.bf='';this.af='';this.curr='';this.cliccz='';this.dest='';this.s=0;this.pcz='';this.s2cz='';this.t=0;this.idmod=0;this.p='';this.s2='';this.idpage=-1}
function xtH(){var d2=new Date();return(d2.getTime()-xtel.xst)}
function xtC(e){if(!e){if(xw.event){e=xw.event}else{return{x:-1,y:-1}}}var xc=-1,yc=-1;if(typeof(e.pageX)=='number'){xc=e.pageX;yc=e.pageY}else if(typeof(e.clientX)=='number'){xc=e.clientX;yc=e.clientY;var bad=(xw.xtn.userAgent.indexOf('Opera')+1)||(xw.ScriptEngine&&ScriptEngine().indexOf('InScript')+1)||(xtn.vendor=='KDE');if(!bad){if(xd.body&&(xd.body.scrollLeft||xd.body.scrollTop)){xc+=xd.body.scrollLeft;yc+=xd.body.scrollTop}else if(xd.documentElement&&(xd.documentElement.scrollLeft||xd.documentElement.scrollTop)){xc+=xd.documentElement.scrollLeft;yc+=xd.documentElement.scrollTop}}}else{return{x:-1,y:-1}}return{x:xc,y:yc}}
function xtAs(xl){var rect=xtAb(xl),width=rect.right-rect.left,height=rect.bottom-rect.top;return{w:width,h:height}}
function xtAb(xl){if(xl['rectDefined'])return{left:xl.rLeft,top:xl.rTop,right:xl.rRight,bottom:xl.rBottom};if(!xl.shape)xl.shape='rect';var coords=xl.coords.split(','),result;if(xl.shape.toLowerCase()=='rectangle'||xl.shape.toLowerCase()=='rect'){result={left:parseInt(coords[0]),top:parseInt(coords[1]),right:parseInt(coords[2]),bottom:parseInt(coords[3])}}if(xl.shape.toLowerCase()=='circle'||xl.shape.toLowerCase()=='circ'){result={left:parseInt(coords[0])-parseInt(coords[2]),top:parseInt(coords[1])-parseInt(coords[2]),right:parseInt(coords[0])+parseInt(coords[2]),bottom:parseInt(coords[1])+parseInt(coords[2])}}if(xl.shape.toLowerCase()=='polygon'||xl.shape.toLowerCase()=='poly'){var l_ex,t_ex,r_ex,b_ex;for(var i=0;i<coords.length;i+=2){var co=parseInt(coords[i]);if(l_ex==un||co<l_ex)l_ex=co;if(r_ex==un||co>r_ex)r_ex=co}for(var i=1;i<coords.length;i+=2){var co=parseInt(coords[i]);if(t_ex==un||co<t_ex)t_ex=co;if(b_ex==un||co>b_ex)b_ex=co}result={left:l_ex,top:t_ex,right:r_ex,bottom:b_ex}}xl.rectDefined=tR;xl.rLeft=result.left;xl.rRight=result.right;xl.rTop=result.top;xl.rBottom=result.bottom;return result}
function xtAp(area,target){var map=xtpN(area);if(!map.dstElement){if(!target){target=xd}var elts=target.getElementsByTagName('*');if(elts['toArray'])elts=elts.toArray();for(var i=0;i<elts.length;i++){var xl=elts[i];if(xl.useMap){if(xl.useMap.replace('#','')==map.name)break}xl=nu}map.dstElement=xl}if(map.dstElement){var basePx=xtP(map.dstElement,'Left'),basePy=xtP(map.dstElement,'Top'),rect=xtAb(area);return{x:(basePx+rect.left),y:(basePy+rect.top)}}else{return{x:-1,y:-1}}}
function xtP(oEl,inTYPE){if(typeof(oEl.offsetParent)!=un){var sType='oEl.offset'+inTYPE;for(var iVal=0;oEl;oEl=oEl.offsetParent){iVal+=eval(sType)}return iVal}else{if(inTYPE=='Left')return oEl.x;if(inTYPE=='Top')return oEl.y}return-1}
function xtR(e){xtel.t=Math.round(xtH()/1000);if(xtdtmp!=0&&(xtel.t-xtdtmp<1))return;xtdtmp=xtel.t;if(!e)e=xw.event;if(xtBdEv(e))return;var xtobj=null,xl=xtEv(e);if(xtTr(xl)){if(xtnN(xl)=='OPTION'){var xlp=xtpN(xl);while(xlp){xl=xlp;if(xtnN(xl)=='SELECT')break;xlp=xtpN(xlp)}}xtel.s=xw.xt8;xtel.pcz=xw.xtp;xtel.s2cz=xtEx2(xw.xt9);xtel.idmod=typeof(xw['xtidmod'])!='undefined'?xw['xtidmod']:0;xtobj=xtNa(xl);xtel.curr=xtobj.id;xtel.cliccz=xtobj.typ;xtel.dest=xtobj.url;xtel.p=xtobj.pag;xtel.s2=xtobj.sec;xtel.p=((xtel.p!='')&&(xtel.cliccz!='F'))?'&pmed='+xtEn(xtel.p):'';xtel.s2=((xtel.s2!='')&&(xtel.cliccz!='F'))?'&s2med='+xtEn(xtel.s2):'';if(xtel.cliccz=='F'){xtel.cliccz=xtCt(xl).typ}xtel.sx=xtSx(xl);xtel.sy=xtSy(xl);xtel.px=xtPx(xl);xtel.py=xtPy(xl);xtel.idpage=(xw.xtidpg!=nu)?xw.xtidpg:-1;if((xtel.px==-1)&&(xtel.py==-1))return;var tmpelt=xtEv(e);xtel.xc=((xtnN(tmpelt)=='OPTION')&&!isOP)?xtC(e).x+xtel.px:xtC(e).x;xtel.yc=xtC(e).y;if((xtel.xc==-1)&&(xtel.yc==-1))return;if(xd.compatMode=='BackCompat'&&isI){xtel.xc-=2;xtel.yc-=2}xtel.xr=(xtel.xc-xtel.px)/xtel.sx;xtel.yr=(xtel.yc-xtel.py)/xtel.sy;if((0<xtel.sx)&&(xtel.sx<=40))xtel.xr=0.5;if((40<xtel.sx)&&(xtel.sx<=250))xtel.xr=(Math.round(xtel.xr*10))/10;if(250<xtel.sx)xtel.xr=(Math.round(xtel.xr*100))/100;if((0<xtel.sy)&&(xtel.sy<=40))xtel.yr=0.5;if((40<xtel.sy)&&(xtel.sy<=250))xtel.yr=(Math.round(xtel.yr*10))/10;if(250<xtel.sy)xtel.yr=(Math.round(xtel.yr*100))/100;if(xtel.xr<0)xtel.xr=0;if(xtel.yr<0)xtel.yr=0;if(xtel.xr>1)xtel.xr=1;if(xtel.yr>1)xtel.yr=1;if((xtel.curr).indexOf('xtclib',0)<0){var idx=xtIdxOf(xtel.xttab,xl),xlp=xtpN(xl);while((idx==-1)&&xlp){idx=xtIdxOf(xtel.xttab,xlp);xlp=xtpN(xlp)}xtel.bf=xtNa(xtel.xttab[idx-1]).id;xtel.af=xtNa(xtel.xttab[idx+1]).id;xtel.bf=((xtel.bf).indexOf('xtclib',0)>=0)?xtExTc(xtel.bf):xtel.bf;xtel.af=((xtel.af).indexOf('xtclib',0)>=0)?xtExTc(xtel.af):xtel.af}else{xtel.curr=xtExTc(xtel.curr);xtel.bf='';xtel.af='';xtel.dest=''}var name='';if((xtnN(xl)=='EMBED')&&isOP&&(xtpN(xl)!=nu)&&(xtpN(xl)!=un))name=xtpN(xl).name;else name=xl.name;if((name!=nu)&&(name!=un)&&((name).indexOf(cT)>=0))xtel.cliccz=name.replace(cT,'');var type=xtCt(xl).typ,hitn=fA;if((xtel.cliccz=='N')&&(type!='N'))hitn=tR;var regex=new RegExp('(&)|[?]','g');xtel.curr=(xtel.curr.toString()).replace(regex,'_');xtel.bf=(xtel.bf.toString()).replace(regex,'_');xtel.af=(xtel.af.toString()).replace(regex,'_');xtel.dest=(xtel.dest.toString()).replace(regex,'_');var res='&xtczv='+xtczv+'&idmod='+xtel.idmod+'&current='+xtEn(xtel.curr)+'&before='+xtEn(xtel.bf)+'&after='+xtEn(xtel.af)+'&cliccz='+xtel.cliccz+'&dest='+xtEn(xtel.dest)+'&posx='+xtel.xr+'&posy='+xtel.yr+'&time='+xtel.t+xtel.p+xtel.s2;var redir=xtCt(xl,1),redir_url=redir.url,redir_tgt=redir.tgt,redir_ok=!1,redir_chck=redir.ck;if(xtautoredir&&scriptOnClickZone==2&&e.type=='click'&&redir_chck!='no'&&redir_url.indexOf('http')==0&&redir_tgt!='_blank'&&!e.defaultPrevented&&xtel.cliccz=='S'){e.preventDefault();redir_ok=1}if(((scriptOnClickZone==2)&&(xtel.cliccz!='N'))||(hitn==tR)){xt_imgc=new Image();xt_imgc.src=xtsd+xw.xtczdom+'?s='+xtel.s+'&pcz='+xtEn(xtel.pcz)+'&s2cz='+xtEn(xtel.s2cz)+res+'&idpcz='+xtel.idpage+((typeof(xt40)!='undefined')?'&idclient='+xt40:'');xt_imgc.onload=function(){xt_imgc.onload=null};if(redir_ok)xtRedir(redir_url,redir_tgt)}else if(xtel.cliccz=='N'){xtW(encodeURIComponent('&idpcz='+xtel.idpage+res).replace(/-/g,"%at1%").replace(/_/g,"%at2%").replace(/\./g,"%at3%").replace(/!/g,"%at4%").replace(/~/g,"%at5%").replace(/\*/g,"%at6%").replace(/'/g,"%at7%").replace(/\(/g,"%at8%").replace(/\)/g,"%at9%"));}}}
function xtRedir(url,tgt){var a='.location.href="',b=typeof xw.xttredir!='undefined'?xw.xttredir:500;switch(tgt){case'_self':setTimeout('self'+a+url+'"',b);break;case'_top':setTimeout('top'+a+url+'"',b);break;case'_parent':setTimeout('parent'+a+url+'"',b);break;case'':setTimeout('self'+a+url+'"',b);break;default:setTimeout('self'+a+url+'"',b);break}}
function xtW(xt_valcz){var xtcznb=new Date();xtcznb.setTime(xtcznb.getTime()+45000);xd.cookie='xtvalCZ='+xt_valcz+';expires='+xtcznb.toGMTString()+' ;path=/'+xw.xt1}
function xtSx(xl){var szx=(xtnN(xl)=='AREA')?xtAs(xl).w:xl.offsetWidth;if((szx==nu)||(szx==un)||(szx=='')){if(xl.style.width!=nu)szx=xl.style.width;else szx=0}if(isS&&isM&&(xtnN(xl)=='TR')&&(xl.firstChild!=nu)&&(xl.lastChild!=nu))szx=xl.lastChild.offsetLeft+xl.lastChild.offsetWidth-xl.firstChild.offsetLeft;if((szx==nu)||(szx==un)||(szx=='')){szx=0}return parseInt(szx,10)}
function xtSy(xl){var szy=(xtnN(xl)=='AREA')?xtAs(xl).h:xl.offsetHeight;if((szy==nu)||(szy==un)||(szy=='')){if(xl.style.height!=nu)szy=xl.style.height;else szy=0}if(isS&&isM&&(xtnN(xl)=='TR')&&(xl.firstChild!=nu)&&(xl.lastChild!=nu))szy=xl.lastChild.offsetTop+xl.lastChild.offsetHeight-xl.firstChild.offsetTop;if((szy==nu)||(szy==un)||(szy=='')){szy=0}return parseInt(szy,10)}
function xtPx(xl){var psx=(xtnN(xl)=='AREA')?xtAp(xl).x:xtP(xl,'Left');return parseInt(psx,10)}
function xtPy(xl){var psy=(xtnN(xl)=='AREA')?xtAp(xl).y:xtP(xl,'Top');if(isS&&isM&&(xtnN(xl)=='TR')&&(xl.firstChild!=nu))psy+=xl.firstChild.offsetTop;return parseInt(psy,10)}
function xtExD(url){var u=url.replace(/((http)|(https)):\/\//g,''),p=u.indexOf('/');p=(p!=-1)?p:u.length;u=xtSub(u,0,p);return u}
function xtCt(xl,a){var xclict='',xext='',xurld='',target='',check='',xdoms=(xw.xt1!=nu&&xw.xt1!='')?xtSub(xw.xt1,8,xw.xt1.length):xd.domain,xdomd='',isAction=!1,curUrl=window.location.href,cleanUrl=curUrl.substring(0,(curUrl.indexOf('#')>0?curUrl.indexOf('#'):curUrl.length));if(xl){if((xtnN(xl)=='INPUT')&&(xl.type=='submit')){try{xurld=xtG(xl.form,'action').toString()}catch(e){}xext=xtSub(xurld,xurld.lastIndexOf('.'),xurld.length);xdomd=xtExD(xurld)}if((xtnN(xl)!='IMG')&&xl.href){xurld=(xl.href).toString();if(xurld.indexOf('#')>0&&xurld.substring(0,xurld.indexOf('#'))==cleanUrl)isAction=!0;if(xl.getAttribute('target'))target=(xl.getAttribute('target')).toString();if(xl.getAttribute('data-xtredir'))check=(xl.getAttribute('data-xtredir'));xext=xtSub(xurld,xurld.lastIndexOf('.'),xurld.length);xdomd=xtExD(xurld)}else{var xlp=xtpN(xl);while(xlp&&xtnN(xlp)!='BODY'){if(xlp.href){xurld=(xlp.href).toString();if(xurld.indexOf('#')>0&&xurld.substring(0,xurld.indexOf('#'))==cleanUrl)isAction=!0;xext=xtSub(xurld,xurld.lastIndexOf('.'),xurld.length);xdomd=xtExD(xurld);if(xlp.getAttribute('target'))target=(xlp.getAttribute('target')).toString();if(xlp.getAttribute('data-xtredir'))check=(xlp.getAttribute('data-xtredir'));break}xlp=xtpN(xlp)}}}if(xtEx(xext))xclict='T';else if((xdomd!='')&&(xdomd.indexOf(xdoms,0)<0)&&(xdomd!=xtSub(xdoms,1,xdoms.length)))xclict='S';else if(isAction){xclict='A'}else{xclict='N'}if(!a){if(xurld.length>255)xurld=xtSub(xurld,0,255);var ch=xurld;if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xurld=ch;try{if((xtDe(xurld)!=nu)&&(xtDe(xurld)!=un))xurld=xtDe(xurld)}catch(e){}}return{typ:xclict,url:xurld,tgt:target,ck:check}}
function xtEx(xext){var valext=['.aac','.ace','.ape','.art','.avi','.bak','.bat','.bin','.bmp','.bsp','.cab','.ccd','.cda','.chm','.clp','.css','.csv','.cue','dic','dll','.doc','.dot','.exe','.fla','.flac','.gif','.gz','.hlp','.ico','.img','.iso','.jpeg','.jpg','.js','.lnk','.m2a','.m2v','.m3u','.mdb','.mdf','.mds','.mid','.midi','.mkv','.mod','.mov','.mp2','.mp3','.mp4','.mpc','.mpg','.mpeg','.msi','.nfo','.nrg','.obd','.ocx','.ogg','.old','.ogm','.pdf','.png','.pps','.ppt','.psd','.psp','.rar','.raw','.reg','.rm','.ram','.rtf','.swf','.tar','.tga','.tgz','.theme','.tif','.tiff','.tmp','.torrent','.ttf','.txt','.url','.vbs','.vob','.wab','.wav','.wdb','.wks','.wml','.wma','.wmv','.wpf','.xls','.xml','.zip','.7z'];for(var i=0;i<valext.length;i++){if(xext==valext[i])return tR}return fA}
function xtL(xl){var xlel=['INPUT','SELECT','IFRAME','OBJECT','AREA','BUTTON'],xeln=xtnN(xl);if((xeln=='EMBED')&&(xtnN(xtpN(xl)))!='OBJECT'){return tR}if((xeln=='DIV')&&(xtG(xl,cL))){return tR}if((xeln=='SPAN')&&(xtG(xl,oC))){return tR}if((xeln=='SELECT')&&((xtG(xl,'onchange')==nu)||(xtG(xl,'onchange')==un)||(xtG(xl,'onchange')==''))){return fA}if((xeln=='INPUT')&&(xl.type!='submit')&&(xl.type!='image')&&(xl.type!='button')){return fA}if((xeln=='BUTTON')&&(xl.type!='submit')){return fA}if(xeln=='IMG'){var xlp=xtpN(xl);var xtTr=fA;while(xlp){if(xtnN(xlp)=='A'){xtTr=tR;if((((xtG(xlp,oC)!=nu)&&(xtG(xlp,oC)!=un)&&(xtG(xlp,oC)!=''))||((xtG(xlp,'href')!=nu)&&(xtG(xlp,'href')!=un)&&(xtG(xlp,'href')!='')))){return tR}}xlp=xtpN(xlp)}if((xtG(xl,oC)!=nu)&&(xtG(xl,oC)!=un)&&(xtG(xl,oC)!='')&&!xtTr)return tR}if((xeln=='A')&&(((xtG(xl,oC)!=nu)&&(xtG(xl,oC)!=un)&&(xtG(xl,oC)!=''))||((xtG(xl,'href')!=nu)&&(xtG(xl,'href')!=un)&&(xtG(xl,'href')!='')))){var xlp=xtpN(xl);while(xlp){if(((xtnN(xlp)=='DIV')&&(xtG(xlp,cL)))||((xtnN(xlp)=='SPAN')&&(xtG(xlp,oC))))return fA;xlp=xtpN(xlp)}var xtImg=fA,xtTxt=fA;if(xl.childNodes){var xtChild=xl.childNodes,j=0;while(j<xtChild.length&&!(xtImg&&xtTxt)){if(xtnN(xtChild[j])=='IMG'){xtImg=tR}else{xtTxt=tR}j++}}if(xtImg&&xtTxt)return tR;else if(xtImg)return fA;else return tR}for(var i=0;i<xlel.length;i++){if(xeln==xlel[i])return tR}return fA}
function xtTr(xl){var xut=['BODY','HTML'];for(var i=0;i<xut.length;i++){if(xl.tagName==xut[i])return fA}return tR}
function xtEv(evt){var e_out,ie_var='srcElement',moz_var='target';evt[moz_var]?e_out=evt[moz_var]:e_out=evt[ie_var];return(e_out)}
function xtBdEv(evt){var e_out=(xw.event)?(xw.event.button==2):(evt.which==3);return(e_out)}
function xtV(xat){var r=/xt_med\(\s*.?C/i,r2=/xt_click\(\s*this\s*\,\s*.?C/i;return(r.test(xat.toString())||r2.test(xat.toString())||(xw.xtczcustomtag?xw.xtczcustomtag.isPresent(xat):false))}
function xtExT(xat){var page='',pageclz='',type='',section=-1,custom=(typeof xw.xtczcustomtag!='undefined')?xw.xtczcustomtag.getCustomTag(xat):null;if(!custom){var idx=(xat.indexOf('xt_med')>=0)?0:1,IdxSt=(idx==0)?xat.indexOf('xt_med'):xat.indexOf('xt_click'),start=xat.indexOf('(',IdxSt),stop=xat.indexOf(')',IdxSt),content=xtSub(xat,start+1,stop),tmp=start;while(content.indexOf('(')>0){tmp=stop+1;stop=xat.indexOf(')',stop+1);content=xtSub(xat,tmp+1,stop)}content=xtSub(xat,start+1,stop);xatab=content.split(/\,/);try{section=(xatab[idx+1])?String(eval(xatab[idx+1])):''}catch(e){section=(xatab[idx+1]||'')}try{page=(xatab[idx+2])?String(eval(xatab[idx+2])):''}catch(e){page=(xatab[idx+2]||'')}try{type=(xatab[idx+3])?String(eval(xatab[idx+3])):''}catch(e){type=(xatab[idx+3]||'')}}else{type=custom.typ||'';page=custom.lab||'';section=custom.sec||''}pageclz=page.replace(/(::)/g,'/');return{typ:type,pag:page,pagcl:pageclz,sec:section}}
function xtEx2(xat){var r=new RegExp('&s2=','gi');if(r.test(xat.toString())){xat=xat.replace(r,'')}return xat}
function xtExTc(xid){var r=new RegExp(cL,'gi');xid=xid.replace(r,'');return xid}
function xtLCz(xl){var xlel=['DIV','TABLE','TR','TD','UL','LI','ARTICLE','FOOTER','ASIDE','HEADER','NAV','SECTION'],xeln=xtnN(xl);for(var i=0;i<xlel.length;i++){if((xeln==xlel[i])&&(xl.nodeType==1)&&(xtG(xl,cZ)!=nu)&&(xtG(xl,cZ)!=un)){return tR}}return fA}
function xtNa(xl){if(xl&&!xtL(xl)){var xlp=xtpN(xl);while(xlp){if(xtL(xlp)){xl=xlp;break}xlp=xtpN(xlp)}}var xtobj=null,xid='',xtmedat='',xtmedp='',xtmeds='',type='',xurld='',xtTr=fA;if(xl){if((xtnN(xl)=='A')&&(xl.childNodes)){var xtChild=xl.childNodes,j=0;while((j<xtChild.length)&&!xtTr){if((xtChild[j].nodeType==1)&&!xtL(xtChild[j])&&(xtG(xtChild[j],cL))){xid=cL+xtG(xtChild[j],cL);xtTr=tR}j++}}if(!xtTr){if(xtG(xl,oC)&&xtV(xtG(xl,oC)))xid=xtG(xl,oC);else if(xl.href&&xtV(xl.href)){xid=xl.href;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}}else if(xtG(xl,cL))xid=cL+xtG(xl,cL);else if(xtT(xl))xid=xtT(xl);else if(xl.id)xid=xl.id;else if(xl.name)xid=xl.name;else if(xl.title)xid=xl.title;else if(xl.value)xid=xl.value;else if(xl.href){var ch=xl.href.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}}else if(xl.src){var ch=xl.src.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}}else{var xlp=xtpN(xl);while(xlp&&xtnN(xlp)!='BODY'){if(xtG(xlp,oC)&&xtV(xtG(xlp,oC))){xid=xtG(xlp,oC);break}else if(xlp.href&&xtV(xlp.href)){xid=xlp.href;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}break}else if(xtG(xl,cL)){xid=cL+xtG(xl,cL);break}else if(xtT(xlp)){xid=xtT(xlp);break}else if(xlp.id){xid=xlp.id;break}else if(xlp.name){xid=xlp.name;break}else if(xlp.title){xid=xlp.title;break}else if(xlp.value){xid=xlp.value;break}else if(xlp.href){var ch=xlp.href.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}break}else if(xlp.src){var ch=xlp.src.toString();if(ch.charAt(ch.length-1)=='/')ch=xtSub(ch,0,ch.length-1);var pos=ch.lastIndexOf('/?',ch.length);if(pos>=0)ch=ch.replace('/?','?');xid=ch;try{if((xtDe(xid)!=nu)&&(xtDe(xid)!=un))xid=xtDe(xid)}catch(e){}break}xlp=xtpN(xlp)}}}xid=(xid.toString()).replace(/[\s]/gm,'');if(xtV(xid)){xtobj=xtExT(xid);type=xtobj.typ;xtmedp=xtobj.pag;xtmeds=xtobj.sec;if(xtG(xl,cL))xid=cL+xtG(xl,cL);else xid=xtobj.pagcl}else{var xlp=xtpN(xl);while(xlp&&(xtnN(xlp)!='BODY')){if(xtG(xlp,oC)&&xtV(xtG(xlp,oC))){xtmedat=xtG(xlp,oC);xtmedat=(xtmedat.toString()).replace(/[\s]/gm,'');xtobj=xtExT(xtmedat);type=xtobj.typ;xtmedp=xtobj.pag;xtmeds=xtobj.sec;break}else if(xlp.href&&xtV(xlp.href)){xtmedat=xlp.href;try{if((xtDe(xtmedat)!=nu)&&(xtDe(xtmedat)!=un))xtmedat=xtDe(xtmedat)}catch(e){}xtmedat=(xtmedat.toString()).replace(/[\s]/gm,'');xtobj=xtExT(xtmedat);type=xtobj.typ;xtmedp=xtobj.pag;xtmeds=xtobj.sec;break}xlp=xtpN(xlp)}}if(type==''){if(xtG(xl,cT)!=nu){type=xtG(xl,cT)}else{var xlp=xtpN(xl);while(xlp&&(xtnN(xlp)!='BODY')){if(xtG(xlp,cT)!=nu){type=xtG(xlp,cT);break}xlp=xtpN(xlp)}}}if(type=='')type=xtCt(xl).typ;xurld=xtCt(xl).url;if(xtmedp==''){xtmedp=(xid.indexOf(cL,0)>=0)?xtExTc(xid):xid;if(xtmeds=='')xtmeds=xtEx2(xw.xt9)}var regex=new RegExp('(&)|[?]','g');xtmedp=(xtmedp.toString()).replace(regex,'_');if(xtmeds=='')xtmeds='0';var r=new RegExp('(::)','g');xid=(xid.toString()).replace(r,'/');var k=0,xlp=xtpN(xl);while(xlp&&(xtnN(xlp)!='BODY')){if(xtLCz(xlp)&&(k<2)){xid=xtG(xlp,cZ)+'::'+xid;k+=1}xlp=xtpN(xlp)}}xid=xtSub(xid,0,255);xtmedp=xtSub(xtmedp,0,255);return{id:xid,pag:xtmedp,sec:xtmeds,typ:type,url:xurld}}
function xtNodesload(){if(xw.xt8!=0){xw.xtczdom=xw.xtLogDom?xw.xtLogDom:'.xiti.com/hit.xiti';var desc=xd.getElementsByTagName('*');for(var i=0;i<desc.length;i++){if(xtL(desc[i]))xtel.xttab.push(desc[i])}for(var k=0;k<xtel.xttab.length;k++){if(xtel.xttab[k].nodeName=='OBJECT'||xtel.xttab[k].nodeName=='EMBED'){if(xd.addEventListener)xtel.xttab[k].addEventListener('mousedown',xtR,fA);else if(xd.attachEvent)xtel.xttab[k].attachEvent('onmousedown',xtR)}else{if(xd.addEventListener)xtel.xttab[k].addEventListener('click',xtR,fA);else if(xd.attachEvent)xtel.xttab[k].attachEvent('onclick',xtR)}}}}
function xtG(o,a){var att=null;try{att=o.getAttribute(a)}catch(e){}return(att==null)?null:(((a==cZ)&&(att.length>255))?xtSub(att,0,255):att)}
function xtEn(v){return encodeURIComponent(v)}
function xtDe(v){return decodeURIComponent(v)}
function xtnN(o){return o.nodeName}
function xtpN(o){return o.parentNode}
function xtSub(o,d,f){return o.substring(d,f)};
