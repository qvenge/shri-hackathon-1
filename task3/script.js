const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; ++i) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; --j) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    return arr;
};

const arr = [1, 3, 2, 12, 23, 5, 7, 0, -2, -1];

console.log(insertionSort(arr));