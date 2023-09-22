function isPrime(n) {
    if (n < 2) return false;
    const limit = Math.sqrt(n);
    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const test = isPrime(9);
console.log(test);