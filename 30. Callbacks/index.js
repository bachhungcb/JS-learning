// callback = a fucntion that is passed as an argument 
//            to another function.

//              used to handle asynchronous operations:
//              1. Reading a file
//              2. Network request
//              3. Interacting with databases

//              "When you're done, call this next"

sum(displayPage, 5, 9);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}
