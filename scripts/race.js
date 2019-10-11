let snegl1 = {
    id: "a",
    navn: "Snegl 1",
    foto: "images/snegl1.png",
    x:-160,
    y:-45
};

let snegl2 = {
    id:"b", 
    navn:"snegl 2",
    foto:"images/snegl2.png",
    x:-160,
    y:-20
}

let snegl3 = {
    id:"c", 
    navn:"snegl 3",
    foto:"images/snegl3.png",
    x:-160,
    y:20
}

let snegl0 = {
    id:"d", 
    navn:"snegl 0",
    foto:"images/snegl0.png",
    x:-160,
    y:50
}

let snegl4 = {
    id:"e", 
    navn:"snegl 4",
    foto:"images/snegl4.png",
    x:-160,
    y:100
}

let sek = 0;
let minSpring = 3;
let maxSpring = 15;
let tidsinterval = 100;
let finishLine = 730;

window.onload = function (){
    let racetrack = document.getElementById("raceway");

    let s1 = document.createElement("div");
    s1.id = snegl1.id;
    s1.className = "snegle-container";
    s1.style.backgroundImage = "url('" + snegl1.foto + "')";
    s1.style.top = snegl1.y + "px";
    s1.style.left = snegl1.x + "px";
    racetrack.appendChild(s1);

    let s2 = document.createElement("div");
    s2.id = snegl2.id;
    s2.className = "snegle-container";
    s2.style.backgroundImage = "url('" + snegl2.foto + "')";
    s2.style.top = snegl2.y + "px";
    s2.style.left = snegl2.x + "px";
    racetrack.appendChild(s2);

    let s3 = document.createElement("div");
    s3.id = snegl3.id;
    s3.className = "snegle-container";
    s3.style.backgroundImage = "url('" + snegl3.foto + "')";
    s3.style.top = snegl3.y + "px";
    s3.style.left = snegl3.x + "px";
    racetrack.appendChild(s3);

    let s0 = document.createElement("div");
    s0.id = snegl0.id;
    s0.className = "snegle-container";
    s0.style.backgroundImage = "url('" + snegl0.foto + "')";
    s0.style.top = snegl0.y + "px";
    s0.style.left = snegl0.x + "px";
    racetrack.appendChild(s0);

    let s4 = document.createElement("div");
    s4.id = snegl4.id;
    s4.className = "snegle-container";
    s4.style.backgroundImage = "url('" + snegl4.foto + "')";
    s4.style.top = snegl4.y + "px";
    s4.style.left = snegl4.x + "px";
    racetrack.appendChild(s4);

};
let startknap = document.getElementById("startknap");

startknap.addEventListener("click", start);

function start() {
    document.getElementById('startknap').style.display ="none";
    afsted();
};

function afsted (){
    snegl1.x += spring();
    snegl2.x += spring();
    snegl3.x += spring();
    snegl0.x += spring();
    snegl4.x += spring();

    document.getElementById(snegl0.id).style.left = snegl0.x + "px";
    document.getElementById(snegl1.id).style.left = snegl1.x + "px";
    document.getElementById(snegl2.id).style.left = snegl2.x + "px";
    document.getElementById(snegl3.id).style.left = snegl3.x + "px";
    document.getElementById(snegl4.id).style.left = snegl4.x + "px";

if(snegl1.x >= finishLine || snegl2.x >= finishLine || snegl3.x >= finishLine || snegl4.x >= finishLine){
    if(snegl1.x > snegl2.x){
        setTimeout("winner('" + snegl1.navn + "');", 1000);
    }if(snegl2.x > snegl1.x){
        setTimeout("winner('" + snegl2.navn + "');", 1000);
    }else if ( snegl2.x > snegl1.x > snegl3.x > snegl4.x  ){
        setTimeout("winner('')", 1000)
    }

}
    else{
        setTimeout("afsted();", tidsinterval);
        sek = sek + 1;
    }

};
function winner(vinderen){
    let tid = (sek * tidsinterval) / 1000;
    if(vinderen == ""){
        alert("Ræsrt er slut - det biev uafgjort ! det tog " + tid + "sekunder.");
    }
    else{
        alert("ræsrt blev vundet af " + vinderen + "! det tof " + tid + "sekunder.");
    }
window.location.reload();
};

function spring(){
    let randomStep = Math.round(Math.random() * maxSpring) + minSpring;
    return randomStep;
};
