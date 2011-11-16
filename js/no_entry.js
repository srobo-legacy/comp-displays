
Raphael.fn.noEntry = function (x,y,r)
{
	//X and Y are the co-ordinates of the center of the diagram
	var noent = this.path("M 450 0 C 201.47187 0 0 201.47186 0 450 C 0 698.52812 201.47187 900 450 900 C 698.52814 900 900 698.52812 900 450 C 900 201.47186 698.52814 0 450 0 z M 450 150 C 615.68543 150 750 284.31457 750 450 C 750 505.63508 734.82873 557.71181 708.4375 602.375 L 297.625 191.5625 C 342.28819 165.17127 394.36492 150 450 150 z M 191.5625 297.625 L 602.375 708.4375 C 557.71181 734.82873 505.63508 750 450 750 C 284.31458 750 150 615.68543 150 450 C 150 394.36492 165.17127 342.28819 191.5625 297.625 z").attr("fill","#F00").attr("stroke","#F00");
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
