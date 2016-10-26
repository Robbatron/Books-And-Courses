// Decorators: functions that you can attach to classes, methods, and properties to work with or "transform" later
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// our decorator starts out as a normal function
function logged(constructorFn) {
    console.log(constructorFn);
}
// logged becomes a decorator when we append it with the "@" symbol
let Person = class Person {
    constructor() {
        console.log("Hi!");
    }
};
Person = __decorate([
    logged
], Person);
// Factory
function logging(value) {
    return value ? logged : null;
}
let Car = class Car {
};
Car = __decorate([
    logging(true)
], Car);
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
// can pass multiple decorators
let Plant = class Plant {
    constructor() {
        this.name = "Green Plant";
    }
};
Plant = __decorate([
    logging(true),
    printable
], Plant);
const plant = new Plant();
plant.print();
