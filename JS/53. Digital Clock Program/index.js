// DIGITAL CLOCK PROGRAM

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridium = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minute = now.getMinutes().toString().padStart(2, 0); 
    const second = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minute}:${second} ${meridium}`;
    document.getElementById("clock").textContent = timeString;
}

 setInterval(updateClock, 1000);