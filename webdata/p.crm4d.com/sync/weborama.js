
(function(qName, w, d, UNDEFINED){
    
    var surls = ["//ib.adnxs.com/getuidnb?http%3A%2F%2Fp.crm4d.com%2Fsync%2Fappnexus%2Fs.gif%3Fuid%3D%24UID","//track.effitarget.com/cookie/get?pid=24","//hdmr.sddan.com/?pa=21004&r=m","//dmp.email-reflex.com/tags/graphinium_match.php","//p.ivimedia.net/track/pixel.gif?partner_id=4"];
    var nill = function(){};

    function toQueryString(obj) {
        var parts = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        return parts.join("&");
    }

    function loadJs(url, id){
        var ec = d.createElement("script"); ec.type="text/javascript"; ec.async = true;
        ec.src = url;
        if(id){ec.id=id};
        var h = d.getElementsByTagName("head")[0]; h.insertBefore(ec, h.firstChild);
    }
    var _jsonpSequence = 0;
    function jsonp(action, params, callback) {
        var cb = 'c4d_js_cb_' + (_jsonpSequence++);
        params.cb=cb;
        params.rnd=Math.random();
        var path = '//p.crm4d.com/' + action + '?' + toQueryString(params);
        w[cb] = callback || nill;
        loadJs(path, cb);
        return cb;
    }
    function ajax(url, callback){
        try{
            var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4 && xhr.status==200){
                    callback(xhr.responseText);
                }
            };
            xhr.open('GET', url, true);
            xhr.withCredentials = true;
            xhr.send();
        }catch(e){}
    }

    function send(url) {(new Image()).src = url;}

    function handleCommand(o) {
        var action = o[0];
        var params = o.length == 1 ? {} : o[1];
        var callback = o.length == 3 ? o[2] : nill;
        switch(action){
            case 'match' :
                return cookieMatch(params);
            case 'customer_attributes' :
                return customerAttributes(params, callback);
            default:
                return false;
        }
    }

    function bootstrap(){
        var oldQ = w[qName];
        w[qName] = {
            'push' : function(o) {
                if(o.length && o.length > 0) { handleCommand(o); }
            }
        };
        for (var i in oldQ){
            if(oldQ.hasOwnProperty(i))  w[qName].push(oldQ[i]);
        }
        for (var j = 0; j < surls.length; j++) {
            send(surls[j]);
        }
        
        w['eedmpst']={"dmp_id":"emdmpeasy"};loadJs('//asset.easydmp.net/js/dn_iframe.js');
        
    }
    function customerAttributes(params, callback){
        jsonp('customer/attrs', params, callback)
    }
    function cookieMatch(params) {
        var attrs = {};
        var pid=params.pid||'weborama';
        
        if(params.uid) attrs.uid=params.uid;
        if(params.origin) attrs.origin=params.origin;
        if(params.nbh) attrs.nbh=params.nbh;
        if(params.nzh) attrs.nzh=params.nzh;
        if(params.nzbh) attrs.nzbh=params.nzbh;
        if(params.nth) attrs.nth=params.nth;
        if(params.nmh) attrs.nmh=params.nmh;
        if(attrs.eh || attrs.uid) send('//p.crm4d.com/sync/'+pid+'/match?'+toQueryString(attrs));
    }

    bootstrap();
})('_c4d', window, document);
