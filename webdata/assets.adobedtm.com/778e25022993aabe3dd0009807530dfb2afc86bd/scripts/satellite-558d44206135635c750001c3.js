if(typeof s_darty.pageName!="undefined"){
	nexPerSrc=document.createElement('script');
	nexPerInt=0;

	if((s_darty.pageName=="www/accueil")||(s_darty.pageName=="mobile/accueil")||(s_darty.pageName.indexOf("etape_achat/panier",0)>-1)){
		nexPerSrc.setAttribute("src","//nxtck.com/act.php?tag=42242")
		nexPerInt=1
	}

	if(typeof s_darty.events!="undefined"){
		if((s_darty.events.indexOf("event12",0)>-1)&&(typeof s_darty.products!="undefined")){
			nexPerProd=s_darty.products.split(";");
			nexPerProd=nexPerProd[1];
			nexPerSrc.setAttribute("src","//nxtck.com/act.php?tag=42243;pid="+nexPerProd);
			nexPerInt=1
		}
		
		if((s_darty.pageName.indexOf("/catalogue/")>-1)&&(s_darty.events.indexOf("event2",0)>-1)){
			nexPerCat=s_darty.pageName.split("/");
			nexPerCat=nexPerCat[2];
			nexPerProd="";
			if(typeof s_darty.products!="undefined"){
				var nexPerProdPriList=[];
				var nexPerProdIds=s_darty.products.split(',');
				nexPerProdIds[0]=nexPerProdIds[0].split(';');
				nexPerProd=nexPerProdIds[0][1];
				if(nexPerProdIds.length>2){boucle=3} else{boucle=nexPerProdIds.length;}
			    for (var i = 1; i < boucle; i++) {
			     	if(nexPerProdIds[i].indexOf('frais_',0)==-1){
			       		nexPerProdIds[i]=nexPerProdIds[i].split(';');
			       		nexPerProd=nexPerProd+","+nexPerProdIds[i][1];
			     	}
				}
			}
			nexPerSrc.setAttribute("src","//nxtck.com/act.php?tag=42246&pid="+nexPerProd);
			nexPerInt=1
		}

		if(s_darty.events.indexOf("event3",0)>-1){
			nexPerProd="";
			if(typeof s_darty.products!="undefined"){
				var nexPerProdPriList=[];
				var nexPerProdIds=s_darty.products.split(',');
				nexPerProdIds[0]=nexPerProdIds[0].split(';');
				nexPerProd=nexPerProdIds[0][1];
			    for (var i = 1; i < nexPerProdIds.length; i++) {
			     	if(nexPerProdIds[i].indexOf('frais_',0)==-1){
			       		nexPerProdIds[i]=nexPerProdIds[i].split(';');
			       		nexPerProd=nexPerProd+","+nexPerProdIds[i][1];
			     	}
				}
				nexPerSrc.setAttribute("src","//nxtck.com/act.php?tag=42244&pid="+nexPerProd);
				nexPerInt=1
			}	
		}

		if(s_darty.events.indexOf("purchase",0)>-1){
			var nexPerProdPriList=[];
		    var nexPerProdQuaList=[];
		    var nexPerAmount_cmd=0;
		    var nexPerQuant_cmd=0;
		    var nexPerProdIds=s_darty.products.split(',');
		    nexPerProdIds[0]=nexPerProdIds[0].split(';');
			nexPerProd=nexPerProdIds[0][1];
			nexPerProdPriList.push(parseFloat(nexPerProdIds[0][3]));
		    nexPerProdQuaList.push(parseFloat(nexPerProdIds[0][2]));
		    for (var i = 1; i < nexPerProdIds.length; i++) {
		      if(nexPerProdIds[i].indexOf('frais_',0)==-1){
		        nexPerProdIds[i]=nexPerProdIds[i].split(';');
		        nexPerProdPriList.push(parseFloat(nexPerProdIds[i][3]));
		        nexPerProdQuaList.push(parseFloat(nexPerProdIds[i][2]));
		        nexPerProd=nexPerProd+","+nexPerProdIds[i][1];
		      }
		    }
		    if (nexPerProdPriList.length >0){
		      for (var i = 0; i < nexPerProdIds.length; i++){
		        if(nexPerProdIds[i].indexOf('frais_',0)==-1){
		          nexPerAmount_cmd=nexPerAmount_cmd+nexPerProdPriList[i]*nexPerProdQuaList[i];
		          nexPerQuant_cmd=nexPerQuant_cmd+nexPerProdQuaList[i];
		        }
		      }
		    }

		    nexPerDedup=dedupcan("nextperform");

			nexPerOrdID=s_darty.purchaseID;
			nexPerSrc.setAttribute("src","//nxtck.com/act.php?tag=42245&pid="+nexPerProd+"&mt="+nexPerAmount_cmd+"&id="+nexPerOrdID+"&tvalid="+nexPerDedup);
			nexPerInt=1
		}
	}

	if(nexPerInt==1){document.body.appendChild(nexPerSrc);}
}
