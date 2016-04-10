include(getSettings(1));

function include(fileName){
	document.write("<script type='text/javascript' src='"+fileName+"'></script>" );
}

function getSettings(noLine)
{
	var lines = null;
	
/*	$.get('/tele-tactile/settings.txt', function(data) {   
		
	});*/
	
	$.ajax({
     async: false,//Doit être false pour attendre le settings avant de continuer
     type: 'GET',
     url: '/tele-tactile/settings.txt',
     success: function(data) {
          lines = data.split("\n");
     }
	});
	
	
	return lines[noLine];
	
}