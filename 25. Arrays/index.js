// Array = a variable like structure that can hold
//         more than 1 value

let fruits = ["Apple", "Orange", "Banana", "Coconut","Mango"];
//fruits.push("Coconut");
//fruits.pop();
// fruits.unshift("Mango"); // them phan tu vao dau array
// fruits.shift(); // xoa phan tu o dau array

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}