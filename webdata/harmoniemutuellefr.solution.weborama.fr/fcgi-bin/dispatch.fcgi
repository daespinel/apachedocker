/*
(c) Copyright Weborama SA - France. All rights reserved.
It is illegal to modify, disassemble, sell, copy or publish this software
or any part thereof. The use of this software is only permitted with the
prior and express written permission of Weborama SA - France.
More information: https://www.weborama.com/contacts/
*/
function x17() {
    var x1cl, x1ey = x1bb.x1cj();
    x1ey.x1ie = x1bb.x1nn(x1ey.x1ie,'wuid=&retargeting=&');
    x1ey.x1fN = 'https://cstatic.weborama.fr/advertiser/1602/7/33/56/';
    x1ey.x1lp = '106';



    x1ey.conf_oba = false;
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'https://ams1.ib.adnxs.com/click?v_uv_ziyrz_-RdCYSdSrP8P1KFyPwvU_272C7FjLsz9P_4Nbd4u2P-ljG8dLaZsR-jauYVRLC0cZlCRWAAAAAFf4GADLAQAAzQQAAAIAAAAuWewBuvgCAAAAAQBVU0QAVVNEACwB-gAkqAAAEu0BAgUAAQAAAAAA2SpKegAAAAA./cnd=%21SAZhOgjNiMgEEK6ysQ8YuvELIAA./referrer=http%3A%2F%2F04-edito-mtf-laplacemedia-2.fr/clickenc=http%3A%2F%2Fharmoniemutuellefr.solution.weborama.fr%2Ffcgi-bin%2Fdispatch.fcgi%3Fa.A%3Dcl%26a.si%3D1602%26a.te%3D136%26a.aap%3D106%26a.agi%3D76%26g.lu%3D' + (adperfobj.landing_urls[0] || 'https%253A%252F%252Flogs1242.xiti.com%252Fgo.url%253Fxts%253D505074%2526s2%253D18%2526xtor%253DAD-188-%255BSurpressionLocaleParticulier%255D-%255BCentreIDF%255D-%255B300x250%255D-%255BOptique%255D-%255BTradelab%255D-%255BMultiCiblage%255D%2526url%253Dhttps%253A%252F%252Fwww.harmonie-mutuelle.fr%252Fweb%252Fparticuliers%252Fdevis%252F-%252Fdevis-particuliers%252Fetape-1%253For%253Dcomm');


    try{
        adperfobj.imptrackers = new Array(
                
        );

        adperfobj.clicktrackers = (new Array(
                
        ).concat(adperfobj.clicktrackers));

        adperfobj.eventtrackers = (new Array(
                
        ).concat(adperfobj.eventtrackers));
    }catch(scr_e){}



    x1ey.addTrackers(adperfobj);
    x1ey.addClicks(adperfobj);

    x1cl = new x1bb.x1h2();
x1cl.x1c(x1ey, 174, '300x250_optique.swf', adperfobj.width, adperfobj.height, '', 10, 'opaque', 'LT', 'exactfit', ["clicktag"], '', '');
x1ey.x1gG(x1cl, '', 2, '');
x1cl = new x1bb.x1hW();
x1cl.x1c(x1ey, 173, '300x250_optique.gif', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');




    x1ey.x1gQ();


}
x1L('adperf_core_' + adperf_version + '_scrambled.js');