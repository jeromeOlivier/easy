// iterative approach to linear search
const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}

const arr = [-5, 2, 10, 4, 6, 3, 9, 0, 33];
const target = 33;

console.time('linear')
console.log(linearSearch(arr, target));
console.timeEnd('linear')

const recursiveLinearSearch = (array, target, index = 0) => {
    if (index > array.length) return -1;
    if (array[index] === target) return index;
    return recursiveLinearSearch(array, target, ++index);
}

console.time('recursive')
console.log(recursiveLinearSearch(arr, target));
console.timeEnd('recursive');