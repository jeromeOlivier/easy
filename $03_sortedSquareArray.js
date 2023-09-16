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

const array = [1, 4, 9, 25, 36, 64, 81];

function sortedSquaredArray(array) {
  // Write your code here.
  const squaredArray = [];
  for (let num of array) {
    squaredArray.push(num ** 2);
  }
  return squaredArray.sort((a, b) => a - b);
}

console.log(sortedSquaredArray(array));

// sexy version
const solution = (array) => array.map(val => val ** 2).sort((a, b) => a - b);
