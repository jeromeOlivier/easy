function fibonacci(n) {
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result;
}

const solution = fibonacci(10);
console.log(solution);