var Mf3ready=function(){var t=["default"],e={},i=function(t,e,i){if(Array.prototype.indexOf)return t.indexOf(e,i);for(var n=i||0,r=t.length;r>n;n++)if(t[n]===e)return n;
return-1},n={config:function(e){var i="object"==typeof e.tagsPriority&&null!=e.tagsPriority?e.tagsPriority:{};"number"==typeof e.defaultPriority?i["default"]=e.defaultPriority:i.hasOwnProperty("default")||(i["default"]=0);
var n=[];for(var r in i)"number"==typeof i[r]&&n.push({tag:r,priority:i[r]});n.sort(function(t,e){return t.priority-e.priority}),t=[];for(var s=0,o=n.length;o>s;s++)t.push(n[s].tag)
},defer:function(t,i,n){if(!("string"!=typeof t||t.length<3||"default"===t)&&"function"==typeof i){var r=[];arguments.length>3&&(r=Array.prototype.slice.call(arguments,3)),e.hasOwnProperty(t)||(e[t]=[]),e[t].push({fn:i,ctx:n,args:r})
}},go:function(n){for(var r=0,s=t.length;s>r;r++){if("default"===t[r]){e["default"]=[];for(var o in e)-1===i(t,o)&&(e["default"]=e["default"].concat(e[o]),e[o]=null)
}if(e.hasOwnProperty(t[r])){for(var a=0,l=e[t[r]].length;l>a;a++){var h=e[t[r]][a],c=h.ctx?h.ctx:this;h.fn.apply(c,h.args)}if(e[t[r]]=[],n===t[r])break}else if(n===t[r])break
}}};return n}();