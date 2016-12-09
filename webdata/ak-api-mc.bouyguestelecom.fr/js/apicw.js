$.MC_CW = {
	// --------------------------------
	// Variables du namespace (Surchargeable)
	// --------------------------------
	mc_debug: false,            // Mode Debug
	
	// --------------------------------
	// Variables du namespace
	// --------------------------------
	mc_root : "",
	
	// --------------------------------
	// Initialisation des variables
	// --------------------------------
	init: function()
	{
		navtmp_scripts = document.getElementsByTagName("script");
		navtmp_currentscript = navtmp_scripts[navtmp_scripts.length-1].src;
		
		// Gestion d'une différence IE/Firefox
		if(navtmp_currentscript.split(/\/+/g)[0].length>7) navtmp_domaine = navtmp_currentscript.split(/\/+/g)[0];
		else                                               navtmp_domaine = navtmp_currentscript.split(/\/+/g)[1];
		
		$.MC_CW.mc_root = "//"+navtmp_domaine + "/";
		
	},

	// --------------------------------
	// Récupérer des informations dans le cache_web (par namespace)
	// cookie_name (bn ou bi)
	// namespace ('' ou 'core' par exemple)
	// callback (fonction de callback)
	// --------------------------------
	getInfosClientsByNamespace: function(cookie_name,namespace,callback) 
	{
		
		if($.MC_CW.mc_debug) console.log("$.MC_CW.getInfosClientsByNamespace - Debut de fonction"); 
		url_ajax = $.MC_CW.mc_root+"cache/"+cookie_name+"/me/"+namespace;
		if($.MC_CW.mc_debug) console.log("$.MC_CW.getInfosClientsByNamespace - url_ajax = "+url_ajax); 
		
		$.ajax({
			url: url_ajax,
			type : 'GET',
			xhrFields: {
                withCredentials: true
            },
			success: function(data,textStatus)
						{
							if(data.code_retour)
							{
								if($.MC_CW.mc_debug) console.log("$.MC_CW.getInfosClientsByNamespace - Success"); 
								callback(data);
								return true;
							}
							else
							{
								if($.MC_CW.mc_debug) console.log("$.MC_CW.getInfosClientsByNamespace - Success mais pas de code_retour"); 
								callback({code_retour : -1});
								return false;
							}
						},
			error: function (xhr, ajaxOptions, thrownError) 
						{
						callback({code_retour : -2});
					  }
		});	

		return true;

		
	},

	// --------------------------------
	// Récupérer des informations dans le cache_web
	// cookie_name (bn ou bi)
	// namespace ('' ou 'core' par exemple)
	// callback (fonction de callback)
	// --------------------------------
	getInfosClients: function(cookie_name,callback)
	{
		if($.MC_CW.mc_debug) console.log("$.MC_CW.getInfosClients - Debut de fonction");
		$.MC_CW.getInfosClientsByNamespace(cookie_name,'',callback);
	},
		
	// --------------------------------
	// Stocker des informations dans le cache_web
	// cookie_name (bn ou bi)
	// callback (fonction de callback)
	// --------------------------------
	deleteInfosClients: function(cookie_name,callback) 
	{
		
		if($.MC_CW.mc_debug) console.log("$.MC_CW.deleteInfosClients - Debut de fonction"); 
		url_ajax = $.MC_CW.mc_root+"cache/"+cookie_name+"/me/";
		if($.MC_CW.mc_debug) console.log("$.MC_CW.deleteInfosClients - url_ajax = "+url_ajax); 
		
		$.ajax({
			url: url_ajax,
			type : 'DELETE',
			xhrFields: {
                withCredentials: true
            },
			success: function(data,textStatus)
						{
							if(data.code_retour)
							{
								if($.MC_CW.mc_debug) console.log("$.MC_CW.deleteInfosClients - Success"); 
								callback(data);
								return true;
							}
							else
							{
								if($.MC_CW.mc_debug) console.log("$.MC_CW.deleteInfosClients - Success mais pas de code_retour"); 
								callback({code_retour : -1});
								return false;
							}
						},
			error: function (xhr, ajaxOptions, thrownError) 
						{
						callback({code_retour : -2});
					  }
		});	

		return true;

		
	}
}

// --------------------------------
// Launcher
// --------------------------------
$.MC_CW.init();
