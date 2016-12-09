/*Script*/
var _troq = _troq || [];
_troq.push(['tagid', '6546478-b00d4c827e8aff73f8a09a87f1aa9d45']);

if ((s_darty)) {
	if (s_darty.pageName) {
		var prodIdsList= [];
		var rtgeparam = ""

		if(_satellite.readCookie("adobeparam")){rtgeparam=_satellite.readCookie("adobeparam")}
			
		if(s_darty.pageName){
			var a = s_darty.pageName.split("/")
			var j= 1;
		}			
		
		if ((s_darty.pageName=="www/accueil")||(s_darty.pageName=="mobile/accueil")){
			_troq.push(['rtgpg', 'hp']);
		}
		
		if (s_darty.pageName.indexOf('espace_client/',0)>-1){
			_troq.push(['rtgpg', 'member']);
			_troq.push(['exclusion']);
		}			
		
		if (s_darty.pageName.indexOf('/catalogue/',0)>-1){
			if(a.length==3){
				_troq.push(['rtgpg', 'cat']);
				_troq.push(['rtgcat', a[2]]);
			}
			if(a.length==4){
				_troq.push(['rtgpg', 'subcat']);
				_troq.push(['rtgsubcat', a[3]]);
			}
			if(a.length==5){
				_troq.push(['rtgpg', 'subsubcat']);
				_troq.push(['rtgsubsubcat', a[4]]);
			}
			if(s_darty.pageName.indexOf('/produit/',0)>-1){
				_troq.push(['rtgpg', 'product']);
				if (s_darty.products){
					var prodParam=s_darty.products.split(';');
					var idproduit=prodParam[1];
				}	
				_troq.push(['rtgidproduit', idproduit ]);
			}
		}

		if (s_darty.pageName.indexOf('/etape_achat/',0)>-1){
			if(s_darty.pageName.indexOf('panier',0)>-1){
				_troq.push(['rtgpg', 'basket']);
				_troq.push(['rtgabanpan', '1']);
				_troq.push(['rtgstep', '1']);
				if(rtgeparam){_troq.push(['rtgeparam', rtgeparam]);}
			}
			if(s_darty.pageName.indexOf('identification',0)>-1){
				_troq.push(['rtgpg', 'basket']);
				_troq.push(['rtgabanpan', '1']);
				_troq.push(['rtgstep', '2']);
				if(rtgeparam){_troq.push(['rtgeparam', rtgeparam]);}
			}
			if(s_darty.pageName.indexOf('livraison',0)>-1){
				_troq.push(['rtgpg', 'basket']);
				_troq.push(['rtgabanpan', '1']);
				_troq.push(['rtgstep', '3']);
				if(rtgeparam){_troq.push(['rtgeparam', rtgeparam]);}
			}
			if(s_darty.pageName.indexOf('paiement',0)>-1){
				_troq.push(['rtgpg', 'basket']);
				_troq.push(['rtgabanpan', '1']);
				_troq.push(['rtgstep', '4']);
				if(rtgeparam){_troq.push(['rtgeparam', rtgeparam]);}
			}
			if(s_darty.pageName.indexOf('confirmation',0)>-1){
				_troq.push(['rtgpg', 'order']);
				_troq.push(['exclusion']);
				_troq.push(['rtgcmd', '1']);
				_troq.push(['rtgcmdid', s_darty.purchaseID]);
				_troq.push(['rtgcmdemail', s_darty.prop45]);
				if(rtgeparam){_troq.push(['rtgeparam', rtgeparam]);}
				if (s_darty.products){
					var prodPriList=[];
					var prodQuaList=[];
					var amount_cmd=0;
					var quant_cmd=0;
					var prodIds=s_darty.products.split(',');
					for (var i = 0; i < prodIds.length; i++) {
						prodIds[i]=prodIds[i].split(';');
						prodPriList.push(parseFloat(prodIds[i][3]));
						prodQuaList.push(parseFloat(prodIds[i][2]));
					}
					if (prodPriList.length >0){
						for (var i = 0; i < prodIds.length; i++){
							amount_cmd=amount_cmd+prodPriList[i]*prodQuaList[i];
						}
					}
				}
				var amt_matiro=Math.floor(amount_cmd);
				_troq.push(['rtgcmdmontant', amt_matiro]);
				dedup1M=dedupcan("_1000M_");
				_troq.push(['rtgcmdattributed', dedup1M]);
			}
				
			if (s_darty.products){
				var prodIds=s_darty.products.split(',');
				for (var i = 0; i < prodIds.length; i++) {
					prodIds[i]=prodIds[i].split(';');
					prodIdsList.push(prodIds[i][1]);
				}
				prodList=prodIdsList[0];
				if (prodIdsList.length >1){
					for (var i = 1; i < prodIds.length; i++){
						prodList=prodList+'|'+prodIdsList[i];
					}
				}
				if ((s_darty.pageName.indexOf('/etape_achat/',0)>-1)&&(typeof s_darty.purchaseID == "undefined")){
					_troq.push(['rtgidpdtaban', prodList]);
				}
				else {_troq.push(['rtgcmdidproduit', prodList]);}
			}
		}			
		
		
		(function () {
			var ts = document.createElement('script');
			ts.type = 'text/javascript';
			ts.async = true;
			ts.src = '//mmtro.com/tro.js';
			var sM = document.getElementsByTagName('script')[0];
			sM.parentNode.insertBefore(ts, sM);
		})();
	}
}
