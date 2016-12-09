afAd = {
	async: typeof afAd_async != 'undefined' ? afAd_async : false,
	firstInitDone: false,
	scriptObjs: {},
	disabledFormats: {},
	deferredFormats: [],
	cleanupFormats: [],
	exclusionsAjax: [],
	call: function(domain, siteid, pageid, fids, target) {
		afAd.domain = domain;
		afAd.siteid = siteid;
		afAd.pageid = pageid;
		afAd.target = target+(navigator.userAgent.toLowerCase().indexOf('msie')>0 && document.compatMode=='BackCompat' ? ';iequirksmode' : '');
		afAd.askedFormats = fids.split(',');
		
		if (window.sas) {
			/////////////// OneCall ac call
			var renderMode = afAd.async ? 2 : 0;
			sas.cmd.push(function() {
				sas.setup({
					networkid: 1,
					domain: 'https://' + domain,
					async: afAd.async,
					renderMode: renderMode
				});
			});
			sas.cmd.push(function() {
				sas.call('onecall', {
					siteId: siteid,
					pageId: pageid,
					formatId: fids,
					target: afAd.target
				}, {
					async:  afAd.async,
					// Callback for async OneCall
					beforeRender: function(format) {
						afAd.init(sas_manager);
						afAd.publishEvent('ad.render');
					}
				});
			});
		} else {
			/////////////// OneCall old call
			document.write('<scr'+'ipt type="text/javascript" src="https://'+domain+'/call2/pubjall/'+siteid+'/'+pageid+'/'+fids+'/'+Math.round(Math.random()*10000000000)+'/'+afAd.target+'?"></scr'+'ipt>');
		}
	},
	init: function(sasmgr) {
		// OneCall async: only init sas_manager once!
		if (sasmgr.afad_init) return;
		
		// Init global vars
		exclusions = (afAd.exclusions || 
			[
				[6917, [117,17821,4856,300,12,6965,8119,118]],
				[300, [117,17821,4856,12,3,3206,9888,16543,16544,16545,17231,118]],
				[4856, [117,17821]],
				[17821, [117,4856,300,8119,118,6917]],
				[4040, [4008]]
			]
		);
		multipleformats = (afAd.multipleformats || 
			{ f4040: 3, f3206: 4, f8120: 4, f3243: 8, f14140: 4, f21150: 6, f27316: 5 }
		);
		grouphiding = (afAd.grouphiding || []);
		
		// Disable intrusive formats (interstitial) on ads refresh
		if (afAd.firstInitDone) {
			afAd.exclusionsAjax.push(6965);
		}
		
		// Remove all formats that shouldn't be refreshed
		// Must be done here to avoid applying exclusion rules on format already excluded!
		for (var k = 0; k < afAd.exclusionsAjax.length; k++) {
			afAd.disable(afAd.exclusionsAjax[k], 'async');
		}
		
		afAd.scriptObjs = {};
		var r1 = /^\<(script|iframe)(\s.*?)\>(.*)$/i, r2=/\s([a-z]+)=(?:"([^"]*)"|([a-z0-9_]+))/gi;
		var nbs = 0;
		for (var ffid in sasmgr.formats) {
			var scriptUrlFn = null;
			if (typeof sasmgr.formats[ffid].scriptURL != 'undefined') {
				scriptUrlFn = sasmgr.formats[ffid].scriptURL;
			} else {
				scriptUrlFn = function() { return '<scr'+'ipt type="text/javascr'+'ipt" src="'+sasmgr.formats[ffid].scriptSrc()+'"></scr'+'ipt>'};
			}
			var _s=scriptUrlFn();
			t = r1.exec(_s);
			var o = { _script: _s, type: t[1].toLowerCase(), attrs: {}, trail: t[3] };
			eval(t[2].replace(r2,'o.attrs.$1="$2$3";'));
			afAd.scriptObjs[ffid] = o;
			nbs++;
		}
		afAd.scriptObjs.length = nbs;
		
		for (var ffid in sasmgr.formats) {
			if (afAd.matchExclu(ffid)) {
				afAd.matchExclu(ffid, true);
				break;
			}
		}
		for (var k = 0, a = exclusions; k < a.length; k++) {
			if (afAd.exists(a[k][0])) {
				for (var fids = a[k][1], i = 0; i < fids.length; i++) {
					afAd.disable(fids[i], 'ex');
				}
			}
		}
		
		var cssToHide = [];
		for (var i = 0, fids = afAd.askedFormats; i < fids.length; i++) {
			var fid = fids[i];
			if (!afAd.exists(fid)) {
				cssToHide.push('.sas_FormatID_' + fid);
			}
			for (var j = 2, n = multipleformats['f' + fid] || 0; j <= n; j++) {
				if (!afAd.exists(fid+'_'+j)) {
					cssToHide.push('.sas_FormatID_' + fid + '_' + j);
				}
			}
		}
		
		for (var k = 0, a = grouphiding; k < a.length; k++) {
			var h = true;
			for (var fids = a[k][0], i = 0; i < fids.length; i++) {
				h &= !afAd.exists(fids[i]);
			}
			if (h) { cssToHide.push(a[k][1]); }
		}
		
		if (!afAd.async) {			
			if (cssToHide.length > 0) {
				document.write('<style type="text/css">'+cssToHide.join(',')+' { display:none; }</style>');
			}
		} else {
			if (cssToHide.length > 0) {
				afAd.setCss(cssToHide.join(',') + ' { display:none; }');
			}
			afAd.clean();
		}
		
		sasmgr.afad_init = true;
		afAd.firstInitDone = true;
	},
	matchExclu: function(fid,apply) {
		if (typeof(fid) == 'string') fid = parseInt(fid.replace(/f/i,''));
		if (!afAd.exists(fid)) return false;
		
		for (var k = 0, a = exclusions; k < a.length; k++) {
			if (fid == a[k][0]) {
				for (var fids = a[k][1], i = 0; i < fids.length; i++) {
					if (afAd.exists(fids[i])) {
						if (apply) {
							afAd.disable(fids[i], 'pr'); 
						} else {
							return true;
						}
					}
				}
			}
		}
		
		for (var k = 0, a = exclusions; k < a.length; k++) {
			if (afAd.exists(a[k][0])) {
				for (var fids = a[k][1], i = 0; i < fids.length; i++) {
					if (fid == fids[i]) {
						if (apply) {
							afAd.disable(a[k][0], 'pr'); 
						} else {
							return true;
						}
					}
				}
			}
		}
		
		return false;
	},
	setCss: function(style) {
		var css = document.getElementById('afAdExclusions');
		if (!css) {
			css = document.createElement('style');
			css.type = 'text/css';
			css.id = 'afAdExclusions';
			document.body.appendChild(css);			
		}
		css.innerHTML = style;
	},
	render: function(fid, deferred) {
		if (window.sas && afAd.async) {
			// Smart AdServer ac call async
			if (fid) {
				sas.cmd.push(function() {
					sas.render(fid);
				});
			} else {
				sas.cmd.push(sas.render);
			}
		} else if (!afAd.disabledFormats[fid]) {
			if (window.sas && !deferred) {
				// Smart AdServer ac call sync
				sas.render(fid);
			} else {
				// backward compatibility for non ac call AND deferred ads
				// TODO : cleanup when onmeda has migrated to ac call AND all sites to full async
				var s = afAd.getScript(fid);
				document.write(s);
			}
		}
	},
	renderPlaceholder: function(fid) {
		if (afAd.exists(fid)) {
			var a=afAd.scriptObjs['f'+fid].attrs;
			var s=(a.width ? 'width:'+a.width+'px;' : '')+
				(a.height ? 'height:'+a.height+'px;' : '');
			document.write('<div id="SaS_placeholder_'+fid+'"'+(s ? ' style="'+s+'"' : '')+'></div>');
		}
	},
	renderDeferred: function(fid) {
		afAd.utils.patchDocumentWrite(true);
		if (afAd.exists(fid)) {
			afAd.render(fid, true);
			afAd.deferredFormats.push(fid);
		}
	},
	placeAllDeferred:function() {
		var ifrUnpatchList=[];
		for (var k=0,fids=afAd.deferredFormats;k<fids.length;k++) {
			var fid=fids[k], r=document.getElementById('SaS_render_'+fid), p=document.getElementById('SaS_placeholder_'+fid);
			if (r && p) {
				for (var i=0,a=afAd.utils.getByTagName(r,'script');i<a.length;i++)
					afAd.utils.remove(a[i]);
				ifrUnpatchList=ifrUnpatchList.concat(afAd.utils.getByTagName(r,'iframe'));
				p.parentNode.insertBefore(r,p);
				afAd.utils.remove(p);
			}
		}
		for (var i=0;i<ifrUnpatchList.length;i++) {
			var o=ifrUnpatchList[i], s=(o['afadsrc'] || o.getAttribute('afadsrc'));
			if (s) o.src=s;
		}
		afAd.utils.remove(document.getElementById('SaS_deferBox'));
		afAd.utils.patchDocumentWrite(false);
	},
	exists: function(fid) {
		return (afAd.scriptObjs && afAd.scriptObjs['f'+fid]);
	},
	getScriptURL: function(fid) {
		var s='';
		if (afAd.exists(fid)) {
			var o=afAd.scriptObjs['f'+fid], a=o.attrs;
			if (!o.done) {
				s=a.src;
				o.done=true;
			}
		}
		return s;
	},
	getScript: function(fid) {
		var o=afAd.scriptObjs['f'+fid], a=o.attrs, s='';
		if (!o.done) {
			if (o.type=='script' && !a.charset)
				a.charset='iso-8859-1';
			if (o.type=='iframe') {
				var iid=/\/diff\/1\/(\d+)\//gi.exec(a.src);
				if (iid) a.id='SaS_InsertionID_'+iid[1];
			}
			s='<'+o.type; for (var i in a) s+=' '+i+'="'+a[i]+'"'; s+='>'+o.trail;
			o.done=true;
		}
		return s;
	},
	disable: function(fid, m) {
		afAd.disabledFormats[fid] = m;
		
		afAd.scriptObjs['f'+fid+'-disabled-'+m] = afAd.scriptObjs['f'+fid];
		delete afAd.scriptObjs['f'+fid];
		
		if (afAd.async && sas_manager.exists(fid)) {
			sas_manager.formats['f' + fid + '-disabled-' + m] = sas_manager.formats['f' + fid];
			delete sas_manager.formats['f'+fid];
		}
	},
	// Refresh formats of the page
	refresh: function(fids, target) {
		if (typeof sas == 'undefined') return;
		
		// Clean all formats
		sas.cmd.push(function() {
			sas_unrenderedFormats = fids.split(',');
			for (var i = 0, l = sas_unrenderedFormats.length; i < l; i++) {
				sas.clean(sas_unrenderedFormats[i]);
			}
		});
				
		// Async OneCall
		sas.cmd.push(function() {
			sas.call('onecall', {
				siteId: sas_siteId,
				pageId: sas_pageId,
				formatId: fids,
				target: (target ? target : sas_target)
			}, {
				async:  true,
				forceMasterFlag: true,
				resetTimestamp: true,
				beforeRender: function() {
					afAd.init(sas_manager);
					afAd.publishEvent('ad.render');
				}
			});
		});
	},
	// Cleanup formats of the page
	clean: function(fids) {
		if (fids) {
			// Clean a specific format
			if (typeof sas != 'undefined' && sas.clean) {
				var fid, container, formats = fids.split(',');
				for (var i = 0, l = formats.length; i < l; i++) {
					fid = formats[i];
					
					sas.clean(fid);
					
					// Failover if format is not in <div id="sas_XXX"></div> container
					var container = document.getElementById('SaS_render_' + fid);
					if (container) container.innerHTML = '';
				}
			}
			
		} else {
			// Clean all formats of the page
			if (typeof sas != 'undefined' && sas.clean) {
				sas.clean();
			}
			
			// Clean homemade templates
			afAd.publishEvent('ad.clean');
			
			// TODO : rework and use PubSub instead
			for (var i=0; i < afAd.cleanupFormats.length; i++) {
				afAd.cleanupFormats[i]();
			}
			afAd.cleanupFormats = [];
			
		}
	},
	utils: {
		remove: function(o) {
			if (o) o.parentNode.removeChild(o);
		},
		getByTagName: function(r,t) {
			var o=[];
			for (var i=0,a=r.getElementsByTagName(t);i<a.length;i++)
				o.push(a[i]);
			return o;
		},
		patchDocumentWrite: function(active) {
			var pdw=afAd.utils.patchDocumentWrite;
			if (active==pdw.active) return;
			if (!pdw.oDW) {
				pdw.oDW=document.write; pdw.oDWln=document.writeln;
				var ifrPatch=function(s) { return s.replace(/(<iframe[^>]*?)\ssrc=/i, '$1 afadsrc='); };
				pdw.pDW=(pdw.oDW.call ? function(s) { pdw.oDW.call(document,ifrPatch(s)); } : function(s) { pdw.oDW(ifrPatch(s)) });
				pdw.pDWln=(pdw.oDWln.call ? function(s) { pdw.oDWln.call(document,ifrPatch(s)); } : function(s) { pdw.oDWln(ifrPatch(s)) });
			}
			if (active) {
				document.write=pdw.pDW; document.writeln=pdw.pDWln;
			} else {
				document.write=pdw.oDW; document.writeln=pdw.oDWln;
			}
			pdw.active=active;
		},
		debug: function(h) {
			var d='';
			for (var ffid in afAd.scriptObjs)
				if ((o=afAd.scriptObjs[ffid]) && afAd.scriptObjs[ffid]._script)
					d+=ffid+': '+(h
						? o._script.replace(/\>/g,'&gt;').replace(/\</g,'&lt;').replace(/src="(.*?target=)(.*?)"/i,'src="<u style="cursor:pointer;" onclick="window.open(\'$1$2\');">$1...</u>"')+'<br>'
						: o._script+'\n'
					);
			return d;
		}
	},
	// Return height of top formats
	topAdsHeight: function(containers) {
		containers = (containers ||
			[
				'SaS_render_117',
				'SaS_render_4856',
				'SaS_render_6917',
				'SaS_render_17821',
				'af_background_relDiv'
			]
		);
			
		var height = 0;
		for (var i = 0; i < containers.length; i++) {
			var e = document.getElementById(containers[i]);
			if (e) height += e.offsetHeight;
		}
		
	    return height;
	},
	// Publication - subscription pattern for ads
	eventCallbacks: {},
	subscribeEvent: function(eventName, callback) {
		if (!this.eventCallbacks[eventName]) this.eventCallbacks[eventName] = [];
		this.eventCallbacks[eventName].push(callback);
	},
	unsubscribeEvent: function(eventName, callback) {
		if (!this.eventCallbacks[eventName]) return;
		
		for (var i = 0, l = this.eventCallbacks[eventName].length; i < l; i++) {
			if (this.eventCallbacks[eventName][i] == callback) {
				delete this.eventCallbacks[eventName][i];
				return;
			}
		}
	},
	publishEvent: function(eventName, response) {
		var callbacks = this.eventCallbacks[eventName];
		
		response = (response || {});
		response.status = 'success';
		response.eventName = eventName;
		
		if (callbacks && callbacks.length) {
			for (var i = 0; i < callbacks.length; i++) {
				if (callbacks[i]) {
					callbacks[i](response);
				}
			}
			this.eventCallbacks[eventName] = [];
		}
	}
};

