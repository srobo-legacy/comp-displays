var width = pageWidth * (25/310);
var height = pageWidth * (10/310);
var hborder = pageWidth * (10/310);
var hspace = pageWidth * (30/310);
var vspace = pageWidth * (30/310);
var vborder = pageHeight/2 - (6*height + 2*vspace)/2;

Raphael.fn.teamBox = function (x,y)
{
	var a = this.path("M" + x + "," + y + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height)).attr("fill","#00f").attr("stroke","#00f");
	a.boxX = x;
	a.boxY = y;
	return a;
}

Raphael.fn.scoreboard = function ()
{
	var f1a = this.teamBox(hborder, vborder);
	var f1b = this.teamBox(hborder + width, vborder);
	var f1c = this.teamBox(hborder, vborder + height);
	var f1d = this.teamBox(hborder + width, vborder + height);
	
	var f2a = this.teamBox(hborder + 2*width + hspace, vborder);
	var f2b = this.teamBox(hborder + 3*width + hspace, vborder);
	var f2c = this.teamBox(hborder + 2*width + hspace, vborder + height);
	var f2d = this.teamBox(hborder + 3*width + hspace, vborder + height);
	
	var f3a = this.teamBox(hborder + 4*width + 2*hspace, vborder);
	var f3b = this.teamBox(hborder + 5*width + 2*hspace, vborder);
	var f3c = this.teamBox(hborder + 4*width + 2*hspace, vborder + height);
	var f3d = this.teamBox(hborder + 5*width + 2*hspace, vborder + height);
	
	var f4a = this.teamBox(hborder + 6*width + 3*hspace, vborder);
	var f4b = this.teamBox(hborder + 7*width + 3*hspace, vborder);
	var f4c = this.teamBox(hborder + 6*width + 3*hspace, vborder + height);
	var f4d = this.teamBox(hborder + 7*width + 3*hspace, vborder + height);
	
	var s1a = this.teamBox((4*width + hspace)/2 + hborder - width, vborder + 2*height + vspace);
	var s1b = this.teamBox((4*width + hspace)/2 + hborder, vborder + 2*height + vspace);
	var s1c = this.teamBox((4*width + hspace)/2 + hborder - width, vborder + 3*height + vspace);
	var s1d = this.teamBox((4*width + hspace)/2 + hborder, vborder + 3*height + vspace);

	var s2a = this.teamBox((4*width + hspace)/2 + hborder + 3*width + 2*hspace, vborder + 2*height + vspace);
	var s2b = this.teamBox((4*width + hspace)/2 + hborder + 4*width + 2*hspace, vborder + 2*height + vspace);
	var s2c = this.teamBox((4*width + hspace)/2 + hborder + 3*width + 2*hspace, vborder + 3*height + vspace);
	var s2d = this.teamBox((4*width + hspace)/2 + hborder + 4*width + 2*hspace, vborder + 3*height + vspace);
	
	var fia = this.teamBox((8*width + 3*hspace)/2 + hborder - width, vborder + 4*height + 2*vspace);
	var fib = this.teamBox((8*width + 3*hspace)/2 + hborder, vborder + 4*height + 2*vspace);
	var fic = this.teamBox((8*width + 3*hspace)/2 + hborder - width, vborder + 5*height + 2*vspace);
	var fid = this.teamBox((8*width + 3*hspace)/2 + hborder, vborder + 5*height + 2*vspace);
	
	var l11 = this.path("M" + (hborder + width) + "," + (vborder + 2*height) + "L" + ((4*width + hspace)/2 + hborder) + "," + (vborder + 2*height + vspace));
	var l21 = this.path("M" + (hborder + 3*width + hspace) + "," + (vborder + 2*height) + "L" + ((4*width + hspace)/2 + hborder) + "," + (vborder + 2*height + vspace));
	var l32 = this.path("M" + (hborder + 5*width + 2*hspace) + "," + (vborder + 2*height) + "L" + ((4*width + hspace)/2 + hborder + 4*width + 2*hspace) + "," + (vborder + 2*height + vspace));
	var l42 = this.path("M" + (hborder + 7*width + 3*hspace) + "," + (vborder + 2*height) + "L" + ((4*width + hspace)/2 + hborder + 4*width + 2*hspace) + "," + (vborder + 2*height + vspace));
	
	var l1i = this.path("M" + ((4*width + hspace)/2 + hborder) + "," + (vborder + 4*height + vspace) + "L" + ((8*width + 3*hspace)/2 + hborder) + "," + (vborder + 4*height + 2*vspace));
	var l2i = this.path("M" + ((4*width + hspace)/2 + hborder + 4*width + 2*hspace) + "," + (vborder + 4*height + vspace) + "L" + ((8*width + 3*hspace)/2 + hborder) + "," + (vborder + 4*height + 2*vspace));
	
	var view = 0;
	
	var zonelengthL = 0.8*pageHeight;
	var zonewidth = 0.1*pageHeight;
	var zonelengthS = zonelengthL - 2*zonewidth;
	var zoneposx = pageWidth/2 - zonelengthL/2;
	var zoneposy = pageHeight/2 - zonelengthL/2;
	
	var zone1p = {path: "M" + (zoneposx) + "," + (zoneposy) + " l" + (zonelengthL) + ",0 " + (-zonewidth) + "," + (zonewidth) + " " + (-zonelengthS) + ",0 " + (-zonewidth) + "," + (-zonewidth), opacity: 0.5, stroke: "#000"};
	var zone2p = {path: "M" + (zoneposx + zonelengthL) + "," + (zoneposy) + " l0," + zonelengthL + " " + (-zonewidth) + "," + (-zonewidth) + " 0," + (-zonelengthS) + " " + (zonewidth) + "," + (-zonewidth), opacity: 0.5, stroke: "#000"};
	var zone3p = {path: "M" + (zoneposx + zonelengthL) + "," + (zoneposy + zonelengthL) + " l" + (-zonelengthL) + ",0 " + (zonewidth) + "," + (-zonewidth) + " " + (zonelengthS) + ",0 " + (zonewidth) + "," + (zonewidth), opacity: 0.5, stroke: "#000"};
	var zone4p = {path: "M" + (zoneposx) + "," + (zoneposy + zonelengthL) + " l0," + (-zonelengthL) + " " + (zonewidth) + "," + (zonewidth) + " 0," + (zonelengthS) + " " + (-zonewidth) + "," + (zonewidth), opacity: 0.5, stroke: "#000"};
	
	var clearRect = this.rect(0,0,pageWidth,pageHeight).attr("fill","#fff").attr("opacity","1").toBack();
	
	f1a.click(function() {expand1()});
	f1b.click(function() {expand1()});
	f1c.click(function() {expand1()});
	f1d.click(function() {expand1()});
	function expand1() {
		if(view == 0)
		{
			clearRect.toFront().stop().animate({opacity: 1},1000);
		}
		else
		{
			clearRect.stop().animate({opacity: 0},1000,function(){clearRect.toBack();});
		}
		
		var animf1a = [zone1p,{path: "M" + f1a.boxX + "," + f1a.boxY + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height), opacity: 1, stroke: "#00f"}];
		var animf1b = [zone2p,{path: "M" + f1b.boxX + "," + f1b.boxY + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height), opacity: 1, stroke: "#00f"}];
		var animf1c = [zone3p,{path: "M" + f1c.boxX + "," + f1c.boxY + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height), opacity: 1, stroke: "#00f"}];
		var animf1d = [zone4p,{path: "M" + f1d.boxX + "," + f1d.boxY + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height), opacity: 1, stroke: "#00f"}];
		f1a.toFront();
		f1b.toFront();
		f1c.toFront();
		f1d.toFront();
		f1a.stop().animate(animf1a[view], 1000);
		f1b.stop().animate(animf1b[view], 1000);
		f1c.stop().animate(animf1c[view], 1000);
		f1d.stop().animate(animf1d[view], 1000);
		view = 1 - view;
	}
}

paper.scoreboard();
