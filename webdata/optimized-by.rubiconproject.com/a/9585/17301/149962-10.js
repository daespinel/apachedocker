rubicon_cb = Math.random(); rubicon_rurl = document.referrer; if(top.location==document.location){rubicon_rurl = document.location;} rubicon_rurl = escape(rubicon_rurl);
window.rubicon_ad = "3623474" + "." + "js"; window.rubicon_creative = "4134244" + "." + "js"; document.write("\n"); rubicon_tag_code = "<script language=\'javascript\' type=\'text/javascript\'>\nfunction rp_anim(e,s,u,f,t,tm) // graceful expansion/collapse function\n{\n  if (!e) return;\n  g = (f > t) ? \'c\' : \'e\';\n  var st = new Date().getTime(),\n  tmr = setInterval( function() {\n    var stp = Math.min( 1, ( new Date().getTime() - st ) / tm );\n    if (g === \'e\') {\n      if (!e.s) { e.setAttribute(s, f + stp * (t - f)) } else { e[s] = f + stp * (t - f) }\n      if (e.style[s]) e.style[s] = (f + stp * (t - f)) + u;\n    } else {\n      if (!e.s) { e.setAttribute(s, f - stp * (f - t)) } else { e[s] = f - stp * (f - t) }\n      if (e.style[s]) e.style[s] = (f - stp * (f - t)) + u;\n    }\n    if ( stp === 1 ) clearInterval( tmr );\n  }, 25 );\n  if (!e.s) { e.setAttribute(s, f) } else { e[s] = f }\n  if (e.style[s]) { e.style[s] = ( f + u ) } else { e.style[s] = f + u }\n}\n \nrp_resize = function(sz)\n{\n  var d, w, sh, h;\n  w = sz.substring(0, sz.indexOf(\'x\'));\n  h = sz.substring(sz.indexOf(\'x\') + 1, sz.length);\n  d = (parent.frameElement) ? parent.FrameElement : window.frameElement;\n \n  if (d.getBoundingClientRect().height) {\n    sh = d.getBoundingClientRect().height; // for modern browsers\n  } else {\n    sh = d.offsetHeight; // for oldIE\n  }\n \n  if (!d.width) { d.setAttribute(\'width\', parseInt(w)) } else { d.width = parseInt(w) }\n  if (d.style.width) d.style.width = parseInt(w)+\'px\';\n \n  rp_anim(d, \'height\', \'px\', sh, h, 500);\n}\n<\/script>\n<script language=\"JavaScript\" type=\"text/javascript\">\nrp_account   = \'9585\';\nrp_site      = \'17301\';\nrp_zonesize  = \'47063-15\'\nrp_adtype    = \'js\';\nrp_smartfile = \'[SMART FILE URL]\';\n<\/script>\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/9585.js\"><\/script>\n<script language=\'javascript\' type=\'text/javascript\'>\nrp_resize(\'300x250\'); // set new size dimensions here\n<\/script>"; rubicon_tag_code = rubicon_tag_code.replace(/##RUBICON_CB##/g,rubicon_cb); document.write(rubicon_tag_code); document.write("<DIV STYLE=\"height: 0px; width: 0px; overflow: hidden\">\n<script>\n(function() {var proto = document.location.protocol; var server=\"https://tap2-cdn.rubiconproject.com\"; if (proto == \"https:\") server=\"https://tap-secure.rubiconproject.com\"; document.write(\'<IFRAME SRC=\"\'+server+\'/partner/scripts/rubicon/emily.html?rtb_ext=1&pc=9585/17301&geo=eu&co=fr\" FRAMEBORDER=\"0\" MARGINWIDTH=\"0\" MARGINHEIGHT=\"0\" SCROLLING=\"NO\" WIDTH=\"0\" HEIGHT=\"0\" style=\"height: 0px; width: 0px\"></IFRAME>\'); })();\n<\/script>\n\n</DIV>");