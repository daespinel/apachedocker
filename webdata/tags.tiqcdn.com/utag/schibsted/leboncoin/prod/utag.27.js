//tealium universal tag - utag.27 ut4.0.201509290418, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"cat":"category","subcat":"subcategory","store_id":"store_id","titre":"name","prix":"price","region":"region","city":"locality","cp":"postalCode","pagetype":"contentType","ad":"adId","ca_type":"adType","spt_category":"formatCategory","spt_content_type":"contentType","spt_pageid":"pageid","search":"keywords","nbresultat":"numResults","prixmin":"minPrice","prixmax":"maxPrice","surfacemin":"minSurface","surfacemax":"maxSurface","chambremin":"minRooms","chambremax":"maxRooms","anneemin":"minYear","anneemax":"maxYear","kmmin":"minMileage","kmmax":"maxMileage","nrj":"fuelType","vitesse":"transmission","fonction":"occupationalCategory","activites":"industry","etudes":"education","temps":"contractLength"};u.extend=[function(a,b){try{if(b.cat.length>0){if(b.subcat.length>0){b.spt_category=b.cat+' > '+b.subcat;}else{b.spt_category=b.cat;}}}catch(err){utag.DB(err);}},function(a,b,c,d,e,f,g){d=b['pagetype'];if(typeof d=='undefined')return;c=[{'adview':'ClassifiedAd'},{'listing':'Listing'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['spt_content_type']=c[e][f];m=true};};if(m)break};if(!m)b['spt_content_type']='Content';},function(a,b){try{if(1){b['spt_pageid']=b['dom.url']}}catch(e){utag.DB(e)}},function(a,b){try{if(b['pagetype'].toString().indexOf('adview')>-1){b['spt_pageid']=b['ad']}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"pageid":"","category":"","subcategory":"","store_id":"","name":"","price":"","region":"","locality":"","postalCode":"","contentType":"","adId":"","adType":"","formatCategory":"","keywords":"","numResults":"","minPrice":"","maxPrice":"","minSurface":"","maxSurface":"","minRooms":"","maxRooms":"","propertyType":"","minYear":"","maxYear":"","minMileage":"","maxMileage":"","fuelType":"","transmission":"","contractType":"","occupationalCategory":"","industry":"","education":"","contractLength":"","experience":""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
(function(){for(item in u.data){if(u.data[item]=='undefined')u.data[item]='';u.data[item]=u.data[item].replace(/'/g,'&#39;');}
var d=document,g=d.createElement('script'),f=d.createElement('script'),s=d.getElementsByTagName('script');g.src="//d1nf1ogr7o23z7.cloudfront.net/autoTracker.min.js";f.type="text/javascript";f.innerHTML="var _opt = {pageId: '"+u.data.pageid+"',"+
"clientId: '"+(b['ut.env']=="prod"?'leboncoin':'event-sdk-js')+"',"+
"userId: '"+u.data.store_id+"',"+
"provider: {"+
"category: '"+u.data.category+"',"+
"subCategory: '"+u.data.subcategory+"'}, "+
"userIdDomain: 'leboncoin.fr', "+
"object: {"+
"name: '"+u.data.name+"', "+
"price: '"+u.data.price+"', "+
"region: '"+u.data.region+"', "+
"locality: '"+u.data.locality+"', "+
"postalCode: '"+u.data.postalCode+"', "+
"adId: '"+u.data.adId+"', "+
"adType: '"+u.data.adType+"', "+
"keywords: '"+u.data.keywords+"', "+
"numResults: '"+u.data.numResults+"', "+
"minPrice: '"+u.data.minPrice+"', "+
"maxPrice: '"+u.data.maxPrice+"', "+
"maxSurface: '"+u.data.maxSurface+"', "+
"minRooms: '"+u.data.minRooms+"', "+
"maxRooms: '"+u.data.maxRooms+"', "+
"propertyType: '"+u.data.propertyType+"', "+
"minYear: '"+u.data.minYear+"', "+
"maxYear: '"+u.data.maxYear+"', "+
"minMileage: '"+u.data.minMileage+"', "+
"maxMileage: '"+u.data.maxMileage+"', "+
"fuelType: '"+u.data.fuelType+"', "+
"transmission: '"+u.data.transmission+"', "+
"contractType: '"+u.data.contractType+"', "+
"occupationalCategory: '"+u.data.occupationalCategory+"', "+
"industry: '"+u.data.industry+"', "+
"education: '"+u.data.education+"', "+
"contractLength: '"+u.data.contractLength+"', "+
"experience: '"+u.data.experience+
"'}, "+
"contentType: '"+u.data.contentType+"', "+
"category: '"+u.data.formatCategory+"'};";s[s.length-1].parentNode.insertBefore(f,s[s.length-1]);s[0].parentNode.insertBefore(g,s[0]);})();}};utag.o[loader].loader.LOAD(id);})("27","schibsted.leboncoin");}catch(error){utag.DB(error);}
