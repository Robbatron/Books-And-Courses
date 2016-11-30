// - Modules are always in Strict Mode (no need to define “use strict”)
// - Modules don’t have a shared, global Scope. Instead each module has its own Scope.
import {
    keyValue, test
}
from './external.js';

console.log(keyValue); // 1000
test();
console.log(keyValue); // 2000, because we are just copying the reference