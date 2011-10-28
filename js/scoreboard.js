var width = pageWidth * (25/310);
var height = pageWidth * (10/310);
var border = pageWidth * (10/310);
var hspace = pageWidth * (30/310);
var vspace = pageWidth * (30/310);

width = 25;
height = 10;
border = 10;
hspace = 30;
vspace = 30;
	
Raphael.fn.teamBox = function (x,y)
{
	return this.path("M" + x + "," + y + " l" + (width) + ",0 0," + (height) + " " + (-width) + ",0 0," + (-height)).attr("fill","#00f").attr("stroke","#00f");
}

Raphael.fn.scoreboard = function ()
{
	var f1a = this.teamBox(border, border);
	var f1b = this.teamBox(border + width, border);
	var f1c = this.teamBox(border, border + height);
	var f1d = this.teamBox(border + width, border + height);
	
	var f2a = this.teamBox(border + 2*width + hspace, border);
	var f2b = this.teamBox(border + 3*width + hspace, border);
	var f2c = this.teamBox(border + 2*width + hspace, border + height);
	var f2d = this.teamBox(border + 3*width + hspace, border + height);
	
	var f3a = this.teamBox(border + 4*width + 2*hspace, border);
	var f3b = this.teamBox(border + 5*width + 2*hspace, border);
	var f3c = this.teamBox(border + 4*width + 2*hspace, border + height);
	var f3d = this.teamBox(border + 5*width + 2*hspace, border + height);
	
	var f4a = this.teamBox(border + 6*width + 3*hspace, border);
	var f4b = this.teamBox(border + 7*width + 3*hspace, border);
	var f4c = this.teamBox(border + 6*width + 3*hspace, border + height);
	var f4d = this.teamBox(border + 7*width + 3*hspace, border + height);
	
	var s1a = this.teamBox((4*width + hspace)/2 + border - width, border + 2*height + vspace);
	var s1b = this.teamBox((4*width + hspace)/2 + border, border + 2*height + vspace);
	var s1c = this.teamBox((4*width + hspace)/2 + border - width, border + 3*height + vspace);
	var s1d = this.teamBox((4*width + hspace)/2 + border, border + 3*height + vspace);

	var s2a = this.teamBox((4*width + hspace)/2 + border + 3*width + 2*hspace, border + 2*height + vspace);
	var s2b = this.teamBox((4*width + hspace)/2 + border + 4*width + 2*hspace, border + 2*height + vspace);
	var s2c = this.teamBox((4*width + hspace)/2 + border + 3*width + 2*hspace, border + 3*height + vspace);
	var s2d = this.teamBox((4*width + hspace)/2 + border + 4*width + 2*hspace, border + 3*height + vspace);
	
	var fia = this.teamBox((8*width + 3*hspace)/2 + border - width, border + 4*height + 2*vspace);
	var fib = this.teamBox((8*width + 3*hspace)/2 + border, border + 4*height + 2*vspace);
	var fic = this.teamBox((8*width + 3*hspace)/2 + border - width, border + 5*height + 2*vspace);
	var fid = this.teamBox((8*width + 3*hspace)/2 + border, border + 5*height + 2*vspace);
	
	var l11 = this.path("M" + (border + width) + "," + (border + 2*height) + "L" + ((4*width + hspace)/2 + border) + "," + (border + 2*height + vspace));
	var l21 = this.path("M" + (border + 3*width + hspace) + "," + (border + 2*height) + "L" + ((4*width + hspace)/2 + border) + "," + (border + 2*height + vspace));
	var l32 = this.path("M" + (border + 5*width + 2*hspace) + "," + (border + 2*height) + "L" + ((4*width + hspace)/2 + border + 4*width + 2*hspace) + "," + (border + 2*height + vspace));
	var l42 = this.path("M" + (border + 7*width + 3*hspace) + "," + (border + 2*height) + "L" + ((4*width + hspace)/2 + border + 4*width + 2*hspace) + "," + (border + 2*height + vspace));
	
	var l1i = this.path("M" + ((4*width + hspace)/2 + border) + "," + (border + 4*height + vspace) + "L" + ((8*width + 3*hspace)/2 + border) + "," + (border + 4*height + 2*vspace));
	var l2i = this.path("M" + ((4*width + hspace)/2 + border + 4*width + 2*hspace) + "," + (border + 4*height + vspace) + "L" + ((8*width + 3*hspace)/2 + border) + "," + (border + 4*height + 2*vspace));
	
	var view = 0;
	
	var zonelengthL = 0.8*pageHeight;
	var zonewidth = 0.1*pageHeight;
	var zonelengthS = zonelengthL - 2*zonewidth;
	var zoneposx = pageWidth/2 - zonelengthL/2;
	var zoneposy = pageHeight/2 - zonelengthL/2;
	
	var zone1p = {path: "M" + (zoneposx) + "," + (zoneposy) + " l" + (zonelengthL) + ",0 " + (-zonewidth) + "," + (zonewidth) + " " + (-zonelengthS) + ",0 " + (-zonewidth) + "," + (-zonewidth), fill: "#fff", stroke: "#000"};
	var zone2p = {path: "M" + (zoneposx + zonelengthL) + "," + (zoneposy) + " l0," + zonelengthL + " " + (-zonewidth) + "," + (-zonewidth) + " 0," + (-zonelengthS) + " " + (zonewidth) + "," + (-zonewidth), fill: "#fff", stroke: "#000"};
	var zone3p = {path: "M" + (zoneposx + zonelengthL) + "," + (zoneposy + zonelengthL) + " l" + (-zonelengthL) + ",0 " + (zonewidth) + "," + (-zonewidth) + " " + (zonelengthS) + ",0 " + (zonewidth) + "," + (zonewidth), fill: "#fff", stroke: "#000"};
	var zone4p = {path: "M" + (zoneposx) + "," + (zoneposy + zonelengthL) + " l0," + (-zonelengthL) + " " + (zonewidth) + "," + (zonewidth) + " 0," + (zonelengthS) + " " + (-zonewidth) + "," + (zonewidth), fill: "#fff", stroke: "#000"};
	
	f1a.click(function() {expand1()});
	f1b.click(function() {expand1()});
	f1c.click(function() {expand1()});
	f1d.click(function() {expand1()});
	function expand1() {
		var animf1a = [zone1p,{path: "M10,10 l25,0 0,10 -25,0 0,-10", fill: "#00f", stroke: "#00f"}];
		var animf1b = [zone2p,{path: "M35,10 l25,0 0,10 -25,0 0,-10", fill: "#00f", stroke: "#00f"}];
		var animf1c = [zone3p,{path: "M10,20 l25,0 0,10 -25,0 0,-10", fill: "#00f", stroke: "#00f"}];
		var animf1d = [zone4p,{path: "M35,20 l25,0 0,10 -25,0 0,-10", fill: "#00f", stroke: "#00f"}];
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
