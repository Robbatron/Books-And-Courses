// Whiteboard coding interview

function balancedParens(string) {
    return !string.split("").reduce(function (previous, char) {
        if (previous < 0) {
            return previous;
        }
        if (char === "(" || char === "[" || char === "{") {
            return ++previous;
        }
        if (char === ")" || char === "]" || char === "}") {
            return --previous;
        }
        return previous;
    }, 0);
}

console.log(balancedParens("(((("));
console.log(balancedParens("(()"));
console.log(balancedParens("()"));

// Did not work for HackerRank lol but I have a much longer solution that did!