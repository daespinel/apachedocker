<!doctype html>
<script type="text/javascript">
idzOrigin = 'https://www.darty.com';
(function(){function t(t){if(t.origin===e){var n=t.data.split("#"),r=n.shift(),i=n.shift();if(a[i]){var o=a[i].apply(null,n);t.source.postMessage(r+"#"+o,t.origin)}}}var e=idzOrigin,n=window,a={set:function(t,e){return localStorage.setItem(t,e)},get:function(t){return localStorage.getItem(t)},del:function(t){return localStorage.removeItem(t)},getset:function(t,e){var n=a.get(t);return null==n&&(n=e,a.set(t,e)),n}};n.addEventListener?n.addEventListener("message",t,!1):n.attachEvent&&n.attachEvent("onmessage",t),n.parent.postMessage("idz#ready","*")})();</script>
