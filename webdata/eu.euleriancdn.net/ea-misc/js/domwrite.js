window.bezen=window.bezen||(function(){var a=function(){};var b=function(c){return document.getElementById(c)};return{$:b,nix:a,_:{}}}());bezen.array=(function(){var c=[];var f=function(j){j.length=0};var h=function(j){if(!j||j.length===0){return null}return j[j.length-1]};var g=function(k,j){if(Array.push){return Array.push(k,j)}else{return c.push.call(k,j)}};var i=function(j){if(Array.pop){return Array.pop(j)}else{return c.pop.call(j)}};var b=function(j){if(Array.shift){return Array.shift(j)}else{return c.shift.call(j)}};var d=function(k,j){if(Array.unshift){return Array.unshift(k,j)}else{return c.unshift.call(k,j)}};var a=function(l){if(!l){return null}var k=[];for(var j=0;j<l.length;j++){k.push(l[j])}return k};var e=function(l){if(!l){return null}var k={};for(var j=0;j<l.length;j++){k[l[j]]=true}return k};return{empty:f,last:h,push:g,pop:i,shift:b,unshift:d,copy:a,hash:e,_:{}}}());bezen.object=(function(){var c=function(e){var f=function(){};f.prototype=e;return new f()};var d=function(e){if(e===null||e===undefined){return false}for(var f=1;f<arguments.length;f++){e=e[arguments[f]];if(e===null||e===undefined){return false}}return true};var b=function(f){var e=f&&typeof f==="object"&&typeof f.length==="number"&&typeof f.splice==="function"&&!(f.propertyIsEnumerable("length"));return e?true:false};var a=function(e){return typeof e==="string"||e instanceof String};return{beget:c,exists:d,isArray:b,isString:a,_:{}}}());bezen.log=(function(){var c=bezen.$,k=bezen.object.exists,g=bezen.array.pop,n=bezen.array.unshift;var e=100;var b="bezen.log";var o=[];var d=true;var a=false;var l=a;var h=function(){l=d};var s=function(){l=a};var p=function(t){if(t===d){return true}if(t===a){return false}return l};var f=function(){var w=arguments[0];for(var v=1;v<arguments.length;v++){w+=arguments[v]}if(o.length<e){o.push(w)}if(k(window,"jash","print")){window.jash.print(w)}if(k(window,"console","log")){var t=window.console;if(k(t,"firebug")){t.log.apply(this,arguments)}else{t.log(w)}}var u=c(b);if(k(u)){u.appendChild(document.createTextNode(w));u.appendChild(document.createElement("br"))}};var j=function(){if(arguments.length>1&&typeof arguments[arguments.length-1]==="boolean"){var t=arguments[arguments.length-1];if(p(t)){g(arguments);f.apply(null,arguments)}}else{if(p()){f.apply(null,arguments)}}};var r=function(){j.apply(null,arguments)};var q=function(u,t){n(arguments,"Warning: ");j.apply(null,arguments)};var m=function(u,t){n(arguments,"[ERROR] ");j.apply(null,arguments)};var i=function(w,u){w=w||0;u=u||o.length;if(u>o.length){u=o.length}var t="";for(var v=w;v<u;v++){t+=(v+1)+". "+o[v]+"\n"}return t};return{on:h,off:s,info:r,warn:q,error:m,view:i,_:{isOn:p,log:f,logIfOn:j,globalOnOff:l,records:o}}}());bezen.assert=(function(){var f=bezen.object.isArray,h=bezen.object.exists;var c=function(k){var j=new Error(k);j.fileName=j.fileName||"bezen.assert.js";j.lineNumber=j.lineNumber||42;throw j};var i=function(k,j){if(k!==true){c(j)}};var g=function(k,j){if(k!==false){c(j)}};var b=function(k,j){return' expected: "'+j+'" found: "'+k+'"'};var a=function(l,k,j){if(k!==l){j=j||"";c(j+b(l,k))}};var e=function(o,l,k){if(o===l){return}var n=f(o);var m=f(l);if(n!==m){c(k+b(o,l))}else{if(!n){a(o,l,k);return}}if(o.length!==l.length){c(k+" different length,"+b(o,l))}for(var j=0;j<o.length;j++){e(o[j],l[j],k+" at index["+j+"]")}};var d=function(q,n,r){if(q===n){return}if(!h(q)||!h(n)){c(r+b(q,n))}var k=typeof q==="object";var m=typeof n==="object";if(k!==m){c(r+b(q,n))}else{if(!k){a(q,n,r);return}}var l={},o;for(var p in n){if(n.hasOwnProperty(p)===q.hasOwnProperty(p)){l[p]=true;o=n.hasOwnProperty(p)?"own":"inherited";d(q[p],n[p],r+" in "+o+' property "'+p+'"')}else{c(r+' missing property "'+p+'" (or owned/inherited property mismatch) '+b(q[p],n[p]))}}for(var j in q){if(l[j]){}else{o=q.hasOwnProperty(j)?"own":"inherited";c(r+" extra "+o+' property "'+j+'"'+b(q[j],n[j]))}}};return{fail:c,isTrue:i,isFalse:g,equals:a,arrayEquals:e,objectEquals:d,_:{difference:b}}}());bezen.error=(function(){var g=window.setTimeout,f=window.setInterval;var h=function(k,j,i){if(!bezen.log){return}if(typeof k==="object"){h(k.message,k.fileName,k.lineNumber);return}bezen.log.error(k+" at "+j+"["+i+"]",true)};var c=function(k,j,i){h("window.onerror: "+k,j,i);return true};var d=function(k,j){j=j||"error.catchError";if(typeof k!=="function"){h(j+": A function is expected, found "+typeof k);return bezen.nix}var i=function(){try{return k.apply(this,arguments)}catch(l){if(window.onerror){window.onerror(j+": "+l.message+" in "+k,l.fileName,l.lineNumber,true)}}};return i};var e=function(j,i){if(typeof j==="string"){if(bezen.log){bezen.log.warn('window.setTimeout: eval is evil: "'+j+'"')}j=new Function(j)}return g(d(j,"window.setTimeout"),i)};var b=function(j,i){if(typeof j==="string"){if(bezen.log){bezen.log.warn('window.setInterval: eval is evil: "'+j+'"')}j=new Function(j)}return f(d(j,"window.setInterval"),i)};var a=function(){window.onerror=c;window.setTimeout=e;window.setInterval=b};return{reportError:h,onerror:c,safeSetTimeout:e,safeSetInterval:b,catchError:d,catchAll:a,_:{}}}());bezen.string=(function(){var a=function(d){d=d.replace(/^\s\s*/,"");return d.replace(/\s\s*$/,"")};var c=function(d,e){e=String(e);return d.slice(0,e.length)===e};var b=function(d,e){e=String(e);return d.slice(d.length-e.length)===e};return{trim:a,startsWith:c,endsWith:b,_:{}}}());bezen.style=(function(){var c=bezen.array.hash,b=bezen.string.trim;var i=function(k){if(!k||!k.className){return{_:[]}}var l=b(k.className).split(/\s+/);var j=c(l);j._=l;return j};var h=function(k,j){k.className=j._.join(" ")};var e=function(j,k){if(j[k]){return j}j[k]=true;j._.push(k);return j};var f=function(k,m){if(!k[m]){return k}delete k[m];var l=[];var n=k._;for(var j=0;j<n.length;j++){if(n[j]!==m){l.push(n[j])}}k._=l;return k};var a=function(j){if(j.style){j.style.display="block"}};var d=function(j){if(j.style){j.style.display="none"}};var g=function(j){if(j.style){j.style.display=""}};return{getClasses:i,setClasses:h,addClass:e,removeClass:f,showBlock:a,hide:d,resetDisplay:g,_:{}}}());bezen.dom=(function(){var j=bezen.error.catchError;var c=1,k=2,b=3;var e=function(m,l){var o=document.createElement(m);if(!l){return o}for(var p in l){if(l.hasOwnProperty(p)){o.setAttribute(p,l[p])}}if(o.canHaveChildren===false){return o}for(var n=2;n<arguments.length;n++){var q=arguments[n];if(typeof q==="string"){q=document.createTextNode(q)}o.appendChild(q)}return o};var f=function(l){if(l.canHaveChildren===false){return}l.innerHTML=""};var h=function(n,l){var m=n.parentNode;m.insertBefore(l,n)};var g=function(n,l){var m=n.parentNode;m.insertBefore(l,n.nextSibling)};var d=function(l){if(l.parentNode&&l.parentNode.innerHTML){l.parentNode.removeChild(l)}};var a=function(n,l){if(n.hasAttribute){return n.hasAttribute(l)}var m=n.getAttributeNode(l);if(m===null){return false}return m.specified};var i=function(m,o,n){var l=j(n,"script.onload");if(o.readyState&&o.onload!==null){o.onreadystatechange=function(){if(o.readyState==="loaded"||o.readyState==="complete"){o.onreadystatechange=null;o.onerror=null;l()}}}else{o.onload=l}m.appendChild(o)};return{ELEMENT_NODE:c,ATTRIBUTE_NODE:k,TEXT_NODE:b,element:e,clear:f,insertBefore:h,insertAfter:g,remove:d,hasAttribute:a,appendScript:i,_:{}}}());bezen.domwrite=(function(){var a=bezen.nix,p=bezen.string.trim,h=bezen.array.empty,d=bezen.dom.hasAttribute,g=bezen.dom.appendScript,f=document.write,o=document.writeln;var b=[];var n=function(s){b.push(s)};var i=function(s){n(s+"\n")};var e=function(){if(b.length===0){return null}var s=b.join("");h(b);return s};var c=function(t){var s=document.createElement("div");s.innerHTML="<br/>"+t;s.removeChild(s.firstChild);return s.firstChild};var l=function(s){if(s.nodeName!=="SCRIPT"){return false}if(s.language&&s.language.toLowerCase()!=="javascript"){return false}if(s.type&&p(s.type).toLowerCase()!=="text/javascript"){return false}return true};var k=function(u,x,w){if(d(x,"src")){var s=document.createElement("script");for(var t=0;t<x.attributes.length;t++){var v=x.attributes[t];if(d(x,v.name)){s.setAttribute(v.name,v.value)}}s.text=x.text;g(u,s,w)}else{var y=x.cloneNode(false);y.text=x.text;y.type="any";u.appendChild(y);if(d(x,"type")){y.setAttribute("type",x.type)}else{y.removeAttribute("type")}(new Function(y.text))();w()}};var r;var j=function(y,x,z){if(x===null){z();return}var v=null;var s=y;var t=function(){j(s,v,z)};if(l(x)){setTimeout(function(){k(y,x,function(){r(y,t)})},0)}else{var w=x.cloneNode(false);y.appendChild(w);setTimeout(t,0);if(x.firstChild){var u=x.getElementsByTagName("script").length;if(u===0){w.innerHTML=x.innerHTML}else{v=x.firstChild;s=w}}}if(v===null){v=x.nextSibling}var A=x.parentNode;while(v===null&&A!==null&&s!=null){v=A.nextSibling;s=s.parentNode;A=A.parentNode}return};var m=function(){var s=document;if(s.write===f){s.write=n}if(s.writeln===o){s.writeln=i}};r=function(t,u){if(t instanceof Function){u=t;t=document.body}else{t=t||document.body;u=u||a}var s=e();if(s===null){u()}else{j(t,c(s),u)}};var q=function(){document.write=f;document.writeln=o};return{capture:m,parseMarkup:c,render:r,restore:q,_:{markupArray:b,domWrite:n,domWriteln:i,collectMarkup:e,isJavascriptScript:l,appendScriptClone:k,loadPiecemeal:j}}}());window._oEaDWR=window.bezen.domwrite;
