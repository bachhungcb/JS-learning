//------------- EXAMPLE 3 <li> -----------------

//STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

//STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "egg";
newListItem.id = "egg";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//STEP 3 APPEND ELEMENT TO DOM
const listItem = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItem[0])


// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[4]);

//REMOVE HTML ELEMENT 
// document.getElementById("box1").removeChild(newH1);