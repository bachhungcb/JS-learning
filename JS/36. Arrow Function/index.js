// arrow function = a concise way to write function expressions
//                  good for simple function that you use only one
//                  syntax :
//                  (parameter) => some code

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((previous, next) => previous + next);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);


