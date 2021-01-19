var canvasW = 640;
var canvasH = 480;

function initCanvas(){
    canvas = document.getElementById("fsCanvas");
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight; 
    canvasW = canvas.width;
    canvasH = canvas.height;
    drawLogo();
}

function drawLogo(){
    canvas = document.getElementById("fsCanvas");
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
}

function nextFrame(){
    
}

initCanvas();
