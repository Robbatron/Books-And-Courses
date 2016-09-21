function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || []; // create property on the object and make sure it is an array
    this.events[type].push(listener); // start adding functions into that array
};

Emitter.prototype.emit = function(type) { // event in application
    if (this.events[type]) { // check to see if the property is on the object
        this.events[type].forEach(function(listener) { // loop through to see if there are functions in the array
            listener();
        });
    }
};

module.exports = Emitter;

/* what this is doing is essentially creating an object that looks like this...
 * 
 *  events = {
 *      <type>: [<function>],
 *      <type>: [<function>],
 *      <type>: [<function>]
 *  }
 * 
 */