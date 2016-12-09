_satellite.pushAsyncScript(function(event, target, $variables){
  if ((s_darty)&&(s_darty.pageName.indexOf('www',0)>-1)){
	havAppel = 0;
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	havEnv=0;

	if (navigator.userAgent.match(/(android|iphone|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {
		havDev='Mobile';
	} else {
		havDev='Desktop';
	}
	
	if (s_darty.pageName){
		if (s_darty.pageName.indexOf('/accueil',0)>-1){
			havEnv=1;
			havCat = "home14";
			havAppel = 1;
			havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=tunne737;cat="+havCat+";u1="+havDev+";ord=" + a + "?";
		}

		if (s_darty.pageName.indexOf("boutique/La_selection_rentree_par_darty/index",0)>-1){
			havEnv=1;
			havCat = "fichepdt";
			havAppel = 1;
			havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=tunne737;cat="+havCat+";u1="+havDev+";ord=" + a + "?";
		}
		
		if (s_darty.pageName.indexOf('produit/fiche',0)>-1){
			havEnv=1;
			havCat='fichepdt';
			havInfProd=document.getElementsByClassName('product_name font-opensansL').item(0);
			havPdtNom=havInfProd.textContent.replace('\n','').replace('\n','');
			havPdtNom=havPdtNom.split(" ").join("_");
			havPdtPrix=s_darty.eVar34;
			havPdtCode=s_darty.products.split(';')[1];
			havAppel = 1;
			havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=tunne737;cat="+havCat+";u1="+havDev+";u4="+havPdtNom+";u6="+havPdtPrix+";u5="+havPdtCode+";ord=" + a + "?";
		}
		
		if (s_darty.events){
			if (s_darty.events.indexOf('event2')>-1){
				havEnv=1;
				havCat='fichepdt';
				var pdtListe=s_darty.products.split(',');
				for (var i=0; i<pdtListe.length; i++){
					if (i==0){
						havPdtCode=pdtListe[i].split(';')[1]
					};
					if (i>0){
						havPdtCode=havPdtCode+'|'+pdtListe[i].split(';')[1]
					};
				};
				havAppel = 1;
				havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=tunne737;cat="+havCat+";u1=;u4=;u6=;u5="+havPdtCode+";ord=" + a + "?";
			};
		};

		if(typeof s_darty.products!="undefined"){
			if (s_darty.pageName.indexOf('etape_achat/panier',0)>-1){
				havCat="panier14";
				havPdtNb=0;
				havTotCmd=0;
				havPdtQuant=[];
				
				havTempCod=s_darty.products.split(",")
				for(i=0;i<havTempCod.length;i++){
					havTempCod[i]=havTempCod[i].split(";")
				}
				havPdtCode=havTempCod[0][1];
				for(i=1;i<havTempCod.length;i++){
					havPdtCode=havPdtCode+"|"+havTempCod[i][1];
				}
				
				if (s_darty.pageName.indexOf('/push',0)>-1){
					havEnv=1;
					havInfProd=document.getElementById('cross_basket').children[0];
					for(i=0;i<havInfProd.childElementCount;i++){
						if(havInfProd.children[i].children[1].childElementCount>1){havPdtQuant[i]=parseFloat(havInfProd.children[i].children[1].children[1].innerHTML.replace('Qté ',''));havPdtNb=havPdtNb+havPdtQuant[i];}
						else{havPdtNb=havPdtNb+1;havPdtQuant[i]=1;}
						havTotCmd=havTotCmd+havInfProd.children[i].children[0].attributes['data-price'].value/100;
					}
					havPdtDiff=havInfProd.childElementCount;
					havPdtNom=havInfProd.children[0].children[0].attributes['data-product'].value;
					havPdtPrix=havInfProd.children[0].children[0].attributes['data-price'].value/100/havPdtQuant[0];
					for(i=1;i<havPdtDiff;i++){
						havPdtNom=havPdtNom+"|"+havInfProd.children[i].children[0].attributes['data-product'].value
						havPdtPrix=havPdtPrix+"|"+havInfProd.children[i].children[0].attributes['data-price'].value/100/havPdtQuant[i];
					}
					havPdtNom=havPdtNom.split(" ").join("_");
					havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=tunne737;cat="+havCat+";u1="+havDev+";u4="+havPdtNom+";u6="+havPdtPrix+";u5="+havPdtCode+";u7="+havTotCmd+";u12="+havPdtNb+";ord=" + a + "?";
				}
				else{
					havEnv=1;
					havPdtCode=havTempCod[0][1]
					for(i=1;i<havTempCod.length;i++){
						havPdtCode=havPdtCode+"|"+havTempCod[i][1];
					}
					var cookieContenu=decodeURIComponent(_satellite.readCookie("DARTY_BASKET_CONTENT"));
					var cookiePanier= JSON.parse(cookieContenu);
					for(i=0;i<havTempCod.length;i++){
						havPdtNb=havPdtNb+cookiePanier.items[i].qty;
					}
					havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=tunne737;cat="+havCat+";u1="+havDev+";u5="+havPdtCode+";ord=" + a + "?";
				}
			}
			
			if (s_darty.pageName.indexOf('etape_achat/identification',0)>-1){
				havEnv=1;
				havCat="identify";
				havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=tunne737;cat="+havCat+";u1="+havDev+";ord=" + a + "?";
			}
			
			if (s_darty.pageName.indexOf('etape_achat/livraison',0)>-1){
				havEnv=1;
				havCat="delivery";
				switch (s_darty.prop42){
					case "Identification" :
						havStatCli="Ancien";
						break;
					case "Inscription reussie":
						havStatCli="Nouveau";
						break;
					default:
						havStatCli="Ancien";
				}
				havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=tunne737;cat="+havCat+";u1="+havDev+";u2="+havStatCli+";ord=" + a + "?";
			}
			
			if (s_darty.pageName.indexOf('etape_achat/paiement',0)>-1){
				havEnv=1;
				havCat="payment";
				havTempCod=s_darty.products.split(",")
				for(i=0;i<havTempCod.length;i++){
					havTempCod[i]=havTempCod[i].split(";")
				}
				havLiv=havTempCod[0][5].replace("eVar43=","");
				havIdBout="";
				switch (havLiv){
					case "L" :
						havLiv="Livraison domicile";
						break;
					case "X":
						havLiv="Livraison domicile";
						break;
					case "O":
						havLiv="Livraison domicile";
						break;
					case "C":
						havLiv="à recuperer en boutique";
						havBoutTemp=document.getElementsByClassName('magasinInfos').item(0).innerHTML.split(' -');
						havIdBout=havBoutTemp[0].split(" ").join("_");
						break;
					case "P":
						havLiv="Livraison domicile";
						break;
					case "E":
						havLiv="Livraison domicile";
						break;
					case "U":
						havLiv="Livraison domicile";
						break;
					case "S":
						havLiv="Livraison domicile";
						break;
					default:
						havLiv="Livraison domicile";
				}
				havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=tunne737;cat="+havCat+";u1="+havDev+";u8="+havLiv+";u9="+havIdBout+";ord=" + a + "?";
			}
			
			if (typeof s_darty.purchaseID != "undefined"){
				havEnv=1;
				havCat="confsale";
				havTempCod=s_darty.products.split(",")
				for(i=0;i<havTempCod.length;i++){
					havTempCod[i]=havTempCod[i].split(";")
				}
				havPdtCode=havTempCod[0][1];
				havPdtPrix=havTempCod[0][3];
				havPdtNb=parseFloat(havTempCod[0][2]);
				havTotCmd=parseFloat(havTempCod[0][3]);
				for(i=1;i<havTempCod.length;i++){
					if(havTempCod[i][1].indexOf('frais_',0)==-1){
						havPdtCode=havPdtCode+"|"+havTempCod[i][1];
						havPdtPrix=havPdtPrix+'|'+havTempCod[i][3];
						havPdtNb=havPdtNb+parseFloat(havTempCod[i][2]);
						havTotCmd=havTotCmd+(parseFloat(havTempCod[i][3])*parseFloat(havTempCod[i][2]));
					}
				}
				havLiv=havTempCod[0][5].substr(havTempCod[0][5].indexOf('evar43=')+7);
				havLiv=havLiv.substr(0,havLiv.indexOf('|'));
				havIdBout="";
				if(havLiv.indexOf('Retrait',0)>-1){
					havIdBout=havLiv.replace('Retrait au magasin ',"");
					havLiv='Retrait magasin';
				}
				else{havLiv='Livraison domicile'};
				havModPai="inconnu";
				if (typeof s_darty.prop44 != "undefined"){
					havModPai=s_darty.prop44.split(", ").join('_');
					havModPai=havModPai.split(" ").join('_');
				}
				havOrderID=s_darty.purchaseID;
				havUrl="//4454367.fls.doubleclick.net/activityi;src=4454367;type=vente145;cat="+havCat+";u1="+havDev+";u6="+havPdtPrix+";u5="+havPdtCode+";u7="+havTotCmd+";u8="+havLiv+";u12="+havPdtNb+";u9="+havIdBout+";ord=" + havOrderID + "?";
			}
		}
		
		if (havEnv==1){
			havFrame = document.createElement('iframe');
			havFrame.setAttribute('width',1);
			havFrame.setAttribute('height',1);
			havFrame.setAttribute('frameborder',0);
			havFrame.setAttribute('style','display:none');
			havFrame.setAttribute('src',havUrl);
			document.body.appendChild(havFrame);
		}
	}
}
});
