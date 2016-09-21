class Obj1 {
    constructor() {
        this.a = 1;
    }
}

class Obj2 {
    constructor() {
        this.b = 2
    }
}

var obj1 = new Obj1();
var obj2 = new Obj2();

var obj = Object.assign({}, obj1, obj2);

console.log(obj.__proto__ === Object.prototype);

let person = {
    name: 'Max'
};

let boss = {
    name: 'Anna'
};

console.log(person.__proto__ === Object.prototype); // true

Object.setPrototypeOf(person, boss);

console.log(person.__proto__ === Object.prototype); // false, prototype was overwritten
console.log(person.__proto__ === boss);
console.log(person.name); // 'Max' because JS did not have to look at the prototype, it found the name property on the object itself
// however, if we remove 'Max', it will print 'Anna' because it needs to go up the prototype chain to find the name property