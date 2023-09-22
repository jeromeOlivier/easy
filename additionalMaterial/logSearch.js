const arr = ['a', 'b', 'c', 'x', 'y', 'z'];

function findMe(target, arr, start, end) {
    if (end < start) return `Not Found`;
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        return `Found it at index ${ middle }`;
    }
    if (arr[middle] > target) {
        return findMe(target, arr, start, middle - 1);
    }

    if (arr[middle] < target) {
        return findMe(target, arr, middle + 1, end);
    }
}

const solution = findMe('k', arr, 0, arr.length - 1);
console.log(solution);