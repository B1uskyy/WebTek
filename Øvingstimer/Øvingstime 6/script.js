
const save = document.getElementById("save");
const item = document.getElementById("item");

const list = document.getElementById("list");


save.addEventListener("click", (event)=> {
event.preventDefault();

    // list.innerHTML += "<p>" + item.value + "</p>";


    const listItem = document.createElement("p");
    listItem.innerHTML = item.value;

    list.appendChild(listItem);

    listItem.addEventListener('click', (event) => {
        console.log(event)
        // event.target.style.color = 'red';
        event.target.classList.add('red'); // Adds classes dynamiccally

    if (event.target.classList.contains('red')) {
        event.target.classlist.remove('red')

        console.log("Har klassen rød")
    } else {
        console.log("Har ikke  rød")
       }
    })
})