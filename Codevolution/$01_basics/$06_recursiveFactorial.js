const recursiveFactorial = (n) => (n === 0) ? 1 : n * recursiveFactorial(n - 1);


console.time('recursive');
const recursive = recursiveFactorial(20);
console.log(recursive.toLocaleString('en-US'));
console.timeEnd('recursive');