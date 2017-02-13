console.log("Up and running");

var slate = document.getElementById("slate");
var slateCon = slate.getContext("2d");

var button = document.getElementById("clear");

var fillSlate = function(){
    console.log("doin stuff");
    slateCon.beginPath();
    slateCon.fillStyle = "#000000";
    slateCon.fillRect(50,50,100,200);
};

var clearSlate = function(){
    console.log("doin other stuff");
    slateCon.beginPath();
    slateCon.fillStyle = "#ffffff";
    slateCon.fillRect(50,50,100,200);
};

button.addEventListener('click',clearSlate);
slate.addEventListener('mouseover',fillSlate);
