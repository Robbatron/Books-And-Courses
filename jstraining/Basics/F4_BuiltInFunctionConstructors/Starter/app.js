var a = new Number(3);
console.log(a);
// -> Number {[[PrimitiveValue]]: 3}
console.log(a.toFixed()); // method that is on the prototype object
// -> 3

var b = new String("John"); // function constructor
console.log(b.indexOf("o")); // more prototype methods
// -> 1

var c = new Date("3/1/2015");
console.log(c);
// -> Sun Mar 01 2015 00:00:00 GMT-0700 (US Mountain Standard Time)
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
}

Array.prototype.myCustomFeature = 'cool!';
var arr = ['John', 'Jane', 'Jim'];
for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}
// Do NOT use 'for ... in' for arrays because it will print out every property on the prototype
//	0: John
//	1: Jane
//	2: Jim
//	myCustomFeature: cool!

// use the normal 'for' syntax instead!
for (var i = 0; i < arr.length; i++) {

}