/* customized scripts to cache most of the rendering // replaces inc_pubinov.js */
afAdScripts = {
	// log into console
	log: function(s) {
		if (false && typeof(console)!='undefined' && console.log) console.log(s);
	},
	// log JS errors into stats&logs with a pixel
	logError: function(n,d) {
		afAdScripts.logError.img=new Image();
		afAdScripts.logError.img.src='/wo'+'rld/js'+'_err'+'pix.a'+'sp'+'?n='+n+(d ? '&d='+encodeURIComponent(d) : '')+'&'+Math.round(Math.random()*99999);
	},
	// add event listener to an element
	addEvent: function(elt,event,listener,capture) {
		// afAdScripts.logError(2000, 'afAdScripts.addEvent still used');
		if (elt && elt.addEventListener) {
			elt.addEventListener(event,listener,capture); return true;
		} else if (elt && elt.attachEvent) {
			var d=elt.attachEvent('on'+event,listener); return d;
		} else {
			var oldListener=elt['on'+event];
			elt['on'+event]=function(e) {
				if (oldListener) oldListener(e);
				return listener(e);
			}
			return oldListener;
		}
	},
	// get window size+position
	windowSize: function() {
		// afAdScripts.logError(2000, 'afAdScripts.windowSize still used');
		var w = window, e = document.documentElement, b = document.body;
		var width = ( w.innerWidth ? w.innerWidth : ( e && e.clientWidth ? e.clientWidth : (b &&  b.clientWidth ? b.clientWidth : 0) ) );
		var height = ( w.innerHeight ? w.innerHeight : ( e && e.clientHeight ? e.clientHeight : (b &&  b.clientHeight ? b.clientHeight : 0) ) );
		var left = ( w.pageXOffset ? w.pageXOffset : ( e && e.scrollLeft ? e.scrollLeft : (b &&  b.scrollLeft ? b.scrollLeft : 0) ) );
		var top = ( w.pageYOffset ? w.pageYOffset : ( e && e.scrollTop ? e.scrollTop : (b &&  b.scrollTop ? b.scrollTop : 0) ) );
	    return { l:left, t:top, r:left+width, b:top+height, w:width, h:height };
	},
	// get document size
	documentSize: function() {
		// afAdScripts.logError(2000, 'afAdScripts.documentSize still used');
		var b = top.document.body, e = top.document.documentElement;
    	var width =	Math.max(b.scrollWidth, e.scrollWidth, b.offsetWidth, e.offsetWidth, b.clientWidth, e.clientWidth)
	    var height = Math.max(b.scrollHeight, e.scrollHeight, b.offsetHeight, e.offsetHeight, b.clientHeight, e.clientHeight)
	    return { w:width, h:height };
	},
	// get element size+position
	findPos: function(o) {
		// afAdScripts.logError(2000, 'afAdScripts.findPos still used');
		// if (window.console && console.trace) console.trace();
		// TODO : remove from af_seealso
		if (!o || o == document.body) return { l: 0, t: 0 };
		var l = t = 0, b = document.body, w = o.offsetWidth, h = o.offsetHeight;
		if (o.offsetParent) {
			l = o.offsetLeft - o.scrollLeft;
			t = o.offsetTop - o.scrollTop;
			while (o = o.offsetParent) {
				l += o.offsetLeft - (o != b ? o.scrollLeft : 0);
				t += o.offsetTop - (o != b ? o.scrollTop : 0);
			}
		}
		return { l: l, t: t, r: l + w, b: t + h, w: w, h: h };
	}
};

