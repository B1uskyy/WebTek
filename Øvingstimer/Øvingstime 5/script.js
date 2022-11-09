// console.log("Hello World!");

const range = document.getElementById("range"); // Get the range element
const output = document.getElementById("output"); // Get the output element

function changevalue() {
    // console.log(range.value)
    output.innerText = range.value;
    const tekst = "Verdien er: "
    output.innerText = tekst + range.value;
}

range.addEventListener("input", changevalue)




