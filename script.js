console.log("Up and running");

var slate = document.getElementById("slate");
var slateCon = slate.getContext("2d");

var button = document.getElementById("clear");

var fillSlate = function(){
    console.log("doin stuff");
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    slateCon.beginPath();
    slateCon.fillStyle = "#000000";
    slateCon.fillRect(mouseX-20,mouseY-20,20,20);
};

var clearSlate = function(){
    console.log("doin other stuff");
    slateCon.beginPath();
    slateCon.fillStyle = "#ffffff";
    slateCon.fillRect(0,0,1000,300);
};

button.addEventListener('click',clearSlate);
slate.addEventListener('mousedown',fillSlate);
