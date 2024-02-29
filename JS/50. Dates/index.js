// Dates object = objects that contain values that represent dates and times
//                These date objects can be changed and formatted

//Date(year, month, day, hour, minute, second, ms)
const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();


// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(seconds);
// console.log(dayOfWeek);

const date1 = new Date("2023-12-31");
const date2 = new Date("2025-01-31");

if(date2 > date1){
    console.log("Happy New Year!");
}


