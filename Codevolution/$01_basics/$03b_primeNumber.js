const isPrime = (n) => {
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(12));


const isPrimeRecursive = (n) => {

}