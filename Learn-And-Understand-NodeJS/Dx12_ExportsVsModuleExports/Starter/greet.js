exports = function() {
    console.log('Hello');
}; // exports points to a different place in memory than module.exports now

console.log(exports);
console.log(module.exports);
