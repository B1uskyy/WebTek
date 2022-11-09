let canvas, crx;

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d')

// webg1, webg12

canvas.width = 600;
canvas.height = 800;

// rectangles

// ctx.rect(300, 100, 100, 50); // the first x and y coordinates starts at the inside of the canvas

// ctx.strokeStyle = "red";
// ctx.lineWidth = 10
// ctx.fillStyle = "blue"






// ctx.beginPath();

// ctx.ellipse(200,200, 40, 80, 0, 0 ,(2*Math.PI), false);
// ctx.fill();
// ctx.stroke();


// ctx.lineWidth = 2;
// ctx.font = 'normal 40px Helvetica, Arial, monospace '
// let txt = "hello how are you?"
// ctx.fillText(txt, 50, 50);







// ctx.lineWidth = 5;
//  ctx.strokeStyle = 'green';
// ctx.beginPath();
// ctx.moveTo(300,300);
// ctx.lineTo(400, 300);
// ctx.stroke();


// ctx.beginPath();
// ctx.moveTo(350,350);
// ctx.quadraticCurveTo(400,300,500,500);
// // ctrlPtX, ctrlPtY, endX, endY
// ctx.stroke();

// ctx.beginPath();
// ctx.bezierCurveTo(100,200,150,300,250,550)
// // ctrlPt1X, ctrlPt1Y,ctrlPt2X, ctrlPt2Y, endX, endY
// ctx.stroke();



// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100,200);
// ctx.closePath();

// ctx.stroke();
// ctx.fill();


// const centerX = canvas.width/2;
// const centerY = canvas.height/2;

// ctx.beginPath();
// ctx.arc(centerX, centerY, 200, 0, 2*Math.PI)

// ctx.moveTo(centerX + 100, centerY)
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);


// ctx.moveTo(centerX - 80, centerY - 80);
// ctx.arc(centerX - 80, centerY-90, 40, 0, 2*Math.PI, false);

// ctx.moveTo(centerX + 80, centerY + 80);
// ctx.arc(centerX + 80, centerY - 80, 40, 0, 2 * Math.PI, false);



// ctx.stroke();

// // transforms
// // ctx.translate - creates starting point on the canvas as the translate coordinates
// // ctx.rotate(Math.PI/2) rotates 90 degrees
// // ctx.scale(1, -1); scales upside down 


const circle = {
    x: 200,
    y: 200,
    size: 30, 
    dx: 5,
    dy: 5

};

function drawCircle () {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI*2);
    ctx.fillStyle = 'purple';
    ctx.fill();
}

function update () {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    drawCircle();

// change position
circle.x += circle.dx;
circle.y += circle.dy;



// detect side walls
if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0)
circle.dx *= -1;


// detect top and bottom walls
if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0)
circle.dy *= -1;

requestAnimationFrame(update);

}

update();


// ctx.clip only show the part of the image that you have "drawn"