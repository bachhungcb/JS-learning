//setTimeout() = function in JavaScript that allows you to schedule
//              the execution of function after ammount of time (ms)
//              Times are approximate (varies based on the workload of the JS runtime env.)

//              setTimeout(callback, delay);
//              clearTimeout(timeoutId) = can cancel a timeout before it trigger

let timeoutID;

function startTimer(){
    timeoutID = setTimeout(() => window.alert("Hello"), 3000);
    console.log("started");
}

function clearTimer(){
    clearTimeout(timeoutID);
    console.log("cleared");
}