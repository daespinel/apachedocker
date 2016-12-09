var config = {
	campaign_id:"",
	OAS_URL:"",
	video_duration:videoDuration,
	currentPlayer:false,
	isRsponsive:true
}

var isMraid = false;

if(typeof mraid !== 'undefined')
{
	isMraid = true;
	mraid.addEventListener('ready', init); 
}
else
{
	window.onload = function(e)
	{ 
		init();
	}
}

var isTF1Context = false;
var isChildOfIframe = true;
var debug;
var ifrm;

var timerwat;
var MainWATPlayer;

function init()
{
	if (window.addEventListener) {  // all browsers except IE before version 9
		window.addEventListener ("message", OnPostMessage, false);
	}
	else {
		if (window.attachEvent) {   // IE before version 9
			window.attachEvent("onmessage", OnPostMessage);
		}
	}
	
	if(isPhome)
	{
		parent.postMessage("resizeIframePub", "*");
		
		disable_scroll();
	}
	else
	{
		//console.log(window.frameElement);
		
		if(baseCreativeWidth>800 && window.frameElement)
			window.frameElement.style.width = "100%";
	}
	
	if(typeof sitepage !== 'undefined')
	{
		isChildOfIframe = false;
	}
	
	currentContainer = document.getElementById("container");
	currentContainer2 = document.getElementById("container2");
	
	if(keepPlayerMaxSize)
		currentContainer.style.left = "50%";
	
	if(isMraid)
	{
		currentPlayer = document.getElementById("video");
		currentPlayer.style.visibility = "visible";
		currentContainer.children[1].style.visibility = "hidden";
	}
	else
	{
		currentPlayer = document.getElementById("watvideo");
		if(!videoURL)
			currentPlayer.style.visibility = "hidden";
	}
	
	config.currentPlayer = currentPlayer;
	
	currentContainer.style.width = baseCreativeWidth;
	currentContainer.style.height = baseCreativeHeight;
	
	var browserVer = getInternetExplorerVersion();
	if (browserVer > -1 && browserVer < 9) 
	{
		var ieBg = document.createElement("img");
		ieBg.id = "ieBg";
		ieBg.src = backgroundImage;
		ieBg.style.width = "100%";
		document.getElementById("clicZones").appendChild(ieBg);
		
		//videoRectangle.top*=0.8;
		//videoRectangle.height*=0.8;
	}
	else
	{
		if(!isPhome)
		{
			currentContainer.style["background-image"] = "url("+backgroundImage+")";
			currentContainer.style["backgroundImage"] = "url("+backgroundImage+")";
		}
		else
		{
			currentContainer2.style["background-image"] = "url("+backgroundImage+")";
			currentContainer.style["backgroundImage"] = "url("+backgroundImage+")";
		}
	}
	
	if(!isMraid) {
		if (videoURL) {
			currentPlayer.src = videoURL;
		}
	}
	else {
		if (HTML5_videoURL) {
			currentPlayer.src = HTML5_videoURL;
		}
	}
	
	
	if(videoRectangle.pixels)
	{
		if(isPhome)
		{
			currentPlayer.style.top = (pixelToPercent(videoRectangle.top, false)+2.5)+"%";
			currentPlayer.style.left = (pixelToPercent(videoRectangle.left, true)+1.24)+"%";
		}
		else
		{
			currentPlayer.style.top = (pixelToPercent(videoRectangle.top, false)+0)+"%";
			currentPlayer.style.left = (pixelToPercent(videoRectangle.left, true)+0)+"%";
		}
		currentPlayer.style.width = (pixelToPercent(videoRectangle.width, true))+"%";
		currentPlayer.style.height = (pixelToPercent(videoRectangle.height, false))+"%";
	}
	else
	{
		currentPlayer.style.top = videoRectangle.top+"%";
		currentPlayer.style.left = videoRectangle.left+"%";
		currentPlayer.style.width = videoRectangle.width+"%";
		currentPlayer.style.height = videoRectangle.height+"%";
	}
	
	//process clickZones here...
	for(var zoneId in clickableAreas)
	{
		var clicZone = clickableAreas[zoneId];
		var newZone  = document.createElement("div");
		var click = document.createElement("a");
		click.href = "#"
		click.setAttribute('onclick', "goToUrl('"+clicZone.url+"', '"+clicZone.tacking_ID+"')");
				
		newZone.style.position="absolute";
		
		if(clicZone.rectangle.pixels)
		{
			newZone.style.top = pixelToPercent(clicZone.rectangle.top, false)+"%";
			newZone.style.left = pixelToPercent(clicZone.rectangle.left, true)+"%";
			newZone.style.width = pixelToPercent(clicZone.rectangle.width, true)+"%";
			newZone.style.height = pixelToPercent(clicZone.rectangle.height, false)+"%";
		}
		else
		{
			newZone.style.top = clicZone.rectangle.top+"%";
			newZone.style.left = clicZone.rectangle.left+"%";
			newZone.style.width = clicZone.rectangle.width+"%";
			newZone.style.height = clicZone.rectangle.height+"%";
		}
		
		if(clicZone.debug)
		{
			debug = newZone;
			newZone.style["background-color"] = "#FF0000";
			newZone.style.backgroundColor = "#FF0000";
			newZone.innerHTML = "hightHased: "+keepPlayerMaxSize;
		}
		
		document.getElementById("clicZones").appendChild(click);
		click.appendChild(newZone);
	}
	
	if(isPhome && !isMraid)
	{
		currentContainer.style.top = "54px";
		setPhomeElements();
	}
	
	setInterval(function () {checkAutoPlay()}, 250);
	
	if(!isMraid && isPhome)
		InitTracking();
	
	//if mobile..
	window.addEventListener("deviceorientation", handleOrientation, true);
}

