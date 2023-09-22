const number = Math.round(199999999900000009999999 * 1.2);
console.log(number);

function powerOfTwo(num) {
    return (num & (num - 1)) === 0;
}

console.time("constant");
const test = powerOfTwo(number);
console.log(test);
console.timeEnd("constant");

/*
 In the binary number system, any power of two is represented as a single 1
 followed by a certain number of 0s. In other words, a power of 2 in binary is a
 number where only the most significant bit is 1.

 A neat trick is that if you subtract 1 from a power of two, you get a number
 where all the bits to the right of the most significant bit turn to 1, and the
 rest are 0. For example, the binary representation of 8 (which is a power of
 two) is 1000, and if you subtract 1 from 8 you get 7, which in binary is 111.

 Now, coming to JavaScript - if we and (&) these two numbers (let's say n is a
 power of two and n - 1 as explained above), we should get zero.

 As explained on MDN:

 x 	y 	x AND y
 0 	0 	0
 0 	1 	0
 1 	0 	0
 1 	1 	1

 */

function logPowerOfTwo(n) {
    if (n < 1) return false;
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n /= 2;
    }
    return true;
}

console.time("logarithmic");
const linearTest = logPowerOfTwo(number);
console.log(linearTest);
console.timeEnd("logarithmic");

// This solution is logarithmic because we divide by two with each iteration