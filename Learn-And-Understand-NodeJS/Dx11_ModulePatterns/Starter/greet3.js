function Greetr() {
    this.greeting = 'Goodbye, world!';
    this.greet = function() {
        console.log(this.greeting);
    };
}

module.exports = new Greetr();