// .reduce() = reduce element of an array
//             to a single value

const grades = [75, 50, 80, 65, 95, 100];

const maximum = grades.reduce(getMax);
console.log(maximum);
const minimum = grades.reduce(getMin);
console.log(minimum);

function getMax(previous, next){
    return Math.max(previous, next);
}

function getMin(previous, next){
    return Math.min(previous, next);
}