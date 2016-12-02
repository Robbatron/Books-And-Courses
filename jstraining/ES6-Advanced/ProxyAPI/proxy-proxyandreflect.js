let person = {
    age: 24,
    name: 'Max'
};

let handler = {
    get: function (target, name) { //target = object, name = property
        return name in target ? target[name] : 'Nope';
    },
    set: function (target, property, value) {
        if (value.length >= 2) {
            Reflect.set(target, property, value);
        }
    }
};

var proxy = new Proxy(person, handler);

proxy.name = 'Maximilian';

console.log(proxy.name);
