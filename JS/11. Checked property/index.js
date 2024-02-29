//.checked = property that determines the checked status of an HTML checked box or
//  radio button elements

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent =`You are subcribed`;
    }else{
        subResult.textContent=`You are NOT subcribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent =`You are paying with Visa`;
    }else if(masterCardBtn.checked){
        paymentResult.textContent=`You are paying with MasterCard`;
    }else if(payPalBtn.checked){
        paymentResult.textContent =`You are paying with PayPal`;
    }else{
        paymentResult.textContent=`You must select a payment type`;
    }
}

