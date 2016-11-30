/** JS has prototypal inheritance **/

function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = () => 'vroom';

const car = new Car({title: 'Focus'});
console.log(car);
console.log(car.drive());

// adding methods on the prototype is *inherently* confusing lol so classes tries to remedy this...

// see classesprototypalinheritance.js