function goToUrl(url, id)
{
	console.log("going to url: "+url);
	window.open(url, "_blank")
}

function pixelToPercent(value, horizontal)
{
	var maxValue = baseCreativeWidth;
	
	if(!horizontal)
		maxValue = baseCreativeHeight;
		
	return value/maxValue*100.0;
}

var resizeLevel = 1;

var currentContainer;
var currentContainer2;
function setAdWith(newWidth)
{
	newWidth+=10;
	
	if(newWidth>baseCreativeWidth)
		newWidth = baseCreativeWidth;
	
	currentContainer.style.width = newWidth+"px";
	currentContainer.style.height = (newWidth*baseCreativeHeight/baseCreativeWidth)+"px";
	
	currentContainer2.style.width = newWidth+"px";
	currentContainer2.style.height = (newWidth*realCreativeHeight/baseCreativeWidth)+"px";
	
	resizeLevel = getViewport().width/baseCreativeWidth;
}

function setAdHeight(newHeight)
{
	if(newHeight>baseCreativeHeight)
		newHeight = baseCreativeHeight;
		
	currentContainer.style.height = newHeight+"px";
	currentContainer.style.width =	(newHeight*baseCreativeWidth/baseCreativeHeight)+"px";
	
	currentContainer2.style.width = currentContainer.style.width;
	currentContainer2.style.height = (parseFloat(currentContainer.style.width)*realCreativeHeight/baseCreativeWidth)+"px";
	
	
	resizeLevel = getViewport().height/baseCreativeHeight;
	
	if(currentPlayer.getBoundingClientRect().right-currentPlayer.getBoundingClientRect().left>getViewport().width)
	{	
		//console.log(currentPlayer.getBoundingClientRect().right-currentPlayer.getBoundingClientRect().left+" is superior to: "+getViewport().width);
		setAdWith(parseFloat(currentContainer.style.width)-(currentPlayer.getBoundingClientRect().right-currentPlayer.getBoundingClientRect().left-getViewport().width)*2.25);
	}
}

