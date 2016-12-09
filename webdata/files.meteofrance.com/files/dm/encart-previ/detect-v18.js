// JavaScript Document


if (!window.hm_encart_teasers)
{

	
	window.hm_ie = (function(){
	
		var v = 3,
			div = document.createElement('div'),
			all = div.getElementsByTagName('i');
	
		while (
			div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		);
	
		return v > 4 ? v : null;
	
	}());
	 
	 
	 
	 window.hm_resetOrangeVar= function ()
	 {
		window.v1 = ''; 
		window.v2 = ''; 
		window.v3 = ''; 
		window.v4 = ''; 
		window.v5 = ''; 
		window.v6 = ''; 
		window.v7 = ''; 
		window.v8 = ''; 
		window.v9 = ''; 
		window.v10 = ''; 
		window.label = '' ;
		window.backurl = '' 
	 }
	function hm_split_parameters(st)
	{
		if (st==null) st="";
		if (st instanceof Object) return st;	
		var s=st.split(new RegExp("[&]","g"));
		var ob=new Object();
		for(var it=0;it<s.length;it++)
		{
			var st=s[it];
			if (st!="")
			{
				var g=st.split(new RegExp("[=]","g"),2);		
				ob[g[0]]=decodeURIComponent(g[1]);		
			}
		}
		return ob;	
	}
	function hm_split_url(st)
	{
		var s=st.split(new RegExp("[\?]","g"),2);
		var ob=new Object();
		ob.url=s[0];
		ob.params=hm_split_parameters(s[1]);
		return ob;	
	}
	function hm_comb_parameters(s)
	{
		var rs="";
		for(var it in s)
		{
			if (rs!="") rs+="&";
			var v=s[it];
			rs+=it+"="+encodeURIComponent(v);
			
		}
		return rs;	
	}
	
	function hm_comb_url(s)
	{
		var rs=s.url;
		var p=hm_comb_parameters(s.params);
		if (p!="") rs+="?"+p;
		return rs;	
	}
	function hm_url_addvar(u,p,v)
	{
		var o=hm_split_url(u);
		o.params[p]=v;
		return hm_comb_url(o);
	}
	
	window.hm_add_js=function (jsname)
	{
		if (!window.hm_scripts) window.hm_scripts=new Object();
		if (window.hm_scripts[jsname]) return window.hm_scripts[jsname];
		var js = document.createElement("script");
		js.type = "text/javascript";
		
		js.src = hm_url_addvar(jsname,"rd",Math.floor(Math.random()*1000000000));	
		document.getElementsByTagName("head")[0].appendChild(js);			
		window.hm_scripts[jsname]=js;
	}

	window.hm_domCodeExec=function(divContent)
	{
		switch(divContent.nodeName.toUpperCase())
		{
			case "SCRIPT":
				if (divContent.src!="") window.hm_add_js(divContent.src);
				eval(divContent.innerHTML);		
				break;
			
		}
		if (divContent.hasChildNodes())
		{
			var All=divContent.childNodes;
			for (var i=0; i<All.length; i++) 
			{
				var v=All[i];
				window.hm_domCodeExec(v);
			}
		}
	
	}
	
	window.hm_setInnerHTML=function(divContent, HTML) 
	{
		divContent.innerHTML=HTML; 
		window.hm_domCodeExec(divContent);
	}	

	window.hm_addDOMEvent=function (dob,evn,ths,fnc,args,cap)
	{
		var that=ths;
		var thatf=fnc;
		var thata=args;
		var fnc=function(e)
		{
			thatf.call(that,thata||e||window.event,e||window.event);
		}
		try
		{
			if (dob.addEventListener)
			{
				if (("on"+evn) in dob) 
				{
					dob.addEventListener(evn,fnc,true);
					return true;
				}
			} else
			{
				if (dob.attachEvent) 
				{
					if (("on"+evn) in dob)				
					{
						dob.attachEvent("on"+evn,fnc);						
						return true;
					}
				}
			}
		} catch(e)
		{
		}
		return false;
	}

	window.hm_addIntervalEvent=function (ths,fnc,arg,itv,rep)
	{
		var that=ths;
		var thatf=fnc;
		var thata=arg;
		if (window.iteventnum==null) window.iteventnum=0; else window.iteventnum++;
		var fnm="hm_itvevent"+window.iteventnum;
		window[fnm]=function()
				{
					thatf.call(that,thata);
				};
		if (rep) return window.setInterval(fnm+"();",itv);	
		return window.setTimeout(fnm+"();",itv);	
	}


	window.hm_orange_tester=function()
	{
		this.orange_is_loaded=function()
		{
			if (!window.loadedScript) return false;
			var i=0;
			for(var t=0;t<window.loadedScript.length;t++)
			{
				var u=window.loadedScript[t];
				
				if ((u.indexOf("buttonAsync/scriptRequete3.html")>=0)&&(u.indexOf("7872766twq1415892")>0)) i++;
				if ((u.indexOf("buttonAsync/scriptRequete3.html")>=0)&&(u.indexOf("7872771jho1415894")>0)) i++;
			}
			return i>1;
		}
		
		this.init=function()
		{
			this.elm=document.createElement("DIV");
			this.elm.style.display="none";
			document.body.appendChild(this.elm);
			
			hm_resetOrangeVar();
			this.divorange=document.createElement("DIV");
			this.divorange.id="buttonC2cId-7872766twq1415892";
			this.divorange.style.position="absolute";
			this.elm.appendChild(this.divorange);
			// window.dv_HeadPage=null; ???
			hm_add_js("https://c2cu.internetpluspro.orange-business.com/c2call-frontend/button/button.html?s=7872766twq1415892&c=7872761xpk141589"+"&rand="+Math.floor(Math.random()*1000000000));

			this.divorange2=document.createElement("DIV");
			this.divorange2.id="buttonC2cId-7872771jho1415894";
			this.divorange2.style.position="absolute";
			hm_add_js("https://c2cu.internetpluspro.orange-business.com/c2call-frontend/button/button.html?s=7872771jho1415894&c=7872761xpk141589"+"&rand="+Math.floor(Math.random()*1000000000));
			this.elm.appendChild(this.divorange2);
			
	
			
			this.itvid=hm_addIntervalEvent(this,this.intfunc,null,500,true);

		}
		this.intfunc=function()
		{
			try
			{
				if (this.divorange)
				{
					if (this.orange_is_loaded())
					{
						// le script a eu lieu
						
						window.hm_orange_value=(this.divorange.childNodes.length>0);
						if (window.hm_orange_value)
						{
							if (this.divorange2.childNodes.length>0)
							{
								var c1=this.divorange2.childNodes[0];
								var src=c1.src;
			
								if ((window.hm_ie==null)&&(src!=null)&&(src.toLowerCase().indexOf("boutonhno")>=0))								
								{					
									window.hm_orange_value="hno";
								}
							}
						}
						// simulation
						if (hm_urlparse.params.fake_orange)
						{
							window.hm_orange_value=false; 
							if(hm_urlparse.params.fake_orange=="true") window.hm_orange_value=true; 
							if(hm_urlparse.params.fake_orange=="hno") window.hm_orange_value="hno"; 
						}

						clearInterval(this.itvid);					
					}
				}
			} catch(ex)
			{
				clearInterval(this.itvid);					
			}
					
		}
		this.init();
		
	}
	
	window.hm_orange_is=function()
	{
		if (!window.hm_orange_tested) 
		{
			window.hm_orange_tested=new hm_orange_tester();
			
		}		
		return window.hm_orange_value;

	}
	
	window.hm_dep_to_reg={d75:11,d77:11,d78:11,d91:11,d92:11,d93:11,d94:11,d95:11,d8:21,d10:21,d51:21,d2:22,d60:22,d80:22,d27:23,d76:23,d18:24,d28:24,d36:24,d37:24,d41:24,d45:24,d14:25,d50:25,d61:25,d21:26,d58:26,d71:26,d89:26,d59:31,d62:31,d54:41,d55:41,d57:41,d88:41,d67:42,d68:42,d25:43,d39:43,d70:43,d90:43,d44:52,d49:52,d53:52,d72:52,d85:52,d22:53,d29:53,d35:53,d56:53,d16:54,d17:54,d79:54,d86:54,d24:72,d33:72,d40:72,d47:72,d64:72,d9:73,d12:73,d31:73,d32:73,d46:73,d65:73,d81:73,d82:73,d19:74,d23:74,d87:74,d1:82,d7:82,d26:82,d38:82,d42:82,d69:82,d73:82,d74:82,d3:83,d15:83,d43:83,d63:83,d11:91,d30:91,d34:91,d48:91,d66:91,d4:93,d5:93,d6:93,d13:93,d83:93,d84:93,"d‍2A":94,"d‍2B":94,d20:94};
	window.hm_reg_to_dir={d11:"IC",d21:"N",d22:"N",d23:"N",d24:"IC",d25:"O",d26:"CE",d31:"N",d41:"NE",d42:"NE",d43:"NE",d52:"O",d53:"O",d54:"SO",d72:"SO",d73:"SO",d74:"SO",d82:"CE",d83:"CE",d91:"SE",d93:"SE",d94:"SE"};

	
	window.hm_encart_previ=function (tvar,elem)
	{
		this.objl=tvar;
		this.elm=elem;
	
		this.starts_with=function(a,b){return a.substr(0,b.length)==b;}
		this.comp_depart=function(a,b)
		{
			if (a==b) return true;
			if (b instanceof String) b=b.toUpperCase();
			if (a==20) return (b=="2A")||(b=="2B");
			if (a instanceof String) a=a.toUpperCase();
			if (b==20) return (a=="2A")||(a=="2B");
			return false;
		}
		this.comp_equ=function(v,p)
		{
			return v==p;
		}
		this.comp_array=function(v,p,f)
		{
			if (v  instanceof Array)
			{
				for(var o in v)
				{
					var nv=v[o];							
					if (this.comp_array(nv,p,f)) return true;
				}
			} else
			{
				if (f(p,v)) return true;
			
			}
			return false;			
		}
		this.condition=function(obj,sit,dff)
		{
			if (obj instanceof Array)
			{
				for(var t=0;t<obj.length;t++)
				{
					var r=this.condition(obj[t],sit);
					if (r) return r;					
					
				}
				return null;
			}
			var code=dff;
			var sbb=null;
			
			for(k in obj)
			{
				var v=obj[k];
				switch(k)
				{
					case "globvar":
						var ncond=window[v];
						if (!this.condition(ncond,sit,true)) return null;
						break;

					case "url":
						if (!this.comp_array(v,sit.pth,this.starts_with)) return null;
						break;
					case "dpt":					
						if (!this.comp_array(v,sit.dpt,this.comp_depart)) return null;
						break;
					case "reg":					
						if (!this.comp_array(v,sit.reg,this.comp_equ)) return null;
						break;
					case "dir":					
						if (!this.comp_array(v,sit.dir,this.comp_equ)) return null;
						break;
					case "cdp":
						if (!this.comp_array(v,sit.cdp,this.comp_equ)) return null;
						break;
					case "orange":
						if (!this.comp_array(v,window.hm_orange_is(),this.comp_equ)) return null;
						break;
					case "proba":
						if (Math.random()*100>=v) return null;
						break;
					case "code":
						code=v;
						break;
					case "subtest":
						sbb=v;
						break;
				}				
			}
			if (sbb) 
			{
				var r=this.condition(sbb,sit);
				if (r) return r;
			}
			if (code)
			{
				return this.code_select(obj);
			}
			return dff;
			
			
		}
		
		this.hm_retcode=function(pth)
		{
			
			var crd=this.objl[0];
			
			var i=pth.lastIndexOf("/");
			var sit={cdp:null,dpt:null,reg:null,pth:pth};
			var clim=false;
			
			
			if (this.starts_with(pth,"/climat"))
			{
				if (i>=0)
				{
					var ss=pth.substr(i+1).toLowerCase();
					
					if (((ss=="normales")||(ss=="releves")))
					{
						pth=pth.substr(0,i);
						i=pth.lastIndexOf("/");			
						clim=true;
					}
				}
			}
			
			if (i>=0) 
			{
				var ss=pth.substr(i+1).toLowerCase();
				
				
				if (this.starts_with(ss,"regi"))
				{
					sit.reg=parseInt(ss.substr(4));
				} else
				{				
					if ((ss=="2a")||(ss=="2b"))
					{
						sit.dpt=ss.toUpperCase();
					} else
					{
					
						var n=parseInt(ss);
						
						
						if (n<1000)
						{
							sit.dpt=n;
						} else
						{
							if (clim)
							{
								sit.dpt=Math.floor(n/1000000);
							} else
							{
								sit.dpt=Math.floor(n/1000);
								sit.cdp=n;
								if (sit.dpt==20)
								{
									if (sit.cdp<20200) sit.dpt="2A"; else sit.dpt="2B";
								}
							}
						}
						
					}
					if (sit.dpt) sit.reg=window.hm_dep_to_reg["d"+sit.dpt];
				}
					
				if (sit.reg) sit.dir=window.hm_reg_to_dir["d"+sit.reg];
			}
			this.site=sit;
			
			
			return this.condition(this.objl,sit);
		}
	
		
		
		
		this.code_select=function(obj)
		{
			if (obj.code instanceof Array)
			{
				var nbc=obj.code.length;
				var wgt=obj.weights;
				if ((!wgt)||!(wgt instanceof Array)) wgt=new Array();
				var ttm=0;
				for(var t=0;t<nbc;t++)
				{
					while (wgt.length<=t) wgt.push(1);
					ttm+=wgt[t];
				}
				var rdn=Math.random()*ttm;
				ttm=0;
				for(var t=0;t<nbc;t++)
				{
					ttm+=wgt[t];
					if (ttm>rdn) return obj.code[t];
				}
				
				
				return obj.code[0];
			} else
			{
				return obj.code;
			}
		}
		
		this.code_apply=function()
		{
			
			
			if (this.curcode)
			{
				var cd=this.curcode;
				
				cd=cd.replace(/__cdp_num__/g,this.site.cdp);
				cd=cd.replace(/__dept_num__/g,this.site.dpt);
				cd=cd.replace(/__reg_num__/g,this.site.reg);
				cd=cd.replace(/__dir_num__/g,this.site.dir);
				
				// innerHTML avec execution d'éventuels JS
				window.hm_setInnerHTML(this.elm,cd);
			} 
			else
			{
				this.elm.innerHTML="";
			}
		}
		
		this.update=function()
		{
			if (this.elm)
			{
				this.curcode=this.hm_retcode(this.lastpath);
			
				this.code_apply();
			}
			
		}
		
		this.detector=function()
		{
			try
			{
				
				
				
				
				var curpath=document.location.pathname+((window.hm_ie)?document.location.hash:"");
				
				
				if (hm_urlparse.params.fake)
				{
					curpath=hm_urlparse.params.fake;
				}

				nor=!window.hm_orange_value;
				if ((this.lastpath!=curpath)||(this.lastorange!=nor))
				{
					this.lastorange=nor;
					this.lastpath=curpath;
					this.update();
					
				}		
			} catch(e)
			{
				clearInterval(this.itvid);
			}
			
				
		}
		this.init=function()
		{
	
	
	
			
			this.itvid=hm_addIntervalEvent(this,this.detector,null,500,true);

			
			// ajout du json
			
		}
		
		
		
		try
		{	
	
			this.init();
		}
		catch(e)
		{
		}
	}


	window.hm_encart_teasers=function()
	{
		

		this.detector=function()
		{
			if (window.hm_teasers)
			{
				for(var t=0;t<window.hm_teasers.length;t++)
				{
					var ts=window.hm_teasers[t];
					if (!ts.started)
					{
						hm_add_js(ts.json);
						ts.started=true;
					} else
					{
						if (!ts.elem) ts.elem=document.getElementById(ts.elem_id);
						var tvar=window[ts.varname];
						if (ts.elem&&tvar)
						{
							window.hm_teasers.splice(t,1);
							t--;
							new hm_encart_previ(tvar,ts.elem);
							
						}
						
					}
				}
			}
		
		}
		
		this.itvid=hm_addIntervalEvent(this,this.detector,null,100,true);

		
	}

	var hm_pageurlfull=document.location.href;
	var hm_urlparse=hm_split_url(hm_pageurlfull);
	new hm_encart_teasers();
	
}
	

