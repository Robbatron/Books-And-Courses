class Car {
    constructor({title}) {
        this.title = title;
    }
    drive() {
        return 'vroom!';
    }
}

const car = new Car({title: 'focus'});
console.log(car);

class Toyota {
    constructor(options) {
        super(options); // Car.constructor
        this.color = options.color;
    }
    honk() {
        return 'beep!';
    }
}

// see classesextendingbehavior.js for final!