var currentPlayer;
function isElementInViewport (el) {

	//special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}

	var rect = el.getBoundingClientRect();
	
	if(!isPhome)
	{	
		try
		{	
			rect = window.frameElement.getBoundingClientRect();
		}
		catch(e)
		{}
	}
		
	var viewPort = getRealViewport(true);	
	//console.log("viewPort: "+getRealViewport(true).width+":"+getRealViewport(true).height);	
	//console.log("rect: "+window.frameElement.getBoundingClientRect().top+":"+window.frameElement.getBoundingClientRect().left+":"+window.frameElement.getBoundingClientRect().bottom+":"+window.frameElement.getBoundingClientRect().right);	
		
	return true;
	//(
		//rect.top >= 0 &&
		//rect.left >= 0 //&&
		//rect.bottom <= viewPort.height && /*or $(window).height() */
		//rect.right <= viewPort.width /*or $(window).width() */
	//);
}

function getBounds(e1)
{
	//special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}
	
	return el.getBoundingClientRect();
}

var lastViewPort = {width:0, height:0};

var isPlaying = false;

function checkAutoPlay()
{
	if(!keepPlayerMaxSize)
	{
		// called when the window is scrolled.
		
		if(typeof loopVideo !== 'undefined')
		{
			if(loopVideo==true)
			{
				if(isElementInViewport(currentPlayer))
				{
					if(!isPlaying)
					{
						console.log("setPlay");
						var message = "setPlay";
						if (currentPlayer.contentWindow.postMessage) {
							currentPlayer.contentWindow.postMessage (message, "*");
						}
						else {
							//alert ("Your browser does not support the postMessage method!");
						}
						
						isPlaying = true;
					}
				}
				else
				{
					if(isPlaying)
					{
						console.log("setPause");
						var message = "setPause";
						if (currentPlayer.contentWindow.postMessage) {
							currentPlayer.contentWindow.postMessage (message, "*");
						}
						else {
							//alert ("Your browser does not support the postMessage method!");
						}
						isPlaying = false;
					}
				}
			}
		}
	}
	
	if(lastViewPort.width!=getViewport().width || lastViewPort.height!=getViewport().height)
	{
	
		updateView();
		
		lastViewPort = getViewport();
	}
	
	if(lastViewPort == -1)
		lastViewPort = getViewport();
	
	if(detectmob() || isMraid)
	{
		window.scrollTo(0, 0);
	}
}

var lastViewPortWidth = -1;
function updateView()
{
	if(!keepPlayerMaxSize)
	{
		if(getViewport().width<baseCreativeWidth)
			setAdWith(getViewport().width-10)
		else
			setAdWith(baseCreativeWidth)
	}
	else
	{
		if(getViewport().height<baseCreativeHeight)
			setAdHeight(getViewport().height)
		else
			setAdHeight(baseCreativeHeight)
	}
	
	if(keepPlayerMaxSize)
	{
		if(isPhome)
		{
			currentContainer.style["margin-left"] = (-parseFloat(currentContainer.style.width)/2)+"px";
			currentContainer.style["marginLeft"] = (-parseFloat(currentContainer.style.width)/2)+"px";
			
			currentContainer2.style["margin-left"] = (-parseFloat(currentContainer2.style.width)/2)+"px";
			currentContainer2.style["marginLeft"] = (-parseFloat(currentContainer2.style.width)/2)+"px";
		}
		else
		{
			currentContainer.style["margin-left"] = (-parseFloat(getRealViewport(true).width)/2)+"px";
			currentContainer.style["marginLeft"] = (-parseFloat(getRealViewport(true).width)/2)+"px";
			
			currentContainer2.style["margin-left"] = (-parseFloat(getRealViewport(true).width)/2)+"px";
			currentContainer2.style["marginLeft"] = (-parseFloat(getRealViewport(true).width)/2)+"px";
		}
	}	
	else
	{
		if(!isPhome)
		{
			if(getRealViewport(true).width>baseCreativeWidth)
			{
				var offset = -(baseCreativeWidth-parseFloat(getRealViewport(true).width))/2;
				currentContainer.style["margin-left"] = offset+"px";
				currentContainer.style["marginLeft"] = offset+"px";
				
				currentContainer2.style["margin-left"] = offset+"px";
				currentContainer2.style["marginLeft"] = offset+"px";
			}
			else
			{
				currentContainer.style["margin-left"] = 0+"px";
				currentContainer.style["marginLeft"] = 0+"px";
				
				currentContainer2.style["margin-left"] = 0+"px";
				currentContainer2.style["marginLeft"] = 0+"px";
			}
		}
	}
	
	if(isPhome && !isMraid && !isTF1Context)
	{
		document.getElementById('bclose').style.left=(getViewport().width-163-15)+"px";
		document.getElementById('btext').style.left=(getViewport().width-150-15)+"px";
		document.getElementById('bcount').style.left=(getViewport().width-29-25)+"px";
	}
	
	if(isPhome && !isMraid && isTF1Context)
	{
		parent.document.getElementById('bclose').style.left=(getViewport().width-163-15)+"px";
		parent.document.getElementById('btext').style.left=(getViewport().width-150-15)+"px";
		parent.document.getElementById('bcount').style.left=(getViewport().width-29-25)+"px";
	}
	
	if(!isPhome)
	{
		//window.frameElement.style.width = getRealViewport(true).width+"px";
		
		try
		{
			window.frameElement.style.height = currentContainer2.style.height;
		}
		catch(e)
		{}
		
		if(lastViewPortWidth!=getRealViewport(true).width)
		{
			parent.postMessage("resizeMasthead", "*");
			
			lastViewPortWidth=getRealViewport(true).width
		}
	}
}

