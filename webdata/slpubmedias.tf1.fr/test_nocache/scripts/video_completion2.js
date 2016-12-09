var indexedAnchors = {}
var anchors=["start", "end"]
var anchors_count = 3;

if(!config.isRsponsive)
{
	window.onload = function() {
	  InitTracking () ;
	};
}
function InitTracking () 
{
	config.video_duration-=1;
	var unit = config.video_duration/(anchors_count+1);
	
	for(var counter = unit; counter<config.video_duration; counter+=unit)
	{
		anchors.push(Math.floor( counter ));
	}
	
	for(var i in anchors)
	{
		indexedAnchors[anchors[i]] = 1;
	}

	if(config.isParent)
	{
		if (parent.window.addEventListener) {  // all browsers except IE before version 9
			parent.window.addEventListener ("message", OnMessage, false);
		}
		else {
			if (parent.window.attachEvent) {   // IE before version 9
				parent.window.attachEvent("onmessage", OnMessage);
			}
		}
	}
	else
	{
		if (window.addEventListener) {  // all browsers except IE before version 9
			window.addEventListener ("message", OnMessage, false);
		}
		else {
			if (window.attachEvent) {   // IE before version 9
				window.attachEvent("onmessage", OnMessage);
			}
		}
	}
	
	setInterval(function() {
		GetCurrentPlayHeadTime ();
	}, 500);
	
	console.log("indexedAnchors: ");
	console.log(indexedAnchors);
}

var counter = 0;
var ended = false;
var started = false;
function OnMessage (event) 
{
	var message = event.data;
	var status = event.data.replace('currentPlayHeadTime@@', '');
	
	//console.log('status: ',message+" "+parseInt(status)/config.video_duration);
	
	if(parseInt(status)==config.video_duration)
	{	
		//send end
		if(!ended)
		{	
			ended = true;
			httpGet(trackingVideoEvents.complete);
		}
	}
	else if(parseInt(status)==1)
	{
		if(!started)
		{
			started = true;
			//send start
			httpGet(trackingVideoEvents.start);
		}
	}
	else
	{
		if(indexedAnchors[status])
		{
			if(indexedAnchors[status]==1)
			{
				counter+=25;
				
				indexedAnchors[status] = 2;
				
				statusCounter++;
				
				if(statusCounter == 1)
					httpGet(trackingVideoEvents.firstQuartile);
				if(statusCounter == 2)
					httpGet(trackingVideoEvents.midpoint);
				if(statusCounter == 3)
					httpGet(trackingVideoEvents.thirdQuartile);
			}
		}
	}

	if(status=="onVideoEnded")
	{
		if(config.onEnd)
		{
			config.onEnd();
		}
	}
}

var statusCounter = 0;

function getState(e)
{
	
}

 function GetCurrentPlayHeadTime () {
	var tmpId = "watvideo";
 
	if(config.player_id)
		tmpId = config.player_id;
	
	var frame = document.getElementById (tmpId);
	
	if(config.currentPlayer)
		frame = config.currentPlayer;
	
	if(frame)
	{
			// send the 'getstate' message to the frame window
		var message = "getCurrentPlayHeadTime";
		if (frame.contentWindow.postMessage) {
			frame.contentWindow.postMessage (message, "*");
		}
		else {
			//alert ("Your browser does not support the postMessage method!");
		}
	}
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