const selectionSort = (arr) => {
    for (let n = 0; n < arr.length - 1; ++n) {
        let minIndex = n;

        for (let i = n + 1; i < arr.length; ++i) {
            if (arr[i] < arr[minIndex]) minIndex = i;
        }

        const temp = arr[n];
        arr[n] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

const arr = [1, 3, 2, 12, 23, 5, 7, 0, -2, -1];

console.log(selectionSort(arr));