function getViewport()
{
	return getRealViewport(false);
}

function getRealViewport(parentWindow) 
{
	var viewPortWidth;
	var viewPortHeight;
	
	if(isTF1Context && (isPhome || parentWindow))
	{
		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof parent.window.innerWidth != 'undefined') 
		{
			if(detectmob() || isMraid)
			{
				viewPortWidth = parent.window.screen.width,
				viewPortHeight = parent.window.screen.height
			}
			else
			{
				viewPortWidth = parent.window.innerWidth,
				viewPortHeight = parent.window.innerHeight
			}
		}
		
		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof parent.document.documentElement != 'undefined'
		&& typeof parent.document.documentElement.clientWidth !=
		'undefined' && parent.document.documentElement.clientWidth != 0) {
			viewPortWidth = parent.document.documentElement.clientWidth,
			viewPortHeight = parent.document.documentElement.clientHeight
		}
		
		// older versions of IE
		else {
			viewPortWidth = parent.document.getElementsByTagName('body')[0].clientWidth,
			viewPortHeight = parent.document.getElementsByTagName('body')[0].clientHeight
		}
		
		/*if(window.orientation)
		{
			if(window.orientation==-90 || window.orientation==90) 
			{
				//device was inverted... compute again
				var lastHeight = viewPortHeight;
				viewPortHeight = viewPortWidth;
				viewPortWidth = lastHeight;
			}
		}*/
	}
	else
	{
	
		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerWidth != 'undefined') 
		{
			if(detectmob() || isMraid)
			{
				viewPortWidth = window.screen.width,
				viewPortHeight = window.screen.height
			}
			else
			{
				viewPortWidth = window.innerWidth,
				viewPortHeight = window.innerHeight
			}
		}
		
		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0) {
			viewPortWidth = document.documentElement.clientWidth,
			viewPortHeight = document.documentElement.clientHeight
		}
		
		// older versions of IE
		else {
			viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
			viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
		}
		
		if(window.orientation)
		{
			if(window.orientation==-90 || window.orientation==90) 
			{
				//device was inverted... compute again
				var lastHeight = viewPortHeight;
				viewPortHeight = viewPortWidth;
				viewPortWidth = lastHeight;
			}
		}
	}
	
	return {width:viewPortWidth, height:viewPortHeight};
}

function handleOrientation(event) {
	
	updateView();
	
	/*
	if(isPhome && !isMraid && !isTF1Context)
	{
		document.getElementById('bclose').style.left=(getViewport().width-163-15)+"px";
		document.getElementById('btext').style.left=(getViewport().width-150-15)+"px";
		document.getElementById('bcount').style.left=(getViewport().width-29-25)+"px";
	}
	*/
	//debug.innerHTML = window.orientation;
}

