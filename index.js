let b1= document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");

b1.onclick=function(){
    red();
}

b2.onclick=function(){
    yellow();
}

b3.onclick=function(){
    green();
}
function red() {
    b1.style.backgroundColor = "blueviolet";
    b2.style.backgroundColor = "blueviolet";
    b3.style.backgroundColor = "blueviolet";
    c1.style.backgroundColor = "red";

    c2.style.backgroundColor = "#1f1d41";

    c3.style.backgroundColor = "#1f1d41";
}
function yellow() {
    b2.style.backgroundColor = "blueviolet";
    b3.style.backgroundColor = "blueviolet";
    b1.style.backgroundColor = "blueviolet";
    c2.style.backgroundColor = "yellow";

    c1.style.backgroundColor = "#1f1d41";

    c3.style.backgroundColor = "#1f1d41";
}

function green() {
    b3.style.backgroundColor = "blueviolet";
    b1.style.backgroundColor = "blueviolet";
    b2.style.backgroundColor = "blueviolet";
    c3.style.backgroundColor = "green";

    c1.style.backgroundColor = "#1f1d41";

    c2.style.backgroundColor = "#1f1d41";
}

