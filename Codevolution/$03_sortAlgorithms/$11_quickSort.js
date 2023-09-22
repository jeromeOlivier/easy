const quickSort = (array) => {
    if (array.length < 2) return array;
    const pivot = array.pop();
    const lessThan = [];
    const moreThan = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            lessThan.push(array[i]);
        } else {
            moreThan.push(array[i]);
        }
    }
    return [...quickSort(lessThan), pivot, ...quickSort(moreThan)];
};

const array = [3, 1, 2, 5, 4];
const quickSorted = quickSort(array);
console.log(quickSorted);