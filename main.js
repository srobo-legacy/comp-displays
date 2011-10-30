var paper;

/*
 * String
 * Possible states:
 * 	Score
 * 	League
 * 	No Entry
 * 	Match
 */
var state;
var laststate;

var pageWidth = $(window).attr('screen').width - 1;
var pageHeight = $(window).attr('screen').height - 1;

$(window).resize(function () {
	pageWidth = $(window).attr('screen').width - 1;
	pageHeight = $(window).attr('screen').height - 1;
	paper.setSize(pageWidth, pageHeight);
	resizeScale();
});

$(document).ready(function(){

paper = Raphael(0,0,pageWidth,pageHeight);

$.getScript("./js/league.js");
$.getScript("./js/no_entry.js");
});

function resizeScale()
{
	anim = {transform: "s" + (pageWidth/600)};
//	f1a.stop().animate(anim,0);
}
