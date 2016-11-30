/** This is the old way to accomplish prototypal inheritance! Steer clear! **/
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = () => 'vroom!';

const car = new Car({title: 'Focus'});

console.log(car);
console.log(car.drive());

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = () => 'beep!';

const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});

console.log(toyota);
console.log(toyota.drive()); // vroom!
console.log(toyota.honk()); // beep

// see classesrefactoring.js for enhanced syntax!!!
