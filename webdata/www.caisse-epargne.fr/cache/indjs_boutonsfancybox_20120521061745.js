jquery_1_4_2(document).ready(function() 
{
    jquery_1_4_2("#changer_region").fancybox({
        'width': 760,
        'height': 410,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'overlayOpacity': 0.3,
        'overlayColor': '#000',
        'padding': 10,
        'scrolling': 'no'
    });
    jquery_1_4_2("#lienContacts").fancybox({
        'width': 750,
        'height': 505,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'overlayOpacity': 0.3,
        'overlayColor': '#000',
        'padding': 10,
        'scrolling': 'no'
    });
    jquery_1_4_2("#lienContactsNonReg").fancybox({
        'width': 760,
        'height': 410,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'overlayOpacity': 0.3,
        'overlayColor': '#000',
        'padding': 10,
        'scrolling': 'no'
    });
    jquery_1_4_2("#lienContactsProGenerique").fancybox({
        'width': 750,
        'height': 630,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'overlayOpacity': 0.3,
        'overlayColor': '#000',
        'padding': 10,
        'scrolling': 'no'
    });
    jquery_1_4_2("#lienContactsProDefini").fancybox({
        'width': 750,
        'height': 440,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'overlayOpacity': 0.3,
        'overlayColor': '#000',
        'padding': 10,
        'scrolling': 'no'
    });    
    jquery_1_4_2("#lienContacts_DEI").fancybox({
        'width': 760,
        'height': 730,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'overlayOpacity': 0.3,
        'overlayColor': '#000',
        'padding': 10,
        'scrolling': 'no',
        'onStart'		: function() 
        {
            pm.bind("resize", function(data) {
                resize(data.width,data.height);
            });
	    }
    });
    jquery_1_4_2("#lienMonAgence").fancybox({
        'width': 750,
        'height': 550,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe',
        'overlayOpacity': 0.3,
        'overlayColor': '#000',
        'padding': 10,
        'scrolling': 'no'
    });
});

function resize(w,h) {
    var iFrameContentHeight = h;
    var iFrameContentWidth = w;

    var paddingTotal = 20;
    var extra = 15; // some extra space to avoid Scrollbars

    if (iFrameContentHeight > 0 && iFrameContentWidth > 0) {
        var outer = $('#fancybox-wrap');
        outer.css({
            height: iFrameContentHeight + paddingTotal + extra,
            width: iFrameContentWidth + paddingTotal + extra
        });
        var inner = $('#fancybox-inner');
        inner.css({
            height: iFrameContentHeight + extra,
            width: iFrameContentWidth + extra
        });
        var content = $('#fancybox-content');
        content.css({
            height: iFrameContentHeight + extra,
            width: iFrameContentWidth + extra
        });
    }
}