function log(message) {
    console.log('Log entry created, message: ' + message)
}

let handler = {
    apply: function (target, thisArg, argumentsList) {
        if (argumentsList.length == 1) {
            return Reflect.apply(target, thisArg, argumentsList);
        }
    }
};

let proxy = new Proxy(log, handler);

proxy('Hello');
