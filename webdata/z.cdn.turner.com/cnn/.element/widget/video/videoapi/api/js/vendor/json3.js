(function(t){function e(t){if("bug-string-char-index"==t)return"a"!="a"[0];var e,n='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',r="json"==t;if(r||"json-stringify"==t||"json-parse"==t){if("json-stringify"==t||r){var i=c.stringify,u="function"==typeof i&&l;if(u){(e=function(){return 1}).toJSON=e;try{u="0"===i(0)&&"0"===i(new Number)&&'""'==i(new String)&&i(a)===o&&i(o)===o&&i()===o&&"1"===i(e)&&"[1]"==i([e])&&"[null]"==i([o])&&"null"==i(null)&&"[null,null,null]"==i([o,a,null])&&i({a:[e,!0,!1,null,"\0\b\n\f\r	"]})==n&&"1"===i(null,e)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new Date(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new Date(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new Date(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new Date(-1))}catch(f){u=!1}}if(!r)return u}if("json-parse"==t||r){var s=c.parse;if("function"==typeof s)try{if(0===s("0")&&!s(!1)){e=s(n);var p=5==e.a.length&&1===e.a[0];if(p){try{p=!s('"	"')}catch(f){}if(p)try{p=1!==s("01")}catch(f){}}}}catch(f){p=!1}if(!r)return p}return u&&p}}var n,r,o,a={}.toString,i="function"==typeof define&&define.amd,c="object"==typeof exports&&exports;c||i?"object"==typeof JSON&&JSON?c?(c.stringify=JSON.stringify,c.parse=JSON.parse):c=JSON:i&&(c=t.JSON={}):c=t.JSON||(t.JSON={});var l=new Date(-0xc782b5b800cec);try{l=-109252==l.getUTCFullYear()&&0===l.getUTCMonth()&&1===l.getUTCDate()&&10==l.getUTCHours()&&37==l.getUTCMinutes()&&6==l.getUTCSeconds()&&708==l.getUTCMilliseconds()}catch(u){}if(!e("json")){var f="[object Function]",s="[object Date]",p="[object Number]",h="[object String]",g="[object Array]",d="[object Boolean]",y=e("bug-string-char-index");if(!l)var v=Math.floor,b=[0,31,59,90,120,151,181,212,243,273,304,334],m=function(t,e){return b[e]+365*(t-1970)+v((t-1969+(e=+(e>1)))/4)-v((t-1901+e)/100)+v((t-1601+e)/400)};(n={}.hasOwnProperty)||(n=function(t){var e,r={};return(r.__proto__=null,r.__proto__={toString:1},r).toString!=a?n=function(t){var e=this.__proto__,n=(this.__proto__=null,t in this);return this.__proto__=e,n}:(e=r.constructor,n=function(t){var n=(this.constructor||e).prototype;return t in this&&!(t in n&&this[t]===n[t])}),r=null,n.call(this,t)});var C={"boolean":1,number:1,string:1,undefined:1},j=function(t,e){var n=typeof t[e];return"object"==n?!!t[e]:!C[n]};if(r=function(t,e){var r,o,i,c,l=0;(r=function(){this.valueOf=0}).prototype.valueOf=0,o=new r;for(i in o)n.call(o,i)&&l++;return r=o=null,l?c=2==l?function(t,e){var r,o={},i=a.call(t)==f;for(r in t)i&&"prototype"==r||n.call(o,r)||!(o[r]=1)||!n.call(t,r)||e(r)}:function(t,e){var r,o,i=a.call(t)==f;for(r in t)i&&"prototype"==r||!n.call(t,r)||(o="constructor"===r)||e(r);(o||n.call(t,r="constructor"))&&e(r)}:(o=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],c=function(t,e){var r,i,c=a.call(t)==f,l=!c&&"function"!=typeof t.constructor&&j(t,"hasOwnProperty")?t.hasOwnProperty:n;for(r in t)c&&"prototype"==r||!l.call(t,r)||e(r);for(i=o.length;r=o[--i];l.call(t,r)&&e(r));}),c(t,e)},!e("json-stringify")){var S={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},w="000000",A=function(t,e){return(w+(e||0)).slice(-t)},T="\\u00",N=function(t){var e,n='"',r=0,o=t.length,a=o>10&&y;for(a&&(e=t.split(""));o>r;r++){var i=t.charCodeAt(r);switch(i){case 8:case 9:case 10:case 12:case 13:case 34:case 92:n+=S[i];break;default:if(32>i){n+=T+A(2,i.toString(16));break}n+=a?e[r]:y?t.charAt(r):t[r]}}return n+'"'},O=function(t,e,i,c,l,u,f){var y,b,C,j,S,w,T,_,$,U,x,J,E,M,D,k,I=e[t];try{I=e[t]}catch(F){}if("object"==typeof I&&I)if(y=a.call(I),y!=s||n.call(I,"toJSON"))"function"==typeof I.toJSON&&(y!=p&&y!=h&&y!=g||n.call(I,"toJSON"))&&(I=I.toJSON(t));else if(I>-1/0&&1/0>I){if(m){for(j=v(I/864e5),b=v(j/365.2425)+1970-1;j>=m(b+1,0);b++);for(C=v((j-m(b,0))/30.42);j>=m(b,C+1);C++);j=1+j-m(b,C),S=(I%864e5+864e5)%864e5,w=v(S/36e5)%24,T=v(S/6e4)%60,_=v(S/1e3)%60,$=S%1e3}else b=I.getUTCFullYear(),C=I.getUTCMonth(),j=I.getUTCDate(),w=I.getUTCHours(),T=I.getUTCMinutes(),_=I.getUTCSeconds(),$=I.getUTCMilliseconds();I=(0>=b||b>=1e4?(0>b?"-":"+")+A(6,0>b?-b:b):A(4,b))+"-"+A(2,C+1)+"-"+A(2,j)+"T"+A(2,w)+":"+A(2,T)+":"+A(2,_)+"."+A(3,$)+"Z"}else I=null;if(i&&(I=i.call(e,t,I)),null===I)return"null";if(y=a.call(I),y==d)return""+I;if(y==p)return I>-1/0&&1/0>I?""+I:"null";if(y==h)return N(""+I);if("object"==typeof I){for(E=f.length;E--;)if(f[E]===I)throw TypeError();if(f.push(I),U=[],M=u,u+=l,y==g){for(J=0,E=I.length;E>J;D||(D=!0),J++)x=O(J,I,i,c,l,u,f),U.push(x===o?"null":x);k=D?l?"[\n"+u+U.join(",\n"+u)+"\n"+M+"]":"["+U.join(",")+"]":"[]"}else r(c||I,function(t){var e=O(t,I,i,c,l,u,f);e!==o&&U.push(N(t)+":"+(l?" ":"")+e),D||(D=!0)}),k=D?l?"{\n"+u+U.join(",\n"+u)+"\n"+M+"}":"{"+U.join(",")+"}":"{}";return f.pop(),k}};c.stringify=function(t,e,n){var r,o,i;if("function"==typeof e||"object"==typeof e&&e)if(a.call(e)==f)o=e;else if(a.call(e)==g){i={};for(var c,l=0,u=e.length;u>l;c=e[l++],(a.call(c)==h||a.call(c)==p)&&(i[c]=1));}if(n)if(a.call(n)==p){if((n-=n%1)>0)for(r="",n>10&&(n=10);n>r.length;r+=" ");}else a.call(n)==h&&(r=10>=n.length?n:n.slice(0,10));return O("",(c={},c[""]=t,c),o,i,r,"",[])}}if(!e("json-parse")){var _,$,U=String.fromCharCode,x={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},J=function(){throw _=$=null,SyntaxError()},E=function(){for(var t,e,n,r,o,a=$,i=a.length;i>_;)switch(o=a.charCodeAt(_)){case 9:case 10:case 13:case 32:_++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=y?a.charAt(_):a[_],_++,t;case 34:for(t="@",_++;i>_;)if(o=a.charCodeAt(_),32>o)J();else if(92==o)switch(o=a.charCodeAt(++_)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=x[o],_++;break;case 117:for(e=++_,n=_+4;n>_;_++)o=a.charCodeAt(_),o>=48&&57>=o||o>=97&&102>=o||o>=65&&70>=o||J();t+=U("0x"+a.slice(e,_));break;default:J()}else{if(34==o)break;for(o=a.charCodeAt(_),e=_;o>=32&&92!=o&&34!=o;)o=a.charCodeAt(++_);t+=a.slice(e,_)}if(34==a.charCodeAt(_))return _++,t;J();default:if(e=_,45==o&&(r=!0,o=a.charCodeAt(++_)),o>=48&&57>=o){for(48==o&&(o=a.charCodeAt(_+1),o>=48&&57>=o)&&J(),r=!1;i>_&&(o=a.charCodeAt(_),o>=48&&57>=o);_++);if(46==a.charCodeAt(_)){for(n=++_;i>n&&(o=a.charCodeAt(n),o>=48&&57>=o);n++);n==_&&J(),_=n}if(o=a.charCodeAt(_),101==o||69==o){for(o=a.charCodeAt(++_),(43==o||45==o)&&_++,n=_;i>n&&(o=a.charCodeAt(n),o>=48&&57>=o);n++);n==_&&J(),_=n}return+a.slice(e,_)}if(r&&J(),"true"==a.slice(_,_+4))return _+=4,!0;if("false"==a.slice(_,_+5))return _+=5,!1;if("null"==a.slice(_,_+4))return _+=4,null;J()}return"$"},M=function(t){var e,n;if("$"==t&&J(),"string"==typeof t){if("@"==(y?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=E(),"]"!=t;n||(n=!0))n&&(","==t?(t=E(),"]"==t&&J()):J()),","==t&&J(),e.push(M(t));return e}if("{"==t){for(e={};t=E(),"}"!=t;n||(n=!0))n&&(","==t?(t=E(),"}"==t&&J()):J()),(","==t||"string"!=typeof t||"@"!=(y?t.charAt(0):t[0])||":"!=E())&&J(),e[t.slice(1)]=M(E());return e}J()}return t},D=function(t,e,n){var r=k(t,e,n);r===o?delete t[e]:t[e]=r},k=function(t,e,n){var o,i=t[e];if("object"==typeof i&&i)if(a.call(i)==g)for(o=i.length;o--;)D(i,o,n);else r(i,function(t){D(i,t,n)});return n.call(t,e,i)};c.parse=function(t,e){var n,r;return _=0,$=""+t,n=M(E()),"$"!=E()&&J(),_=$=null,e&&a.call(e)==f?k((r={},r[""]=n,r),"",e):n}}}i&&define(function(){return c})})(this);