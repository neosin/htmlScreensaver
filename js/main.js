var canvasW = 640;
var canvasH = 480;

var color = "blue";
var speed = 2;

var xSpeed = Math.random() * speed;
if(Math.random() * 2 <= 1){
    xSpeed = xSpeed * -1;
}

console.log(xSpeed);

var ySpeed = Math.sqrt(Math.pow(speed, 2) - Math.pow(xSpeed, 2));
if(Math.random() * 2 <= 1){
    ySpeed = ySpeed * -1;
}
var xPos = window.innerWidth/2;
var yPos = window.innerHeight/2;



function initCanvas(){
    canvas = document.getElementById("fsCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
}

function drawLogo(){
    var c = document.getElementById("fsCanvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight; 
    var ctx = c.getContext("2d");
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
    drawLogo();
}

document.addEventListener("DOMContentLoaded", function () {
    initCanvas();
    drawLogo();
    animation();
});