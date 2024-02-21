//CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculator(){
    if(display.value = "Error"){
        display.value = "Error";
    }else{
        try{
            display.value = eval(display.value);
        }catch(error){
            display.value = "Error";
        }
    }
}