// DOM selection of elements

// let dom = document.getElementById("container");
// console.log(dom);

// let h1 = document.getElementById("main-header")
// console.log(h1);


// let li = document.getElementsByClassName("Movie-items")
// console.log(li[0])


// for (i=0; i < li.length; i++ )
    // li[i].style.backgroundColor = "yellow";

// let liAnother = document.getElementsByTagName('li');
// console.log(liAnother);

// let ul = document.querySelectorAll(".Movie-items");
// console.log(ul); 

// querySelector vil bare velge den første av elementene på siden.


// styling elements from JS
/*
let title = document.querySelector("#main-header")
title.style.color = 'red'

// title.style.display = 'none';
// title.style.visibility = 'hidden';

let li = document.querySelector(".Movie-items");
li.style.fontSize = '30px'

// create elements

let newLi = document.createElement('li');
let ul = document.querySelector('ul');


newLi.innerText = "John Wick";

ul.append(newLi);

newLi.setAttribute('class', "Movie-items");
newLi.removeAttribute('class');

newLi.remove();
*/


// parent traversal

//let ul = document.querySelector('ul');
// console.log(ul.parentNode); // selects the parent 
// console.log(ul.parentElement);

// !child traversal
//console.log(ul.childNodes) // access child nodes
//console.log(ul.children) // access the child HTML
//console.log(ul.lastElementChild)
//console.log(ul.firstElementChild
    
// sibling traversal

//console.log(ul.previousSibling);


/*
let btn1 = document.querySelector("#button1");

function onClickEvent () {
    alert ('The first button was clicked');
}

btn1.addEventListener('click', onClickEvent)
*/

let box2 = document.querySelector('#div2');

function changeColor() {
    box2.style.backgroundColor = 'green';   
}

function resetColor() {
    box2.style.backgroundColor = 'lightblue'
}


box2.addEventListener('mouseover', changeColor);
box2.addEventListener("mouseout", resetColor)