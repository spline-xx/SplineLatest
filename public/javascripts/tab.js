
function chane123(){
document.getElementById("time1").value =player.getTime();
 player.pause();
var topic=prompt("Please enter the topic","");
document.getElementById("topic").value=topic;
autoSubmit.submit();
 
  
  
};

function change(a){
	player.seek(a);

};
function imageS(j)
 		{
 			var x="";

 				x=x+"/images/pausch/img"+(j-1)+".gif";

 			document.getElementById('imageSource').src=x;
	

 		};
 		var j=55;
 		var flag=0;

window.setInterval(function(){
	//document.getElementById("url1").value=document.getElementById("pointer").style.left;
	//if(flag==0)
	//j=j+5;
	//document.getElementById("pointer").style.left=j+"px";
	var t = document.getElementById("topic123").getElementsByTagName("td");
	if(player.getState()==3)
	{
    for ( var i = 1; i < t.length; i+=3 )
    {
  //  var t1=t[i].innerHTML();
   if(Math.round(t[i].innerHTML)<=Math.round(player.getTime()))
    {
    	
    	if(Math.round(t[i+3].innerHTML)>=Math.round(player.getTime()))	
    	imageS(t[i+1].innerHTML);
    }
   }
  }
	
}, 1500);



