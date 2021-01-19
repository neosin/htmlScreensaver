

// Settings Variables
var color = "blue";
var speed = 4;
var settings = 1;
var colorMode = 1;
var backgroundColor = "white";

// Global Variables
var c;
var ctx;
var xSpeed;
var ySpeed;
var xPos
var yPos


// Random speed

function directionCalc(){
    xSpeed = Math.random() * speed;
    if(Math.random() * 2 <= 1){
        xSpeed = xSpeed * -1;
    }

    ySpeed = Math.sqrt(Math.pow(speed, 2) - Math.pow(xSpeed, 2));
    if(Math.random() * 2 <= 1){
        ySpeed = ySpeed * -1;
    }
    xPos = window.innerWidth/2;
    yPos = window.innerHeight/2;
}


function initCanvas(){
    canvas = document.getElementById("fsCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    canvas.addEventListener("click", processClick); 
}



function draw(){
    
    drawLogo(xPos, yPos, color);
    drawCog();


    if(settings == 1){
        drawSettings();
    }

}

function animation() {
    requestAnimationFrame(animation);
    xPos += xSpeed;
    yPos += ySpeed; 

    if(xPos+20 <= 0 || xPos+270 >= window.innerWidth) {
        xSpeed = -xSpeed;
    }

    if(yPos+20 <= 0 || yPos+165 >= window.innerHeight) {
        ySpeed = -ySpeed;
    }
    draw();
}

document.addEventListener("DOMContentLoaded", function () { // Starting the programm
    directionCalc();
    initCanvas();
    animation();
});

function drawLogo(xPos, yPos, color){
    c = document.getElementById("fsCanvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight; 
    ctx = c.getContext("2d");
    

    var pi = Math.PI
    
    // i from logo
    ctx.beginPath(); // dot
    ctx.rect(xPos + 20, yPos + 20, 25, 25);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.beginPath(); // lower part
    ctx.rect(xPos + 20, yPos + 65, 25, 100);
    ctx.fillStyle = color;
    ctx.fill();

    // m from logo
    ctx.beginPath(); // left rectangle
    ctx.rect(xPos + 60, yPos + 65, 25, 100);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.beginPath(); // middle rectangle
    ctx.rect(xPos + 120, yPos + 95, 25, 70);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.beginPath(); // right rectangle
    ctx.rect(xPos + 175, yPos + 105, 25, 60);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.beginPath(); // First arc
    ctx.arc(xPos + 105, yPos + 105, 39, pi, 0, false); // Outer first ring
    ctx.arc(xPos + 102, yPos + 105, 18, 0, pi , true); // Inner first ring
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); // Second arc
    ctx.arc(xPos + 160, yPos + 105, 39, pi, 0, false); // Outer first ring
    ctx.arc(xPos + 160, yPos + 105, 15, 0, pi, true); // Inner first ring
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();

    
    // s from logo
    ctx.beginPath(); // top part
    ctx.arc(xPos + 240, yPos + 98, 29, pi * -0.1 , pi * 0.5, true); // Outer first ring
    ctx.arc(xPos + 240, yPos + 98, 9, pi * 0.5, pi * -0.1, false); // Inner first ring
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath(); // bottom part
    ctx.arc(xPos + 240, yPos + 136, 29, pi * -0.5 , pi * 0.9, false); // Outer first ring
    ctx.arc(xPos + 240, yPos + 136, 9, pi * 0.9, pi * -0.5, true); // Inner first ring
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
    

    /*
    ctx.font = "150px Impact";
    ctx.fillStyle = color;
    ctx.fillText("ims-T", xPos + 10, yPos + 150);
    */
}

function drawSettings(){

    // Settings menu
    ctx.beginPath();
    ctx.rect(20, 90, 400, 370);
    ctx.fillStyle = "grey";
    ctx.globalAlpha = 0.6; // Transperancy on
    ctx.fill();
    ctx.globalAlpha = 1; // Transperancy off
   
    ctx.font = "50px Impact"; // Title
    ctx.fillStyle = "black";
    ctx.fillText("Settings", 130, 150);
    
    ctx.beginPath(); //Color Mode
    ctx.rect(270, 200, 25, 25);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.font = "30px Arial"; 
    ctx.fillStyle = "black";
    ctx.fillText("Color Mode", 70, 223);

    ctx.font = "30px Arial"; //Speed
    ctx.fillStyle = "black";
    ctx.fillText("Speed", 70, 280); 
    ctx.fillStyle = "grey";
    ctx.fillRect(200, 257, 25, 25);
    ctx.fillRect(240, 257, 25, 25);
    ctx.fillRect(280, 257, 25, 25);
    ctx.fillRect(320, 257, 25, 25);
    ctx.fillRect(360, 257, 25, 25);

    ctx.font = "30px Arial"; //Colors
    ctx.fillStyle = "black";
    ctx.fillText("Color", 70, 340); 
    ctx.fillStyle = "black";
    ctx.fillRect(200, 318, 25, 25);
    ctx.fillStyle = "white";
    ctx.fillRect(240, 318, 25, 25);
    ctx.fillStyle = "blue";
    ctx.fillRect(280, 318, 25, 25);
    ctx.fillStyle = "red";
    ctx.fillRect(320, 318, 25, 25);
    ctx.fillStyle = "green";
    ctx.fillRect(360, 318, 25, 25);

    ctx.font = "30px Arial"; // Background color
    ctx.fillStyle = "black";
    ctx.fillText("Background", 70, 400); 
    ctx.fillStyle = "black";
    ctx.fillRect(280, 378, 25, 25);
    ctx.fillStyle = "grey";
    ctx.fillRect(320, 378, 25, 25);
    ctx.fillStyle = "white";
    ctx.fillRect(360, 378, 25, 25);

    
}

function processClick(e) {
    console.log("Mouse inputs: " + e.clientX, e.clientY);

}

function drawCog(){
    var pi = Math.PI;
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, 2*pi);
    ctx.fill();

    ctx.rotate(0.5*pi);
    ctx.rect(25, -55, 50, 10);
    ctx.fill();
    ctx.rotate(-0.5*pi);

    ctx.rotate(1/6*pi);
    ctx.rect(43, 14, 50, 10);
    ctx.fill();
    ctx.rotate(-1/6*pi);

    ctx.rotate(-1/6*pi);
    ctx.rect(-6, 63, 50, 10);
    ctx.fill();
    ctx.rotate(1/6*pi);

    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, 2*pi);
    ctx.fillStyle = "white";
    ctx.fill();
}