/* referrer tracking */
if (typeof (af_reftrack) == 'undefined') af_reftrack = function (noTrackDomain) {
	var e; var r;
	if (af_reftrack.pix) return;
	if (typeof (noTrackDomain) != 'undefined' && noTrackDomain) {
		e = noTrackDomain;
	} else {
		e = document.domain;
		if (document.domain && typeof (sas_ddotpos) == 'undefined' && document.domain.indexOf('xiti.com') < 0) try {
			sas_ddotpos = e.indexOf('.');
			if (sas_ddotpos > 0) e = e.substr(sas_ddotpos + 1);
		} catch (e) { }
	}
	try { r = top.document.referrer; }
	catch (e) { r = document.referrer; }
	if (typeof (r) != 'undefined') {
		r = r.toLowerCase();
		e = e.toLowerCase();
		var pos; pos = r.indexOf(e);
		if (pos == -1 || pos > 20) {
			var url; url = 'https://www.aufem' + 'inin.com/';
			url = url + 'world/communaute/mot' + 'eur/tracking_pix.asp';
			url = url + '?r=' + escape(r) + '&tstamp=' + (Math.random() * 100000000);
			af_reftrack.pix = new Image();
			af_reftrack.pix.src = url;
		}
	}
}

/* seealso videos with autoplay */
af_seealso = {
	onload_done: false,
	pageid: 0,
	target: '',
	domain: '',
	url: '/world/semantic/ifr_video.asp',
	init: function(o) {
		var m = document.getElementById('afsa_VidMenu');
		if (m) {
			l = m.childNodes;
			if (l) {
				if (o && !isNaN(o)) af_seealso.pageid = o; // TEMP
				
				// init specific values if any
				if (o && o.pageid) af_seealso.pageid = o.pageid;
				if (o && o.target) af_seealso.target = o.target;
				if (o && o.domain) af_seealso.domain = o.domain;
				if (o && o.url) af_seealso.url = o.url;
				
				// init clicks on seealso items
				af_seealso.prevItem = l[0];
				for (var i = 0; i < l.length; i++) {
					afAdScripts.addEvent(l[i], 'click', function() {
							af_seealso.play(this, false);
							af_seealso.prevItem.className = 'item';
							this.className = 'item selected';
							af_seealso.prevItem = this;
							var t = document.getElementById('afsa_title');
							if (t) {
								if (t.href) {
									var link = this.getElementsByTagName('a')[0];
									if (link) {
										t.href = link.href;
										t.innerHTML = link.getElementsByTagName('span')[0].innerHTML;
									}
								} else {
									t.innerHTML = t.innerHTML.substr(0, t.innerHTML.indexOf(': ')+2) + this.getElementsByClassName('label')[0].innerHTML;
								}
							}
						}, false);
				}
				
				// init event listeners
				if (!af_seealso.autoplay_disabled) {
					afAdScripts.addEvent(window, 'load', function() { af_seealso.onload_done=true; af_seealso.autoplay(); }, false);
					afAdScripts.addEvent(window, 'scroll', function() { af_seealso.autoplay(); }, false);
				} else {
					af_seealso.onload_done=true;
				}
			}
		}
	},
	autoplay: function(force) {
		if (!af_seealso.autoplay_done && af_seealso.onload_done) {
			if (typeof(force) != 'boolean') force=false;
			if (af_seealso.autoplay_disabled && !force) return;
			var p = document.getElementById('afsa_container');
			if (p) {
				var w = afAdScripts.windowSize(), i = afAdScripts.findPos(p);
				if (force || (w && i && w.l <= i.l && w.r >= i.r &&  w.t <= i.t  && w.b >= i.b)) {
					af_seealso.autoplay_done = true;
					var m = document.getElementById('afsa_VidMenu');
					if (m) first = m.firstChild;
					if (first) af_seealso.play(first, !force);
				}
			}
		}
	},
	play: function(o, autoplay) {
		var c = document.getElementById('afsa_container');
		if (c) {
			var f = document.getElementById('afsa_iframe');
			if (!f) {				
				f = document.createElement('iframe'); 
				f.setAttribute('id', 'afsa_iframe');
				f.setAttribute('scrolling', 'no');
				f.setAttribute('frameborder', 0);
				f.setAttribute('width', '100%');
				f.setAttribute('height', '100%');
				c.innerHTML = '';
				c.appendChild(f);
			}
			
			if (o) {
				f.setAttribute('src', (af_seealso.domain ? '//' + af_seealso.domain : '')
					+ af_seealso.url
					+ '?url=' + encodeURIComponent(o.getAttribute('url'))
					+ '&w=' + o.getAttribute('w')
					+ '&h=' + o.getAttribute('h')
					+ '&rid=' + o.getAttribute('rid')
					+ '&pubp=' + af_seealso.pageid
					+ '&pubt=' + encodeURIComponent(sas_target + ';' + af_seealso.target + ';autoplay=' + autoplay)
					+ '&pubd=' + (af_seealso.disable ? 1 : 0)
					+ '&spid=' + o.getAttribute('spid')
					+ '&t=' + encodeURIComponent(o.getAttribute('t'))
					+ '&ts=' + Math.floor(Math.random()*100000)
				);
			}
			
			// GA tracking
			af_ua_trackEvent('SeeAlsoVideo', 'IframeSetting', autoplay ? 'autoplay' : 'userplay', null, true);
		}
	}
};