function httpGet(theUrl)
{
	//console.log('query:  ',theUrl);
	
    var xmlHttp = null;

	if (window.XDomainRequest) xmlHttp = new XDomainRequest();
	else if (window.XMLHttpRequest) xmlHttp = new XMLHttpRequest();
	else xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	
	xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function detectmob() 
{ 
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	){
		return true;
	}
	else {
		return false;
	}
}

var prehome;
function setPhomeElements()
{
	prehome = document.createElement("div");
	prehome.id = "prehome";
	prehome.style["background-color"] = document.body.style["background-color"];
	prehome.style["backgroundColor"] = document.body.style["background-color"];
	prehome.style.position= "absolute";
	prehome.style.top="0px";
	prehome.style.left = "0px";
	prehome.style.height= "100%";
	prehome.style.width= "100%"; //110% car ie8 en coupe un moreau...
	prehome.style["z-index"]="999999";
	prehome.style["zIndex"]="999999";
	
	var bandeau = document.createElement("div");
	
	bandeau.style.backgroundColor="#FFFFFF";
	bandeau.id = "bandeau";
	bandeau.style.position= "absolute";
	bandeau.style.top="0px";
	bandeau.style.left="-10px";
	bandeau.style.height= "54px";
	bandeau.style.width= "110%"; //110% car ie8 en coupe un moreau...
	bandeau.style["z-index"]="999999999";
	bandeau.style["zIndex"]="99999999";
	
	
	var content = document.createElement("div");
	content.id = "content";
	//content.style.backgroundColor="#000000";
	content.style.position= "absolute";
	content.style.top="0px";
	content.style.left = "0px";
	content.style.height= "100%";
	content.style.width= "100%"; //110% car ie8 en coupe un moreau...
	content.style["z-index"]="999999";
	content.style["zIndex"]="999999";
	content.style["overflow-x"]="hidden"; 
	content.style["overflow-y"]="hidden";
	content.style["background-color"] = document.body.style["background-color"];
	content.style.backgroundColor = document.body.style["background-color"];
	
	if(isTF1Context)
		parent.document.body.appendChild(prehome);
	else	
		document.body.appendChild(prehome);
	
	// elements bandeau

	var blcfond = document.createElement("div"),
		pglogo = document.createElement("div"),
		bcount = document.createElement("div"),
		btext = document.createElement("span"),
		bclose = document.createElement("div");

	blcfond.id = "blcfond";
	pglogo.id = "pglogo";
	bcount.id = "bcount";
	btext.id = "btext";
	bclose.id = "bclose";
	
	bandeau.appendChild(blcfond);
	bandeau.appendChild(pglogo);
	bandeau.appendChild(btext);
	bandeau.appendChild(bcount);
	bandeau.appendChild(bclose);
	
	blcfond.style.backgroundColor="#FFFFFF";
	blcfond.style.position= "absolute";
	blcfond.style.top="0px";
	blcfond.style.left="0px";
	blcfond.style.height= "54px";
	blcfond.style.width= "110%"; //110% car ie8 en coupe un moreau...
	
	pglogo.style.position= "absolute";
	pglogo.style.top="0px";
	pglogo.style.left="25px";
	pglogo.style.width= "127px";
	pglogo.style.height= "54px";

	bclose.style.position = "absolute";
	bclose.style.top="12px";
	bclose.style.left=(getViewport().width-163-15)+"px";
	bclose.style.width= "163px";
	bclose.style.height= "32px";
	bclose.style.cursor = "pointer";
	bclose.style.backgroundImage = "url(https://slpubmedias.tf1.fr/logo/acceder03.png)";
	
	bclose.onclick = function()
	{
		Prehome_delete();
	};
	
	currentContainer2.style.visibility = "visible"
	prehome.appendChild(currentContainer2);
	
	prehome.appendChild(bandeau);
	prehome.appendChild(content);

	
	CheckLogo();

	btext.innerHTML="<font face='arial'><size='11'>Acc&eacuteder au site</size></font>";
	btext.style.position= "absolute";
	btext.style.top="19px";
	btext.style.left=(getViewport().width-150-15)+"px";
	btext.style.height = "30px";
	btext.style.width = "150px";
	
	bcount.style.position= "absolute";
	bcount.style.top="12px";
	bcount.style.left=(getViewport().width-29-25)+"px";
	bcount.style.width= "29px";
	bcount.style.height= "31px";
	bcount.style.backgroundImage = "url(https://slpubmedias.tf1.fr/logo/decompte.png)";
	bcount.style.backgroundPosition = "0px 0px";
	
	content.appendChild(currentContainer2);
	content.appendChild(currentContainer);
	
	CheckCount();
}


