const arr = ["a", "b", "c", "x", "y", "z"];

function findMe(target, arr, start = 0, end = arr.length - 1) {
    if (end < start) return `${ target } not found`;
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        return `${ target } is at idx[${ middle }]`;
    }
    if (arr[middle] > target) {
        return findMe(target, arr, start, middle - 1);
    }

    if (arr[middle] < target) {
        return findMe(target, arr, middle + 1, end);
    }
}

const solution = findMe("x", arr);
console.log(solution);