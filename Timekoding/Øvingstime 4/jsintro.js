// kommentar

/* 

multiline comment

*/

var gammelVariabel = "Hello IT"
let nyVariabel = 2805
const konstant = true

console.log(gammelVariabel + nyVariabel)

nyVariabel = " World"

console.log(gammelVariabel + nyVariabel)

const tall = 24

if (tall === 0){
    console.log("Tallet er lik 0")
} else if (tall === 1) {
    console.log("Tallet er lik 1")
} else {
    console.log("Tallet er noe annet enn 0 eller 1")
}

for (let i = 0; i <= 10; i++ ) {
    if (i % 2 === 0) {
        console.log(i)
    } 
}

const title = document.getElementById("title")
title.innerText = "Hello, IT2805!"

const subtitle = document.querySelector(".subtitle")
const text = document.createTextNode("This is the subtitle")

subtitle.appendChild(text)

title.setAttribute("class","someCssClass")

function changeTextColor(color) {
    subtitle.style.color = color
}

changeTextColor("#FF00FF")

const textIsGreen = true

if (textIsGreen === true ) {
    changeTextColor("green")
} else {
    changeTextColor("red")
}