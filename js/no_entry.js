
Raphael.fn.noEntry = function (x,y)
{
	//X and Y are the co-ordinates of the center of the diagram
	var set = this.set();
	set.push(this.circle(x,y,300).attr({fill: "#f00", stroke: "none"}),this.circle(x,y,200).attr({fill: "#fff", stroke: "none"}),this.rect(x-(400/2),y-(100/2),400,100).attr({fill: "#f00", stroke: "none"}).transform("r45 " + x + "," + y));
}

paper.noEntry(pageWidth/2,pageHeight/2);
