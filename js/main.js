var canvasW = 640;
var canvasH = 480;

function initCanvas()
{
    canvas = document.getElementById("fsCanvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight; 
    canvasW = canvas.width;
    canvasH = canvas.height;
}

initCanvas();