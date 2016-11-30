age = 27;
// console.log(age);

// let age; // age was hoisted so it came before the assignment in the program flow.
// but declaring a variable after using it is wtf.

function doSmth() {
    age = 27;
}

let age;
doSmth(age); // this works because you're still declaring age before you use it
console.log(age);