function CheckLogo()
{
	var sitepage="TF1";
	if(sitepage)
	{
		var pglogo;
		if(isTF1Context)
			pglogo = parent.document.getElementById("pglogo");
		else
			pglogo = document.getElementById("pglogo");
		
		var bclose;
		if(isTF1Context)
			bclose = parent.document.getElementById("bclose");
		else
			bclose = document.getElementById("bclose");
			
		var fondlogo;
		var isMelty = false;
		var pageactu = sitepage.split(".");
		switch(pageactu[0])
		{
			case "TF1":
				fondlogo ="https://slpubmedias.tf1.fr/logo/127x54_mytf1.png";
				break;
			case "MYTF1NEWS":
				fondlogo = "https://slpubmedias.tf1.fr/logo/127x54_mytf1_news.png";
				break;
			case "WAT":
				if (pageactu.length >= 2 && pageactu[1] == "melty") {
                      var domainName = Melty.conf.domain.instance_name;
                          fondlogo ="https://slpubmedias.tf1.fr/logo/127x54_"+domainName+".png";
                          pglogo.className += " _logo _white_full";
                          pglogo.style.width="200px";
                          pglogo.style.height="43px";
                          pglogo.style.margin="7px";

                          bandeau.className += domainName+" _network  _bc_"+domainName;
                          blcfond.className += domainName+" _network  _bc_"+domainName;

                          bclose.style.backgroundImage = "";
                          bclose.innerHTML= "Acc&eacute;der au site";
                          bclose.style.color = "#ffffff";
                          bclose.style.fontSize = "16px";
						  bclose.style.width = "195px";
                          bclose.style.top = "17px";
                          bclose.style.fontStyle = "italic";
                          isMelty = true;
                      } else { 
                       fondlogo ="https://slpubmedias.tf1.fr/logo/127x54_wat1.png";
                       bclose.style.backgroundImage = "url(https://slpubmedias.tf1.fr/logo/wat_acceder.png)";
                     }
				break;
			case "SPORTS":
				fondlogo ="https://slpubmedias.tf1.fr/logo/127x54_eurosport.png";
				break;
			case "TFOU":
				fondlogo ="https://slpubmedias.tf1.fr/logo/127x54_tfou.png";
				break;
			case "AUTOMOTO":
				//fondlogo ="https://slpubmedias.tf1.fr/logo/127x54_automoto.png";
				fondlogo="https://slpubmedias.tf1.fr/logo/127x54_mytf1.png";
				break;
			case "TELEFOOT":
				//fondlogo ="https://slpubmedias.tf1.fr/logo/127x54_telefoot.png";
				fondlogo="https://slpubmedias.tf1.fr/logo/127x54_mytf1.png";
				break;
			case "RUGBYRAMA":
				fondlogo ="https://slpubmedias.tf1.fr/logo/127x54_rugbyrama.png";
				//fondlogo="https://slpubmedias.tf1.fr/logo/127x54_mytf1.png";
				break;
			case "HD1":
				fondlogo ="https://slpubmedias.tf1.fr/logo/127x54_hd1.png";
				break;
			default:
				fondlogo="https://slpubmedias.tf1.fr/logo/127x54_mytf1.png";
				break;
		}
		
		if(!isMelty) {
			pglogo.style.backgroundImage="url("+fondlogo+")";
        }

		// pglogo.style.backgroundImage="url("+fondlogo+")";
	}
}

