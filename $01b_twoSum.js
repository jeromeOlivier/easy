/*
 Write a function that takes in a non-empty array of distinct integers and an
 integer representing a target sum. If any two numbers in the input array sum up
 to the target sum, the function should return them in an array, in any order.
 If no two numbers sum up to the target sum, the function should return an
 empty array.

 Note that the target sum has to be obtained by summing two different integers
 in the array; you can't add a single integer to itself in order to obtain the
 target sum.

 You can assume that there will be at most one pair of numbers summing up to
 the target sum.
 */

//function twoSum(array, sum) {
// loop through the array, use first number, add it to the next number,
// if it equals the target sum, return the two numbers, else continue

// if none of the numbers match up, go to the next number and add it to
// the adjacent number
//}

//function twoSum(array, sum) {
// loop through array
// target sum minus first number in array
// what is the index of the difference?
// if -1, go the next number and repeat until...
// when answer is > -1, get value of index and return both numbers
// if loop ends, return [].
//}

// function twoSum(array, targetSum) {
//     while (array.length > 1) {
//         const firstValue = array.pop();
//         const secondValue = targetSum - firstValue;
//         if (array.includes(secondValue)) return [
//             firstValue,
//             secondValue,
//         ];
//     }
//     return [];
// }

// none of the solutions mentioned take advantage of the fact that it's a SET!!!

// function twoSum(array, targetSum) {
//     const set = new Set(array);
//     console.log(set);
//     for (const num of set) {
//         set.delete(num);
//         const target = targetSum - num;
//         if (set.has(target)) {
//             return [num, target];
//         }
//     }
//     return [];
// }

const array = [3, 5, 4, 8, 11, -1, 1, 6 ];
const targetSum = 19;

function twoSum(array, targetSum) {
    const numbers = {};
    for (let num of array) {
        if (numbers[targetSum - num]) {
            return [targetSum - num, num];
        }
        numbers[num] = 'x';
    }
    return [];
}

// function twoSum(array, targetSum) {
//     const map = {};
//     for (let i = 0; i < array.length; i++) {
//         if (map[targetSum - array[i]] !== undefined) {
//             return [array[i], targetSum - array[i]];
//         }
//         map[array[i]] = i;
//         console.log(map);
//     }
//     return [];
// }



const solution = twoSum(array, targetSum);
console.log(solution);