// Decorators: functions that you can attach to classes, methods, and properties to work with or "transform" later

// our decorator starts out as a normal function
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

// logged becomes a decorator when we append it with the "@" symbol
@logged
class Person {
    constructor() {
        console.log("Hi!");
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true) 
// true means print out to the console
// false returns null
class Car {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

// can pass multiple decorators
@logging(true)
@printable
class Plant {
    name = "Green Plant";
}

const plant = new Plant();
(<any>plant).print();