let obj = {
    name: 'Max',
    age: 27,
    greet: function () {
        console.log('Hello there!');
    }
};

let {
    name, age, greet: hello
} = obj; // names here have to match but they can be aliased

console.log(name, age);
hello();