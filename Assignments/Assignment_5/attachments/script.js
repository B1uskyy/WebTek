/* Part 2 */
for (let input = 1; input <= 20; input++) 
    console.log(input)

    /* 
    Simple for loop that iterates through 1 to 20 and for every input value between prints that specific value to the console. 
    */
/* Part 3 */

console.log("Part 3")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 1; i<= 20; i++)  { 
    if (i%5 == 0 && i%3 == 0){
        console.log("Eplekake") 
    } else if (i%3 == 0) {
        console.log('Eple') 
    } else if (i%5 == 0) {
        console.log('Kake')}
     else {
        console.log(i)}
     
    }

/* 
I make a for loop that iterates 20 times (could probably also use foreach aswell), it checks if the rest from division (modulo)
is 0, which would imply that the division will give a round number. And prints accordingly. 
*/

/* Part 4 */    
let title = document.getElementById("title")
title.innerText = "Hello, JavaScript"

/* 
Assigns title the id of the title id from the html file, and use "innerText" to give writing to this id in the HTML document
*/

/* Part 5 */

function changeDisplay () {  
   document.getElementById("magic")
   magic.style.display = "none"
  }


function changeVisibility () {
document.getElementById("magic")
magic.style.visibility = "hidden"
magic.style.display = "block"
}

function reset () {
   magic.style.visibility = "visible"
    magic.style.display = "block"
   
   
}

/* 
Here I have created 3 funtions that takes the magic id and styles them according to the requirements, such ass visability and display.
The reset function just reverses every action that the two buttons could be making.
*/

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];


let list = document.getElementById("tech")
technologies.forEach(tech => {
    const l = document.createElement("li");
    l.innerText = tech;
    list.appendChild(l);
})
    /* Here I iterate through each element of the technologies constant, thorugh creating list elements I assign the value 
    of the technologies constant to every list by appending it as a child to the ul tech id. */
