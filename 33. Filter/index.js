//. filter() = creates a new array by filtering 
//             out elements

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);

console.log(shortWords);

function getShortWords(elements){
    return elements.length <= 5;
}