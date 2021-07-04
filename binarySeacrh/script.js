const binarySearch = (sortedArr, value) => {
    let start = 0;
    let end = sortedArr.length;

    while (start < end) {
        const diff = end - start;
        const midIndex = start + Math.floor(diff / 2);
        const midValue = sortedArr[midIndex];

        if (midValue === value) return midIndex;
        if (value < midValue) end = midIndex;
        else start = midIndex + 1;
    }

    return -1;
}


// =====
const arr1 = [1,2,3,4,5,6];
console.log(binarySearch(arr1, 1));
console.log(binarySearch(arr1, 6));
console.log(binarySearch(arr1, 4));
console.log(binarySearch(arr1, 7));
// ======
const arr2 = [];
console.log(binarySearch(arr2, 4));
// ======
const arr3 = [1];
console.log(binarySearch(arr3, 1));
console.log(binarySearch(arr3, 4));
// ======
const arr4 = [1,2];
console.log(binarySearch(arr4, 1));
console.log(binarySearch(arr4, 2));
console.log(binarySearch(arr4, 4));
