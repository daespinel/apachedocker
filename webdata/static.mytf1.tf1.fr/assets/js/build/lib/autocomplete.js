!function(t,e){"use strict";function i(t,e,i){"string"==typeof t&&t&&(this.urlService=t,this.timeout=0,this.lastCheck="",this.inputActive=!1,this.options={elements:{},resultList:!1,resultClassName:"result",delayCheck:300,minChars:3,killerFn:!0,cacheResult:!1,cacheTimeValid:864e5},this.customFunctions=!1,i&&"function"==typeof i&&(this.customFunctions=i),e=e||{},Object.keys(e).forEach(function(t){this.options[t]=e[t]}.bind(this)),this.elementsList=[].slice.call(this.options.elements),s(function(){this.init()}.bind(this)))}var s,o;s=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)},o=function(t,e){function i(){e&&"function"==typeof e&&e(this.responseText)}if(!t||"string"==typeof t){var s=new XMLHttpRequest;s.onload=i,s.open("get",t,!0),s.send()}},i.prototype.init=function(){this.initialized=!0,this.createResultList(),this.elementsList.forEach(function(t){this.addEvents(t)}.bind(this))},i.prototype.createResultList=function(){return"object"==typeof this.options.resultList&&this.options.resultList.tagName?void(this.resultList=this.options.resultList):(this.resultList=e.createElement("ul"),"string"==typeof this.options.resultClassName&&(this.resultList.className+=" "+this.options.resultClassName),void e.body.appendChild(this.resultList))},i.prototype.addEvents=function(e){e.getAttribute("contenteditable")?t.addEventListener("keydown",function(t){}):e.addEventListener("keydown",function(t){this.inputActive=e,clearTimeout(this.timeoutFn),this.timeoutFn=setTimeout(function(){this.checkNeedSuggest(e,t)}.bind(this),this.options.delayCheck)}.bind(this))},i.prototype.checkNeedSuggest=function(t,e){var i=!1;return t.value&&(i=t.value),i&&i.length>=this.options.minChars?(this.lastCheck=i,void this.checkSuggest()):void(this.resultList.style.display="none")},i.prototype.checkSuggest=function(){var e="result_"+this.lastCheck;if(this.options.cacheResult&&t.localStorage){var i=JSON.parse(t.localStorage.getItem(e));if(null!==i){var s=Date.now();if(s<i.timeStamp+this.options.cacheTimeValid)return void this.showResult(i.result);t.localStorage.removeItem(e)}}o(this.urlService+"?q="+this.lastCheck,function(e){e=JSON.parse(e),this.showResult(e),this.options.cacheResult&&t.localStorage&&this.storeResult(e),this.lastCheck=""}.bind(this))},i.prototype.storeResult=function(e){var i="result_"+this.lastCheck,s=Date.now(),o=JSON.parse(t.localStorage.getItem(i)),n={};null!==o&&(n=o),n.timeStamp=s,n.result=e,t.localStorage.setItem(i,JSON.stringify(n))},i.prototype.showResult=function(t){if(this.resultList.innerHTML="",t&&"object"==typeof t&&(this.customFunctions?this.customFunctions(this.resultList,t,this.lastCheck):t.forEach(function(t){this.addResponse(t)}.bind(this))),this.options.killerFn){var i=function(t){var s=t.target,o=!0;if(s&&s===this.inputActive)o=!1;else for(;s&&"null"!==s.parent&&s.parentNode!==e.body;)if(s=s.parentNode,s===this.resultList){o=!1;break}o&&(clearTimeout(this.timeoutFn),this.resultList.style.display="none",e.body.removeEventListener("click",i))}.bind(this);e.body.addEventListener("click",i,!1)}},i.prototype.addResponse=function(t){var i=e.createElement("li");i.innerHTML=t.msg,this.resultList.appendChild(i)},"object"==typeof module&&"object"==typeof module.exports?module.exports=exports=i:"function"==typeof define&&define.amd?define(function(){return i}):"object"==typeof t&&(t.Autocomplete=i)}(window,document);