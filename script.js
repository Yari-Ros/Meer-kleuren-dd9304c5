var h1;

var body;


function titelkleur() {
    h1=document.getElementById("kleur").value;
    document.getElementById("h1").style.color=h1;
}

function bodykleur(){
    body=document.getElementById("kleur").value;
    document.getElementById("body").style.backgroundColor=body;
}


function alles() {
    document.getElementById("h1").style.color=h1;
    document.getElementById("body").style.backgroundColor=body;
}