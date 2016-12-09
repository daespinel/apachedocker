function logoutPopin(link,ismenuactive,xitiParam1,xitiParam2,xitiParam3,xitiParam4){
	    if (link != "#" && link != "/"){
	        $('#linkPopinReturn').val(link);
	    }
	    $('#xitiPopinEnable').val("false");
	    if(xitiParam1 && xitiParam2 && xitiParam3 && xitiParam4){
	        $('#xitiPopinParam1').val(xitiParam1);
	        $('#xitiPopinParam2').val(xitiParam2);
	        $('#xitiPopinParam3').val(xitiParam3);
	        $('#xitiPopinParam4').val(xitiParam4);
	        $('#xitiPopinEnable').val("true");
	    }
	    
	    return excuteXiti();
	}
	function excuteXiti(){
		
		var enable = $('#xitiPopinEnable').val();
		
        if("true" == enable){
        	var param1 = $('#xitiPopinParam1').val();
        	var param2 = $('#xitiPopinParam2').val();
        	var param3 = $('#xitiPopinParam3').val();
        	var param4 = $('#xitiPopinParam4').val();
        	
             xt_med(param1,param2,param3,param4);
             try{
        	}catch(e){
        	}
        }
        return true;
    }