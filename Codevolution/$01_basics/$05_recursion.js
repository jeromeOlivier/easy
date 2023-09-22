// the idea here is the recursive function breaks down the number until
// there are only 0s and 1s, then it bubbles up, adding all the values until
// the final solution is found
// fibonacci(4) --> fibonacci(3) + fibonacci(2)
//              --> (fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))
//              --> ((fibonacci(1) + fibonacci(0)) + 1) + (1 + 0)
//              --> ((1 + 0) + 1) + (1 + 0)
//              --> (1 + 1) + 1
//              --> 2 + 1
//              --> 3

const fibonacci = (n) => (n < 2) ? n : fibonacci(n - 1) + fibonacci(n - 2);

const test = fibonacci(4);
// console.log(test);

const reverseString = (str) => str === "" ? "" : reverseString(str.substring(1)) + str.charAt(0);

const hello = reverseString("Hello");
// console.log(hello);

const reverseArray = (arr) => arr.length === 0 ? [] : [
    ...reverseArray(arr.slice(1)), arr[0],
];

const array = [1, 2, 3, 4, 5];
const reversed = reverseArray(array);
// console.log(reversed);

const isPalindrome = (str) => {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    if (str.charAt(0) === str.charAt(str.length - 1)) {
        const newString = str.substring(1, str.length - 1);
        return isPalindrome(newString);
    }
    return false;
};

const falseCheck = "hello";
const trueCheck = "kayak";
// console.log(isPalindrome(falseCheck));
// console.log(isPalindrome(trueCheck));

function convertIntegerToBinary(integer, binary = '') {
    if (typeof integer !== 'number' || integer < 0 || integer % 1 !== 0) {
        return 'Invalid input';
    }
    if (integer === 0) {
        return binary;
    }
    binary = (integer % 2) + binary;
    return convertIntegerToBinary(Math.floor(integer / 2), binary);
}

const checkBinary = convertIntegerToBinary(245);
// console.log(checkBinary);

const sumOfNumbers = (n) => (n === 0) ? n : n + sumOfNumbers(n - 1);

// console.log(sumOfNumbers(11))

const binarySearch = (array, search, start = 0, end = array.length - 1) => {
    if (start > end) {
        return `Value ${search} Not Found`
    }
    const midPoint = Math.floor((start + end) / 2);
    if (array[midPoint] === search) {
        return `Value ${search} Found!`
    }
    if (array[midPoint] > search) {
        return binarySearch(array, search, start, midPoint - 1);
    }
    return binarySearch(array, search, midPoint + 1, end);
}

const list = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];
console.log(binarySearch(list, 15));

/**
 * @param array{Number[]}
 * @param start{Number}
 * @param end{Number}
 * @returns {Number[]}
 */
function mergeSort(array, start = 0, end = array.length - 1) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        mergeSort(array, start, mid);
        mergeSort(array, mid + 1, end);
        merge(array, start, mid, end)
    }
    return array;
}

/**
 *
 * @param array {Number[]}
 * @param start {Number}
 * @param mid {Number}
 * @param end {Number}
 * @returns {Number[]}
 */
function merge(array, start, mid, end) {
    // build temp array to avoid modifying the original contents
    const temp = Array.from({ length: end - (start + 1)});
    let i = start, j = mid + 1, k = 0;
    // while both sub-array have values, them try and merge them in sorted order
    while (i <= mid && j <= end) {
        if (array[i] <= array[j]) {
            temp[k++] = array[i++];
        } else {
            temp[k++] = array[j++]
        }
    }

    // add the rest of the values from the left sub-array into the result
    while (i <= mid) {
        temp[k++] = array[i++];
    }

    // add the rest of the values from the right sub-array into the result
    while (j <= end) {
        temp[k++] = array[j++];
    }

    for (let i = start; i <= end; i++) {
        array[i] = temp[i - start];
    }
}

const myArr = [-5, 20, 10, 3, 2, 0];
// console.log(mergeSort(myArr));