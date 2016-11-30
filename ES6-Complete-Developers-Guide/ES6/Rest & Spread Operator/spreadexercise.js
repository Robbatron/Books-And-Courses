// Spreadin' Arrays

// Refactor the following to use the spread operator.

function join(array1, array2) {
    return array1.concat(array2);
}


function join(array1, array2) {
    return [...array1, ...array2];
}