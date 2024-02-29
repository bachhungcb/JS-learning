// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout,
//                  .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myBtn");



myButton.addEventListener("click", event =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch!  🥲";
});

myButton.addEventListener("mouseover", event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Dont't do it 😮";
});

myButton.addEventListener("mouseout", event =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😉";
});