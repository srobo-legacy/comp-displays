
Raphael.fn.noEntry = function (x,y,r)
{
	var rscaler = 1/3;
	var scaler1 = 0.55228474;
	var scaler2 = 0.3681898444;
	//X and Y are the co-ordinates of the center of the diagram
	var noent = this.path("M " + x + " " + (y-r) + " c " + (-scaler1*r) +" 0 " + (-r) + " " + (1-scaler1)*r + " " + (-r) + " " + r + " c 0 " + (scaler1*r) + " " + (1-scaler1)*r + " " + r + " " + r + " " + r + " c " + (scaler1*r) + " 0 " + r + " " + (scaler1-1)*r + " " + r + " " + (-r) + " c 0 " + (-scaler1*r) + " " + (scaler1-1)*r + " " + (-r) + " " + (-r) + " " + (-r) + " z m 0 " + (rscaler*r) + " c " + (scaler2*r) + " 0 " + (2*rscaler*r) + " 134.31457 300 300 c 0 55.63508 -15.17127 107.71181 -41.5625 152.375 l -410.8125 -410.8125 c 44.66319 -26.39123 96.73992 -41.5625 152.375 -41.5625 z m -258.4375 147.625 l 410.8125 410.8125 c -44.66319 26.39123 -96.73992 41.5625 -152.375 41.5625 c -165.68542 0 -300 -134.31457 -300 -300 c 0 -55.63508 15.17127 -107.71181 41.5625 -152.375 z");
//	noent.scale(r/450,r/450,x,y);
	noent.hide = function()
	{
		this.animate({opacity: 0},1000);
	}
	noent.show = function()
	{
		this.animate({opacity: 1},1000,function(){this.toFront();});
	}
	return noent;
}

globNoEntry = paper.noEntry(pageWidth/2,pageHeight/2,450);
//globNoEntry = paper.noEntry(pageWidth/2,pageHeight/2,pageHeight*9/20);
globNoEntry.hide();
