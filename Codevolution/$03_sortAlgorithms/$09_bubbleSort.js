const array = [-6, 20, 8, -2, 4];

const bubbleSort = (arr) => {
        let swapped;
        do {
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                } else {
                    swapped = false;
                }
            }
        } while (swapped)
    return arr;
};

console.log(bubbleSort(array));
