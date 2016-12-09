function LanceRecherche(ancre) {
    if (jquery_1_4_2("#champ_recherche_header").length == 0)
        return false;
    if (jquery_1_4_2("#champ_recherche_header").val() == "") {
        return false;
    }
    
    var url = "";
    if (ancre.href.indexOf("?") != -1)
        url = ancre.href + "&q=" + jquery_1_4_2("#champ_recherche_header").val();
    else
        url = ancre.href + "?q=" + jquery_1_4_2("#champ_recherche_header").val();

    window.location = url;
}

function resizeIframe(newWidth, newHeight) {
    if ($("iframe[name=iframePopUp]").length != 0) {
        $("iframe[name=iframePopUp]").css('width', newWidth + "px");
        $("iframe[name=iframePopUp]").css('height', newHeight + "px");
    }
    if ($("#dialogpopup").length != 0) {
        $("#dialogpopup").css('width', newWidth + "px");
        $("#dialogpopup").css('height', newHeight + "px");
    }
}

function ChangePopUpSize(newWidth, newHeight) {
    jquery_1_4_2().fancybox.resize();
    /*
    if ($("#fancybox-content").length != 0) {
    $("#fancybox-content").css('width', newWidth + 30 + "px");
    $("#fancybox-content").css('height', newHeight + 10 + "px");
    }
    if ($("#fancybox-wrap").length != 0) {
    $("#fancybox-wrap").css('width', newWidth + 50 + "px");
    $("#fancybox-wrap").css('height', newHeight + 10 + "px");
    }
    */
}

function MontreComposantPopUpFancyBox(urlRetour) {
    jquery_1_4_2("#btnMontrePopUp").fancybox({
        overlayOpacity: 0.3,
        overlayColor: '#000',
        padding: 10,
        autoDimensions: true,
        onStart: function() {
            return true;
        },
        onCancel: function() {
            //alert('Canceled!');
        },
        onComplete: function() {
            //alert('Completed!');
        },
        onCleanup: function() {
            return true;
            //window.confirm('Close?');
        },
        onClosed: function() {
            //alert('Closed!' + urlRetour);
            window.location = urlRetour;
        }
        /*
        onCancel : function() {
        alert('Canceled!');
        alert("urlRetour=" + urlRetour);
        window.location = urlRetour;
        }*/
    });
    jquery_1_4_2("#btnMontrePopUp").trigger('click');
}
