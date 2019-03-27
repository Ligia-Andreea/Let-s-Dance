var dv=document.createElement("div");
dv.id="content";

var titlu=document.createElement("h1");
titlu.innerHTML="Survey";
titlu.style.color="rgb(254, 179, 34)";
titlu.style.textAlign="center";
titlu.style.textShadow="0.11em 0.11em 0.22em #000000";
titlu.style.marginTop="15%";

var intr1=document.createElement("p");
intr1.innerHTML="What is your name?";
intr1.style.textAlign="left";
intr1.style.paddingLeft="5%";

var input_txt=document.createElement("INPUT");         //input text
input_txt.setAttribute("type", "text");
input_txt.style.marginLeft="5%";
input_txt.placeholder="Your name";
input_txt.id="nume";



var intr2=document.createElement("p");
intr2.innerHTML="Select your gender: ";
intr2.style.textAlign="left";
intr2.style.paddingLeft="5%";

var sel_simplu=document.createElement("select");      //select simplu
var m=document.createElement("option");
m.textContent="Male";
sel_simplu.appendChild(m);
var f=document.createElement("option");
f.textContent="Female";
sel_simplu.appendChild(f);
sel_simplu.style.marginLeft="5%";


var intr3=document.createElement("p");
intr3.innerHTML="\nDid you heard about dancesport before?\n";
intr3.style.textAlign="left";
intr3.style.paddingLeft="5%";

var input_rdo1 = document.createElement("INPUT");        //input radio
input_rdo1.setAttribute("type", "radio");
input_rdo1.setAttribute("name", "quest2");
input_rdo1.style.marginLeft="5%"; 

var i3r1 = document.createElement("span");
i3r1.innerHTML="Yes";

var input_rdo2 = document.createElement("INPUT");
input_rdo2.setAttribute("type", "radio");
input_rdo2.setAttribute("name", "quest2");
input_rdo2.style.marginLeft="5%";

var i3r2 = document.createElement("span");
i3r2.innerHTML="No";

var input_rdo3 = document.createElement("INPUT");
input_rdo3.setAttribute("type", "radio");
input_rdo3.setAttribute("name", "quest2");
input_rdo3.style.marginLeft="5%";

var i3r3 = document.createElement("span");
i3r3.innerHTML="Maybe";


var intr4=document.createElement("p");
intr4.innerHTML="What are your passions? Write below:\n";
intr4.style.textAlign="left";
intr4.style.paddingLeft="5%";

var textarea=document.createElement("INPUT");            //textarea
textarea.setAttribute("type", "textarea");
textarea.style.marginLeft="5%";
textarea.placeholder="Write here...";


var intr5=document.createElement("p");
intr5.innerHTML="What kind of dancesport do you know?\n";
intr5.style.textAlign="left";
intr5.style.paddingLeft="5%";

var ch1=document.createElement("INPUT");                 //checkbox        textnode
ch1.setAttribute("type", "checkbox");
ch1.id="slow_waltz";
ch1.style.marginLeft="5%";
var lb1=document.createElement("label");
var t1=document.createTextNode("Slow Waltz");
lb1.setAttribute("for", "slow_waltz");
lb1.appendChild(t1);
ch1.appendChild(lb1);

var ch2=document.createElement("INPUT");
ch2.setAttribute("type", "checkbox");
ch2.id="v_waltz";
ch2.style.marginLeft="5%";
var lb2=document.createElement("label");
var t2=document.createTextNode("Viennese Waltz");
lb2.setAttribute("for", "v_waltz");
lb2.appendChild(t2);

var ch3=document.createElement("INPUT");
ch3.setAttribute("type", "checkbox");
ch3.id="tango";
ch3.style.marginLeft="5%";
var lb3=document.createElement("label");
var t3=document.createTextNode("Tango");
lb3.setAttribute("for", "tango");
lb3.appendChild(t3);

var ch4=document.createElement("INPUT");
ch4.setAttribute("type", "checkbox");
ch4.id="quickstep";
ch4.style.marginLeft="5%";
var lb4=document.createElement("label");
var t4=document.createTextNode("Quickstep");
lb4.setAttribute("for", "quickstep");
lb4.appendChild(t4);

