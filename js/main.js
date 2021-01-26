/*
    Screensaver Application
    Modul 152, guided by Pius Senn
    26.01.2021, Fabio Zahner & Silvan Lendi
*/

// Settings Variables (changed through the settings menu)
var enableColor = true;                         // If true, the logo changes color after each bounde
var colors = ["#4A00E0", "#FFF200", "#dd1818"]; // All colors the logo can have (can be changed)                                              
var speed = 4;                                  // Speed of the logo in pixels per frame
var backgroundColor = "#f8f8ff";                  // Background color


// Global Variables
var c;
var ctx;
var xSpeed;
var ySpeed;
var xPos;
var yPos;
var color = colors[0];
var colorNumber = 0;
var settings = 0;

var pi = Math.PI


function directionCalc(){ // Calculates a random direction at the start of programm
    
    xSpeed = Math.random() * speed; // Generates a random speed for x Axis
    if(Math.random() * 2 <= 1){
        xSpeed = xSpeed * -1;
    }
    /*  
    The speed of the y axis is calculated with the generated x speed 
    and the user selected speed using the pytagoras theorem 
    */
    ySpeed = Math.sqrt(Math.pow(speed, 2) - Math.pow(xSpeed, 2)); 
    if(Math.random() * 2 <= 1){
        ySpeed = ySpeed * -1;
    }
    xPos = window.innerWidth/2;     // Set the starting position
    yPos = window.innerHeight/2;    // in the middle of the window
}


