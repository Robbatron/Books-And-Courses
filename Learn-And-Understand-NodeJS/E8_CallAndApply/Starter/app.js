var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
};

obj.greet();
obj.greet.call({ name: 'Jane Doe'} /*, arg1, arg2 */); // with 'call' you are setting 'this'
obj.greet.apply({ name: 'Jane Doe'}, [ /* arg1, arg2 */]); // 'apply' is the same but params must be in an array
