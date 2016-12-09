define([],function(){return{whenAvailable:function(t,e){var i=5;window.setTimeout(function(){window[t]?e(window[t]):window.setTimeout(arguments.callee,i)},i)}}});
