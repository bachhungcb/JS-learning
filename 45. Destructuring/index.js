// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// -------------------  EXAMPLE 1 -----------------------
// SWAP THE VALUE OF TWO VARIBLES

let a = 1;
let b = 2;

[a,b] = [b,a]; //[] dau tien la thuc hien destructurin, [] la thu 
               // hai la thuc hien khai bao mang
console.log(a);
console.log(b);

// -------------------  EXAMPLE 2 -----------------------
// SWAP THE VALUE OF TWO ELEMENTS IN AN ARRAY

const colors = ["red", "blue", "green", "white", "black"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// -------------------  EXAMPLE 3 -----------------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// -------------------  EXAMPLE 4 -----------------------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "spongebob",
    lastName: "squarepants",
    age: 30,
    job: "Cook",
}

const person2 = {
    firstName: "ADBCD",
    lastName: "AKKDOWMC",
    age: 25,
}

const {firstName, lastName, age, job="unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// -------------------  EXAMPLE 5 -----------------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName: "BACHADW",
    lastName: "ALWLC",
    age: 18,
    job: "Writer",
}

const person4 = {
    firstName: "ALWC",
    lastName: "WOCAP",
    age: 19,
}

displayPerson(person4);
