var dv=document.createElement("div");
dv.id="footer";
var paragraf=document.createElement("p");
paragraf.innerHTML="&copy; Merisan Ligia-Andreea 2018";
dv.appendChild(paragraf);	
	
var imag=document.createElement("img");
imag.src="./app/playM.png";
imag.setAttribute('width', '4%');
imag.alt = 'Play';
imag.style.position="absolute";
imag.style.bottom="1%";
imag.style.left="9%";
var add_text=document.createElement("div");

imag.onmouseenter=function f()                  //onmouseenter
{
	document.body.appendChild(add_text);
}
imag.onmouseover=function f()                  //onmouseover
{
	add_text.innerHTML="Play me";
	add_text.style.position="fixed";
	add_text.style.color="white";
	add_text.style.bottom="5%";
	add_text.style.left="13%";
	
}
imag.onmouseleave=function f()                //onmouseleave
{
	document.body.removeChild(add_text);       //removeChild
}
imag.addEventListener("click", function f(){
											window.open("chestionar.html", "_self");
											});
												
dv.appendChild(imag);
document.body.appendChild(dv);
