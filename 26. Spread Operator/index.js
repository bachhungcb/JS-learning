// spread operator = ... allow an iterable such as an
//                       array or string to be expanded 
//                       into seperate elements
//                       (unpacks the elements)

let fruits = ["Apple", "Orange","Banana"];
let vegetable = ["Carrot", "celery", "Potato"];
let newfruits = [...fruits];
let foods = [...fruits, ... vegetable, "Egg", "Milk"];

console.log(foods);