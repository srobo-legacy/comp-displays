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

var globScore, globLeague, globNoEntry;

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

$.getScript("./js/match.js");
$.getScript("./js/league.js");
$.getScript("./js/no_entry.js");
});

function resizeScale()
{
	anim = {transform: "s" + (pageWidth/600)};
//	f1a.stop().animate(anim,0);
}

function updateState(a)
{
	if(a.state == state)
	{
		return;
	}
	laststate = state;
	state = a.state;
	switch(laststate)
	{
		case "Score":	globScore.hide();
				break;
		case "League":	globLeague.hide();
				break;
		case "No Entry":globNoEntry.hide();
				break;
		case "Match":	globMatch.hide();
				break;
		default:		//Do Nothing
				break;
	}
	switch(state)
	{
		case "Score":	globScore.show();
				break;
		case "League":	globLeague.show();
				break;
		case "No Entry":globNoEntry.show();
				break;
		case "Match":	globMatch.show();
				break;
		default:		//Do Nothing
				break;
	}	
}
