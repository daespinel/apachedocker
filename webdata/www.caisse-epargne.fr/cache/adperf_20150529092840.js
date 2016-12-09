$(document).ready(function() {

var pagesAtracer = new Array(["indcpt_pagecontactspopup", "0", "23243"],
["demande_rdv_produit_activation", "0", "15875"],
["demande_rdv_activation", "0", "23243"],
["demande_informations_sur_un_produit_activation", "0", "23245"],
["sous_ouv_formulaire_chapeau_vad_confirmation", "0", "25040"],
["sous_ouv_livret_dev_durable_vad_activation", "0", "25041"],
["sous_ouv_cfn_vad_choixcoffre", "0", "25042"],
["jeunes", "0", "27205"],
["assurance-prevoyance", "0", "27205"],
["bouquet-liberte-jeunes-2014", "0", "27205"],
["credit-etudiants-promo", "0", "27205"],
["credit-apprentis-1000", "0", "27205"],
["epargner-assurance-vie", "0", "27205"],
["carte-femme-2015", "0", "27205"],
["cb-gratuite-jeunes-2015", "0", "27205"],
["credit-jeunes-2015", "0", "27205"],
["garanties-sante-jeunes-2015", "0", "27205"],
["jeunes", "0", "27205"],
["relation-client", "0", "27205"]);

    var reg = readCookie("reg");
    if (reg == null) {
        reg = '0';
    }

    if (typeof xtpage != 'undefined') {

        var PageTracing = convertXTPage();
        for (val in pagesAtracer) {
            if (pagesAtracer[val][0].toString().trim().toLowerCase() == PageTracing.toString().trim().toLowerCase() &&
           (pagesAtracer[val][1] == reg || pagesAtracer[val][1] == 0)) {
                var id_transfo = pagesAtracer[val][2];
                sendHit(id_transfo, PageTracing);
                break;
            }
        }
    }
});
  
function readCookie(name) {
 var nameEQ = name + "=";
 var c;
 var t;
 var ca = document.cookie.split('&');
 for (var i = 0; i < ca.length; i++) {
     var x = ca[i].split('=');
     for (var j = 0; j < x.length; j++) {
         if (x[j] == name) {
             return x[j + 1];
         }
     }
 }
 return null;
}

function convertXTPage(){
        var result = xtpage;

	        if (result.toString().indexOf(":")!= -1)
        	{
        	    var namepage = result.split(':');
        	    if (namepage[0].substring(namepage[0].length -1, namepage[0].length) == '_') {
        	        result = namepage[0].substring(0, namepage[0].length - 1);
        	    }
        	}
	        return result;
	}

	function sendHit(id_transfo, namepage) {
    WBO_AMOUNT = "0.0"; /* <== set here the command amount */
    WBO_CLIENT = "";     /* <== set here your client id */
    WBO_INVOICE = "";     /* <== set here your bill id */
    WBO_NUM_ITEMS = 1; /* <== set here the number of item */
    WBO_POST_VALIDATION = 0; /* <== set to 1 if need backoffice validation */

    if (webo_performance) {
        transfo = new performanceTransfo(SITE = 334650, WBO_ID_TRANSFO = id_transfo);
        transfo.setAmount(WBO_AMOUNT);
        transfo.setClient(WBO_CLIENT);
        transfo.setId(WBO_INVOICE);
        transfo.setQuantity(WBO_NUM_ITEMS);
        transfo.setPostValidation(WBO_POST_VALIDATION);
        transfo.setHost("caissedepargne.solution.weborama.fr");
        /* == Optional parameters == */
        transfo.addParam("site", xtsite);
        transfo.addParam("marche", xtn2);
        transfo.addParam("page", namepage);
        transfo.addParam("idClientBad", xt_at);
       /* alert(transfo.getURL());*/
         transfo.execute();
    }
}
              
