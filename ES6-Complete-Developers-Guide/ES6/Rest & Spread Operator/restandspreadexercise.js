// Mixing Rest and Spread

// Refactor the following to use the only the rest operator

function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
}

function unshift(array, ...args) {
    return [...args, ...array];
}