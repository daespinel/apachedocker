
(function($){function loadCompleteMenu(){var url;var successCallback;bindMainMenu();url=DARTY_CONF.CONST.CTX_PATH+"nav/extra/ajax/headermenu_v3";successCallback=bindSubMenu;var cacheXxl=true;if(typeof(DARTY_CONF.CONST.DEBUG_MENU)!=="undefined"&&DARTY_CONF.CONST.DEBUG_MENU){cacheXxl=false;}
if(typeof(DARTY_CONF.CONST.PREVIEW_USER)!=="undefined"&&DARTY_CONF.CONST.PREVIEW_USER!==""){url+="?preview_user="+DARTY_CONF.CONST.PREVIEW_USER;if(typeof(DARTY_CONF.CONST.PREVIEW_DATE)!=="undefined"&&DARTY_CONF.CONST.PREVIEW_DATE!==""){url+="&planning_date="+DARTY_CONF.CONST.PREVIEW_DATE;}
cacheXxl=false;}
$.ajax({type:"GET",dataType:"html",url:url,cache:cacheXxl,success:successCallback});}
function bindMainMenu(){var XXL_DISPLAY_DELAY=150;var XXL_HIDE_DELAY=200;function mainMenuHoverIn(){var main_menu=$(this);main_menu.addClass("selected");var menu_xxl=main_menu.find("#univers-menu-xxl");menu_xxl.css("width",main_menu.width());if(menu_xxl.children()&&menu_xxl.children().length>0){menu_xxl.clearQueue("fx").delay(XXL_DISPLAY_DELAY).show(0,headerXxlBeforeDisplay);}}
function mainMenuHoverOut(){var main_menu=$(this);var menu_xxl=main_menu.find("#univers-menu-xxl");if(menu_xxl.is(":visible")&&menu_xxl.children()&&menu_xxl.children().length>0){menu_xxl.clearQueue("fx").delay(XXL_HIDE_DELAY).queue(function(){menu_xxl.hide();main_menu.removeClass("selected");if($("#univers-menu-xxl .menu-trigger").find(".selected").size()===0){headerXxlAfterHide();}});}else{main_menu.removeClass("selected");menu_xxl.clearQueue("fx");}}
function mainTabClick(){var main_tab=$(this).parent();var menu_xxl=main_tab.find("#univers-menu-xxl");if(main_tab.hasClass("selected")){main_tab.removeClass("selected");menu_xxl.hide();menu_xxl.clearQueue("fx");}else{main_tab.addClass("selected");menu_xxl.css("width",main_tab.width());if(menu_xxl.children()&&menu_xxl.children().length>0){menu_xxl.show();menu_xxl.clearQueue("fx");}}}
if(DARTY_CONF.TABLET){$("#main-tab .main-menu-box-text").click(mainTabClick);}else{$("#main-menu-xxl .menu-trigger").hover(mainMenuHoverIn,mainMenuHoverOut);}}
function bindSubMenu(data){var xxlHtmlData=data;var XXL_DISPLAY_DELAY=150;var XXL_HIDE_DELAY=200;function injectDom(){if(typeof(xxlHtmlData)==="undefined")return;$(xxlHtmlData).find("div.menu_tab_unfolded").each(function(){var cell=$(this);var id=cell.attr('data-tab-id');var cont=$("#"+id);cont.append(cell);});xxlHtmlData=undefined;}
function updateDom(sub_menu_tab){$(sub_menu_tab).find("div.menu_tab_unfolded").each(function(){var cell=$(this);var main_menu=$("#main-menu-xxl");var main_tab=$("#main-tab");var menu_xxl=$("#univers-menu-xxl");cell.css("left",main_tab.width()+"px");cell.css("width",(main_menu.width()
-main_tab.width()
-parseFloat(cell.css("borderRightWidth"))
-parseFloat(cell.css("borderLeftWidth")))+"px");cell.css("height",(menu_xxl.height()
-parseFloat(cell.css("top"))
-parseFloat(cell.css("borderTopWidth"))
-parseFloat(cell.css("borderBottomWidth"))
-parseFloat(cell.css("padding-top"))
-parseFloat(cell.css("padding-bottom")))+"px");});}
function xxlHoverIn(){injectDom()
updateDom($(this));var xxlBox=$(this);var menu_xxl=xxlBox.find(".menu_tab_unfolded");xxlBox.addClass("selected");if(menu_xxl.children()&&menu_xxl.children().length>0){menu_xxl.clearQueue("fx").delay(XXL_DISPLAY_DELAY).show(0,headerXxlBeforeDisplay);}}
function xxlHoverOut(){var xxlBox=$(this);var menu_xxl=xxlBox.find(".menu_tab_unfolded");if(menu_xxl.is(":visible")&&menu_xxl.children()&&menu_xxl.children().length>0){menu_xxl.clearQueue("fx").delay(XXL_HIDE_DELAY).queue(function(){menu_xxl.hide();xxlBox.removeClass("selected");if($("#univers-menu-xxl .menu-trigger").find(".selected").size()===0){headerXxlAfterHide();}});}else{xxlBox.removeClass("selected");menu_xxl.clearQueue("fx");}}
function tablet_xxlOpen(){var xxlBox=$(this);if(xxlBox.attr("data-initialized")!="true"){xxlBox.attr("data-initialized","true");var link=xxlBox.find("a.univers-box-text");var url=link.attr("href");link.attr("data-url",url);link.attr("href","#");link.click(function(){if(xxlBox.find(".menu_tab_unfolded").is(":visible")){document.location=url;}});injectDom();updateDom(xxlBox);xxlBox.find(".close_menu_xxl").click(function(e){e.stopPropagation();xxlBox.removeClass("selected");xxlBox.find(".menu_tab_unfolded").hide();});}
xxlBox.addClass("selected").siblings().removeClass("selected");$("#univers-menu-xxl .menu_tab_unfolded").hide();var unfolded=xxlBox.find(".menu_tab_unfolded");if(unfolded.length>0){unfolded.show();}else{document.location=xxlBox.find("a.univers-box-text").attr("data-url");}}
if(DARTY_CONF.TABLET){$("#univers-menu-xxl .menu-trigger").click(tablet_xxlOpen);}else{$("#univers-menu-xxl .menu-trigger").hover(xxlHoverIn,xxlHoverOut);}}
$(function(){if(typeof xxlheader_disable_ajax==="undefined"){loadCompleteMenu();}});})(jQuery);

