let person = {
    age: 24,
    name: 'Max'
};

let handler = {

};

let protoHandler = {
    get: function (target, name) {
        return name in target ? target[name] : 'Nope';
    }
};

let proxy = new Proxy({}, handler);

let protoProxy = new Proxy(proxy, handler);

Reflect.setPrototypeOf(person, protoProxy);

console.log(person.hobbies);

// Now the prototype is a proxy that wraps a proxy that uses protoHandler
// When would I ever use this lol
