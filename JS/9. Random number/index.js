// RANDOM NUMBER GENERATOR
const myButon = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 7;
let randomNum1;
let randomNum2;
let randomNum3;

myButon.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min)) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
