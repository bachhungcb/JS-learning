//IF statement

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;
mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    
    if(age >= 100){
        resultElement.textContent = `You are too old to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter this site, You were just be born`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be negative`;
    }
    else{
        resultElement.textContent = `You must be over 18 years old to enter this site`;
    }
}

