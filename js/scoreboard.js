Raphael.fn.teamBox = function (x,y)
{
	return this.path("M" + x + "," + y + " l25,0 0,10 -25,0 0,-10").attr("fill","#00f").attr("stroke","#00f");
}

Raphael.fn.scoreboard = function ()
{
	var f1a = this.teamBox(10,10);
	var f1b = this.teamBox(35,10);
	var f1c = this.teamBox(10,20);
	var f1d = this.teamBox(35,20);
	
	var f2a = this.teamBox(90,10);
	var f2b = this.teamBox(115,10);
	var f2c = this.teamBox(90,20);
	var f2d = this.teamBox(115,20);
	
	var f3a = this.teamBox(170,10);
	var f3b = this.teamBox(195,10);
	var f3c = this.teamBox(170,20);
	var f3d = this.teamBox(195,20);
	
	var f4a = this.teamBox(250,10);
	var f4b = this.teamBox(275,10);
	var f4c = this.teamBox(250,20);
	var f4d = this.teamBox(275,20);
	
	var s1 = this.rect(50,60,50,20).attr("fill","#00f").attr("stroke","#00f");
	var s2 = this.rect(210,60,50,20).attr("fill","#00f").attr("stroke","#00f");
	
	var fi = this.rect(130,110,50,20).attr("fill","#00f").attr("stroke","#00f");
	
	var l11 = this.path("M35,30L75,60");
	var l21 = this.path("M115,30L75,60");
	var l32 = this.path("M195,30L235,60");
	var l42 = this.path("M275,30L235,60");
	
	var l1i = this.path("M75,80L155,110");
	var l2i = this.path("M235,80L155,110");
	
	var view = 1;
	
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
}

paper.scoreboard();
