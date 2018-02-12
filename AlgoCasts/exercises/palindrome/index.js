// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* Javascripty way */
const palindrome = str => str === [...str].reverse().join("");

/* Every array helper */
// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

/* pop, lock, and drop it */
// function palindrome(str) {
//   let reversed = "", s = [...str];
//   while (s.length > 0) reversed += s.pop();
//   return str === reversed;
// }

/* For-of loop */
// function palindrome(str) {
//   let reversed = "";
//   for (let s of str) reversed = s + reversed;
//   return str === reversed;
// }

/* For loop */
// function palindrome(str) {
//   let reversed = "";
//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }
//   return str === reversed;
// }

module.exports = palindrome;
