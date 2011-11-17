
Raphael.fn.noEntry = function (x,y,r)
{
	//X and Y are the co-ordinates of the center of the diagram
	var noent = this.path("M 450 0 c -248.52813 0 -450 201.47187 -450 450 c 0 248.52812 201.47187 450 450 450 c 248.52814 0 450 -201.47188 450 -450 c 0 -248.52814 -201.47186 -450 -450 -450 z m 0 150 c 165.68543 0 300 134.31457 300 300 c 0 55.63508 -15.17127 107.71181 -41.5625 152.375 l -410.8125 -410.8125 c 44.66319 -26.39123 96.73992 -41.5625 152.375 -41.5625 z m -258.4375 147.625 l 410.8125 410.8125 c -44.66319 26.39123 -96.73992 41.5625 -152.375 41.5625 c -165.68542 0 -300 -134.31457 -300 -300 c 0 -55.63508 15.17127 -107.71181 41.5625 -152.375 z");
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

globNoEntry = paper.noEntry(pageWidth/2,pageHeight/2,pageHeight*9/20);
globNoEntry.hide();
