function fn() {
    console.log('Hello!');
}

fn();

var fn = () => 'Hello';
// parens are parameters you want to pass
// after fat arrow is function body, curly braces if lines > 1
console.log(fn());

var fn = a => a + 5;
console.log(fn(3));

setTimeout(() => console.log('Hello'), 1000);
