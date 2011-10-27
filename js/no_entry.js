
Raphael.fn.noEntry = function (x,y,r)
{
	//X and Y are the co-ordinates of the center of the diagram
	var set = this.set();
	set.push(this.circle(x,y,r).attr({fill: "#f00", stroke: "none"}),
		this.circle(x,y,r*2/3).attr({fill: "#fff", stroke: "none"}),
		this.rect((x-(r*2/3)),(y-r/6),r*4/3,(r/3)).attr({fill: "#f00", stroke: "none"}).transform("r45 " + x + "," + y));
}

paper.noEntry(pageWidth/2,pageHeight/2,pageHeight*9/20);
