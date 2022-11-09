const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawLine(fromX, fromY, toX, toY) {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

}

// drawLine(0,0,150,150)

function drawText(text, x, y) {
    ctx.fillStyle = "black";
    ctx.fillText(text, x, y);
}

// drawText("Hello world", 10, 10)

function drawLineWithText(text, fromX, fromY, toX, toY) {
    drawText(text, fromX - 50, fromY + 10)
    drawLine(fromX, fromY, toX, toY);
}

// drawLineWithText("Hello", 50, 150, 300, 150)

for (i = 1; i < 15; i ++) {
    // drawLine(i * 30, 0, i * 30, 300)
}

// ctx.beginPath();
// ctx.rect(10, 10, 100, 100)
// ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "green"
ctx.fillRect(10,10,100,100);

ctx.fillStyle = "red"
ctx.fillRect(20,20,100,100)

const students = [
    {name: "Ola", GPA: 4.2},
    {name: "Petter", GPA: 2.2},
    {name: "Frida", GPA: 3.0}
]

// for (student of students) {
//     if (student.GPA >= 3){
//     console.log(student.name)
//     }
// }

for (i = 0; i < students.length; i++) {
    console.log(students[i].name)
}