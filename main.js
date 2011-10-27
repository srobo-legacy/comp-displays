var paper;

var state;
var laststate;

var pageWidth = $(window).width();
var pageHeight = $(window).height();

$(window).resize(function () {
	pageWidth = $(window).width();
	pageHeight = $(window).height();
	paper.setSize(pageWidth, pageHeight);
	resizeScale();
});

$(document).ready(function(){

paper = Raphael(0,0,pageWidth,pageHeight);

$.getScript("./js/scoreboard.js");

});

function resizeScale()
{
	anim = {transform: "s" + (pageWidth/600)};
//	f1a.stop().animate(anim,0);
}
