// Challenging! Implementing 'reject'.

//This is a hard one!  Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.

function reject(array, iteratorFunction) {
    return array.filter(function (arr) {
        return !iteratorFunction(arr);
    });
}

// or this fun mess...
const reject = (array, iteratorFunction) => array.filter((arr) => !iteratorFunction(arr));