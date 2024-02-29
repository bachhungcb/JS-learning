// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (aplhabet + numbers + symbols) as strings

let numbers = [2, 4, 5, 1, 3, 10, 24, 4, 24, 195];

numbers.sort((a, b) => b - a); //a - b for increasing order
                               //b - a for decreasing order

const people = [{name: "Abcscwf", age: 30, gpa: 3.5},
                {name: "Pacwcaw", age: 19, gpa: 4.0},
                {name: "Patrick", age: 20, gpa: 2.5},
                {name: "Dicsc",   age: 45, gpa: 3.6}]

people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);
