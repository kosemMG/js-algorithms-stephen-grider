// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//
//   if (stringA.length === stringB.length) {
//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);
//     for (const char in charMapA) {
//       if (!charMapB[char] || charMapB[char] !== charMapA[char]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return false;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//   for (const char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// Solution 2 (genial)
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^w]g/, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = anagrams;
