// const: a keyword used to declare variables where we expect the value to never change

// let: When we expect the value or variable to change over time. block scoping.


// ES6
const name = 'Jane'; // name is not likely to change
let title = 'Software Engineer'; // may get a promotion or switch jobs
let hourlyWage = 40;

// some time later...
title = 'Senior Software Engineer'; // got a promotion!
hourlyWage = 45; // and a raise? whaaaaat?


// Something I have noticed...
// With const, you can change the value, just not the pointer to that value, as demonstrated below...
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // arr now has 4, so you effectively added another value


// Why are we using 'const' and 'let'?

function count(targetString) {
    var characters = ['a', 'e', 'i', 'o', 'u'];
    var number = 0;

    for (var i = 0; i < targetString.length; i++) {
        if (characters.includes(targetString[i])) {
            number++;
        }
    }
    return number;
}

console.log(count('aeiobzxceiaipbiox'));
