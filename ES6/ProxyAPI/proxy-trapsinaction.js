let person = {
    age: 24
};

let handler = {
    get: function (target, name) { //target = object, name = property
        return name in target ? target[name] : 'Nope';
    }
};

var proxy = new Proxy(person, handler);

console.log(proxy.age);
