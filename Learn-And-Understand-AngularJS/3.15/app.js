/* NOTE: JS Arrays and Functions

Arrays can contain functions and you can invoke them

*/

var things = [1, '2', function () {
    alert('hello!');
}];

things[2]();

console.log(things);
