// element selectors = Method used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

//1. document.getElementById()          //ELEMENT OR NULL
//2. document.getElementsClassName()    //HTML COLLECTION
//3. document.getElementsByTagName()    //HTML COLLECTION
//4. document.querySelector()           //FIRST ELEMENT OR NULL
//5. document.querySelectorAll()        //NODELIST

//2.
// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

//3.
// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// h4Elements[0].style.backgroundColor = "yellow";

//4.
// Array.from(h4Elements).forEach(h4element =>{
//     h4element.style.backgroundColor = "lightyellow";
// })

//
// Array.from(liElements).forEach(liElement =>{
//     liElement.style.backgroundColor = "gold";
// })

// const element = document.querySelector("h1");

// console.log(element);

const foods = document.querySelectorAll("li");

foods.forEach(food =>{
    food.style.backgroundColor = "lightpink";
})