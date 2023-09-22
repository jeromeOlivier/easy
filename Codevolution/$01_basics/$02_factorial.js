function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}

console.time('iterative');
const answer = factorial(100);
console.log(answer);
console.timeEnd('iterative');

function factorialRecursive(n) {
    return (n === 0) ? 1 : n * factorialRecursive(n - 1);
}

// oddly enough the recursive method works better in this case...
console.time('recursive');
const recursive = factorialRecursive(100);
console.log(recursive);
console.timeEnd('recursive');