var state;
var laststate;

$(document).ready(function(){

$("button").click(function(){
	if($("#noentry").css("display") == "none")
		$("#noentry").fadeIn("slow");
	else
		$("#noentry").fadeOut("slow");
	$("#cheese").animate({height:"150px", width:"150px",left:"200", top:"200"})
});
alert("cheese");
$(document.body).append($(document.createElement("div")).attr("id","cheese").attr("style","width: 100px; height: 100px; position: absolute; left: 0px; top: 0px; background-color: blue; display: block;"));

alert("cheesed");
});
