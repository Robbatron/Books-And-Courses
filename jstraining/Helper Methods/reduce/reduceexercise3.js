// Hardmode: Custom 'Unique' Helper

//Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

//For example, given the following array:
//var numbers = [1, 1, 2, 3, 4, 4];
//Your function should return
//[1, 2, 3, 4]
//Hint: Use the 'reduce' and 'find' helpers.  



// reduce and find

function unique(array) {
    return array.reduce(function (previous, element) {
        var inPrevious = previous.find(function (inPrevious) {
            return inPrevious === element;
        });
        if (!inPrevious)
            previous.push(element)
        return previous;
    }, [])
}

// only reduce
function unique(array) {
    return array.reduce(function (previous, element) {
        if (previous.indexOf(element) === -1)
            previous.push(element);
        return previous;
    }, [])
}

// with ES6
function unique(array) {
    var newArr = [...new Set(array)];
    return newArr;
}