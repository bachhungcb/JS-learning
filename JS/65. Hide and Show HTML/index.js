const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event =>{

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "HIDE";
    }else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "SHOW";
    }

})