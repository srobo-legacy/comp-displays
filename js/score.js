
Raphael.fn.scoreboard = function ()
{
	var textlineheight = 10;
	
	var set = this.set();
	
	var tp = this.text(50,50,"Position");
	var tt = this.text(100,50,"Team");
	var ts = this.text(150,50,"Score");
//	alert(teamg.position + " " + teamg.team + " " + teamg.score);
	
	return set;
}

Raphael.fn.dotline = function (x1,y1,x2,y2)
{
	this.path("m " + x1 + " " + y1 + "l " + x2 + " " + y2).attr("stroke-dasharray",". ").attr("stroke-width","3").attr("stroke-linecap","round");
}

var teama = {position: 1, team: "QXC", score: 79};
var teamb = {position: 2, team: "MVP", score: 15};
var teamc = {position: 3, team: "NZO", score: 85};
var teamd = {position: 4, team: "KI#", score: 70};
var teame = {position: 5, team: "KWE", score: 30};
var teamf = {position: 6, team: "JXF", score: 54};
var teamg = {position: 7, team: "AJZ", score: 34};
var teamh = {position: 8, team: "B2F", score: 8};

globScore = paper.scoreboard();
