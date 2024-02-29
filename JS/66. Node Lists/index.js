// NodeList = Static collection of HTML by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES

// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     button.textContent += "🐸";
// });

//EVENT LISTENER 

// buttons.forEach(button =>{
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     });

// });




// ADD HTML/CSS PROPERTIES
const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "Button 5";//STEP 2
newButton.classList = "myButtons";
//STEP 3
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");
//MOUSEOVER + MOUSEOUT event listener
buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseout", event=>{
        event.target.style.backgroundColor = "hsl(205, 100%, 79%)";
    })
})

console.log(buttons);