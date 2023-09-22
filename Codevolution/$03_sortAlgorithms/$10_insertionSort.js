// toInsert: number to insert
// sorted: sorted array
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let num2insert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > num2insert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = num2insert;
    }
    return arr;
};

const arr = [4, 3, 2, 1];
console.log(insertionSort(arr));