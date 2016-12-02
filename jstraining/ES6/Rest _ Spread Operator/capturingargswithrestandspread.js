// The rest operator accepts that an argument list has N number of arguments.
// Rest captures all of them and puts them into a single array.

function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));