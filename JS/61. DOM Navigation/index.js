// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JS

//  .firstElementChild
//  .lastElementChild
//  .nextElementSibling
//  .previousElementSibling
//  .parentElement
//  .children

//--------.firstElementChild-------------------


// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "pink";
// });

//--------.lastChildElement-------------------

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;

// lastChild.style.backgroundColor = "yellow";

// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "green";
// });

//--------.nextElementSibling-------------------    

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "orange";

//--------.previousElementSibling-------------------    

// const element = document.getElementById("cake");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.color = "red";

//--------.parentElement-------------------   

// const element = document.getElementById("icecream");
// const parent = element.parentElement;
// parent.style.backgroundColor = "lightblue";

//--------.children-------------------   

const element = document.getElementById("vegetables");
const children = element.children;

children[2].style.color = "pink";