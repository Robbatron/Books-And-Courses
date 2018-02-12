/* 
--- Directions
Given a string, return a new string with the reversed order of characters

--- Examples
reverse('apple') === 'leppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniteerG'
*/

/* JavaScripty way */
const reverse = str => [...str].reverse().join("");

/* Reduce Array Helper */
// function reverse(str) {
//   return [...str].reduceRight((a, b) => a + b);
// }

/* For-of loop */
// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

/* Traditional for loop */
// function reverse(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; --i) {
//     reversed += str[i];
//   }
//   return reversed;
// }

module.exports = reverse;
