// .map() = accept a callback and applies that function 
//          to each element of an array, then return a new array

const dates = ["2024-2-15", "2025-2-15", "2026-1-18"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}