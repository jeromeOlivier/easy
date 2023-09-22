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

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [5, 1, 22, 25, 6, -1, 8, 10];

function isValidSubsequence(array, sequence) {
  // Write your code here.
  // loop through the array starting from the last element
  for (let i = array.length - 1; i >= 0; i--) {
    // index is the length of the sequence
    const index = sequence.length - 1;
    // if the length of the sequence is 0, return true (all elements have been accounted for)
    if (sequence[index] == array[i]) {
      sequence.pop();
      array.pop();
    } else {
      array.pop();
    }
    if (sequence.length == 0) return true;
  }
  return false;
}

isValidSubsequence(array, sequence);
