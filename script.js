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

// Slate 3

var slate3 = document.getElementById("slate3");
var slate3Con = slate3.getContext("2d");

var button3 = document.getElementById("clear3");

var requestID;

var clicks = 0;

var clear = function(e){
    e.preventDefault();
    window.cancelAnimationFrame(requestID);
    slate3Con.clearRect(0,0,slate3.width,slate3.height);
};

var animate = function(){
    
    window.cancelAnimationFrame(requestID);
    //clicks++;

    var radius = 50;
    var xcor = 10;

    var drawDot = function(){
	console.log(requestID);
	slate3Con.clearRect(0,0,slate3.width,slate3.height);
	slate3Con.beginPath();
	slate3Con.arc(xcor,100,radius,0,2*Math.PI);
	slate3Con.stroke();
	slate3Con.fill();

	xcor++;
	// xcor += clicks;
	// if(xcor == slate3.width){
	//     clear();
	// };

	requestID = window.requestAnimationFrame(drawDot);
    };

    drawDot();
    
};

var stopIt = function(){
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

button3.addEventListener('click',clear);
slate3.addEventListener('mousedown',animate);

// Slate 4

var slate4 = document.getElementById("slate4");
var slate4Con = slate4.getContext("2d");

var button4 = document.getElementById("clear4");

var requestID;

var clear4 = function(e){
    e.preventDefault();
    window.cancelAnimationFrame(requestID);
    slate4Con.clearRect(0,0,slate4.width,slate4.height);
};

var animate4 = function(){
    
    window.cancelAnimationFrame(requestID);
    //clicks++;

    var radius = 1;
    var rate = 1;
    var xcor = slate4.width/2;
    var ycor = slate4.height/2; //- getOffset(slate1).top;

    var drawDot = function(){
	console.log(requestID);
	slate4Con.clearRect(0,0,slate4.width,slate4.height);
	slate4Con.beginPath();
	slate4Con.arc(xcor,ycor,radius,0,2*Math.PI);
	slate4Con.stroke();
	slate4Con.fill();

	radius += rate;
	if(radius == slate4.width/2  || 
	   radius == slate4.height/2 || 
	   radius == 0){
	    rate *= -1;
	};

	requestID = window.requestAnimationFrame(drawDot);
    };

    drawDot();
    
};

button4.addEventListener('click',clear4);
slate4.addEventListener('mousedown',animate4);

// Slate 5

var slate5 = document.getElementById("slate5");
var slate5Con = slate5.getContext("2d");

var button5 = document.getElementById("clear5");
var buttonCir = document.getElementById("circle");
var buttonDvd = document.getElementById("dvd");

var requestID;

var clear5 = function(e){
    e.preventDefault();
    window.cancelAnimationFrame(requestID);
    slate5Con.clearRect(0,0,slate5.width,slate5.height);
};

var animate5 = function(select){
    
    window.cancelAnimationFrame(requestID);
    //clicks++;

    var xrate = 10;
    var yrate = 10;
    var xcor = 120;
    var ycor = 135;

    var drawDot = function(xcor,ycor){
	var radius = 20;

	slate5Con.beginPath();
	slate5Con.arc(xcor,ycor,radius,0,2*Math.PI);
	slate5Con.stroke();
	slate5Con.fill();

	if(xcor+radius >= slate5.width || xcor-radius <= 0){
	    xrate *= -1;
	};
	if(ycor+radius >= slate5.height || ycor-radius <= 0){
	    yrate *= -1;
	};
    };

    var drawDvd = function(xcor,ycor){
	var img1 = new Image();
        img1.src = 'dvdlogo.png';
	slate5Con.drawImage(img1,xcor,ycor,100,50);

	if(xcor+100/2 >= slate5.width || xcor-100/2 <= 0){
	    xrate *= -1;
	};
	if(ycor+50/2 >= slate5.height || ycor-50/2 <= 0){
	    yrate *= -1;
	};
    };

    var drawAsset = function(select){
	console.log(requestID);
	slate5Con.clearRect(0,0,slate5.width,slate5.height);
	if(select == 1){
	    drawDot(xcor,ycor);
	};
	if(select == 0){
	    drawDvd(xcor,ycor);
	};

	xcor += xrate;
	ycor += yrate;
	

	requestID = window.requestAnimationFrame(drawAsset(select));
    };

    drawAsset(select);
    
};

button5.addEventListener('click',clear5);
buttonCir.addEventListener('click',animate5(1));
buttonDvd.addEventListener('click',animate5(0))
slate5.addEventListener('mousedown',animate5(1));
