const reverseList = (list) => {
    let prev = null;
    let curr = list;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};


const list = {
    index: 0,
    next: {
        index: 1,
        next: {
            index: 2,
            next: {
                index: 3,
                next: null
            }
        }
    }
};


console.log(JSON.stringify(list, null, ' '));

const reverse = reverseList(list);
console.log(JSON.stringify(reverse, null, ' '));