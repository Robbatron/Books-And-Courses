var fn2 = () => console.log(this);
// setTimeout(() => console.log('Hello'), 1000);

function fn() {
    console.log(this);
}

// fn();
// fn2();

// when using 'this' in the classic way of writing functions, 'this' will refer to
// the function that is calling it.

// with fat arrow functions, 'this' will refer to the context in which it is used.
