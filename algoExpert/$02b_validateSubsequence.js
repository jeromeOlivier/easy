/*
Validate Subsequence
Given two non-empty arrays of integers, write a function that determines whether
the second array is a subsequence of the first one. A subsequence of an array is
a set of numbers that aren't necessarily adjacent in the array but that are in
the same order as they appear in the array. For instance, the numbers [1, 3, 4]
form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4].

Note that a single number in an array and the array itself are both valid
subsequences of the array.

Sample Input
const array = [15, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

Sample Output
true
 */

const array =    [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, 10, -1];
/*
function validateSubsequence(array, sequence) {
  let previousIndex = 0;
  for (const value of sequence) {
    const index = array.indexOf(value);
    if (index < previousIndex) return false;
    previousIndex = index;
  }
  return true;
}

const test = validateSubsequence(array, sequence);
console.log(test);
*/

function validateSubsequence(array, sequence) {
  let aIndex = 0;
  let sIndex = 0;
  while (aIndex < array.length && sIndex < sequence.length) {
    if (array[aIndex] === sequence[sIndex]) {
      sIndex++;
    }
    aIndex++;
  }
  return sIndex === sequence.length;
}

const result = validateSubsequence(array, sequence);
console.log(result);
