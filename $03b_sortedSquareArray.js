/*
 Sorted Squared Array
 Write a function that takes in a non-empty array of integers that are sorted in
 ascending order and returns a new array of the same length with the squares of
 the original integers also sorted in ascending order.

 Sample Input
 array = [1, 2, 3, 5, 6, 8, 91];

 Sample Output
 [1, 4, 9, 25, 36, 64, 811]
 */

const array = [
    1, 4, 9, 25, 36, 64, 81,
];

// function sortedArray(array) {
//     const squared = [];
//     for (const num of array) {
//         squared.push(num * num);
//     }
//     return squared;
// }
//
// function square(array) { return array.map(item => item ** 2) }
// const squared = square(array);
// console.log(squared);

function sortedSquares(array) {
    let result = new Array(array.length).fill(0); // initialize result array
    let head = 0; // start pointer at beginning of array
    let tail = array.length - 1; // end pointer at end of array

    for (let index = array.length - 1; index >= 0; index--) {
        const headValue = array[head];
        const tailValue = array[tail];

        if (Math.abs(headValue) > Math.abs(tailValue)) {
            result[index] = headValue ** 2;
            head++;
        } else {
            result[index] = tailValue ** 2;
            tail--;
        }
    }
    return result;
}

const sorted = sortedSquares(array);
console.log(sorted);
