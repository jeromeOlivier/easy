const binarySearch = (array, target, head = 0, tail = array.length - 1) => {
    if (head > tail) return -1;
    const middle = Math.floor((head + tail) / 2);
    if (array[middle] === target) return middle;

    return (array[middle] > target) ?
        binarySearch(array, target, head, middle - 1) :
        binarySearch(array, target, middle + 1, tail);
};

const arr = [-5, -2, 0, 3, 4, 6, 9, 10, 33];
const target = 2;

console.time('recursive')
console.log(binarySearch(arr, target));
console.timeEnd('recursive')

const iterativeBinarySearch = (array, target) => {
    let headIndex = 0;
    let tailIndex = array.length - 1;
    while (headIndex <= tailIndex) {
        let midPoint = Math.floor((headIndex + tailIndex) / 2);
        if (array[midPoint] === target) return midPoint;
        if (array[midPoint] > target) {
            tailIndex = midPoint - 1;
        } else {
            headIndex = midPoint + 1;
        }
    }
    return -1;
}

console.time('iterative')
console.log(iterativeBinarySearch(arr, target));
console.timeEnd('iterative')