var dv_mare=document.createElement("div");
dv_mare.id="content";
dv_mare.style.width="98%";
dv_mare.style.float="left";
dv_mare.style.display="block";
dv_mare.style.marginBottom="15%";
dv_mare.style.marginLeft="2%";

var dv_mic=document.createElement("div");
dv_mic.id="application";
dv_mic.style.width="100%";
dv_mic.style.height="50%";
dv_mic.style.cssFloat="left";
dv_mic.style.textAlign="center";
dv_mic.style.display="flex";
dv_mic.style.marginTop="11%";

dv_mare.appendChild(dv_mic);
document.body.appendChild(dv_mare);

/*
var dv_mij=document.createElement("div");
dv_mij.id="mijloc";
//dv_mij.height="100%";
//dv_mij.width="20%";
dv_mic.appendChild(dv_mij);
dv_mij.style.display="inline-block";
*/


function dans1(){
	var dv=document.createElement('div');
	dv_mic.appendChild(dv);
	for(var i=0;i<35;i++)
	{
		var divInt=document.createElement("div")
		divInt.classList.add("item-grid");
		dv.appendChild(divInt);
		divInt.style.border = "thin solid black";
		divInt.style.backgroundColor="white";
		divInt.style.height ="80px";
		divInt.style.width ="50px";
	}
	dv.style.display="grid";
	dv.style.gridColumnGap="0px";
	dv.style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr";
	dv.style.gridTemplateRows="1fr 1fr 1fr 1fr 1fr";
	
}


function randomImg (){
	var myimages=["./waltz/right_foot_change1.jpg", "./waltz/left_foot_change1.jpg", "./waltz/small_box1.jpg"];
	var img=document.createElement("img");
	img.id="imagine1";
	var ry=Math.floor(Math.random()*myimages.length);
	img.src=myimages[ry];
	img.style.cssFloat="right";
	img.style.marginRight="10%";
	dv_mic.appendChild(img);
}


window.onload = function(){

	dans1();
	var x=document.getElementsByClassName("item-grid");
	
	
	var dv_mij=document.createElement("div");
	dv_mij.id="mijloc";
	//dv_mij.height="100%";
	dv_mij.width="30%";
	dv_mic.appendChild(dv_mij);
	dv_mij.style.display="inline-block";
	
	
	var paragraf=document.createElement("p");
	paragraf.id="coord";
	paragraf.style.width="50%";
	dv_mij.appendChild(paragraf);
	
	
	var input_rg=document.createElement("input");     ///////////////////pozitia input_rg si redimensionarea nu merge
	input_rg.type="range";                            //input range
	input_rg.id="ranger";
	input_rg.style.marginRight="20%";
	input_rg.style.cssFloat="center";
	input_rg.setAttribute("min", "1");
	input_rg.setAttribute("max", "100");
	input_rg.setAttribute("value", "100");
	dv_mij.appendChild(input_rg);
	
	
	
	var t=setTimeout(function(){ alert("Time is out!"); }, 30000);       //setTimeout   alert
	function stopCount() {
		clearTimeout(t);
	}
	var Sbtn=document.createElement("button");     //////////////////////pozitia butonului
	dv_mic.appendChild(Sbtn);
	Sbtn.innerHTML="Stop the timer";
	//Sbtn.style.higth="10%";
	//Sbtn.style.cssFloat="left";
	//Sbtn.stile.marginLeft="10%";
	Sbtn.onclick=function(){                     //onclick
		stopCount();
		alert("You won!");
	}
	dv_mij.appendChild(Sbtn);
	
	
	
	for(var i=0;i<x.length;i++)
	{
		x[i].addEventListener("mousedown",function(e){          //adaugare pasi mousedown
			if (e.button==2)
			{	
				
				document.addEventListener("contextmenu", function(e){       //dispare click dreapta
					e.preventDefault();
				}, false);
					
		
				if(	this.style.backgroundColor == "white")
				{
					var imag=document.createElement("img");
					imag.src="./app/blackr1.png";
					imag.className="pas";
					imag.setAttribute('width', '80%');
					this.appendChild(imag);
				}
				else
					this.style.backgroundColor="white";
			}
			else
			{
				if (e.button==0)
				{	
					if(	this.style.backgroundColor == "white")
					{
						var imag=document.createElement("img");
						imag.src="./app/blackl1.png";
						imag.className="pas";
						imag.setAttribute('width', '80%');

						this.appendChild(imag);
					}
					else
						this.style.backgroundColor="white";
				}
			}
			
			var a=e.clientX;                                       //coordonate mouse
			var b=e.clientY;
			var extrag=document.getElementById("coord");
			extrag.innerHTML="The coordinates are: "+a+" "+b;
		});
		
	}
	
	
	
	window.addEventListener("keydown", function sterge_pas(e){       //stergere    querySelectorAll       keydown
		if(e.keyCode==68) //litera d 
		{
			var x=document.querySelectorAll(".pas");
			var i=0;
			while (x.length>0)
			{
				x[i].parentNode.removeChild(x[i]);               //parentNode   removeChild
				i++;
			}
		} 
		
		
		
	});
	
	window.addEventListener("keypress", function sterge_pas(e){   //////////////nu merge sa sterg ultimul pas, sterge random
		if(e.keyCode==114) //litera r								  keypress
		{
			var x=document.querySelectorAll(".pas");
			x[x.length-1].parentNode.removeChild(x[x.length-1]);
		} 
		
	});
	
	
	randomImg();
	
    var ima =  document.getElementById('imagine1');
    var wid = parseFloat(window.getComputedStyle(ima).getPropertyValue("width"));      /////////////nu merge redimensionarea
    var heig = parseFloat(window.getComputedStyle(ima).getPropertyValue("height"));
	//console.log(window.getComputedStyle(ima).getPropertyValue("width"));
	
	input_rg.onchange = function(e){
		ima.style.width = 3*parseInt(e.currentTarget.value)+"px";
		ima.style.height = 3*parseInt(e.currentTarget.value)+"px";
	}
	
	
	
	//loading bar
	var progress=document.createElement("div");
	var load=document.createElement("div");
	load.innerHTML="10%";
	var width=10;
	progress.style.width="100%";
	progress.style.position="absolute";
	progress.style.top="50%";
	progress.style.backgroundColor="#ddd";
	load.style.width="10%";
	load.style.height="30px";
	load.style.backgroundColor= "#ff9933";
	load.style.textAlign="center";
	load.style.lineHeight="30px";
	load.style.color="white";
	var id = setInterval(frame,10);             //setInterval
	function frame(){
		if (width >= 100) 
		{
			clearInterval(id);
			progress.style.display="none";
		} 
		else 
		{
			width++; 
			load.style.width = width + '%'; 
			load.innerHTML = width * 1  + '%';
		}
	}
	progress.appendChild(load);
	var f=document.getElementsByTagName("footer")[0];           //getElementsByTagName
	document.body.insertBefore(progress, f);                   //insertBefore
	
	
}