var ch5=document.createElement("INPUT");
ch5.setAttribute("type", "checkbox");
ch5.id="cha_cha";
ch5.style.marginLeft="5%";
var lb5=document.createElement("label");
var t5=document.createTextNode("Cha-cha-cha");
lb5.setAttribute("for", "cha_cha");
lb5.appendChild(t5);

var ch6=document.createElement("INPUT");
ch6.setAttribute("type", "checkbox");
ch6.id="samba";
ch6.style.marginLeft="5%";
var lb6=document.createElement("label");
var t6=document.createTextNode("Samba");
lb6.setAttribute("for", "samba");
lb6.appendChild(t6);

var ch7=document.createElement("INPUT");
ch7.setAttribute("type", "checkbox");
ch7.id="rumba";
ch7.style.marginLeft="5%";
var lb7=document.createElement("label");
var t7=document.createTextNode("Rumba");
lb7.setAttribute("for", "rumba");
lb7.appendChild(t7);

var ch8=document.createElement("INPUT");
ch8.setAttribute("type", "checkbox");
ch8.id="jive";
ch8.style.marginLeft="5%";
var lb8=document.createElement("label");
var t8=document.createTextNode("Jive");
lb8.setAttribute("for", "jive");
lb8.appendChild(t8);

var btn=document.createElement("button");                //submit button 
btn.value="Submit"; 
btn.id="buton_submit";
btn.innerHTML="Submit";
btn.style.marginLeft="5%";
btn.addEventListener("click", function f(){
											window.open("app.html", "_self");
											});
dv.style.width="100%";
dv.style.float="left";
dv.style.display="block";
dv.style.marginBottom="10%";

dv.appendChild(titlu);
dv.appendChild(intr1);
dv.appendChild(input_txt);
dv.appendChild(document.createElement("br"));
dv.appendChild(document.createElement("br"));
dv.appendChild(intr2);
dv.appendChild(sel_simplu);
dv.appendChild(document.createElement("br"));
dv.appendChild(document.createElement("br"));
dv.appendChild(intr3);
dv.appendChild(input_rdo1);
dv.appendChild(i3r1);
dv.appendChild(document.createElement("br"));
dv.appendChild(input_rdo2);
dv.appendChild(i3r2);
dv.appendChild(document.createElement("br"));
dv.appendChild(input_rdo3);
dv.appendChild(i3r3);
dv.appendChild(document.createElement("br"));
dv.appendChild(document.createElement("br"));
dv.appendChild(intr4);
dv.appendChild(textarea);
dv.appendChild(document.createElement("br"));
dv.appendChild(document.createElement("br"));
dv.appendChild(intr5);
dv.appendChild(ch1);
dv.insertBefore(lb1, document.getElementById("slow_waltz"));
dv.appendChild(document.createElement("br"));
dv.appendChild(ch2);
dv.insertBefore(lb2, document.getElementById("v_waltz"));
dv.appendChild(document.createElement("br"));
dv.appendChild(ch3);
dv.insertBefore(lb3, document.getElementById("tango"));
dv.appendChild(document.createElement("br"));
dv.appendChild(ch4);
dv.insertBefore(lb4, document.getElementById("quickstep"));
dv.appendChild(document.createElement("br"));
dv.appendChild(ch5);
dv.insertBefore(lb5, document.getElementById("cha_cha"));
dv.appendChild(document.createElement("br"));
dv.appendChild(ch6);
dv.insertBefore(lb6, document.getElementById("samba"));
dv.appendChild(document.createElement("br"));
dv.appendChild(ch7);
dv.insertBefore(lb7, document.getElementById("rumba"));
dv.appendChild(document.createElement("br"));
dv.appendChild(ch8);
dv.insertBefore(lb8, document.getElementById("quickstep"));
dv.appendChild(document.createElement("br"));
dv.appendChild(document.createElement("br"));
dv.appendChild(btn);
document.body.appendChild(dv);