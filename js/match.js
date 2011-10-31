
var matchTime;

Raphael.fn.match = function()
{
	var set = this.set();
	var line = this.path("M" + (pageWidth/50) + "," + (pageHeight/4) + " l" + (pageWidth*48/50) + ",0").attr("stroke-width","10").attr("stroke-linecap","round").attr("stroke","#00f");
	var time = this.matchTime();
	var team = this.matchTeam();
	
	set.push(line,time,team);
	
	set.hide = function()
	{
		this.animate({opacity: 0},1000);
	}
	set.show = function()
	{
		this.animate({opacity: 1},1000,function(){this.toFront();});
	}
	return set;
}

Raphael.fn.matchTeam = function()
{
	
}

Raphael.fn.matchTime = function()
{
	return this.print(10,10,(Math.floor(matchTime/60)) + ":" + (Math.floor(matchTime%60)),this.getFont("Helvetica"));
}

globMatch = paper.match();
globMatch.hide();
