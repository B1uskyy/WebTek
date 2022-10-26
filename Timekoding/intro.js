

function checkScope (){
    var scope = "function scope";
    if (true) {
        scope = "block scope";
        console.log("block scope is: ", scope);
    }
    console.log("function scope is: ", scope);

    return scope; 
}

checkScope()