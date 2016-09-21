var greet = require('./greet');

// require...
//  - goes out, gets the file, assumes it's a .js unless otherwise specified
//  - loaded the contents
//  - wrapped the contents
//  - ran the contents
//  - returned whatever was sitting on module.exports

greet();

/* We wrote code that looks like this...

var greet = function() {
    console.log('Hello!);
};
module.exports = greet;

*/

/* But this is what Node returned...

(function(exports, require, module, __filename, __dirname) {)
    var greet = function() {
        console.log('Hello!);
    };
    module.exports = greet;
});

// the code below is invoked with '.apply()' but lets keep it simple.
fn(module.exports, require, module, filename, dirname);

return module.exports;

*/

/* Summary:
    - require is a function, that you pass a 'path' to
    - module.exports is what the require function returns
    
    - this works because your code is actually wrapped in a 
    function that is given these things as function parameters

 */