var width = pageWidth * (25/310);
var height = pageWidth * (10/310);
var hborder = pageWidth * (10/310);
var hspace = pageWidth * (30/310);
var vspace = pageWidth * (30/310);
var vborder = pageHeight/2 - (6*height + 2*vspace)/2;

Raphael.fn.teamBox = function (x,y)
{
	var a = this.path("M" + x + "," + y + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height)).attr("fill","#00f").attr("stroke","#00f").attr("stroke-width",0);
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
	
	var zone3p = {path: "M" + (zoneposx) + "," + (zoneposy) + " l" + (zonelengthL) + ",0 " + (-zonewidth) + "," + (zonewidth) + " " + (-zonelengthS) + ",0 " + (-zonewidth) + "," + (-zonewidth), opacity: 0.5, stroke: "#000"};
	var zone2p = {path: "M" + (zoneposx + zonelengthL) + "," + (zoneposy) + " l0," + zonelengthL + " " + (-zonewidth) + "," + (-zonewidth) + " 0," + (-zonelengthS) + " " + (zonewidth) + "," + (-zonewidth), opacity: 0.5, stroke: "#000"};
	var zone1p = {path: "M" + (zoneposx + zonelengthL) + "," + (zoneposy + zonelengthL) + " l" + (-zonelengthL) + ",0 " + (zonewidth) + "," + (-zonewidth) + " " + (zonelengthS) + ",0 " + (zonewidth) + "," + (zonewidth), opacity: 0.5, stroke: "#000"};
	var zone0p = {path: "M" + (zoneposx) + "," + (zoneposy + zonelengthL) + " l0," + (-zonelengthL) + " " + (zonewidth) + "," + (zonewidth) + " 0," + (zonelengthS) + " " + (-zonewidth) + "," + (zonewidth), opacity: 0.5, stroke: "#000"};
	
	var clearRect = this.rect(0,0,pageWidth,pageHeight).attr("fill","#fff").attr("opacity","1").toBack();
	
	f1a.click(function() {expand1(f1a,f1b,f1c,f1d)});
	f1b.click(function() {expand1(f1a,f1b,f1c,f1d)});
	f1c.click(function() {expand1(f1a,f1b,f1c,f1d)});
	f1d.click(function() {expand1(f1a,f1b,f1c,f1d)});
	
	f2a.click(function() {expand1(f2a,f2b,f2c,f2d)});
	f2b.click(function() {expand1(f2a,f2b,f2c,f2d)});
	f2c.click(function() {expand1(f2a,f2b,f2c,f2d)});
	f2d.click(function() {expand1(f2a,f2b,f2c,f2d)});
	
	f3a.click(function() {expand1(f3a,f3b,f3c,f3d)});
	f3b.click(function() {expand1(f3a,f3b,f3c,f3d)});
	f3c.click(function() {expand1(f3a,f3b,f3c,f3d)});
	f3d.click(function() {expand1(f3a,f3b,f3c,f3d)});
	
	f4a.click(function() {expand1(f4a,f4b,f4c,f4d)});
	f4b.click(function() {expand1(f4a,f4b,f4c,f4d)});
	f4c.click(function() {expand1(f4a,f4b,f4c,f4d)});
	f4d.click(function() {expand1(f4a,f4b,f4c,f4d)});
	
	s1a.click(function() {expand1(s1a,s1b,s1c,s1d)});
	s1b.click(function() {expand1(s1a,s1b,s1c,s1d)});
	s1c.click(function() {expand1(s1a,s1b,s1c,s1d)});
	s1d.click(function() {expand1(s1a,s1b,s1c,s1d)});
	
	s2a.click(function() {expand1(s2a,s2b,s2c,s2d)});
	s2b.click(function() {expand1(s2a,s2b,s2c,s2d)});
	s2c.click(function() {expand1(s2a,s2b,s2c,s2d)});
	s2d.click(function() {expand1(s2a,s2b,s2c,s2d)});
	
	fia.click(function() {expand1(fia,fib,fic,fid)});
	fib.click(function() {expand1(fia,fib,fic,fid)});
	fic.click(function() {expand1(fia,fib,fic,fid)});
	fid.click(function() {expand1(fia,fib,fic,fid)});
	
	function expand1(a,b,c,d) {
		if(view == 0)
		{
			clearRect.toFront().stop().animate({opacity: 1},1000);
		}
		else
		{
			clearRect.stop().animate({opacity: 0},1000,function(){clearRect.toBack();});
		}
		
		var anima = [zone0p,{path: "M" + a.boxX + "," + a.boxY + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height), opacity: 1, stroke: "#00f"}];
		var animb = [zone1p,{path: "M" + b.boxX + "," + b.boxY + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height), opacity: 1, stroke: "#00f"}];
		var animc = [zone2p,{path: "M" + c.boxX + "," + c.boxY + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height), opacity: 1, stroke: "#00f"}];
		var animd = [zone3p,{path: "M" + d.boxX + "," + d.boxY + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height), opacity: 1, stroke: "#00f"}];
		a.toFront();
		b.toFront();
		c.toFront();
		d.toFront();
		a.stop().animate(anima[view], 1000);
		b.stop().animate(animb[view], 1000);
		c.stop().animate(animc[view], 1000);
		d.stop().animate(animd[view], 1000);
		view = 1 - view;
	}
}

paper.scoreboard();
