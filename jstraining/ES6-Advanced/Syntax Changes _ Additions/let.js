// Why 'let'?
// JavaScript doesn't have any block scoping. Variables are not contained within curly brackets.

let name = 'Max';
console.log(name); // will log 'name'


if (true) {
    let age = 24;
}
console.log(age); // will error because let is block-scoped.
