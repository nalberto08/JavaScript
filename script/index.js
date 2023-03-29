console.log("Albert");
console.log(document.getElementById("hash"));
console.log(document.getElementById("test"));
console.log(document.getElementById("link").href);
console.log(document.getElementById("hash").innerHTML);
console.log(document.getElementById("main").innerHTML);
document.getElementById("good").innerHTML="Javascript is good";
document.getElementById("today").style.color="green";
document.getElementById("today").style.paddingTop="50px";

// To create a new html tag

console.log(1+2);
console.log(Albert);
changeImage.src="./image/FB_IMG_1678348398334";

const link= document.createElement("a");
link.innerHTML="google";
link.href="www.google.com";
let anchol=document.getElementsByClassName(".anchol")[0];
console.log(typeof anchol);
anchol[0].appendChild(link);
anchol[1].innerHTML= "Niyikiza";

const main=document.createElement("div");
main.id="main";

const test=document.createElement("h3");
test.id="test";
test.innerHTML="Hello world";

const para=document.createElement("p");
para.innerHTML="Today we are learning practical javascript";

const hash=document.createElement("p");
hash.id="hash";
hash.innerHTML="#makeProgress";

const good=document.createElement("h1");
good.id="test";
good.innerHTML="Javascript is powerfull";

const span=document.createElement("span");
span.innerHTML="Some text";

const link1=document.createElement("a");
link1.id="link";
link1.href="https://www.instagram.com";
link1.innerHTML="Instagram";

const about=document.createElement("a");
about.id="about";
about.href="./about.html";
about.innerHTML="About page";

//Endeing of the first div
const imge=document.createElement("img");
imge.id="imge";
imge.src="./image/20230309-095515.jpg";
imge.alt="testing image";
imge.style["width"]="40px";

//Second div

const anchol0=document.createElement("div");
anchol0.class="anchol";

const anchol1=document.createElement("div");
anchol1.class="anchol1";

const head=document.createElement("h1");
head.innerHTML="Javascript is powerfyll";

main.appendChild(test);
main.appendChild(hash);
main.appendChild(good);
main.appendChild(link1);
main.appendChild(about);
main.appendChild(imge);
const body=document.body;

body.appendChild(main);
body.appendChild(imge);
body.appendChild(anchol0);
body.appendChild(head);
body.appendChild(anchol1);

/How to use date

let today= new Date();
let find =document.getElementById("find"); 
find.innerHTML=today;

let birthdate= new Date("2005-04-16");
find.innerHTML=birthdate;

let day= birthdate.getDay();
find.innerHTML=birthdate;
let day1= birthdate.getDay();

let website=window.location.href;
address.innerHTML=website;

let protocol=window.location.protocol;
address.innerHTML=protocol;

let hostname=window.location.hostname;
address.innerHTML=hostname;

let host=window.location.host;
address.innerHTML=host;

let pathname=window.location.pathname;
address.innerHTML=pathname;

const back=document.getElementById("back");
let history=window.history.length;
back.innerHTML=history;

window.alert("Hello world");
window.confirm("I'm confirming");

window.location.href="https://www.instagram.com";

window.location.replace("https://www.twitter.com");

window.alert("How are you?\nHello dear");

















