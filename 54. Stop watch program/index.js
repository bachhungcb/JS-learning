const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            update();
        }, 10);
        isRunning = true;
    }
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

function reset(){
    clearInterval(timer);
    timer = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hour = Math.floor(elapsedTime / (1000 * 60 * 6));
    let minute = Math.floor(elapsedTime / (1000* 60) % 60);
    let second = Math.floor(elapsedTime / 1000 % 60);
    let milisecond = Math.floor(elapsedTime % 1000 / 10);

    hour = String(hour).padStart(2,"0");
    minute = String(minute).padStart(2,"0");
    second = String(second).padStart(2,"0");
    milisecond = String(milisecond).padStart(2,"0");
    display.textContent = `${hour}:${minute}:${second}:${milisecond}`;

}