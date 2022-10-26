// event propagation


window.addEventListener('click', function() {
    console.log('window') true
})

document.addeventListener('click', function() {
    console.log('document') true
}

document.querySelector(.div2).addEventListener('click', function() {