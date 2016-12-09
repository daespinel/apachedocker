/*!CK:3237240256!*//*1444769287,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["emB7J"]); }

__d('Jtrace',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();g.start=function(i){var j=Function.prototype.call,k={};Function.prototype.call=function(l){try{if(l instanceof Object&&'functionDetails' in l){var n=arguments[1];if(typeof n==='string'&&!k[n]){k[n]=1;if(Math.random()<i.sample){var o=localStorage.jt=1+~~localStorage.jt;if(o<=i.max)h.post('jtrace',{j:n,t:Date.now()});}}}else if(i.snap)this.call=j;}catch(m){}return j.apply(this,arguments);};};},null);
__d("XUFIActorChangeController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ufi\/actor\/change\/",{});},null,{});