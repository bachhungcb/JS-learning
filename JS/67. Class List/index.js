//classList = Element property in JS used to interact 
//            with an element's list of class (CSS classes)
//            Allows you to make reuable classes for many elements
//            across your webpage

//add()
//remove()
//toggle(Remove if present, add if not)
//replace(oldClass, newClass)
//contains

const buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
    button.classList.add("enabled");
});

buttons.forEach(button =>{
    button.addEventListener("mouseover", event=>{
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", event=>{
        event.target.classList.toggle("hover");
    })
});

buttons.forEach(button =>{
    button.addEventListener("click", event=>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🐸";
        }else{
            event.target.classList.replace("enabled", "disabled");
        }
    })
});

