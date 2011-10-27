var state;
var laststate;

var view = 1;

var pageWidth = $(window).width();
var pageHeight = $(window).height();

$(window).resize(function () {
	pageWidth = $(window).width();
	pageHeight = $(window).height();
	paper.setSize(pageWidth, pageHeight);
	resizeScale();
});

$(document).ready(function(){

Raphael.fn.teamBox = function (x,y)
{
	return this.rect(x,y, 25, 10 ).attr("fill","#00f").attr("stroke","#00f");
}

var paper = Raphael(0,0,pageWidth,pageHeight);
var f1a = paper.teamBox(10,10);
var f1b = paper.teamBox(35,10);
var f1c = paper.teamBox(10,20);
var f1d = paper.teamBox(35,20);

var f2a = paper.teamBox(90,10);
var f2b = paper.teamBox(115,10);
var f2c = paper.teamBox(90,20);
var f2d = paper.teamBox(115,20);

var f3a = paper.teamBox(170,10);
var f3b = paper.teamBox(195,10);
var f3c = paper.teamBox(170,20);
var f3d = paper.teamBox(195,20);

var f4a = paper.teamBox(250,10);
var f4b = paper.teamBox(275,10);
var f4c = paper.teamBox(250,20);
var f4d = paper.teamBox(275,20);

var s1 = paper.rect(50,60,50,20).attr("fill","#00f").attr("stroke","#00f");
var s2 = paper.rect(210,60,50,20).attr("fill","#00f").attr("stroke","#00f");

var fi = paper.rect(130,110,50,20).attr("fill","#00f").attr("stroke","#00f");

var l11 = paper.path("M35,30L75,60");
var l21 = paper.path("M115,30L75,60");
var l32 = paper.path("M195,30L235,60");
var l42 = paper.path("M275,30L235,60");

var l1i = paper.path("M75,80L155,110");
var l2i = paper.path("M235,80L155,110");

f1a.click(function () {
	var animf1a = [{x: 10, y: 10, width: 25, height: 10, transform: "r0", fill: "#00f"},{x: 0, y: 0, width: 250, height: 100, transform: "r360", fill: "#fff"}];
	var animf1b = [{x: 35, y: 10, width: 25, height: 10, transform: "r0"},{x: 250, y: 0, width: 250, height: 100, transform: "r360"}];
	var animf1c = [{x: 10, y: 20, width: 25, height: 10, transform: "r0"},{x: 0, y: 100, width: 250, height: 100, transform: "r360"}];
	var animf1d = [{x: 35, y: 20, width: 25, height: 10, transform: "r0"},{x: 250, y: 100, width: 250, height: 100, transform: "r360"}];
	f1a.toFront();
	f1b.toFront();
	f1c.toFront();
	f1d.toFront();
	f1a.stop().animate(animf1a[view], 1000);
	f1b.stop().animate(animf1b[view], 1000);
	f1c.stop().animate(animf1c[view], 1000);
	f1d.stop().animate(animf1d[view], 1000);
	view = 1 - view;
});

});

function resizeScale()
{
	anim = {transform: "s" + (pageWidth/600)};
//	f1a.stop().animate(anim,0);
}
