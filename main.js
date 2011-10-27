var paper;

var state;
var laststate;

var pageWidth = $(window).attr('screen').width;
var pageHeight = $(window).attr('screen').height;

$(window).resize(function () {
	pageWidth = $(window).attr('screen').width;
	pageHeight = $(window).attr('screen').height;
	paper.setSize(pageWidth, pageHeight);
	resizeScale();
});

$(document).ready(function(){

paper = Raphael(0,0,pageWidth,pageHeight);

$.getScript("./js/scoreboard.js");
$.getScript("./js/no_entry.js");
});

function resizeScale()
{
	anim = {transform: "s" + (pageWidth/600)};
//	f1a.stop().animate(anim,0);
}
