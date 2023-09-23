const mergeSort = (array) => {
    if (array.length < 2) return array;
    const midpoint = Math.floor(array.length / 2);
    const lower = array.slice(0, midpoint);
    const upper = array.slice(midpoint);
    return merge( mergeSort(lower), mergeSort(upper));
};

const merge = (lower, upper) => {
    const sortedArray = [];
    while(lower.length && upper.length) {
        if (lower[0] <= upper[0]) {
            sortedArray.push(lower.shift())
        } else {
            sortedArray.push(upper.shift())
        }
    }
    return [...sortedArray, ...lower, ...upper];
}

console.time('merge');
const array = [-6, 20, 8, -2, 4];
console.log(mergeSort(array));
console.timeEnd('merge');