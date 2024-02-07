//function  = A section of reusable code.
//            Declare the code once, use it whenever you want
//            Call the function to execute that code.

function add(x,y){
   return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

function isEven(number){
    if(number%2 === 0){
        return true;
    }else{
        return false;
    }
}

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}

console.log(isValidEmail("bach@fake.com"));
console.log(isValidEmail("bachfake.com"));