function readCookies(){return{ck_displayname:getUserInfo(),bouser_info:getBOUserInfo(),order_info:getOrderInfo(),wishlist_info:getWishlistInfo(),has_basket_content:hasBasketContent()};function getUserInfo(){if(DARTY_CONF.userIsConnected()){return DARTY_CONF.getCookie('PCKFIRSTNAME',true);}
return null;}
function getOrderInfo(){var ck_orderInfos=DARTY_CONF.getCookie('PCKORDER',true);if(!ck_orderInfos){return{ck_order:null,ck_items:0,ck_amount:'0.00'};}
var orderInfos=ck_orderInfos.split('_');return{ck_order:orderInfos[0],ck_items:parseInt(orderInfos[1],10),ck_amount:orderInfos[2]};}
function getWishlistInfo(){var ck_wishlistInfos=DARTY_CONF.getCookie('PCKWISHLIST',true);if(!ck_wishlistInfos){return{ck_count:0};}
var wishlistInfos=ck_wishlistInfos.split('_');return{ck_count:wishlistInfos[0]};}
function getBOUserInfo(){var infos=DARTY_CONF.getCookie('CK_BO_USER',true);if(!infos){return null;}
var match=/^(.+)_([^_]+)$/.exec(infos);if(!match){return null;}
return{name:match[1],id:match[2]};}
function hasBasketContent(){var flag=0;if(getOrderInfo().ck_items>0){flag=1;}
return flag;}}
function dartyComCallback(){if(typeof(callbackCatalogue)!=='undefined'){callbackCatalogue();}}
var taggageOmniture=function(){$('#darty_header_espace_client').one("mouseover",function(){DARTY_CONF.TRACKING.omniture_openLoginHeader();});$("#darty_header_espace_client_login_popin a.creer").one('click',function(){DARTY_CONF.TRACKING.omniture_openLoginHeader("www","Inscription");});var parameters=(window.location.href.substring(window.location.href.indexOf('?')+1)).split('&');$.each(parameters,function(index,parameter){var paramSplit=parameter.split("=");var parameterName=paramSplit[0];var parameterValue=paramSplit[1];if(parameterName=='loginStatus'&&parameterValue=='badPassword'){DARTY_CONF.TRACKING.omniture_openLoginHeader("www","Saisie invalide");}});}
function bindLoginWishListPopin(trigger,urlRedirect){trigger.click(function(event){event.preventDefault();$.mask.close();});trigger.bind("click",function(){DARTY_CONF.WISHLIST.openLoginWishListPopin(trigger,urlRedirect);});}
function openLoginWishList(trigger,urlRedirect){DARTY_CONF.WISHLIST.openLoginWishListPopin(trigger,urlRedirect);}
DARTY_CONF.WISHLIST=DARTY_CONF.WISHLIST||{};DARTY_CONF.WISHLIST.openLoginWishListPopin=function(trigger,urlRedirect){if(urlRedirect!=null){$("#darty_wishlist_client_login_form #urlRedirect").val(urlRedirect);}
var popin=$("#darty_header_wishlist_login_popin");popin.css("width","450px");popin.css("height","220px");popin.addClass("share_wishlist_popin");DARTY_CONF.displayCenteredPopin(trigger,popin,function(){var content=$("#darty_wishlist_client_login_popin");var validation=$('#darty_wishlist_client_login_validation_wrapper');content.show();validation.show();popin.append(content);DARTY_CONF.TRACKING.omniture_openLoginWishList();$("#darty_header_wishlist_login_popin a.creer").one('click',function(){DARTY_CONF.TRACKING.omniture_openLoginWishList("www","Inscription");});});}
var newsletterInit=function(){var button=$('#darty_header_newsletter_info_button');var popin=$('#darty_header_newsletter_info_popin');init();function init(){bindButton();};function bindButton(){if(button&&button.length>0&&popin&&popin.length>0){button.hover(function(){popin.show();},function(){popin.hide();});}};};