function CheckCount()
{
	if(countparam.activtimeout != false)
		var settimeout = window.setTimeout(function(){Prehome_delete();},countparam.timecount * 1000);

	if(countparam.counttop == true)
	{
		if(!isTF1Context)
		{
			btext.style.display = "block";
			bcount.style.display = "block";
			bclose.style.display = "none";
		}
		else
		{
			parent.document.getElementById('btext').style.display = "block";
			parent.document.getElementById('bcount').style.display = "block";
			parent.document.getElementById('bclose').style.display = "none";
		}
		
		var counttime = 1,
			counting = window.setInterval(function()
		{
			counttime++;
			if(counttime == 6)
			{
				window.clearInterval(counting);
				
				if(!isTF1Context)
				{
					bcount.style.display = "none";
					btext.style.display = "none";
					bclose.style.display = "block";
				}
				else
				{
					parent.document.getElementById('bcount').style.display = "none";
					parent.document.getElementById('btext').style.display = "none";
					parent.document.getElementById('bclose').style.display = "block";
				}
			}
			else
			{
				var posback = "-"+((counttime-1)*29)+"px 0px";
				
				if(!isTF1Context)
					bcount.style.backgroundPosition = posback;
				else
					parent.document.getElementById('bcount').style.backgroundPosition = posback;
			}
		},1000);
	}
	else
	{
		if(!isTF1Context)
		{
			btext.style.display = "none";
			bcount.style.display = "none";
			bclose.style.display = "inline";
		}
		else
		{
			parent.document.getElementById('btext').style.display = "none";
			parent.document.getElementById('bcount').style.display = "none";
			parent.document.getElementById('bclose').style.display = "inline";
		}
	}
}

//fonction de gestion de la prehome
function Prehome_delete()
{
	enable_scroll();
	
	if(!isTF1Context)
		document.body.style.overflow= 'scroll';
	else
		parent.document.body.style.overflow= 'scroll';
	
	
	var message = "setPause";
	if (currentPlayer.contentWindow.postMessage) {
		currentPlayer.contentWindow.postMessage (message, "*");
	}
	else {
		//alert ("Your browser does not support the postMessage method!");
	}
	
	if(isChildOfIframe)
	{	
		parent.postMessage("closeIframePub", "*");
		prehome.style.display = "none";
	}
	else
	{
		prehome.style.display = "none";
	}
}

function OnPostMessage(e)
{

	var message = e.data;
		
	console.log(e.data);
	
	var status = e.data.replace('currentPlayHeadTime@@', '');
	if(status=="onVideoEnded")
	{
		if(!isPhome)
		{
			var message = "setPause";
			if (currentPlayer.contentWindow.postMessage) {
				currentPlayer.contentWindow.postMessage (message, "*");
			}
			else {
				//alert ("Your browser does not support the postMessage method!");
			}
			setTimeout(function() { isPlaying = false; }, 2000);
		}
		else
		{
			Prehome_delete();
		}
	}
	
	//console.log("message: "+message);
	if(message=="destroy")
	{
		ifrm.style.width = "1px"; 
		ifrm.style.height = "1px"; 
		ifrm.style.position = "relative"; 
		parent.document.body.style["overflow"] = "scroll";
		
		enable_scroll();
		
		if(detectmob())
		{
			document.addEventListener('touchstart',function(e) {
				return true;
			});
			 
			document.addEventListener('touchmove',function(e) {
				return true;
			});
		}
	}
}

function getInternetExplorerVersion()
{
	var rv = -1; // Return value assumes failure.
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			rv = parseFloat(RegExp.$1);
	}
	return rv;
}

function isIOS()
{
	return ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (parent.window.addEventListener) {
      parent.window.addEventListener('DOMMouseScroll', wheel, false);
  }
  parent.window.onmousewheel = parent.document.onmousewheel = wheel;
  parent.document.onkeydown = keydown;
}

function enable_scroll() {
    if (parent.window.removeEventListener) {
        parent.window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    parent.window.onmousewheel = parent.document.onmousewheel = parent.document.onkeydown = null;  
}
