const bubbleSort = (arr) => {
    for (let n = 1; n < arr.length; ++n) {
        for (let i = 0; i < arr.length - n; ++i) {
            if (arr[i + 1] < arr[i]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [1, 3, 2, 12, 23, 5, 7, 0, -2, -1];

console.log(bubbleSort(arr));