// function declaration = define a reusavle block of code
//                        that performs a specific task

// 1. Callback in asynchronous operations
// 2. Higher-Order Function
// 3. Closures
// 4. Event Listeners

const numbers = [1, 2, 3, 4, 5, 6];
const squareNums = numbers.map(function(element){
    return Math.pow(element, 2);
});

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

const sum = numbers.reduce(function(previous, next){
    return previous + next;
});

console.log(squareNums);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(sum);
