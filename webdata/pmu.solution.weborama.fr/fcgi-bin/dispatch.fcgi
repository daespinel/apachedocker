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
    x1ey.x1fN = 'https://cstatic.weborama.fr/advertiser/172/7/44/3236/';
    x1ey.x1lp = '8342';



    x1ey.conf_oba = false;
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'https://56c646cc9f58f35661191763632f428a.leboncoin.fr/RealMedia/ads/click_lx.ads/divers/toutes_categories/R12/L28/33631500/Top/Leboncoin/ELE0024581_V3/S_RG_RG_CONQUETE_728x90_CKI_CPM.html/69634b6b4e3159626a6a674143567368?https://pmu.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=cl&a.si=172&a.te=8578&a.aap=8342&a.agi=243&g.lu=' + (adperfobj.landing_urls[0] || '');


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

    x1cl = new x1bb.x1hW();
x1cl.x1c(x1ey, 6045, 'S_FOOT_728x90_RTB_ACQ.gif', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');
x1cl = new x1bb.x1hW();
x1cl.x1c(x1ey, 6043, 'G_GENERIQUE_728x90.gif', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');




    x1ey.x1gQ();


}
x1L('adperf_core_' + adperf_version + '_scrambled.js');