// rest parameters = (...rest) allow a function work with a variable
//                   number of argument by bundling them into a array

//                   spread = expands an array into seperate elements
//                   rest   = bundles seperate elements into an array

function combineString(...strings){
    return strings.join(" ");
}


const fullName = combineString("Mr.", "Spongebob", "Squarepants", "III"); 

console.log(fullName);