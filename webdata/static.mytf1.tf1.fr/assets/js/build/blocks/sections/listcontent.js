define([],function(){function t(){var t={};return class_userlib&&(t=class_userlib.getDevice()),"mobile"===t.type?e="mobile":"tablet"===t.type&&(e="tablette"),this.addPlayableVideos(),this}var e="web";return t.prototype.addPlayableVideos=function(){var t=[].slice.call(document.getElementsByClassName("list_content_cover"));t.forEach(function(t){var a=t.getAttribute("data-video")||!1,i="true"==t.getAttribute("data-embed")?!0:!1;if(i&&a){a+="mobile"===e?"#forceOASTag="+t.getAttribute("data-ad-smartphone").split("?")[0]:"tablette"===e?"#forceOASTag="+t.getAttribute("data-ad-tablette").split("?")[0]:"#forceOASTag="+t.getAttribute("data-ad-desktop").split("?")[0];var l=(t.getElementsByClassName("list_content_info")[0],t.getElementsByClassName("list_content_video")[0]);l.addEventListener("click",function(t){var e=document.createElement("iframe");e.frameBorder=0,e.width="100%",e.height="100%",e.setAttribute("src",a),this.appendChild(e)})}})},t});