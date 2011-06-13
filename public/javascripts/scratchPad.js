var scratchPad ={
	x	:	-1, //stores the mouse's previous X coordinate
	y	:	-1,	//stores the mouse's previous Y coordinate
	x2	:	-1, //stores the mouse's current X coordinate
	y2	:	-1, //stores the mouse's current Y coordinate
	context	:	null,	//reference to canvas's context
	canvas	:	null,	//reference to DOMs canvas
	penColor	:	"black",	//pen color
	lineWidth	:	25,			//width of the line
	/*used to tell whether text is in air,
	after the user has clicked on writeText
	*/
	textInAir	:	false,
	eraserMode	:	false,

	/***
	This function basically returns the offset value for scroll,
	this function itself is needed because a single command is not supported
	by all the browsers
	***/
	scrollOffsetX : function()	{
		var v1=document.documentElement.scrollLeft;
		var v2=document.body.scrollLeft;
		if(v1==0&&v2==0) {
			v5=0;
		}
		else if(v1!=0||v2!=0) {
			if(v1!=0&&v2!=0)
				v5=v1;
			else
				v5=v1+v2;
		}
		return v5;
	},
	scrollOffsetY : function()	{
		var v1=document.documentElement.scrollTop;
		var v2=document.body.scrollTop;
		if(v1==0&&v2==0) {
			v5=0;
		}
		else if(v1!=0||v2!=0) {
			if(v1!=0&&v2!=0)
				v5=v1;
			else
				v5=v1+v2;
		}
		return v5;
	},

	/***
	This function is called first during initialization of scratchPad
	***/
	loadPad : function () {
		$("#slider").slider({min:1,max:200,value:25,change:function(event,ui){scratchPad.lineWidth=ui.value;}});

		//bind the 'Reset' function
		//to the click event of reset button
		document.getElementById("resetButton").onclick = scratchPad.Reset;

		//get the reference to the canvas
		scratchPad.canvas = document.getElementById("canvas");

		//access the 2D context of the choosen canvas
		scratchPad.context = scratchPad.canvas.getContext('2d');



		scratchPad.canvas.onmousedown = function(e) {
			//here we calculate the position of mouse on the canvas
			scratchPad.x = e.clientX - e.target.offsetLeft + scratchPad.scrollOffsetX();
			scratchPad.y = e.clientY - e.target.offsetTop + scratchPad.scrollOffsetY();

			/*This condition whether the text has to be placed on the canvas,
			or the user has to finish drawing the line*/
			/*
			The textInAir is turned ON on the click event of WriteText button
			*/
			if(!scratchPad.textInAir)
			{
				scratchPad.canvas.addEventListener("mousemove",scratchPad.mouseMoveEventHandler,true);
			}
			else {
				//this condition is executed if we have to place text on the canvas
				document.body.removeEventListener("mousemove",scratchPad.mouseMoveEventHandler1,true);

				scratchPad.context.save();

				//this selects the width of the pen, from a predefined value,
				//but font is always fixed
				scratchPad.context.font = (scratchPad.lineWidth)+"px Arial";

				//this selects the color of the text, from the predefined value
				scratchPad.context.fillStyle=scratchPad.penColor;


				scratchPad.context.textBaseline="middle";


				var text=document.getElementById("writeHere").value;

				// Draw the text in the middle of the canvas with a max
				// width set to center properly
				scratchPad.context.fillText(text,scratchPad.x,scratchPad.y,1000);

				document.getElementById("sampleText").style.display="none";

				scratchPad.textInAir=false;

				scratchPad.context.restore();
			}

		}
		scratchPad.canvas.onmouseup = function(e){
			scratchPad.canvas.removeEventListener("mousemove",scratchPad.mouseMoveEventHandler,true);
			if(scratchPad.eraserMode)
			{
				scratchPad.eraserMode=false;
				document.getElementById("erase").disabled="";

			}
		}

		document.getElementById("color").onchange=function(){
		scratchPad.penColor="#"+this.value;
		}

		document.getElementById("erase").onclick=function(){
			scratchPad.eraserMode=true;
			this.disabled="disabled";
		}

		document.getElementById("writeText").onclick=function(){
			var text=document.getElementById("writeHere").value;
			if(text!="")
			{
			document.getElementById("status").innerHTML="";
			document.getElementById("sampleText").style.display="block";
			document.getElementById("sampleText").style.color=scratchPad.penColor;
			document.getElementById("sampleText").style.fontSize=scratchPad.lineWidth+"px";
			document.getElementById("sampleText").innerHTML=text;
			document.getElementById("sampleText").style.position="absolute";
			scratchPad.textInAir=true;
			document.body.addEventListener("mousemove",scratchPad.mouseMoveEventHandler1,true);
			}
			else {
				document.getElementById("status").innerHTML="Please write something....!!";
			}
		}
	},

	/***
	this event handler is attached to the mouse move, when the user clicks on the canvas
	inside the handler we check if the canvas is in eraser mode or not
	if it is in eraser mode, then instead of calling drawLine function, we call clearRect function
	***/
	mouseMoveEventHandler	:	function (e){

			//here we calculate the position of mouse on the canvas
			scratchPad.x2 = e.clientX - e.target.offsetLeft + scratchPad.scrollOffsetX();
			scratchPad.y2 = e.clientY - e.target.offsetTop + scratchPad.scrollOffsetY();
			if(!scratchPad.eraserMode)
			{
					scratchPad.drawLine(scratchPad.x,scratchPad.y,scratchPad.x2,scratchPad.y2);
					scratchPad.x=scratchPad.x2;
					scratchPad.y=scratchPad.y2;
			}
			else {
				//eraserMode
				scratchPad.context.clearRect(scratchPad.x2,scratchPad.y2,scratchPad.lineWidth,scratchPad.lineWidth);
			}
	},
	/***
	This event handler is activated when the person has clicked on "writeText" button,
	this event handler is responsible moving the text with the mouse pointer
	***/
	mouseMoveEventHandler1	:	function (e) {
			document.getElementById("sampleText").style.left=(e.clientX+5+scratchPad.scrollOffsetX())+"px";
			document.getElementById("sampleText").style.top=(e.clientY+5+scratchPad.scrollOffsetY())+"px";
	},
	drawLine	:	function (x1,y1,x2,y2) {
			var _context=scratchPad.context;
			_context.beginPath();

			_context.lineWidth=scratchPad.lineWidth;
			_context.lineCap = "round";
			_context.strokeStyle=scratchPad.penColor;

			//context moves to the initial point
			_context.moveTo(x1,y1);
			//context draws the line to the final point
			_context.lineTo(x2,y2);
			//the line is stroked on to the canvas
			_context.stroke();
	},
	Reset	:	function () {
			scratchPad.context.clearRect(0,0,800,200);
	}
};

