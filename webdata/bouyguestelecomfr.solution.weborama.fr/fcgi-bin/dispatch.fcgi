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
    x1ey.x1fN = 'https://cstatic.weborama.fr/advertiser/1215/40/619/986/';
    x1ey.x1lp = '2265';



    x1ey.conf_oba = false;
    adperfobj.zindex = adperfobj.zindex || 0 || 214748360;

    adperfobj.clicks = new Array();
    adperfobj.clicks[0] = 'https://ba.commentcamarche.net/RealMedia/ads/click_lx.ads/fr_ccm_hightech/home/L20/253086833/Right/OasDefault/ccm_bouygues-tel_miami_oct15_hab_hp_1910_8206-5/ccm_bouygues-tel_miami_oct15_hab_hp_1910_8206-5.html/69634b6c6431596b6b3859414441526a?https://bouyguestelecomfr.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=cl&a.si=1215&a.te=4863&a.aap=2265&a.agi=21&g.lu=' + (adperfobj.landing_urls[0] || '');


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

    x1cl = new x1bb.x1ig();
x1cl.x1c(x1ey, 5759, 'BT-BBox_Miami_300x600.html', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');
x1cl = new x1bb.x1hW();
x1cl.x1c(x1ey, 5758, 'BT-BBox_Miami_300x600.gif', adperfobj.width, adperfobj.height, '', '', '');
x1ey.x1gG(x1cl, '', 2, '');




    x1ey.x1gQ();


}
x1L('adperf_core_' + adperf_version + '_scrambled.js');