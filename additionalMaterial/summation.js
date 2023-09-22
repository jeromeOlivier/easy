// O(n)
function linearSummation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.time();
const linearSolution = linearSummation(4);
console.log(linearSolution);
console.timeEnd();

function constantSummation(n) {
    return (n * (n + 1) / 2); // this blows my mind!!!
}

console.time();
const constantSolution = constantSummation(4);
console.log(constantSolution);
console.timeEnd();