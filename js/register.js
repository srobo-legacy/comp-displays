$.getScript("./fonts/font-paths.js");

alert("blah");

Raphael.fn.register = function()
{
	var set = this.set();
	var num = this.path("M " + (pageWidth/2 - 3500) + " " + (pageHeight/2) + " " + letters[26 + screen_number]);
	
	set.push(num);
	
	set.hide = function()
	{
		this.animate({opacity: 0},1000);
	}
	set.show = function()
	{
		this.animate({opacity: 1},1000,function(){this.toFront();});
	}
	return set;

}

globReg = paper.register();
alert("globReg assigned");
