//import { keyValue as key, test } from './external.js'; // notice 'as' syntax
//import a from './external.js'; // can use any value since it will pick up default export

// can also ask for all imports (must give it a name)
//import * as imported from './external.js';
//console.log(imported); // comes back as object of all exports
//imported.test();
//console.log(imported.keyValue); // 1000 - it works!

console.log(key);
test();
console.log(key);