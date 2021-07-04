const openBrackets = {
    '{': '}',
    '<': '>',
    '[': ']',
    '(': ')'
};

const closeBrackets = {
    '}': '{',
    '>': '<',
    ']': '[',
    ')': '('
}

const matchBrackets = (str) => {
    const stack = [];

    for (let i = 0; i < str.length; ++i) {
        const char = str[i];
        
        if (char in openBrackets) {
            stack.push(char);
        } else if (char in closeBrackets) {
            const sib = stack.pop();
            if (sib !== closeBrackets[char]) return false;
        }
    }

    return true;
};

// здесь норм
const validTestStr = '([<{}>])';
console.log(matchBrackets(validTestStr));

// здесь не норм
const invalidTestStr = '[{(>}]';
console.log(matchBrackets(invalidTestStr));