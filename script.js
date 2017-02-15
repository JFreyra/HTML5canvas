console.log("Up and running");

// Helper Function

function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left,
    top: el.top
  }
}

// Slate 1

var slate1 = document.getElementById("slate1");
var slate1Con = slate1.getContext("2d");

var button1 = document.getElementById("clear1");

slate1Con.beginPath();

var fillSlate1 = function(){
    console.log("doin stuff");
    var size = 20;
    var mouseX = event.clientX - getOffset(slate1).left - size/2;
    var mouseY = event.clientY - getOffset(slate1).top - size/2;
    console.log(mouseX);
    console.log(mouseY);
    slate1Con.fillStyle = "#000000";
    slate1Con.fillRect(mouseX,mouseY,size,size);
};

var clearSlate = function(e){
    console.log("doin other stuff");
    if(this.id == "clear1"){
	slate1Con.beginPath();
	slate1Con.fillStyle = "#ffffff";
	slate1Con.fillRect(0,0,slate1.width,slate1.height);
    };
    if(this.id == "clear2"){
	slate2Con.beginPath();
	slate2Con.fillStyle = "#ffffff";
	slate2Con.fillRect(0,0,slate2.width,slate2.height);
    };
};

button1.addEventListener('click',clearSlate);
slate1.addEventListener('mousedown',fillSlate1);

// Slate 2

var slate2 = document.getElementById("slate2");
var slate2Con = slate2.getContext("2d");

var button2 = document.getElementById("clear2");

slate2Con.beginPath();

var fillSlate2 = function(){
    console.log("doin stuff");
    var size = 20;
    var mouseX = event.clientX - getOffset(slate2).left;
    var mouseY = event.clientY - getOffset(slate2).top;
    console.log(mouseX);
    console.log(mouseY);
    slate2Con.fillStyle = "#000000";
    slate2Con.lineTo(mouseX,mouseY);
    slate2Con.stroke();
    slate2Con.beginPath();
    slate2Con.arc(mouseX,mouseY,size,0*Math.PI,2*Math.PI);
    slate2Con.fill();
    slate2Con.moveTo(mouseX,mouseY);
};

button2.addEventListener('click',clearSlate);
slate2.addEventListener('mousedown',fillSlate2);
