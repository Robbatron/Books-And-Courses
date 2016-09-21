// Revocable proxies can be null (make sure it's no longer active)

let person = {
    name: 'Max'
};

let handler = {
    get: function (target, property) {
        return Reflect.get(target, property);
    }
};

let {
    proxy, revoke
} = Proxy.revocable(person, handler);

console.log(proxy.name); // are able to access the field through the proxy

revoke();
console.log(proxy.name); // "TypeError: Cannot perform 'get' on a proxy that has been revoked"
