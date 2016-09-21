// Really Hard - Implementing 'Pluck'

//This is a hard one!

//Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 

//Example:

//var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
//pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];




// Classic solution
function pluck(array, property) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr.push(array[i][property]);
    }
    return newArr;
}

// Map Solution
function pluck(array, property) {
    var newArr = array.map(function (arr) {
        return arr[property];
    });
    return newArr;
}

// ES6 Native Map with Fat Arrow
const pluck = (array, property) => array.map(arr => arr[property]);