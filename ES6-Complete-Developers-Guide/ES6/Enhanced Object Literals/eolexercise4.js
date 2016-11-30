// Refactor to use enhanced literal notation

const color = 'red';

const Car = {
    color,
    drive() {
            return 'Vroom!';
        },
        getColor() {
            return this.color;
        }
};