function initCanvas(){ // Gets window dimensions & initialises actionlistener
    canvas = document.getElementById("fsCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    canvas.addEventListener("click", processClick); 
}



function draw(){ // Draws all elements in canvas
    drawLogo(xPos, yPos, color);
    drawCog();
    if(settings == 1){ // Only show settings if opened
        drawSettings();
    }
}

function animation() { // Gets called for each frame
    requestAnimationFrame(animation);
    xPos += xSpeed;
    yPos += ySpeed; 

    if(xPos+20 <= 0 || xPos+270 >= window.innerWidth) { // Detects a bounce at left or right window frame
        xSpeed = -xSpeed;
        if(enableColor){ // next color in array if enableColor is enabled
            colorNumber++;
            if(colorNumber == colors.length){ 
                colorNumber = 0;
            }
            color = colors[colorNumber];
        }
    }

    if(yPos+20 <= 0 || yPos+165 >= window.innerHeight) { // Detects a bounce at top or bottom window frame
        ySpeed = -ySpeed;
        if(enableColor){ // next color in array if enableColor is enabled
            colorNumber++;
            if(colorNumber == 3){
                colorNumber = 0;
            }
            color = colors[colorNumber];
        }
    }
    draw();
}

document.addEventListener("DOMContentLoaded", function () { // On page load, Starting the programm
    document.body.style.backgroundColor = backgroundColor; // Set the css background color to the selected color
    directionCalc();
    initCanvas();
    animation();
});

function processClick(e) { // Is called each time a click inside the window happens
    var mouseY = e.clientY;
    var mouseX = e.clientX;
    if(mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75){ // When clicked on cog
        settings = !settings;
    }
   
    if(settings == 1){ // The following checkboxes can only be clicked when the settings menu is open
        // Colormode checkbox
        if(mouseX > 270 && mouseX < 295 && mouseY > 200 && mouseY < 225){
            enableColor = !enableColor;   
        }
        // Speed settings
        if(mouseX > 200 && mouseX < 385 && mouseY > 255 && mouseY < 280){
            if(mouseX > 200 && mouseX < 225){
                speed = 2;
            }else if(mouseX > 240 && mouseX < 265){
                speed = 4;
            }else if(mouseX > 280 && mouseX < 305){
                speed = 6;
            }else if(mouseX > 320 && mouseX < 345){
                speed = 8;
            }else if(mouseX > 360 && mouseX < 385){
                speed = 100;
            }
            xSpeed = Math.random() * speed; // on change of speed, the 
            if(Math.random() * 2 <= 1){     // new x speed
                xSpeed = xSpeed * -1;       // needs to be calculated
            }
            ySpeed = Math.sqrt(Math.pow(speed, 2) - Math.pow(xSpeed, 2));   //
            if(Math.random() * 2 <= 1){                                     // same, but for y
                ySpeed = ySpeed * -1;                                       //
            }
        }
        // Bakcground color checkboxes
        if(mouseX > 280 && mouseX < 385 && mouseY > 318 && mouseY < 343){
            if(mouseX > 280 && mouseX < 305){
                backgroundColor = "#100c08";
            }else if(mouseX > 320 && mouseX < 345){
                backgroundColor = "#f8f8ff";
            }else if(mouseX > 360 && mouseX < 385){
                backgroundColor = "#ee82ee";
            }
            document.body.style.backgroundColor = backgroundColor; // Set the css background color to the selected color
        }
    }
}

function drawLogo(xPos, yPos, color){ // draws the ims logo each frame, takes the position and logo color
    c = document.getElementById("fsCanvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight; 
    ctx = c.getContext("2d");
    
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
}

function drawSettings(){ // Is called each frame, but only when settings are on
    
    //Background box
    ctx.beginPath();
    ctx.rect(20, 90, 400, 310);
    ctx.fillStyle = "grey";
    ctx.globalAlpha = 0.6; // Transperancy on
    ctx.fill();
    ctx.globalAlpha = 1; // Transperancy off
   
    // Title
    ctx.font = "50px Impact"; 
    ctx.fillStyle = "black";
    ctx.fillText("Settings", 130, 150);
    
    //Color Mode checkbox
    ctx.beginPath(); 
    ctx.rect(270, 200, 25, 25);
    if(enableColor){
        ctx.fillStyle = "lightgreen";
    }else{
        ctx.fillStyle = "grey";
    }
    ctx.fill();
    ctx.font = "30px Arial"; 
    ctx.fillStyle = "black";
    ctx.fillText("Color Mode", 70, 223);

    //Speed selectors
    ctx.font = "30px Arial"; 
    ctx.fillStyle = "black";
    ctx.fillText("Speed", 70, 280); 
    if(speed == 2){                         // In the following if/else statements,
        ctx.fillStyle = "lightgreen";       // we check what speed the logo is currently at and 
    }else{                                  // color the corresponding checkbox in light green
        ctx.fillStyle = "grey";
    }
    ctx.fillRect(200, 257, 25, 25);
    if(speed == 4){
        ctx.fillStyle = "lightgreen";
    }else{
        ctx.fillStyle = "grey";
    }
    ctx.fillRect(240, 257, 25, 25);
    if(speed == 6){
        ctx.fillStyle = "lightgreen";
    }else{
        ctx.fillStyle = "grey";
    }
    ctx.fillRect(280, 257, 25, 25);
    if(speed == 8){
        ctx.fillStyle = "lightgreen";
    }else{
        ctx.fillStyle = "grey";
    }
    ctx.fillRect(320, 257, 25, 25);
    if(speed == 100){
        ctx.fillStyle = "lightgreen";
    }else{
        ctx.fillStyle = "grey";
    }
    ctx.fillRect(360, 257, 25, 25);     

    // Background color selectors
    ctx.font = "30px Arial"; 
    ctx.fillStyle = "black";
    ctx.fillText("Background", 70, 340); 
    ctx.fillStyle = "black";
    ctx.fillRect(280, 318, 25, 25);
    ctx.fillStyle = "white";
    ctx.fillRect(320, 318, 25, 25);
    ctx.fillStyle = "violet";
    ctx.fillRect(360, 318, 25, 25);

    // Copyright notice
    ctx.font = "12px Arial"; 
    ctx.fillStyle = "black";
    ctx.fillText("© 2021 - Silvan Lendi & Fabio Zahner ", 110, 390); 
}

function drawCog(){ // Draws the cog for the settings menu in each frame
    
    if(backgroundColor == "#f8f8ff") { // If the background color is black, the cog needs to be white or it can't be seen
        ctx.fillStyle = "#100c08"; 
    } else {
        ctx.fillStyle = "#f8f8ff";
    }
    
    // Big circle
    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, 2*pi);
    ctx.fill();

    // Thooth 1 & 4
    ctx.rotate(0.5*pi);
    ctx.rect(25, -55, 50, 10);
    ctx.fill();
    ctx.rotate(-0.5*pi);

    // Thooth 2 & 5
    ctx.rotate(1/6*pi);
    ctx.rect(43, 14, 50, 10);
    ctx.fill();
    ctx.rotate(-1/6*pi);

    // Thooth 3 & 6
    ctx.rotate(-1/6*pi);
    ctx.rect(-6, 63, 50, 10);
    ctx.fill();
    ctx.rotate(1/6*pi);

    // Hole in middle
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, 2*pi);
    ctx.fillStyle = backgroundColor; // The circle in the middle is the same color as the background to create a hole
    ctx.fill();
}