WEBDISHOST = "localhost";
WEBDISPORT = 7379

BASE = "org.srobo";

var screen_number = null;

function webdissetup()
{
	$.ajax({
			url: "http://" + WEBDISHOST + ":" + WEBDISPORT + "/INCR/" + BASE + ".displays.count",
			data: "format=json",
			datatype: "JSON",
			jsonp: null,
			jsonpCallback: null,
			success: function(data) {	alert(data);
							response = $.parseJSON(data);
							screen_number = response["INCR"];
							alert(screen_number);
							$.ajax({
								url: "http://" + WEBDISHOST + ":" + WEBDISPORT + "/PUBLISH/" + BASE + ".displays.count/" + screen_number,
								data: "format=json",
								datatype: "json",
								success: function(data) { alert(data) }
							})	
						},
			failure: webdissetup
	});
}

webdissetup();
