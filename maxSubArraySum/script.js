const maxSubArraySum = (arr) => {
    let max = 0;
    let curr = 0;

    arr.forEach(val => {
        curr += val;

        if (curr < 0) curr = 0;
        else if (max < curr) max = curr;
    });

    return max;
}

const arr = [1, -2, 3, 4, -9, 6];

console.log(maxSubArraySum(arr));