(function($){var userInit=function(userData,isDefaultDisplay){var displayer=$('#h_xxl_login');var lienMenu=$('#h_xxl_login_lien');var iconMenu=$('#user_icon');var labelIconMenu=$('#h_xxl_login_lien .label');var loggedinPopin=$('#h_xxl_login_loggedin_popin');var displayUserName=$('#h_xxl_login_loggedin_popin #h_xxl_login_username');update(userData);function update(userData){if(userData.bouser_info){bouser(userData);if(DARTY_CONF.userIsConnected()&&$("#darty-back-office-client").length==0){var escapedDisplayName=escapeHtml(userData.ck_displayname);$("#darty-back-office-conseiller").after('<div class="title" id="darty-back-office-client">  |  Client : '+escapedDisplayName+'</div>');$('#darty-back-office-info div.content').after("<a class='darty-back-office-client-logout' href='"+DARTY_CONF.CONST.DARTY_COM_BASEURL+"/webapp/wcs/stores/servlet/UserLogoff?storeId=10001&org=logout&unsetClient=true'>D&eacute;connexion</a>")}
lienMenu.attr('src',DARTY_CONF.CONST.DARTY_COM_BASEURL+'/webapp/wcs/stores/controller/UserLogonDisplayView');lienMenu.attr('title','Espace Client');iconMenu.addClass('sprite_user_checked');labelIconMenu.html("Espace Client");lienMenu.show();}else{fouser(userData.ck_displayname);if(DARTY_CONF.TABLET&&userData.ck_displayname!==null){lienMenu.replaceWith("<div id='h_xxl_login_lien' class='h_xxl_login_lien'>"+lienMenu.html()+"</div>");}}};function fouser(firstName){if(isDefaultDisplay){if(firstName===null){labelIconMenu.html("Se connecter");lienMenu.attr('title',"Se connecter");}else{var nameHtmlEscaped=escapeHtml(firstName);labelIconMenu.html("CONNECT&Eacute;(E)");displayUserName.html("Bonjour "+nameHtmlEscaped);iconMenu.addClass('loggedIcon');lienMenu.removeAttr('title');DARTY_CONF.setStickyContainerEvents(displayer,loggedinPopin);}
lienMenu.show();DARTY_CONF.addPopinMask(displayer);}else{}};function bouser(userData){var boblock=$('#darty-back-office-info');var name=$('#darty-back-office-conseiller');var orderId=$('#darty-back-office-order');var userId=$('#darty-back-office-user-id');var topLink=$('#h_xxl_topLink');var boUserName=escapeHtml(userData.bouser_info.name);var boUserId=userData.bouser_info.id;var boOrderId=userData.order_info.ck_order;name.html(boUserName);userId.attr('value',boUserId);topLink.hide();boblock.show();};function escapeHtml(stringToEscape){return $("<div/>").text(stringToEscape).html();};};var initPopinLogin=function(id){var loginErrorMsg=$('#'+id+'_error');var loginPopin=$('#'+id+'_popin');var login=$("#"+id+"_form input.login",loginPopin);var password=$("#"+id+"_form input.pass",loginPopin);var remember=$("#darty_remember_user",loginPopin);var mustRemember=true;$('body').append("<div id='"+id+"_validation_wrapper' style='display:none;'><div id='"+id+"_validation_error_container'></div></div>");var errorContainerWrapper=$("#"+id+"_validation_wrapper");initLogin();checkError();function checkError(){var parameters=(window.location.href.substring(window.location.href.indexOf('?')+1)).split('&');$.each(parameters,function(index,parameter){var paramSplit=parameter.split("=");var parameterName=paramSplit[0];var parameterValue=paramSplit[1];var accessTrigger=$("#h_xxl_wishlist_lien");if(parameterName=='loginStatus'){if(parameterValue=='badPassword'){$("#"+id+"_error_msg").html("Identifiants non reconnus !");}else if(parameterValue=='blocked'){$("#"+id+"_error_msg").html("Trop de tentatives de connexions !");}
$("#"+id+"_error").show();openLoginWishList(accessTrigger,accessTrigger.attr('href'));}});};function initLogin(){var formLogin=$("#"+id+"_form").validate({rules:{password:"required",name:{required:true,email:true}},messages:{password:"Mot de passe requis",name:{required:"Adresse email requise",email:"Adresse email non valide"}},errorLabelContainer:"#"+id+"_validation_error_container",submitHandler:function(form){$("#"+id+"_error").hide();mustRemember=remember.is(':checked');var urlRedirect=$("#"+id+"_form #urlRedirect");var urlErrorRedirect=$("#"+id+"_form #urlErrorRedirect");urlErrorRedirect.val(window.location.href);if(urlRedirect.val().length==0){urlRedirect.val(window.location.href);}
form.submit();return false;},invalidHandler:function(form,validator){if(validator.numberOfInvalids()>1){$("#"+id+"_error").show();DARTY_CONF.TRACKING.omniture_openLoginHeader("www","Saisie invalide");validator.errorList[0].element.focus();}else{$("#"+id+"_error").hide();}}});};};var wishlistInit=function(userData){var countSpan=$("#h_xxl_wishlist_count");if(DARTY_CONF.userIsConnected()){displayCount(userData);}else{var accessTrigger=$("#h_xxl_wishlist_lien");if(accessTrigger.length!=0){bindLoginWishListPopin(accessTrigger,accessTrigger.attr('href'));}}
function displayCount(userData){var wishlistInfos=userData.wishlist_info;if(wishlistInfos!=null&&wishlistInfos.ck_count!=null&&wishlistInfos.ck_count>0){if(countSpan.length!=0){countSpan.html(wishlistInfos.ck_count);if(wishlistInfos.ck_count>9&&wishlistInfos.ck_count<100){countSpan.css('height','13px');countSpan.css('line-height','12px');}else if(wishlistInfos.ck_count>99){countSpan.css('top','-10px');countSpan.css('height','20px');countSpan.css('line-height','18px');}
countSpan.show();}}};};var basketInit=function(userData,executeReload){var countSpan=$("#h_xxl_panier_count");var updateBasket=function(){return function(userData){if(countSpan.length!=0){var ck_items=userData.order_info.ck_items;if(ck_items==null||ck_items==0){countSpan.hide();}
else{if(ck_items>9&&ck_items<100){countSpan.css('height','13px');countSpan.css('line-height','12px');}else if(ck_items>99){countSpan.css('top','-10px');countSpan.css('height','20px');countSpan.css('line-height','18px');}
countSpan.html(ck_items);countSpan.attr('data-basket-count',ck_items);countSpan.show();}}};}();updateBasket(userData);if(executeReload==undefined||executeReload){updateBasket(userData);}else{return function(){};}};$(function(){var userData=readCookies();DARTY_CONF.reloadBasket=basketInit(userData);DARTY_CONF.reloadFacadeBasket=function(){basketInit(readCookies(),false);};userInit(userData,true);initPopinLogin('darty_wishlist_client_login');wishlistInit(userData);taggageOmniture();});})(jQuery);