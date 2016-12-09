/*
//------------------------------------------------------
// Exemple d'utilisation de la fonction af_flash_object
//------------------------------------------------------
// Dans le fichier HTML ou ASP remplacer les tags <object... habituels par:
// <script language="JavaScript" type="text/javascript" src="/world/ascripts/inc_flash_object.js"></script>
// <script language="JavaScript" type="text/javascript">
// af_flash_object("/mode/06lingeriestval/im06lingeriestval/menu.swf",380,110);
// </script>
//
// Note: les 3 premiers param de la fonction af_flash_object sont obligatoires:
//   - src    : l'URL de la source du fichier flash .swf
//   - width  : la largeur du flash
//   - height : la hauteur du flash
// Les autre parametres sont optionels:
//   - quality : la valeur par defaut est "high"
//   - wmode   : la valeur par defaut est "opaque"
//   - id      : utile seulement si on souhaite utiliser le flash en javascript, par defaut aucun id n'est defini
//   - align   : par defaut aucun alignement n'est d?fini, donc aligne a gauche
//
*/

if (typeof(af_flash_object)=="undefined") {
	af_flash_object = function(src,width,height,quality,wmode,id,align,allowscript,version) {
		if (typeof(quality)=="undefined" || quality=="") quality="high";
		if (typeof(wmode)=="undefined" || wmode=="") wmode="opaque";
		if (typeof(allowscript)=="undefined" || allowscript=="") allowscript="sameDomain";
		if (typeof(version)=="undefined" || version=="") version='8'; else version=''+version;
		if (version.length==1) version=(version<'8' ? '8' : version)+',0,0,0'; else version=version.replace(/\./g,',');
		document.write('<OBJECT width="' + width + '" height="' + height + '" ');
		document.write('classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
		document.write('codebase="' + document.location.protocol + '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + version + '" ');
		if (typeof(id)!="undefined" && id!="") document.write('id="' + id + '" ');
		if (typeof(align)!="undefined" && align!="") document.write('align="' + align + '" ');
		document.write('>');
		document.write('<PARAM NAME=movie VALUE="' + src + '"> ');
		document.write('<PARAM NAME=quality VALUE=' + quality + '> ');
		document.write('<PARAM NAME=wmode VALUE=' + wmode + '> ');
		document.write('<PARAM NAME=allowFullScreen VALUE=true> ');
		document.write('<PARAM NAME=allowScriptAccess VALUE="' + allowscript + '"> ');
		document.write('<EMBED allowFullScreen="true" width="' + width + '" height="' + height + '" src="' + src + '" ');
		document.write('quality=' + quality + ' wmode=' + wmode + ' allowScriptAccess="' + allowscript + '" ');
		if (typeof(id)!="undefined" && id!="") document.write('name="' + id + '" ');
		if (typeof(align)!="undefined" && align!="") document.write('align="' + align + '" ');
		document.write('swLiveConnect=TRUE ');
		document.write('TYPE="application/x-shockwave-flash" PLUGINSPAGE="https://www.macromedia.com/go/getflashplayer">');
		document.write('</EMBED>');
		document.write('</OBJECT>');
	}
}
 