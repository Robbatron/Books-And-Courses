// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hashMap = {};
  let maxCount = 0;
  let max = "";

  for (let s of str) {
    hashMap[s] = hashMap[s] + 1 || 1;
  }

  for (let s of str) {
    if (hashMap[s] > maxCount) {
      maxCount = hashMap[s];
      max = s;
    }
  }
  return max;
}

module.exports = maxChar;
